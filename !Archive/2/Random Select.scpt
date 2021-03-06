FasdUAS 1.101.10   ��   ��    k             l      ��  ��   2,
    Random Select

    Version: 0.2

    Created by Andr� Berg on 2008-12-15
    Copyright � 2008 Berg Media. All rights reserved.
    
    FOR LICENSE DETAILS SEE THE END OF THE SCRIPT

    This script demonstrates an easy way of randomizing
    the selection of a given number of objects.
    If nothing is selected prior to calling the script then all
    page items of the foremost document are set as the 
    inital selection.
    
    Should work with Illustrator CS4/CS3 and possibly earlier
    versions too. Tested on Mac OS X 10.5.5 (Leopard).
     � 	 	X 
         R a n d o m   S e l e c t 
 
         V e r s i o n :   0 . 2 
 
         C r e a t e d   b y   A n d r �   B e r g   o n   2 0 0 8 - 1 2 - 1 5 
         C o p y r i g h t   �   2 0 0 8   B e r g   M e d i a .   A l l   r i g h t s   r e s e r v e d . 
         
         F O R   L I C E N S E   D E T A I L S   S E E   T H E   E N D   O F   T H E   S C R I P T 
 
         T h i s   s c r i p t   d e m o n s t r a t e s   a n   e a s y   w a y   o f   r a n d o m i z i n g 
         t h e   s e l e c t i o n   o f   a   g i v e n   n u m b e r   o f   o b j e c t s . 
         I f   n o t h i n g   i s   s e l e c t e d   p r i o r   t o   c a l l i n g   t h e   s c r i p t   t h e n   a l l 
         p a g e   i t e m s   o f   t h e   f o r e m o s t   d o c u m e n t   a r e   s e t   a s   t h e   
         i n i t a l   s e l e c t i o n . 
         
         S h o u l d   w o r k   w i t h   I l l u s t r a t o r   C S 4 / C S 3   a n d   p o s s i b l y   e a r l i e r 
         v e r s i o n s   t o o .   T e s t e d   o n   M a c   O S   X   1 0 . 5 . 5   ( L e o p a r d ) . 
   
  
 l     ��������  ��  ��        j     �� �� 0 scriptid scriptID  m        �   $ R a n d o m   S e l e c t   v 0 . 2      l     ��������  ��  ��        l   � ����  O    �    Z   �  ��   l    ����  ?        l    ����  I   �� ��
�� .corecnte****       ****  2   ��
�� 
docu��  ��  ��    m    ����  ��  ��    k   |      ! " ! l   ��������  ��  ��   "  # $ # l   �� % &��   % 5 / if nothing selected then select all page items    & � ' ' ^   i f   n o t h i n g   s e l e c t e d   t h e n   s e l e c t   a l l   p a g e   i t e m s $  ( ) ( Z   * * +���� * l    ,���� , =    - . - n     / 0 / 1    ��
�� 
sele 0 4    �� 1
�� 
docu 1 m    ����  . J    ����  ��  ��   + l 	  & 2���� 2 r    & 3 4 3 n    " 5 6 5 2     "��
�� 
caAT 6 4     �� 7
�� 
docu 7 m    ����  4 1   " %��
�� 
sele��  ��  ��  ��   )  8 9 8 l  + +��������  ��  ��   9  : ; : r   + ? < = < I  + ;�� > ?
�� .sysodlogaskr        TEXT > l 	 + , @���� @ m   + , A A � B B R M a x   a m o u n t   ( p e r c e n t )   o f   o b j e c t s   t o   s e l e c t��  ��   ? �� C D
�� 
dtxt C l 	 - . E���� E m   - . F F � G G  5 0��  ��   D �� H I
�� 
disp H l 
 / 0 J���� J m   / 0���� ��  ��   I �� K L
�� 
btns K l 
 1 5 M���� M J   1 5 N N  O P O m   1 2 Q Q � R R  C a n c e l P  S�� S m   2 3 T T � U U  O K��  ��  ��   L �� V��
