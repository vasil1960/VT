Ext.define('VT.controller.BaseController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.basecontroller',

    config: {
        refs: {
            iagBtn: 'button#iagBtn',
            rdgBtn: 'button#rdgBtn',
            dgsBtn: 'button#dgsBtn',
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
            }

        }
    },

    onBtnBackToHome: function(){
        var main = Ext.getCmp('main');
        main.setActiveItem(0);
    },

    onIagBtnTap: function(){
        this.onBtnTap('iag');
    },

    onRdgBtnTap: function(){
        this.onBtnTap('rdg');
    },

    onDgsBtnTap: function(){
        this.onBtnTap('dgs');
    },


    onBtnTap: function(urlparam){
        Ext.Viewport.setMasked(true);
        var main = Ext.getCmp('main');
        var baseStore = Ext.getStore('BaseStore');
        baseStore.setAutoLoad(false);
        baseStore.getProxy().setUrl('https://vasil.iag.bg/tel/v3/'+ urlparam);
        baseStore.load({
                     callback: function(records, operation, success) {
                
                        if(success)
                        {
                            main.setActiveItem(1);
                            Ext.Viewport.setMasked(false);

                        } else {
                            Ext.Viewport.setMasked(false);
                            Ext.Msg.alert('Събщение', 'Проверете връзката с интернет и рестартирайте приложението', Ext.emptyFn);
                        }
                    }       
                });
        Ext.Viewport.setMasked(false);
    }
 
    
    // onIagBtnTap1: function (dataview, index, target, record, e, eOpts) {
    //     // console.log('tap');

    //     var store = Ext.getStore('BaseStore');
    //     var main = this.getMain();

    //     store.setAutoLoad(false);

    //     Ext.Viewport.setMasked({
    //         xtype:'loadmask', 
    //         message:'Зареждам ...', 
    //         indicator:true 
    //     });
        
    //     store.load({
    //         callback: function(records, operation, success) {
                
    //             if(success)
    //             {
    //                 // console.log(records);
                   
    //                 // Ext.Viewport.animateActiveItem(Ext.create('VT.view.BaseList'),{type:'fade',duration: 400});
    //                 // Ext.Viewport.setMasked(false);
                    
    //                 main.push({
    //                     xtype: 'baselist',
    //                     // title: 'Регионални дирекции'
    //                 });

    //                 Ext.Viewport.setMasked(false);

    //             } else {
    //                 Ext.Viewport.setMasked(false);
    //                 Ext.Msg.alert('Събщение', 'Проверете връзката с интернет и рестартирайте приложението', Ext.emptyFn);
    //             }
    //         }   
    //     });  
    // }
});
