# Task
COVIDPunks is one of hottest NFT tokens on Ethereum. Your task is to implement a web app to display the first hundred tokens of COVIDPunks (ie. token id: 1 - 100) on a page. For each token, the app should be able to display its owner address at least; more points will be awarded if you can display the image for each token :-) (hint: find the image link through tokenURI).
• COVIDPunks Contract Address on Ethereum:
0xe4cfae3aa41115cb94cff39bb5dbae8bd0ea9d41


## **Before Running**
You will need to create/add a `.env` file in the server folder. This will need to include the Infura key. Please see .env.example 
## Available Scripts

In the project directory, you can run:
### `npm start`

Runs both server and client in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
Server will be running on [http://localhost:5000](http://localhost:5000)

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test-client`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run test-server`

Nothing to see here 👀

## Notes

This was a fun task! Have not used Web3 before but its exciting to see the contract and the methods and utils available
I use styled-components day to day but extended myself to try and use Mui as I believe this is what your team uses.
I also had to brush off the dust of my server side code as have not worked with it for a while 😊

## Improvements
* Further UI improvements
  * Have a select/dropdown to select project/contract rather than hard coding
  * Loading component which perhaps allowed you to continue to view existing data whilst waiting for more
  * Better/correct error handling
* Would prefer to use GQL and have the server be able to provide all data attributes then utilise GQL to only get the necessary data
* More tests - incluse more testing for all components, as well as loading and error states
* Server tests - Didn't get around to this but would ensure returning data is the expected model as well as types