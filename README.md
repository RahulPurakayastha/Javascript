# Javascript_Assesment
This code demonstrates a simple implementation of a non-fungible token (NFT) system using JavaScript. Here's a brief explanation of its key elements:

The code initializes an empty array called NFTs to hold the NFT objects.

The mintNFT function takes in several parameters (_name, _eyeColor, _shirtType, _bling) representing the metadata of an NFT. It creates an NFT object using the provided parameters and stores it in the NFTs array by pushing it. Additionally, it logs a message to the console indicating that an NFT has been minted.

The listNFTs function iterates through the NFTs array using a loop and prints the metadata of each NFT object to the console. It displays the ID (index + 1), name, eye color, shirt type, and bling properties of each NFT.

The getTotalSupply function simply logs the total number of NFTs minted (i.e., the length of the NFTs array) to the console.

Finally, the code calls the mintNFT function four times with different parameters to create four NFTs. Then, it calls the listNFTs function to display the metadata of all the minted NFTs, and the getTotalSupply function to print the total count of minted NFTs.

In summary, this code allows you to mint NFTs by creating NFT objects with specified metadata, store them in an array, list the metadata of all minted NFTs, and retrieve the total count of minted NFTs.
