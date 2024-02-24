# Image preloader

# Resonemang kring min kod.

<b>Styrkor:</b>
Nu vart det ett litet projekt, men jag kan nämna några styrkor som: async await, try-catch, återanvändning av av funktioner samt tydliga namn för att lätt kunna identifiera ansvarsområden.

1. Async Await - Applikationen använder async await med try-catch för att hämta bilder från en extern källa. Detta gör koden lite mer lättläst då man direkt talar om att funktionen är en 'async' funktion samt att vissa variabler i funktionen väntar (await) på värde. Try-catch hjälper dessutom till att tydliggöra vad som händer vid en promise tillstånd som fulfilled eller rejected.

2. Återanvändning av kod - Preloader funktionen återanvänds i Promise.all() för att förbereda bilderna innan uppladdning för att öka prestandan. Detta leder dessutom till en mer koncis skriven kod.

3. Tydliga ansvarsområden - Programkoden är uppdelad i funktioner med tydliga namn samt specifika ansvarsområden, t.ex., fetchImages för hämtning av bilder, preloadImages för förhandsvisning, och renderImages för att rendera bilderna på sidan. Detta gör koden enklare att förstå och underhålla.

<b>Brister:</b>
Det finns två potentiella brister.

1. Den första bristen kan relatera till att lagra extra information i en dataset i ett element och sedan överföra det till ett annat element. Detta kan vara utmanande att hantera i större projekt. Specifikt hänvisar jag till följande kodsnutt: img.dataset.anchor = anchor; //Detta används sedan som href till anchor-taggen.

2. Andra bristen är användningen av Promise.all(). Om tillståndet för en bild blir rejected renderas inga bilder alls. Med Promise.allSettled() kan man åtminstone rendera allt som är fulfilled genom att implementera några villkor i renderImage-funktionen för att dubbelkolla att det verkligen är en giltig bild innan den renderas.
