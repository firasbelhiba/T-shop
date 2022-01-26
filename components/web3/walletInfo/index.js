export default function WalletInfo({
  account,
  network,
  targetNetwork,
  isSupported,
}) {
  return (
    <div
      className="choseus_area"
      data-bgimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEqvWkYDkA2S5eJ-gK6sHsOabo58a8-VtLUQ&usqp=CAU"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-6">
            <div className="single_chose">
              <div className="chose_content">
                <h3>Hello,</h3>
                <p>{account}</p>
                <p>I hope you are having a great day!</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single_chose chose3">
              {!isSupported && (
                <div className="bg-red-400 p-4 rounded-lg">
                  <div>Connected to the wrong network</div>
                  <div>
                    Connect to : {``}
                    {targetNetwork}
                  </div>
                </div>
              )}
              <div className="chose_content">
                <span>Currently on </span>
                <strong className="text-2xl">{network}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
