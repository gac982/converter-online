let converter = new Vue({
    el: '#app',
    data: {
        activar: false,
        posicion: 1,
        pulgadas: '',
        pixelsPulgadas: '',
        pixelsRem: '',
        pixelsEm: '',
        pixelsPorcentaje: '',
        rem: '',
        em: '',
        porcentaje: '',
        datoPulgada: 96,
        pxPulgada: 0.0104166666667769,
        pxRem: 0.063,
        remPx: 16,
        pxEm: 1.50562499999487,
        emPx: 0.664176006644021,
        pxPorcentaje: 6.25,
        porcentajePx: 0.16,
        base: '0'
    },
    mounted: {},
    methods: {
        inPx: function() {
            if (this.pulgadas.length === 0) {
                return this.base;
            } else {
                return parseInt(this.pulgadas) * this.datoPulgada;
            }
        },
        pxIn: function() {
            if (this.pixelsPulgadas.length === 0) {
                return this.base;
            } else {
                return parseInt(this.pixelsPulgadas) * this.pxPulgada;
            }
        },
        pxRems: function() {
            if (this.pixelsRem.length === 0) {
                return this.base;
            } else {
                return parseInt(this.pixelsRem) * this.pxRem;
            }
        },
        remPxs: function() {
            if (this.rem.length === 0) {
                return this.base;
            } else {
                return parseInt(this.rem) * this.remPx;
            }
        },
        pxEms: function() {
            if (this.pixelsEm.length === 0) {
                return this.base;
            } else {
                return parseInt(this.pixelsEm) * Math.round(this.pxEm * 100) / 100;
            }
        },
        emPxs: function() {
            if (this.em.length === 0) {
                return this.base;
            } else {
                return parseInt(this.em) * Math.round(this.emPx * 100) / 100;
            }
        },
        pxPorcent: function() {
            if (this.pixelsPorcentaje.length === 0) {
                return this.base;
            } else {
                return parseInt(this.pixelsPorcentaje) * Math.round(this.pxPorcentaje * 100) / 100;
            }
        },
        porcentPx: function() {
            if (this.porcentaje.length === 0) {
                return this.base;
            } else {
                return parseInt(this.porcentaje) * Math.round(this.porcentajePx * 100) / 100;
            }
        },
    },
    filters: {
        anyadirPx: function(valor) {
            return valor.toString().concat(' px');
        },
        anyadirIn: function(valor) {
            return valor.toString().concat(' in');
        },
        anyadirRem: function(valor) {
            return valor.toString().concat(' rem');
        },
        anyadirEm: function(valor) {
            return valor.toString().concat(' em');
        },
        anyadirPorciento: function(valor) {
            return valor.toString().concat(' %');
        },
        redondear: function (valor) {
            return Math.round(valor);
        }
    }
    })