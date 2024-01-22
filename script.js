document.addEventListener('DOMContentLoaded', function () {
  // csv path .. same directory plz
  const csvFilePath = 'contigs.csv';

  // les deux finctions: fetch et parse
  async function fetchAndParseCSV(filePath) {
    const response = await fetch(filePath);
    const csvData = await response.text();
    return csvData;
  }

  //fonction : parse CSV and give me table with colors
  function parseCSVAndGenerateTable(csvData) {
    const rows = csvData.split('\n');
    const table = document.getElementById('csv-table');

    for (let i = 0; i < rows.length; i++) {
      const rowData = rows[i].split(',');

      const row = table.insertRow(i);

      for (let j = 0; j < rowData.length; j++) {
        const cell = row.insertCell(j);
        cell.textContent = rowData[j];

        //  color the cells based on plasmid / chromosome cell green plasmid/chromose yellow and nothing red
        if (rowData[j] === '0') {
          cell.style.backgroundColor = 'red';
        } else if (rowData[j].toLowerCase().includes('plasmid')) {
          cell.style.backgroundColor = 'green';
        } else if (rowData[j].toLowerCase().includes('chromosome')) {
          cell.style.backgroundColor = 'yellow';
        }

        // Add a filter input to the header row



        // if (i === 0) {
        //   const filterInput = document.createElement('input');
        //   filterInput.type = 'text';
        //   filterInput.placeholder = 'Filter';
        //   filterInput.addEventListener('input', function () {
        //     filterTable(j, this.value);
        //   });

        //   cell.appendChild(filterInput);
        // }



      }
    }
  }


  // Fetch CSV file and give me the table
  fetchAndParseCSV(csvFilePath)
    .then(parseCSVAndGenerateTable)
    .catch(error => console.error('Error fetching CSV:', error));
    // Function to filter the table based on user input




  // function filterTable(columnIndex, filterValue) {
  //   const table = document.getElementById('csv-table');
  //   const rows = table.getElementsByTagName('tr');

  //   for (let i = 1; i < rows.length; i++) {
  //     const cellValue = rows[i].getElementsByTagName('td')[columnIndex].textContent.toLowerCase();
  //     const isVisible = cellValue.includes(filterValue.toLowerCase());

  //     rows[i].style.display = isVisible ? '' : 'none';
  //   }
  // }





  
});
