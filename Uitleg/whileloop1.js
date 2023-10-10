let text = "";
let i = 0;
while (i < 10) {
    // na de = [text; hier word de huidige 'i'-getal bewaard].[eigenlijk ziet het er zo uit text=(text=i) ", "]
    text = text + i + " ";
    i++;
}
document.write("De nummers zijn:", text);
