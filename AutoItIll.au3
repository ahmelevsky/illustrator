#include <File.au3>
Opt("WinTitleMatchMode", 2) ; определяем способ узнавания окна по любой части
Opt("SendKeyDelay", 20)

$illustratorWindow = "Adobe Illustrator CC 2015.3"

$inputFolder = FileSelectFolder("Выберите папку с файлами которые надо уменьшить", "")
$outputFolder = FileSelectFolder("Выберите папку, куда файлы будут сохраняться", "")
If @error Then
        MsgBox($MB_SYSTEMMODAL, "", "No folder was selected.")
	    Exit 0
	 EndIf
$FileList = _FileListToArray($inputFolder, "*.eps", 1, True)


ActivateWindow($illustratorWindow)

For $i = 1 To $FileList[0]
    OpenFile($FileList[$i])
	SaveFile($FileList[$i])
	CloseFile($FileList[$i])
 Next


Func OpenFile(ByRef $fileName)
   ConsoleWrite("Открытие файла " & $fileName)
   Send("^o")
   WinWaitActive("Открыть")
   ControlSetText("Открыть", "","[CLASSNN:Edit1]", $fileName)
   ControlClick("Открыть", "", "[CLASSNN:Button1]")
EndFunc

Func SaveFile(ByRef $fileName)
   While WinWaitActive("Сохранить как", "", 1) == 0
	  Send("^S")
	  Sleep(1000)
   WEnd
   Local $newFileName = GetSavePath($fileName, $outputFolder)
   ControlSetText("Сохранить как", "","[CLASSNN:Edit1]",$newFileName)
   ControlCommand("Сохранить как", "","[CLASSNN:Edit1]", "SelectString", "Illustrator EPS (*.EPS)")
   ControlClick("Сохранить как", "", "[CLASSNN:Button4]")
   ConsoleWrite("Начало ожидания окна с настройками сохранения")
   ActivateWindow("Параметры EPS")
   ConsoleWrite("Активировали окошко")
   Send("{UP 10}")
   Send("{DOWN 7}")
   Send("{TAB 2}")
   Send("0")
   Send("{TAB 2}")
   Send("{SPACE}")
   Send("{TAB 5}")
   #Sleep(10000)
   Send("{ENTER}")
   WaitForFile($newFileName)
EndFunc

Func GetSavePath($fileName, $saveFolder)
   Local $sDrive = "", $sDir = "", $sFileName = "", $sExtension = ""
   Local $aPathSplit = _PathSplit($fileName, $sDrive, $sDir, $sFileName, $sExtension)
   ConsoleWrite($saveFolder & "\" &  $aPathSplit[3] & ".eps")
   Return $saveFolder & "\" &  $aPathSplit[3] & ".eps"
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
	  WinActivate ($title)
	  Sleep(100)
	  Send("^w")
   WEnd
EndFunc


Func WaitForFile($fileName)
   While FileExists ($fileName) == 0
	  Sleep(100)
   WEnd
EndFunc