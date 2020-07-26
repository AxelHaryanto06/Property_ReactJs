'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi REST API berjalan !", res)
};

//menampilkan semua data property
exports.tampilsemuaproperty = function (req, res) {
    connection.query('SELECT * FROM property', function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

//menambahkan property
exports.tambahproperty = function (req, res) {
    var nama = req.body.nama;
    var type = req.body.type;
    var harga = req.body.harga;
    var lokasi = req.body.lokasi;

    connection.query('INSERT INTO property (nama,type,harga,lokasi) VALUES (?,?,?,?)',
    [nama, type, harga, lokasi],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Property", res)
            }
        });
};

//mengubah data berdasarkan id
exports.ubahproperty = function (req, res) {
    var id = req.body.id_property;
    var nama = req.body.nama;
    var type = req.body.type;
    var harga = req.body.harga;
    var lokasi = req.body.lokasi;

    connection.query('UPDATE property SET nama=?, type=?,harga=?,lokasi=? WHERE id_property=?', [nama, type, harga, lokasi, id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Ubah Property", res)
            }
        });
}

//Menghapus property berdasarkan id
exports.hapusproperty = function (req, res) {
    var id_property = req.body.id_property;
    connection.query('DELETE FROM property WHERE id_property=?', [id_property],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Hapus Property", res)
            }
        });
}