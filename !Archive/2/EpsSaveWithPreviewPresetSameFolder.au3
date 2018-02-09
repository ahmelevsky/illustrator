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
   If StringLeft(GetFileName($FileList[$i]), 2) == "0_" Then ContinueLoop
   If FileExists ($inputFolder & "\0_" & GetFileName($FileList[$i])) Then ContinueLoop
    OpenFile($FileList[$i])
	SaveFile($FileList[$i])
	CloseFile2($FileList[$i])
 Next


Func OpenFile(ByRef $fileName)
   ActivateWindow($illustratorWindow)
   Send("^o")
   WinWaitActive("Открыть")
   ControlSetText("Открыть", "","[CLASSNN:Edit1]", $fileName)
   ControlClick("Открыть", "", "[CLASSNN:Button1]")
EndFunc

Func SaveFile(ByRef $fileName)
   While WinWaitActive("Сохранить как", "", 1) == 0
	  If WinActive(GetFileName($fileName)) Then
		 Send("^S")
	  Else
         ActivateWindow (GetFileName($fileName))
		 Send("^S")
	  EndIf
	  Sleep(1000)
   WEnd
   Local $newFileName = GetSaveName($fileName)
   ControlSetText("Сохранить как", "","[CLASSNN:Edit1]",$newFileName)
   ControlCommand("Сохранить как", "","[CLASS:Combobox; INSTANCE:2]", "SelectString", "Illustrator EPS (*.EPS)")
   Send("{TAB 2}")
   Sleep(300)
   ControlClick("Сохранить как", "", "[CLASS:Button; TEXT:Со&хранить; INSTANCE:1]")
   ActivateWindow("Параметры EPS")
   If $version == "2015" Then
	  SetParameters2015()
   ElseIf $version = "2017" Then
	  SetParameters2017()
   ElseIf $version = "2018" Then
	  SetParameters2018()
   EndIf
   WaitForFile($newFileName)
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

Func GetSaveNameFull($fileName)
   Local $sDrive = "", $sDir = "", $sFileName = "", $sExtension = ""
   Local $aPathSplit = _PathSplit($fileName, $sDrive, $sDir, $sFileName, $sExtension)
   Return $aPathSplit[1] & $aPathSplit[2] & "0_" & $aPathSplit[3] & ".eps"
EndFunc

Func GetSaveName($fileName)
   Local $sDrive = "", $sDir = "", $sFileName = "", $sExtension = ""
   Local $aPathSplit = _PathSplit($fileName, $sDrive, $sDir, $sFileName, $sExtension)
   Return "0_" & $aPathSplit[3] & ".eps"
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
   ActivateWindow(GetFileName($fileName))
   Send("^w")
   While WinWaitActive($illustratorWindow) == 0
	  WinActivate (GetFileName($fileName))
	  Sleep(100)
	  Send("^w")
   WEnd
EndFunc

Func CloseFile2($fileName)
   Send("^w")
   While WinWaitActive($illustratorWindow) == 0
	  Sleep(100)
	  Send("^w")
   WEnd
EndFunc



Func WaitForFile($fileName)
   While FileExists ($fileName) == 0
	  Sleep(100)
   WEnd
EndFunc