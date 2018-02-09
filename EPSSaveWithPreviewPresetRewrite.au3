#include <File.au3>
Opt("WinTitleMatchMode", 2) ; определяем способ узнавания окна по любой части
Opt("SendKeyDelay", 20)

;$illustratorWindow = "Adobe Illustrator CC 2015.3"
$illustratorWindow = "Adobe Illustrator"

$inputFolder = FileSelectFolder("Выберите папку с файлами", "")
If @error Then
        MsgBox($MB_SYSTEMMODAL, "", "No folder was selected.")
	    Exit 0
	 EndIf
$FileList = _FileListToArray($inputFolder, "*.eps", 1, True)

If Ubound($FileList) == 0 Then
   MsgBox($MB_SYSTEMMODAL, "", "No EPS files in the folder.")
	    Exit 0
EndIf

ActivateWindow($illustratorWindow)
$version = "";
$fullTitle = WinGetTitle($illustratorWindow)
If StringInStr($fullTitle, "2015") Then
   $version = "2015"
ElseIf StringInStr($fullTitle, "2017") Then
   $version = "2017"
ElseIf StringInStr($fullTitle, "2018") Then
   $version = "2018"
Else
   MsgBox("Неподдерживаемая версия иллюстратора. Поддерживаемые версии: 2015, 2017, 2018")
   Exit
EndIf


For $i = 1 To $FileList[0]
    OpenFile($FileList[$i])
	SaveFile($FileList[$i])
	CloseFile($FileList[$i])
 Next


Func OpenFile(ByRef $fileName)
   While WinWaitActive("Открыть", "", 1) == 0
	  WinWaitActive(GetFileName($illustratorWindow), "", 1)
	  Send("^o")
	  Sleep(200)
   WEnd
   ControlSetText("Открыть", "","[CLASSNN:Edit1]", $fileName)
   ControlClick("Открыть", "", "[CLASSNN:Button1]")
EndFunc

Func SaveFile(ByRef $fileName)
   While WinWaitActive("Сохранить как", "", 1) == 0
	  If WinActive(GetFileName($fileName)) Then
		 Send("^S")
	  Else
         Sleep(1000)
	  EndIf
   WEnd
   ControlCommand("Сохранить как", "","[CLASS:Combobox; INSTANCE:2]", "SelectString", "Illustrator EPS (*.EPS)")
   ;ControlClick("Сохранить как", "", "[CLASS:Button; TEXT:Со&хранить; INSTANCE:1]")
   ;Sleep(1000)
   Send("{ENTER}")
   While WinWaitActive("Параметры EPS", "", 1) == 0
	  If WinActive ("Сохранить как", "&Да") Then
		 ControlClick("Сохранить как", "", "[CLASS:Button; TEXT:&Да; INSTANCE:1]")
	  EndIf
   WEnd
   If $version == "2015" Then
	  SetParameters2015()
   ElseIf $version = "2017" Then
	  SetParameters2017()
   ElseIf $version = "2018" Then
	  SetParameters2018()
   EndIf
EndFunc

Func SetParameters2015()
   Send("{UP 10}")
   Send("{DOWN 7}")
   Send("{TAB 2}")
   Send("0")
   Send("{TAB 2}")
   Send("{SPACE}")
   Send("{TAB 5}")
   ;Sleep(10000)
   Send("{ENTER}")
EndFunc

Func SetParameters2017()
   Send("{UP 10}")
   Send("{DOWN 7}")
   Send("{TAB}")
   Send("{UP 3}")
   Send("{TAB}")
   Send("0")
   Send("{TAB 2}")
   Send("{SPACE}")
   Send("{TAB 5}")
   ;Sleep(10000)
   Send("{ENTER}")
EndFunc

Func SetParameters2018()
   Send("{UP 10}")
   Send("{DOWN 8}")
   Send("{TAB}")
   Send("{UP 3}")
   Send("{TAB}")
   Send("0")
   Send("{TAB 2}")
   Send("{SPACE}")
   Send("{TAB 5}")
   ;Sleep(10000)
   Send("{ENTER}")
EndFunc

Func GetFileName($fileName)
   Local $sDrive = "", $sDir = "", $sFileName = "", $sExtension = ""
   Local $aPathSplit = _PathSplit($fileName, $sDrive, $sDir, $sFileName, $sExtension)
   Return $aPathSplit[3] & ".eps"
EndFunc




Func ActivateWindow($title)
   WinActivate ($title)
   While WinWaitActive($title) == 0
	  WinActivate ($title)
	  Sleep(100)
   WEnd
EndFunc

Func CloseFile($fileName)
   While Not WinActive($illustratorWindow)
	  WinActivate (GetFileName($fileName))
	  If WinActive(GetFileName($fileName)) Then
		 Send("^w")
	  EndIf
	  Sleep(500)
   WEnd
EndFunc


