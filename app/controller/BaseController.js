Ext.define('VT.controller.BaseController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.basecontroller',

    config: {
        refs: {
            iagBtn: 'button#iagBtn',
            rdgBtn: 'button#rdgBtn',
            dgsBtn: 'button#dgsBtn',
            allBtn: 'button#allBtn',
            btnBackToHome: '#btnBackToHome',
            // dgsList: 'list#dgslist',
            baselist: 'list#baselist',
            main: 'navigationview#main'

        },
        control: {
            'iagBtn' : {
                tap: 'onIagBtnTap'
            },
            'btnBackToHome': {
                tap: 'onBtnBackToHome'
            },
            'rdgBtn': {
                tap: 'onRdgBtnTap'
            },
            'dgsBtn': {
                tap: 'onDgsBtnTap'
            },
            'allBtn': {
                tap: 'onAllBtnTap'
            }

        }
    },

    onBtnBackToHome: function(){
        var main = Ext.getCmp('main');
        main.setActiveItem(0);
    },

    onIagBtnTap: function(){
        this.onBtnTap('v3/iag');
    },

    onRdgBtnTap: function(){
        this.onBtnTap('v3/rdg');
    },

    onDgsBtnTap: function(){
        this.onBtnTap('v3/dgs');
    },

    onAllBtnTap: function(){
        this.onBtnTap('v2');
    },

    onBtnTap: function(urlparam){
        Ext.Viewport.setMasked(true);
        var main = Ext.getCmp('main');
        var baseStore = Ext.getStore('BaseStore');
        baseStore.setAutoLoad(false);
        baseStore.getProxy().setUrl('https://vasil.iag.bg/tel/'+ urlparam);
        // baseStore.filter('egn','6002103441');
        baseStore.load();
        main.setActiveItem(1);
        Ext.Viewport.setMasked(false);
    }    
});
