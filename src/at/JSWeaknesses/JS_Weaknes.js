//ich habe mit Sam gearbeitet (da mein Laptop fehlte) und habe Typisierung als Schwäche genommen, aber recherchiere nach einer anderen Schwäche

//Schwäche
console.log(false == 0);  // true
console.log("" == 0);     // true
console.log(null == undefined); // true

// Lösung 3 =

console.log(false === 0);  // false
console.log("" === 0);     // false
console.log(null === undefined); // false

// Schwäche
function schlecht() {
    a = "Ou weh, die Variable ist global??";
}

schlecht();
console.log(a); // Globale Variable? Keine gute Praxis


// Lösung
function gut() {
    let b = "Die Variable ist lokal!";
    console.log(b);
}

gut();
console.log(typeof b); // "undefined" (Variable existiert nicht global)

// Warum ist es schlecht, dass eine Variable global existiert?
// In der oberen Funktion wird die Variable ungewollt global gestellt und das kann zu Inkosistenzen bzw. "variable wars"
// im künftigen Code führen. Und Krieg mag niemand, was? Und die Variable könnte überschrieben werden, wenn mehrere Skripte
// geladen werden. Oops die Variable hat nicht mehr den gewünschten String? Fehler des Skriptes? Nein, Fehler meiner Funktion

