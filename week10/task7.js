document.write(
  "<table width='300' style='border-collapse:collapse; text-align:center; border:2px solid white;'>"
);

// Table header with blue background, white text, and white border
document.write(
  "<tr style='background-color:blue; color:white; font-weight:bold; border:2px solid white;'>"
);
document.write("<th style='border:2px solid white;'>S.N</th>");
document.write("<th style='border:2px solid white;'>Name</th>");
document.write("<th style='border:2px solid white;'>Image</th>");
document.write('</tr>');

// Table rows with black text and white borders
for (let i = 1; i <= 4; i++) {
  let bgColor = i % 2 === 0 ? '#ffffff' : '#f2f2f2'; // Alternate row colors
  document.write(
    `<tr style='background-color:${bgColor}; color:black; border:2px solid white;'>`
  );
  document.write(`<td style='border:2px solid white;'>${i}</td>`);
  document.write(`<td style='border:2px solid white;'>Name ${i}</td>`);
  document.write(`<td style='border:2px solid white;'>${i}.jpg</td>`);
  document.write('</tr>');
}

document.write('</table>');
