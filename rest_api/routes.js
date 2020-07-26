'use strict';

module.exports = function (app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);
    app.route('/tampil')
        .get(jsonku.tampilsemuaproperty);
    app.route('/tambah')
        .post(jsonku.tambahproperty);
    app.route('/ubah')
        .put(jsonku.ubahproperty);
    app.route('/hapus')
        .delete(jsonku.hapusproperty);
}