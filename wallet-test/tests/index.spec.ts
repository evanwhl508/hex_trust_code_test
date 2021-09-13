//********************************************************************************
// Part 2 : Tests
//
// * Describe your process to tests some of the functions and properties above
// * It can either be code, or just commented explanations on the testing procedure
//   (what, how, ..)
//********************************************************************************

// 1. Test the available() api
// get available coins via http call
// get available coins from db directly
// i) check http status code of the api call, 200 is prefered.
// ii) compare the two results and see if they are the same, e.g. the number of records, the value of each coin

// 2. Test the add() api
// using POST to add a coin via http call
// i) check the http code, 200 or 201 is prefered
// ii) do a SELECT query from db to check whether the record is successfully added. 
//     Or in this case, jsut check the length of the Wallet.coins. And check the if the value is the same to the input value
// 

// 3. Test distribution() api
// i) call the api by using different scale.
// ii) go through all buckets and check whether the coins are correctly seperated by the power of scale.

// 4. Test the spend() api
// i) get the available coins first.
// ii) call the spend() api by using different amount.
// iii) get the available coins again.
// iv) compare and check how many coins is deleted. And whether the sum of deleted coins is the closest to the requred amount.

// 5. Test the reservation() api
// i) same as the test of spend(), get the initial coins and the final coins after reservation()
//    and do the same checking
// ii) check the frozenCoins, make sure the reserved coins have the closest amount to the required amount
// iii) make the verification success and check whether the coins in frozenCoins are deleted.
// iv) repeat the step of i) and ii), then make the verification fail. 
//     And check whether the coins in frozenCoins are succefully returned to the available coins