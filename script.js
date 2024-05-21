


function kirimData() {
    var nama = document.getElementById("nama").value;
    var nim = document.getElementById("nim").value;
    var peminatan = document.querySelector('input[name="peminatan"]:checked').value;
    var alamat = document.getElementById("alamat").value;

    alert(
        "Nama Mahasiswa: " + nama +
        "\nNim: " + nim +
        "\nPeminatan: " + peminatan +
        "\nAlamat: " + alamat
    );
}


function submitForm() {
    var form = document.getElementById("registrationForm");
    var formData = new FormData(form);
    var output = "<h2>Informasi yang Anda isi:</h2>";
    formData.forEach(function(value, key){
        output += "<p><strong>" + key + ":</strong> " + value + "</p>";
    });
    document.getElementById("output").innerHTML = output;
}