document.write("<table border='1' width='300'>");

for (let i = 1; i <= 5; i++) {
    let bgColor = i % 2 === 0 ? "#f2f2f2" : "#ffffff"; // Alternate row colors
    document.write(`<tr style='background-color:${bgColor}'>`);
    for (let j = 1; j <= 3; j++) {
        document.write(`<td>Row ${i} Col ${j}</td>`);
    }
    document.write("</tr>");
}

document.write("</table>");
