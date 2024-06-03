"use strict";(self.webpackChunklearning_center=self.webpackChunklearning_center||[]).push([[8312],{68321:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var o=n(85893),r=n(11151);const t={},s="Connettori personalizzati",a={id:"power-apps/integration/custom_connector",title:"Connettori personalizzati",description:"I connettori semplificano la connessione di app e flow maker ad altre app, dati e dispositivi nel cloud nei seguenti modi:",source:"@site/docs/power-apps/integration/01-custom_connector.md",sourceDirName:"power-apps/integration",slug:"/power-apps/integration/custom_connector",permalink:"/learning-center/docs/power-apps/integration/custom_connector",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"powerAppsSidebar",previous:{title:"Integrazione di Teams",permalink:"/learning-center/docs/power-apps/integration/integrate-teams"},next:{title:"Integrazione con Power Automate",permalink:"/learning-center/docs/power-apps/integration/integrate-power_automate"}},l={},c=[{value:"Identificare o creare l&#39;API",id:"identificare-o-creare-lapi",level:2},{value:"Descrivere l&#39;API",id:"descrivere-lapi",level:2},{value:"Connettori personalizzati",id:"connettori-personalizzati-1",level:3},{value:"Utilizza un connettore personalzzato",id:"utilizza-un-connettore-personalzzato",level:2},{value:"Link",id:"link",level:2}];function p(e){const i={a:"a",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.h1,{id:"connettori-personalizzati",children:"Connettori personalizzati"}),"\n",(0,o.jsxs)(i.p,{children:["I ",(0,o.jsx)(i.strong,{children:"connettori"})," semplificano la ",(0,o.jsx)(i.strong,{children:"connessione di app"})," e ",(0,o.jsx)(i.strong,{children:"flow maker"})," ad altre app, dati e dispositivi nel cloud nei seguenti modi:"]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsx)(i.p,{children:"La connessione viene eseguita in un modo coerente e ripetibile che pu\xf2 essere rilevato dai produttori."}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsx)(i.p,{children:"I connettori hanno azioni che consentono ai produttori di controllare quando viene eseguita un'operazione."}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsx)(i.p,{children:"I connettori possono avere trigger che consentono l'avvio dell'automazione quando si verifica l'evento di attivazione."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.img,{alt:"Connector",src:n(73763).Z+"",width:"496",height:"349"})}),"\n",(0,o.jsxs)(i.p,{children:["Un connettore \xe8 un ",(0,o.jsx)(i.strong,{children:"proxy"}),", o ",(0,o.jsx)(i.strong,{children:"wrapper"}),", ",(0,o.jsx)(i.strong,{children:"attorno a un'API"})," che consente a Power Automate, Power Apps e App per la logica di ",(0,o.jsx)(i.strong,{children:"comunicare con il servizio sottostante"}),". Molti connettori sono predefiniti e disponibili per l'uso senza che tu debba definire nulla. Queste definizioni di connettore integrate includono servizi di Microsoft e altri. Quando il servizio o l'API che desideri utilizzare non dispone di un connettore predefinito, puoi creare il tuo connettore personalizzato."]}),"\n",(0,o.jsx)(i.h2,{id:"identificare-o-creare-lapi",children:"Identificare o creare l'API"}),"\n",(0,o.jsxs)(i.p,{children:["La prima attivit\xe0 \xe8 verificare il ",(0,o.jsx)(i.strong,{children:"riferimento al connettore"})," per determinare se esiste gi\xe0 un connettore adatto per l'API/servizio. Se non esiste gi\xe0 un connettore adatto, puoi creare il tuo connettore personalizzato. Puoi definire il connettore personalizzato per descrivere qualsiasi API REST pubblica (disponibile su Internet) o privata (solo sulla rete interna). Le API private richiedono il ",(0,o.jsx)(i.strong,{children:"gateway dati locale"})," per accedere alle risorse interne."]}),"\n",(0,o.jsxs)(i.p,{children:["Se non esiste gi\xe0 un'API compatibile, gli sviluppatori possono crearne una utilizzando qualsiasi tecnologia preferita in grado di ospitare un'API REST, incluse ",(0,o.jsx)(i.strong,{children:"Funzioni di Microsoft Azure"})," e ",(0,o.jsx)(i.strong,{children:"Servizi app di Azure"}),". \xc8 anche possibile usare ",(0,o.jsx)(i.strong,{children:"Gestione API di Azure"})," per aumentare la gestibilit\xe0 e la governance delle API."]}),"\n",(0,o.jsx)(i.h2,{id:"descrivere-lapi",children:"Descrivere l'API"}),"\n",(0,o.jsxs)(i.p,{children:["Affinch\xe9 Power Apps e Power Automate possano scoprire quali ",(0,o.jsx)(i.strong,{children:"trigger"})," e ",(0,o.jsx)(i.strong,{children:"azioni"})," sono ",(0,o.jsx)(i.strong,{children:"disponibili"})," dall'API, devi ",(0,o.jsx)(i.strong,{children:"identificarli"})," quando ",(0,o.jsx)(i.strong,{children:"crei il connettore personalizzato"}),". Puoi eseguire questa attivit\xe0 modificando manualmente la definizione del connettore nel portale del produttore o importando una definizione in un formato supportato. Questo processo include l'identificazione dei requisiti di autenticazione per l'API."]}),"\n",(0,o.jsx)(i.h3,{id:"connettori-personalizzati-1",children:"Connettori personalizzati"}),"\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.strong,{children:"Esercizio proposto"})," : ",(0,o.jsx)(i.a,{href:"https://learn.microsoft.com/en-us/training/modules/get-started-custom-connector/4-build",children:"Esercizio: Creare un nuovo connettore in una soluzione"})]}),"\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.strong,{children:"Obiettivo"}),": In questo esercizio creerai il tuo primo connettore personalizzato per un'API esistente denominata Contoso Invoicing."]}),"\n",(0,o.jsx)(i.h2,{id:"utilizza-un-connettore-personalzzato",children:"Utilizza un connettore personalzzato"}),"\n",(0,o.jsxs)(i.p,{children:["I connettori personalizzati possono essere usati da Power Apps, Power Automate e App per la logica di Azure. Dopo aver selezionato un connettore personalizzato, utilizzarlo non \xe8 diverso dall'utilizzare un connettore integrato. Per utilizzare il connettore personalizzato con Power Apps e Power Automate, devi ",(0,o.jsx)(i.strong,{children:"configurarlo"})," o ",(0,o.jsx)(i.strong,{children:"distribuirlo"})," nello ",(0,o.jsx)(i.strong,{children:"stesso ambiente"})," in cui stai creando le ",(0,o.jsx)(i.strong,{children:"tue app"})," e i tuoi flussi. Se sai che si tratta di un connettore personalizzato, il modo pi\xf9 rapido per aggiungere trigger o azioni da esso \xe8 selezionare la scheda Personalizzato perch\xe9 mostrer\xe0 solo i connettori personalizzati nell'ambiente. Dall'ambiente puoi selezionare trigger e azioni come faresti con un connettore integrato."]}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.img,{alt:"Custom Action",src:n(33225).Z+"",width:"767",height:"518"})}),"\n",(0,o.jsx)(i.p,{children:"Assicurati che le azioni e i trigger del connettore personalizzato dispongano di un riepilogo descrittivo in modo che gli utenti possano trovarlo pi\xf9 facilmente con la funzione di ricerca."}),"\n",(0,o.jsxs)(i.p,{children:["La ",(0,o.jsx)(i.strong,{children:"prima volta"})," che utilizzi il connettore personalizzato nell'app o nel flusso, ti verr\xe0 richiesto di ",(0,o.jsx)(i.strong,{children:"fornire la chiave o le credenziali dell'app"}),", a seconda del tipo di autenticazione del connettore. Questa azione stabilir\xe0 una connessione con il connettore che potr\xe0 essere riutilizzata se si utilizza nuovamente il connettore nello stesso ambiente."]}),"\n",(0,o.jsx)(i.p,{children:"Se desideri utilizzare il connettore personalizzato in altri ambienti, assicurati di distribuire o configurare il connettore personalizzato in ciascuno di tali ambienti. Un esempio comune di questo scenario sarebbe avere un set di ambienti di sviluppo, test e produzione per il tuo progetto."}),"\n",(0,o.jsx)(i.p,{children:"Puoi scegliere tra le seguenti opzioni per distribuire il connettore personalizzato in ciascuno degli ambienti:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.strong,{children:"Download e importazione"}),": dall'elenco dei connettori personalizzati \xe8 possibile selezionare l'icona di download e quindi scaricare la definizione API aperta."]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.strong,{children:"Soluzioni"}),": i connettori personalizzati creati nel contesto di una soluzione, come il connettore creato nell'esercizio precedente, possono essere esportati e importati in un altro ambiente per il riutilizzo. Dopo l'importazione della soluzione non \xe8 necessaria alcuna configurazione aggiuntiva del connettore."]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.strong,{children:"Riga di comando"}),": utilizzando l'interfaccia della riga di comando (CLI) dei connettori Microsoft Power Platform, puoi anche scaricare e importare le definizioni dei connettori personalizzati. Per ulteriori informazioni, consulta CLI dei connettori Microsoft Power Platform."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:"Per usare lo stesso connettore personalizzato per un'app in App per la logica di Azure, assicurarsi di ricreare il connettore nella sottoscrizione di Azure. Questa attivit\xe0 pu\xf2 essere eseguita utilizzando il download o l'approccio dell'interfaccia della riga di comando menzionato in precedenza. Durante il processo di creazione della connessione personalizzata di App per la logica di Azure, ti verr\xe0 richiesto di importare il file OpenAPI scaricato. Dopo aver configurato il connettore personalizzato, \xe8 possibile usarlo in App per la logica di Azure nello stesso modo in cui lo utilizzeresti in Power Apps o Power Automate."}),"\n",(0,o.jsxs)(i.p,{children:["E' possibile ",(0,o.jsx)(i.strong,{children:"creare connettori personalizzati"})," per ",(0,o.jsx)(i.strong,{children:"integrare app Canvas"})," o ",(0,o.jsx)(i.strong,{children:"Model-Driven Apps"})," con altre applicazioni non Microsoft. In ",(0,o.jsx)(i.strong,{children:"Microsoft Power Platform"}),", puoi ",(0,o.jsx)(i.strong,{children:"utilizzare Power Automate"})," per ",(0,o.jsx)(i.strong,{children:"creare flussi"})," di lavoro che ",(0,o.jsx)(i.strong,{children:"connettono diverse applicazioni"})," e ",(0,o.jsx)(i.strong,{children:"servizi"}),". Puoi anche creare connettori personalizzati utilizzando Azure Logic Apps."]}),"\n",(0,o.jsx)(i.p,{children:"Ecco una breve panoramica di come puoi procedere:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:["Vai su ",(0,o.jsx)(i.strong,{children:"Power Automate"})," (",(0,o.jsx)(i.a,{href:"https://flow.microsoft.com/",children:"https://flow.microsoft.com/"}),") e crea un nuovo flusso.\nPuoi utilizzare i connettori esistenti per molte applicazioni popolari.\nSe non trovi un connettore per l'app specifica che desideri integrare, puoi comunque usare azioni personalizzate come l'invio di richieste HTTP per comunicare con API di terze parti.\nAzure Logic Apps:"]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:["Vai su ",(0,o.jsx)(i.strong,{children:"Azure Portal"})," (",(0,o.jsx)(i.a,{href:"https://portal.azure.com/",children:"https://portal.azure.com/"}),") e crea una nuova Azure Logic App.\nIn Azure Logic Apps, puoi utilizzare diversi connettori predefiniti, ma puoi anche creare i tuoi connettori personalizzati utilizzando Azure Functions o API Web App.\nPuoi scrivere codice personalizzato per gestire l'integrazione con le API delle applicazioni non Microsoft.\nConnessione con API:"]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:["Se l'applicazione esterna fornisce un'API, puoi creare connettori personalizzati che utilizzano l'azione \"",(0,o.jsx)(i.strong,{children:"Richiesta HTTP"}),'" nei flussi di Power Automate o mediante il codice personalizzato in Azure Logic Apps.\nPower Apps:']}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"link",children:"Link"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.a,{href:"https://learn.microsoft.com/en-us/training/modules/get-started-custom-connector/1-introduction",children:"Inizia con i connettori personalizzati"})}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.a,{href:"https://learn.microsoft.com/en-us/training/modules/get-started-custom-connector/5-use",children:"Utilizzare connettore"})}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},33225:(e,i,n)=>{n.d(i,{Z:()=>o});const o=n.p+"assets/images/custom-action-6eb6894874bb8a3e8bab910011268aa7.png"},73763:(e,i,n)=>{n.d(i,{Z:()=>o});const o=n.p+"assets/images/target-7987d522fb68dfc658e46e2513c8a8e7.png"},11151:(e,i,n)=>{n.d(i,{Z:()=>a,a:()=>s});var o=n(67294);const r={},t=o.createContext(r);function s(e){const i=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(t.Provider,{value:i},e.children)}}}]);