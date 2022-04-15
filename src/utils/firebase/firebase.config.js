import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";

import {
	getFirestore,
	doc,
	setDoc,
	getDoc,
	collection,
	writeBatch,
	query,
	getDocs,
} from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDrmjTJHBvc_7qM6OOQWSfHAtQ3gQ5Jj7w",
	authDomain: "crwn-clothv2.firebaseapp.com",
	projectId: "crwn-clothv2",
	storageBucket: "crwn-clothv2.appspot.com",
	messagingSenderId: "1084095353723",
	appId: "1:1084095353723:web:e042ddca5089ba107f63de",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: "select_account",
});

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const createUserDocumenetFromAuth = async userAuth => {
	if (!userAuth) return;

	const userDocRef = doc(store, "users", userAuth.uid);
	const data = await getDoc(userDocRef);
	if (!data.exists()) {
		const createdAt = new Date();
		try {
			await setDoc(userDocRef, { ...userAuth, createdAt });
		} catch (e) {
			console.log(e.message);
		}
	}

	return userDocRef;
};

export const createUserAuthWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
	return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserAuthWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
	return await signInWithEmailAndPassword(auth, email, password);
};

export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
	const collectionRef = collection(store, collectionKey);
	const batch = writeBatch(store);

	objectToAdd.forEach(product => {
		const docRef = doc(collectionRef, product.title.toLowerCase());
		batch.set(docRef, product);
	});

	await batch.commit();

	console.log("done!");
};

export const getCollectionAndDocuments = async () => {
	const collectionRef = collection(store, "products");

	const getQuery = query(collectionRef);

	const response = await getDocs(getQuery);

	return response.docs.reduce((acc, val) => {
		const { title, items } = val.data();

		acc[title.toLowerCase()] = items;
		return acc;
	}, {});
};
