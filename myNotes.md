npm i sass 
disable live sass compiler


react-rnd package - to resize and drag component

Flex-basis Kaise Kaam Karta Hai?
flex-direction: row (Default): Yahan flex-basis item ki width set karta hai.

flex-direction: column: Yahan flex-basis item ki height set karta hai.



1. flex-basis (The Starting Point)
Ye ek "request" hai. Aap browser se keh rahe ho: "Bhai, is item ko 200px se start karo." * Agar container mein jagah kam padi, toh ye item 200px se chota ho jayega (agar flex-shrink on hai).

Iska matlab ye fixed nahi hai, ye flexible hai.

2. min-width (The Hard Limit)
Ye ek "order" hai. Aap browser se keh rahe ho: "Kuch bhi ho jaye, ye item 200px se chota nahi hona chahiye."

Agar container chota ho gaya, toh item shrink nahi hoga balki container se baahar nikal jayega (overflow).


min-width vs flex-basis: Aapne min-width 12rem di hai, lekin flex-basis default mein auto hai. Iska matlab card ki initial size uske content ke hisaab se decide ho rahi hai.

Growing Logic: flex-grow hamesha flex-basis ke upar extra space add karta hai.


// notes txt 
md format - markdown format ko react m render krne ke liye 
npm i react-markdown 

- markdown highlighter

iframe embad