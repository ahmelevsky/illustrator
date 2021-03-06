JsOsaDAS1.001.00bplist00�Vscripto	F v a r   a p p N a m e   =   " A d o b e   I l l u s t r a t o r " ; 
 f u n c t i o n   s a v e E p s ( p a t h )   { 
   v a r   s e   =   A p p l i c a t i o n ( ' S y s t e m   E v e n t s ' ) ; 
   
   v a r   k e y s   =   { 
     e n t e r :   0 x 2 4 , 
     u p :   0 x 7 E , 
     d o w n :   0 x 7 D , 
     t a b :   0 x 3 0 
   } ; 
 
   
   v a r   k e y C o d e   =   f u n c t i o n   ( c o d e ,   t i m e s )   { 
     t i m e s   =   t i m e s   | |   1 ; 
     f o r   ( v a r   i   =   0 ;   i   <   t i m e s ;   i + + )   { 
       s e . k e y C o d e ( c o d e ) ; 
     } 
     d e l a y ( 0 . 1 ) ; 
   } ; 
 
   v a r   f i l e S e c t i o n s   =   p a t h . s p l i t ( " / " ) ; 
   v a r   f i l e N a m e   =   f i l e S e c t i o n s . p o p ( ) ; 
   v a r   f i l e D i r   =   f i l e S e c t i o n s . j o i n ( " / " ) ; 
 
 
   v a r   i l l u s t r a t o r   =   s e . p r o c e s s e s . b y N a m e ( ' A d o b e   I l l u s t r a t o r ' ) ; 
   i l l u s t r a t o r . f r o n t m o s t   =   t r u e ; 
   
   s e . k e y s t r o k e ( " s " ,   { 
     u s i n g :   [ " s h i f t   d o w n " ,   " c o m m a n d   d o w n " ] 
   } ) ; 
   d e l a y ( 0 . 5 ) 
   
   v a r   s a v e A s   =   i l l u s t r a t o r . w i n d o w s . b y N a m e ( "!>E@0=8BL  :0: " ) ; 
   
   s e . k e y s t r o k e ( " g " ,   { 
     u s i n g :   [ " s h i f t   d o w n " ,   " c o m m a n d   d o w n " ] 
   } ) ;   
 
   
   v a r   s h e e t   =   s a v e A s . s h e e t s [ 0 ] ; 
   d e l a y ( 5 ) 
   v a r   p a t h C o m b o   =   s h e e t . t e x t F i e l d s [ 0 ] ; 
   p a t h C o m b o . v a l u e   =   f i l e D i r ; 
   k e y C o d e ( k e y s . e n t e r ) ; 
     d e l a y ( 0 . 5 ) 
   
   v a r   t x t F i l e N a m e   =   s a v e A s . t e x t F i e l d s [ 0 ] ; 
   t x t F i l e N a m e . v a l u e   =   f i l e N a m e ; 
   d e l a y ( 0 . 5 ) ; 
   / / v a r   f o r m a t   =   s a v e A s . p o p U p B u t t o n s [ 1 ] ; 
   / / f o r m a t . c l i c k ( ) ; 
   
   k e y C o d e ( k e y s . e n t e r ) ; 
   d e l a y ( 0 . 5 ) ; 
   k e y C o d e ( k e y s . u p ,   7 ) ; 
   k e y C o d e ( k e y s . d o w n ) ; 
   k e y C o d e ( k e y s . d o w n ,   6 ) ; 
   k e y C o d e ( k e y s . t a b ) ; 
   k e y C o d e ( k e y s . u p ,   2 ) ; 
   k e y C o d e ( k e y s . t a b ) ; 
   s e . k e y s t r o k e ( ' 0 ' ) ; 
   k e y C o d e ( k e y s . t a b ,   2 ) ; 
   s e . k e y s t r o k e ( '   ' ) ; 
   k e y C o d e ( k e y s . e n t e r ) ; 
 } 
 
 f u n c t i o n   w a i t F o r F i l e ( t a r g e t F i l e )   { 
   v a r   a p p S y s   =   A p p l i c a t i o n ( ' S y s t e m   E v e n t s ' ) ; 
   f u n c t i o n   w a i t F o r F i l e I n n e r ( t a r g e t F i l e )   { 
     i f   ( a p p S y s . e x i s t s ( P a t h ( t a r g e t F i l e ) ) )   { 
       r e t u r n ; 
     } 
     d e l a y ( 1 ) ; 
     w a i t F o r F i l e I n n e r ( t a r g e t F i l e ) ; 
   } 
   w a i t F o r F i l e I n n e r ( t a r g e t F i l e ) ; 
   
 } 
 
 
 v a r   a p p   =   A p p l i c a t i o n ( ' A d o b e   I l l u s t r a t o r ' ) ; 
 a p p . a c t i v a t e ( ) ; 
 a p p . i n c l u d e S t a n d a r d A d d i t i o n s   =   t r u e ; 
 v a r   s o u r c e P a t h   =   a p p . c h o o s e F o l d e r ( {   w i t h P r o m p t :   ' P l e a s e   s e l e c t   s o u r c e   f o l d e r '   } ) ; 
 v a r   s t r S o u r c e P a t h   =   s o u r c e P a t h . t o S t r i n g ( ) ; 
 v a r   d e s t P a t h   =   a p p . c h o o s e F o l d e r ( {   w i t h P r o m p t :   ' P l e a s e   s e l e c t   d e s t i n a t i o n   f o l d e r '   } ) ; 
 v a r   s t r D e s t P a t h   =   d e s t P a t h . t o S t r i n g ( ) ; 
 
 v a r   a p p S y s   =   A p p l i c a t i o n ( ' S y s t e m   E v e n t s ' ) , 
 s r c F i l e s   =   a p p S y s . f o l d e r s . b y N a m e ( s t r S o u r c e P a t h ) . d i s k I t e m s . n a m e ( ) ; 
 
 
 f o r   ( v a r   s r c F i l e   o f   s r c F i l e s )   { 
   v a r   f i l e N a m e   =   s r c F i l e . t o S t r i n g ( ) ;   
   i f   ( f i l e N a m e . e n d s W i t h ( " . e p s " )   | |   f i l e N a m e . e n d s W i t h ( " . a i " ) )   { 
     v a r   f i l e P a t h   =   s t r S o u r c e P a t h   +   " / "   +   f i l e N a m e ; 
     v a r   d e s t F i l e P a t h     =   s t r D e s t P a t h   +   " / "   +   f i l e N a m e ; 
     a p p . o p e n ( f i l e P a t h ) ; 
     s a v e E p s ( d e s t F i l e P a t h ) ; 
     w a i t F o r F i l e ( d e s t F i l e P a t h ) ; 
     d e l a y ( 1 ) ; 
     a p p S y s . k e y s t r o k e ( " w " ,   { u s i n g :   [ " c o m m a n d   d o w n " ] } ) ; 
   } 
 } 
                              �jscr  ��ޭ