$(document).ready(function() {
  $.ajax({
    url: 'https://my-json-server.typicode.com/yopifebrian/ajax_6701213088/characters',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      console.log(data);
      $.each(data, function(key, value) {
        $.each(value, function(i, character) {
          if (i < 10) {
            var row = $('<tr>');
            var nama = $('<td>').text(character.nama);
            var asal = $('<td>').text(character.asal);
            var elemen = $('<td>').text(character.elemen);
            row.append(nama);
            row.append(asal);
            row.append(elemen);
            $('#characters-table tbody').append(row);
          }
        });
      });
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus, errorThrown);
    }
  });
});