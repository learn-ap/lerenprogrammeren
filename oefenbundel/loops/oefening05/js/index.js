for(let i= 0; i<=99;i++) {
    if (i < 99) {
        //als het kleiner is dan 10 dan word een nr word gezet
        if (i < 10) {
            document.write("0" + i + ", ");
        } else {
            document.write(i+", ")
        }
    } else {
        document.write(i);
    }
}