�� 
dflt V m   6 7 W W � X X  O K��   = o      ���� 0 dialog_result   ;  Y Z Y r   @ K [ \ [ n   @ G ] ^ ] 1   C G��
�� 
bhit ^ o   @ C���� 0 dialog_result   \ o      ���� 0 button_pressed   Z  _ ` _ r   L W a b a n   L S c d c 1   O S��
�� 
ttxt d o   L O���� 0 dialog_result   b o      ���� 0 text_returned   `  e f e Z   X r g h�� i g =  X _ j k j o   X [���� 0 button_pressed   k m   [ ^ l l � m m  O K h r   b m n o n c   b i p q p o   b e���� 0 text_returned   q m   e h��
�� 
nmbr o o      ���� 0 percent  ��   i L   p r����   f  r s r l  s s��������  ��  ��   s  t u t l  s s�� v w��   v   sanity checks    w � x x    s a n i t y   c h e c k s u  y z y Z  s � { |���� { ?   s z } ~ } o   s v���� 0 percent   ~ m   v y���� d | r   } �  �  m   } ����� d � o      ���� 0 percent  ��  ��   z  � � � Z  � � � ����� � B   � � � � � o   � ����� 0 percent   � m   � �����   � r   � � � � � m   � �����  � o      ���� 0 percent  ��  ��   �  � � � l  � ���������  ��  ��   �  � � � l  � ��� � ���   � T N asking just for the length of a selection is actually a heck of a lot faster     � � � � �   a s k i n g   j u s t   f o r   t h e   l e n g t h   o f   a   s e l e c t i o n   i s   a c t u a l l y   a   h e c k   o f   a   l o t   f a s t e r   �  � � � l  � ��� � ���   � I C than actually querying the objects whose selected property is true    � � � � �   t h a n   a c t u a l l y   q u e r y i n g   t h e   o b j e c t s   w h o s e   s e l e c t e d   p r o p e r t y   i s   t r u e �  � � � l  � ��� � ���   � \ V we see this down below when the same command is used for asigning to selectedObjects     � � � � �   w e   s e e   t h i s   d o w n   b e l o w   w h e n   t h e   s a m e   c o m m a n d   i s   u s e d   f o r   a s i g n i n g   t o   s e l e c t e d O b j e c t s   �  � � � r   � � � � � I  � ��� ���
�� .corecnte****       **** � l  � � ����� � 6  � � � � � n   � � � � � 2  � ���
�� 
caAT � 4   � ��� �
�� 
docu � m   � �����  � =  � � � � � 1   � ���
�� 
selc � m   � ���
�� boovtrue��  ��  ��   � o      ���� (0 numselectedobjects numSelectedObjects �  � � � l  � � � � � � r   � � � � � _   � � � � � ]   � � � � � o   � ����� (0 numselectedobjects numSelectedObjects � o   � ����� 0 percent   � m   � ����� d � o      ���� *0 numrequestedobjects numRequestedObjects � ( " div instead of / truncates to int    � � � � D   d i v   i n s t e a d   o f   /   t r u n c a t e s   t o   i n t �  � � � r   � � � � � J   � �����   � o      ���� 0 nrlist nrList �  � � � r   � � � � � J   � �����   � o      ���� &0 modifiedselection modifiedSelection �  � � � l  � ���������  ��  ��   �  � � � l  � ��� � ���   � P J build up a list of random numbers with list length of numRequestedObjects    � � � � �   b u i l d   u p   a   l i s t   o f   r a n d o m   n u m b e r s   w i t h   l i s t   l e n g t h   o f   n u m R e q u e s t e d O b j e c t s �  � � � l  � ��� � ���   � 7 1 also make sure these are actually unique numbers    � � � � b   a l s o   m a k e   s u r e   t h e s e   a r e   a c t u a l l y   u n i q u e   n u m b e r s �  � � � Y   �+ ��� � ��� � k   �& � �  � � � Z  � � � ����� � @   � � � � � l  � � ����� � n   � � � � � m   � ���
�� 
nmbr � n   � � � � � 2  � ���
�� 
cobj � o   � ����� 0 nrlist nrList��  ��   � l 
 � � ����� � o   � ����� *0 numrequestedobjects numRequestedObjects��  ��   �  S   � ���  ��   �  � � � r   � � � � l  �
 ���� � I  �
�~�} �
�~ .sysorandnmbr    ��� nmbr�}   � �| � �
�| 
from � m   � ��{�{  � �z ��y
�z 
to   � o  �x�x (0 numselectedobjects numSelectedObjects�y  ��  �   � o      �w�w 0 nr   �  ��v � Z & � ��u�t � H   � � E   � � � o  �s�s 0 nrlist nrList � o  �r�r 0 nr   � r  " � � � o  �q�q 0 nr   � n       � � �  ;   ! � o   �p�p 0 nrlist nrList�u  �t  �v  �� 0 i   � m   � ��o�o  � o   � ��n�n (0 numselectedobjects numSelectedObjects��   �  � � � l ,,�m�l�k�m  �l  �k   �  � � � l ,,�j � ��j   � N H this is a quite time costly step for selections greater than 50 objects    � � � � �   t h i s   i s   a   q u i t e   t i m e   c o s t l y   s t e p   f o r   s e l e c t i o n s   g r e a t e r   t h a n   5 0   o b j e c t s �  � � � l ,,�i � ��i   � G A working around using items of an actual selection would require     � � � � �   w o r k i n g   a r o u n d   u s i n g   i t e m s   o f   a n   a c t u a l   s e l e c t i o n   w o u l d   r e q u i r e   �  � � � l ,,�h � ��h   � < 6 a radically different approach of writing this script    � � � � l   a   r a d i c a l l y   d i f f e r e n t   a p p r o a c h   o f   w r i t i n g   t h i s   s c r i p t �  � � � r  ,C �  � l ,?�g�f 6 ,? n  ,2 2 02�e
�e 
caAT 4  ,0�d
�d 
docu m  ./�c�c  = 5> 1  6:�b
�b 
selc m  ;=�a
�a boovtrue�g  �f    o      �`�` "0 selectedobjects selectedObjects � 	
	 l DD�_�^�]�_  �^  �]  
  l DD�\�\   < 6 now select each object whose item number is in nrList    � l   n o w   s e l e c t   e a c h   o b j e c t   w h o s e   i t e m   n u m b e r   i s   i n   n r L i s t  Y  Do�[�Z r  Uj n  Ue 4  Xe�Y
�Y 
cobj l [d�X�W n  [d 4  ^c�V
�V 
cobj o  ab�U�U 0 j   o  [^�T�T 0 nrlist nrList�X  �W   o  UX�S�S "0 selectedobjects selectedObjects n        ;  hi o  eh�R�R &0 modifiedselection modifiedSelection�[ 0 j   m  GH�Q�Q  l HP �P�O  n HP!"! 1  KO�N
�N 
leng" o  HK�M�M 0 nrlist nrList�P  �O  �Z   #$# l pp�L�K�J�L  �K  �J  $ %&% l pp�I'(�I  '   alter the selection   ( �)) (   a l t e r   t h e   s e l e c t i o n& *+* r  pz,-, o  ps�H�H &0 modifiedselection modifiedSelection- n      ./. 1  wy�G
�G 
sele/ 4  sw�F0
�F 
docu0 m  uv�E�E + 1�D1 l {{�C�B�A�C  �B  �A  �D  ��    I ��@23
�@ .sysodisAaleR        TEXT2 n �454 o  ���?�? 0 scriptid scriptID5  f  �3 �>67
�> 
mesS6 b  ��898 b  ��:;: l 	��<�=�<< m  ��== �>> 2 E r r o r :   N o   a c t i v e   d o c u m e n t�=  �<  ; o  ���;
�; 
ret 9 m  ��?? �@@ H P l e a s e   o p e n   a   d o c u m e n t   a n d   t r y   a g a i n7 �:AB
�: 
as AA m  ���9
�9 EAlTwarNB �8CD
�8 
btnsC J  ��EE FGF m  ��HH �II  C a n c e lG J�7J m  ��KK �LL  O K�7  D �6M�5
�6 
dfltM m  ��NN �OO  O K�5    m     PP                                                                                  ART5   alis    �  Macintosh HD               û��H+   �N�Adobe Illustrator.app                                           �N��.x�        ����  	                Adobe Illustrator CS4     û��      �.j~     �N�     EMacintosh HD:Applications:Adobe Illustrator CS4:Adobe Illustrator.app   ,  A d o b e   I l l u s t r a t o r . a p p    M a c i n t o s h   H D  8Applications/Adobe Illustrator CS4/Adobe Illustrator.app  / ��  ��  ��    QRQ l     �4�3�2�4  �3  �2  R STS l      �1UV�1  U��
Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met: 

* Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer. 
* Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution. 
* Neither the name of Berg Media nor the name of Andr� Berg may be used to endorse or promote products derived from this software without specific prior written permission.

WARRANTIES AND DISCLAIMERS

THIS SOFTWARE IS PROVIDED BY ANDR� BERG OF BERG MEDIA (DESIGNATED FROM HEREON AS "THE AUTHOR") "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
   V �WW> 
 R e d i s t r i b u t i o n   a n d   u s e   i n   s o u r c e   a n d   b i n a r y   f o r m s ,   w i t h   o r   w i t h o u t   m o d i f i c a t i o n ,   a r e   p e r m i t t e d   p r o v i d e d   t h a t   t h e   f o l l o w i n g   c o n d i t i o n s   a r e   m e t :   
 
 *   R e d i s t r i b u t i o n s   o f   s o u r c e   c o d e   m u s t   r e t a i n   t h e   a b o v e   c o p y r i g h t   n o t i c e ,   t h i s   l i s t   o f   c o n d i t i o n s   a n d   t h e   f o l l o w i n g   d i s c l a i m e r .   
 *   R e d i s t r i b u t i o n s   i n   b i n a r y   f o r m   m u s t   r e p r o d u c e   t h e   a b o v e   c o p y r i g h t   n o t i c e ,   t h i s   l i s t   o f   c o n d i t i o n s   a n d   t h e   f o l l o w i n g   d i s c l a i m e r   i n   t h e   d o c u m e n t a t i o n   a n d / o r   o t h e r   m a t e r i a l s   p r o v i d e d   w i t h   t h e   d i s t r i b u t i o n .   
 *   N e i t h e r   t h e   n a m e   o f   B e r g   M e d i a   n o r   t h e   n a m e   o f   A n d r �   B e r g   m a y   b e   u s e d   t o   e n d o r s e   o r   p r o m o t e   p r o d u c t s   d e r i v e d   f r o m   t h i s   s o f t w a r e   w i t h o u t   s p e c i f i c   p r i o r   w r i t t e n   p e r m i s s i o n . 
 
 W A R R A N T I E S   A N D   D I S C L A I M E R S 
 
 T H I S   S O F T W A R E   I S   P R O V I D E D   B Y   A N D R �   B E R G   O F   B E R G   M E D I A   ( D E S I G N A T E D   F R O M   H E R E O N   A S   " T H E   A U T H O R " )   " A S   I S "   A N D   A N Y   E X P R E S S   O R   I M P L I E D   W A R R A N T I E S ,   I N C L U D I N G ,   B U T   N O T   L I M I T E D   T O ,   T H E   I M P L I E D   W A R R A N T I E S   O F   M E R C H A N T A B I L I T Y   A N D   F I T N E S S   F O R   A   P A R T I C U L A R   P U R P O S E   A R E   D I S C L A I M E D .   I N   N O   E V E N T   S H A L L   T H E   A U T H O R   B E   L I A B L E   F O R   A N Y   D I R E C T ,   I N D I R E C T ,   I N C I D E N T A L ,   S P E C I A L ,   E X E M P L A R Y ,   O R   C O N S E Q U E N T I A L   D A M A G E S   ( I N C L U D I N G ,   B U T   N O T   L I M I T E D   T O ,   P R O C U R E M E N T   O F   S U B S T I T U T E   G O O D S   O R   S E R V I C E S ;   L O S S   O F   U S E ,   D A T A ,   O R   P R O F I T S ;   O R   B U S I N E S S   I N T E R R U P T I O N )   H O W E V E R   C A U S E D   A N D   O N   A N Y   T H E O R Y   O F   L I A B I L I T Y ,   W H E T H E R   I N   C O N T R A C T ,   S T R I C T   L I A B I L I T Y ,   O R   T O R T   ( I N C L U D I N G   N E G L I G E N C E   O R   O T H E R W I S E )   A R I S I N G   I N   A N Y   W A Y   O U T   O F   T H E   U S E   O F   T H I S   S O F T W A R E ,   E V E N   I F   A D V I S E D   O F   T H E   P O S S I B I L I T Y   O F   S U C H   D A M A G E . 
T X�0X l     �/�.�-�/  �.  �-  �0       �,Y Z�,  Y �+�*�+ 0 scriptid scriptID
�* .aevtoappnull  �   � ****Z �)[�(�'\]�&
�) .aevtoappnull  �   � ****[ k    �^^  �%�%  �(  �'  \ �$�#�$ 0 i  �# 0 j  ] 2P�"�!� � A� F�� Q T� W������� l���_�������
�	�������=�?� ��HKN��
�" 
docu
�! .corecnte****       ****
�  
sele
� 
caAT
� 
dtxt
� 
disp
� 
btns
� 
dflt� 
� .sysodlogaskr        TEXT� 0 dialog_result  
� 
bhit� 0 button_pressed  
� 
ttxt� 0 text_returned  
� 
nmbr� 0 percent  � d_  
� 
selc� (0 numselectedobjects numSelectedObjects� *0 numrequestedobjects numRequestedObjects� 0 nrlist nrList� &0 modifiedselection modifiedSelection
� 
cobj
�
 
from
�	 
to  � 
� .sysorandnmbr    ��� nmbr� 0 nr  � "0 selectedobjects selectedObjects
� 
leng� 0 scriptid scriptID
� 
mesS
� 
ret 
�  
as A
�� EAlTwarN
�� .sysodisAaleR        TEXT�&���*�-j jq*�k/�,jv  *�k/�-*�,FY hO����k���lv��� E` O_ a ,E` O_ a ,E` O_ a   _ a &E` Y hO_ a  a E` Y hO_ j 
kE` Y hO*�k/�-a [a ,\Ze81j E` O_ _  a "E` OjvE` OjvE` O Uk_ kh  _ a -a ,_  Y hO*a  ka !_ a " #E` $O_ _ $ _ $_ 6FY h[OY��O*�k/�-a [a ,\Ze81E` %O *k_ a &,Ekh _ %a _ a �/E/_ 6F[OY��O_ *�k/�,FOPY ,)a ',a (a )_ *%a +%a ,a -�a .a /lv�a 0� 1U ascr  ��ޭ