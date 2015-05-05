/**
 * Bootstrap Table Galego (España) translation
 * Author: Kutus (kutus.ms@gmail.com) https://github.com/kutus/bootstrap-table-locales
  */
(function ($) {
    'use strict';

    $.fn.bootstrapTable.locales['gl-ES'] = {
        formatLoadingMessage: function () {
            return 'Carregando, por favor agarde...';
        },
        formatRecordsPerPage: function (pageNumber) {
            return pageNumber + ' rexistros por páxina';
        },
        formatShowingRows: function (pageFrom, pageTo, totalRows) {
            return 'Mostrando de ' + pageFrom + ' a ' + pageTo + ' rexistros de ' + totalRows + ' rexistros en total';
        },
        formatSearch: function () {
            return 'Buscar';
        },
        formatNoMatches: function () {
            return 'Non se atoparon rexistros';
        },
        formatRefresh: function () {
            return 'Actualizar';
        },
        formatToggle: function () {
            return 'Traspoñer';
        },
        formatPaginationSwitch: function () {
            return 'Ocultar/Mostrar paxinación';
        },
        formatAllRows: function () {
            return 'Todo';
        },
        formatColumns: function () {
            return 'Columnas';
        }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['gl-ES']);

})(jQuery);
