#AutoIt3Wrapper_Change2CUI=y

#include <File.au3>

Opt("WinTitleMatchMode", 2) ; ���������� ������ ��������� ���� �� ����� �����
Opt("SendKeyDelay", 20)
;HotKeySet("^{ESC}", "Terminate")
;$illustratorWindow = "Adobe Illustrator CC 2015.3"
$illustratorWindow = "Adobe Illustrator"
$inputFolder = FileSelectFolder("�������� ����� � ������� ������� ���� ���������", "")
$outputFolder = FileSelectFolder("�������� �����, ���� ����� ����� �����������", "")
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
   MsgBox("���������������� ������ ������������. �������������� ������: 2015, 2017, 2018")
   Exit
EndIf


For $i = 1 To $FileList[0]
    If FileExists (GetSavePath($FileList[$i], $outputFolder)) Then ContinueLoop
    OpenFile($FileList[$i])
	SaveFile($FileList[$i])
	CloseFile($FileList[$i])
 Next


Func OpenFile(ByRef $fileName)
   Send("^o")
   WinWaitActive("�������")
   ControlSetText("�������", "","[CLASSNN:Edit1]", $fileName)
   Sleep(2000)
   ControlClick("�������", "", "[CLASSNN:Button1]")
   Sleep(1000)
   If WinExists("�������", "") Then
	  ConsoleWrite("Error opening file" & @LF)
	  Send("{ESCAPE 2}")
	  OpenFile($fileName)
   EndIf
EndFunc


Func SaveFile(ByRef $fileName)
   While WinWaitActive("��������� ���", "", 1) == 0
	  Send("^S")
	  Sleep(1000)
   WEnd
   Local $newFileName = GetSavePath($fileName, $outputFolder)
   ControlSetText("��������� ���", "","[CLASSNN:Edit1]",$newFileName)
   ControlCommand("��������� ���", "","[CLASS:Combobox; INSTANCE:2]", "SelectString", "Illustrator EPS (*.EPS)")
   ;ControlClick("��������� ���", "", "[CLASSNN:Button1]")
   Send("{ENTER}")
   ;ConsoleWrite("������ �������� ���� � ����������� ����������")
   ActivateWindow("��������� EPS")
   ;ConsoleWrite("������������ ������")
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

Func GetSavePath($fileName, $saveFolder)
   Local $sDrive = "", $sDir = "", $sFileName = "", $sExtension = ""
   Local $aPathSplit = _PathSplit($fileName, $sDrive, $sDir, $sFileName, $sExtension)
   ;ConsoleWrite($saveFolder & "\" &  $aPathSplit[3] & ".eps")
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

Func Terminate()
    Exit 0
EndFunc