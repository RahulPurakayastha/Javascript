const NFTs = []

function mintNFT (_name, _eyeColor, _shirtType, _bling) {
   const NFT = {
"name": _name,
"eyeColor": _eyeColor,
"shirtType": _shirtType,
"bling": _bling
   }
   NFTs.push(NFT);
   console.log("Minted " + _name);
}

function listNFTs () {
for(let i=0 ; i < NFTs.length; i++){
    console.log("\nID : \t\t" + (i+1));
    console.log("Name: \t\t" + NFTs[i].name); 
    console.log("Eye Color : \t" + NFTs[i].eyeColor);
    console.log("Shirt Type : \t" + NFTs[i].shirtType);
    console.log("Bling : \t" + NFTs[i].bling);
}
}


function getTotalSupply() {
console.log("\n" + NFTs.length);
}


mintNFT("Rahul","Blue","Hoodie", "Gold Chain");
mintNFT("Avinash","Blue","Hoodie", "Gold Chain");
mintNFT("Sapna","Blue","Hoodie", "Gold Chain");
mintNFT("Suyash","Blue","Hoodie", "Gold Chain");
listNFTs();
getTotalSupply();
