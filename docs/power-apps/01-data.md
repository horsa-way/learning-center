
# Sorgente Dati

Usando Power Apps è possibile creare rapidamente app aziandali personalizzate che si connettono ai dati archiviati nella piattaforma di dati sottostante (Microsoft Dataverse) o in varie origini dati online e locali ad esempio, SharePoint, Microsoft 365, Dynamics 365, SQL Server e così via. 
Le origini dati possono essere connesse a un servizio cloud oppure possono essere locali per un'app.

### Origini dati connesse

Le origini dati in Power Apps sono come i posti da cui prendiamo le informazioni per le nostre applicazioni. Le **tabelle** sono come **fogli di lavoro o elenchi** in cui vengono **conservati i dati**. Posiamo collegare le nostre app Power Apps a varie fonti di dati come Excel, Microsoft Lists, SharePoint, SQL e altri ancora. Questi dati possono essere conservati su servizi cloud come OneDrive, Dropbox o SQL Server.

Immagina le tabelle come fogli di carta su cui scriviamo numeri o parole. Alcune di queste tabelle vivono dentro l'app stessa (come appunti che abbiamo in testa), mentre altre sono conservate in un luogo speciale chiamato origine dati. Le **tabelle interne** sono come i **nostri appunti personali**, non salvati da nessuna parte, solo nella nostra mente (o memoria dell'app). Le **tabelle esterne** sono come **fogli di carta** che **conserviamo** in una cartella, un luogo dove possiamo **guardarli e condividerli con gli altri** in un secondo momento.

Power Apps ci dà la possibilità di collegarci a queste tabelle esterne attraverso "connessioni". Le **connessioni** ci permettono di **leggere e scrivere dati** in queste tabelle. Ogni connessione può connettersi a più tabelle di informazioni. Possiamo scegliere quali tabelle usare nelle nostre app, e ogni app diventa come una sua origine dati separata, pronta a ricevere e inviare informazioni.

### Aggiungere un'origine dati

Power Apps non può essere usato per creare un'origine dati connessa o per modificarne la struttura. L'origine dati deve esistere già nel servizio. Come si può aggiungere un'origine dati?

1. Creare **un'app canvas da modello vuoto**

1. Dal **menu di creazione delle app** in Studio di Power Apps, seleziona **Dati** > **Aggiungi dati**.

1. Espandi **Connettori** e se l'elenco delle connessioni comprende quella che vuoi usare, allora selezionala e aggiungila all'app. In caso contrario, vai avanti. Per connetterti quindi, a questo punto bisogna scegliere una tabella dall'elenco delle tabelle. 

1. Per creare una nuova connessione, cerca o seleziona un connettore come SharePoint. 

1. Seleziona **Aggiungi una connessione** per creare la connessione e aggiungerla all'app.

Alcuni connettori, ad esempio **Office 365 Outlook**, non necessitano di altri passaggi e puoi visualizzarne i dati immediatamente. Altri richiedono di fornire credenziali, di specificare un particolare set di dati o di eseguire altri passaggi. Ad esempio, SharePoint e SQL Server richiedono informazioni aggiuntive prima di poter essere usati. Con Dataverse, puoi modificare l'ambiente prima di selezionare una tabella.



## Link

- [Power Apps: come configurare una connessione ad una origine dati](https://appin5minuti.it/power-apps-come-configurare-una-connessione-ad-una-origine-dati/)

- [Aggiunta connessione dati](https://learn.microsoft.com/it-it/power-apps/maker/canvas-apps/add-data-connection)

- [Overview Power Apps](https://learn.microsoft.com/it-it/power-apps/powerapps-overview)

