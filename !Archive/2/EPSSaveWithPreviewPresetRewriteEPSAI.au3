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
$FileList = _FileListToArrayRec($inputFolder, "*.eps;*.ai", $FLTAR_FILES, $FLTAR_NORECUR, $FLTAR_NOSORT, $FLTAR_FULLPATH)

If Ubound($FileList) == 0 Then
   MsgBox($MB_SYSTEMMODAL, "", "No EPS or AI files in the folder.")
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
	  ActivateWindow($illustratorWindow)
	  Send("^o")
	  Sleep(200)
   WEnd
   ControlSetText("Открыть", "","[CLASSNN:Edit1]", $fileName)
   ControlClick("Открыть", "", "[CLASSNN:Button1]")
EndFunc

Func SaveFile(ByRef $fileName)
   ConsoleWrite(GetFileName($fileName))
   While WinWaitActive("Сохранить как", "", 1) == 0
	  If WinActive(GetFileName($fileName)) Then
		 Send("^S")
	  Else
         ActivateWindow (GetFileName($fileName))
		 Send("^S")
	  EndIf
	  Sleep(1000)
   WEnd
   ControlCommand("Сохранить как", "","[CLASS:Combobox; INSTANCE:2]", "SelectString", "Illustrator EPS (*.EPS)")
   ControlClick("Сохранить как", "", "[CLASS:Button; TEXT:Со&хранить; INSTANCE:1]")
   ;Sleep(1000)
   WinWaitActive("Сохранить как", "&Да", 3)
   Send("{ENTER}")
   ActivateWindow("Параметры EPS")
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
   Return $aPathSplit[3]
EndFunc

Func ActivateWindow($title)
   WinActivate ($title)
   While WinWaitActive($title) == 0
	  WinActivate ($title)
	  Sleep(100)
   WEnd
EndFunc

Func CloseFile($fileName)
   ActivateWindow(GetFileName($fileName))
   Send("^w")
   While Not WinActive($illustratorWindow)
	  WinActivate (GetFileName($fileName))
	  Sleep(300)
	  Send("^w")
   WEnd
EndFunc



Func WaitForFile($fileName)
   While FileExists ($fileName) == 0
	  Sleep(100)
   WEnd
EndFunc