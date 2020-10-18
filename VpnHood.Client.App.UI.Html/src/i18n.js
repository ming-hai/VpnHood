import Vue from 'vue'
import VueI18n from 'vue-i18n'
import langEn from 'vuetify/es5/locale/en'
Vue.use(VueI18n);


const messages = {
    en: {
        $vuetify: langEn,
        isRtl: "false",
        appName: "V",
        settings: "Settings",
        help: "Help",
        home: 'Home',
        version: "Version",
        connect: "Connect",
        connecting: "Connecting...",
        connected: "Connected",
        disconnect: "Disconnect",
        disconnected: "Disconnected",
        disconnecting: "Disconnecting...",
        addServer: "Add Server",
        addAcessKeyTitle: "Add acces key",
        addAcessKeySubtitle: "Copy and paste an access key to add a server.",
        invalidAccessKeyFormat: "accessKey has invalid format. make sure it starts with {prefix}",
        darkMode: "Dark Mode",
        clientProfile: "VPN Profile",
        clientProfileName: "Name",
        remove: "Delete",
        rename: "Rename",
        warning: "Warning",
        cancel: "Cancel",
        save: "Save",
        noname: "Server",
        confirmRemoveServer:"Do you really want to delete this item?"
    },
};

// Create VueI18n instance with options
export const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'en',
    messages, // set locale messages
});

export default i18n;