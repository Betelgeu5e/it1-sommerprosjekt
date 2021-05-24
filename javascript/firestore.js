var firebaseConfig = {
    apiKey: "AIzaSyAndxEg1xOdqlT_4kL90aHJA52HqwTpY5M",
    authDomain: "sommer-2021-witcher.firebaseapp.com",
    projectId: "sommer-2021-witcher",
    storageBucket: "sommer-2021-witcher.appspot.com",
    messagingSenderId: "91070607446",
    appId: "1:91070607446:web:c43dafbd4be22839518bf7"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const hentHeleKolleksjonen = async (kolleksjonId, lagElementFunksjon, klassifiseringsform, klassifiseringssammenheng, klassifiseringsverdi) => {
    const kolleksjon = db.collection(kolleksjonId);
    let svar;
    if (klassifiseringsform && klassifiseringsverdi) {
        svar = await kolleksjon.where(klassifiseringsform, klassifiseringssammenheng, klassifiseringsverdi).orderBy(getOption('sorteringstype'), getOption('sorter-ny-gammel')).get();
    } else {
        svar = await kolleksjon.orderBy(getOption('sorteringstype'), getOption('sorter-ny-gammel')).get();
    }
    svar.forEach(dok => {
        lagElementFunksjon(dok.id, dok.data());
    });
}

const hentDokument = async (kolleksjonId, id, lagElementFunksjon) => {
    const kolleksjon = db.collection(kolleksjonId);
    const svar = await kolleksjon.doc(id).get();
    lagElementFunksjon(svar.data());
}