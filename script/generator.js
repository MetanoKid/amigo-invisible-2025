/*
Instrucciones:

- Poner los nombres de todos los participantes.
- Poner los nombres de los directorios que servirán como el final de la URL.
- Copiar todo en la consola de la Dev Tools de Chrome.
- Editar los directorios y los nombres como se describe en el output.

*/

let participants = [
	"Carlos",
	"Arantxa",
	"Juan Manuel",
	"Raquel",
	"Adrián",
	"Susana",
	"Samuel",
	"Sole",
	"Antonio"
];

let hashes = [
	"hacia-belen",
	"va-una-burra",
	"rin-rin",
	"yo-me-remendaba",
	"yo-me-remende",
	"yo-me-eche",
	"un-remiendo",
	"yo-me-lo-quite",
	"cargada-de-chocolate"
];

// -----------------------------------------

let hashToParticipant = {};
let hashToReceiver = {};

let remainingPeopleToBeMatched = participants.slice();
let remainingPeopleToReceiveGift = participants.slice();
let remainingHashesToBeAssigned = hashes.slice();
while(remainingPeopleToBeMatched.length > 0) {
	let participant = remainingPeopleToBeMatched[0];

	let receiver = undefined;
	let receiverIndex = undefined;
	do {
		receiverIndex = Math.floor(Math.random() * remainingPeopleToReceiveGift.length);
		receiver = remainingPeopleToReceiveGift[receiverIndex];
	} while(receiver === participant);

	let hashIndex = Math.floor(Math.random() * remainingHashesToBeAssigned.length);
	let hash = remainingHashesToBeAssigned[hashIndex];

	hashToParticipant[participant] = hash;
	hashToReceiver[hash] = receiver;

	remainingPeopleToBeMatched.splice(0, 1);
	remainingPeopleToReceiveGift.splice(receiverIndex, 1);
	remainingHashesToBeAssigned.splice(hashIndex, 1);
}

console.log("Hash a mandar por cada participante:", hashToParticipant);
console.log("Hash para cada directorio y nombre que poner en su fichero:", hashToReceiver);