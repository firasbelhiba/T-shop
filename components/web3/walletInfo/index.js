import { useWeb3 } from "@components/providers";
import { useEffect } from "react";

export default function WalletInfo({
  account,
  network,
  targetNetwork,
  isSupported,
  isLoading,
  web3,
}) {
  const { requireInstallMetamask } = useWeb3();

  useEffect(() => {
    if (requireInstallMetamask) {
      Swal.fire({
        title: "<strong>Are you connected ?</strong>",
        icon: "info",
        html:
          "<b>Metamask</b>, is not installed on your browser , please  " +
          '<a href="https://metamask.io" target="_blank"><u>install it</u></a> ' +
          "so you can connect your wallet and purchase merch .",
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: "Thumbs up, great!",
      });
    }
  }, []);
  
  return (
    <div
      className="choseus_area"
      style={{
        backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEqvWkYDkA2S5eJ-gK6sHsOabo58a8-VtLUQ&usqp=CAU")`,
      }}
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
              {!isLoading && !isSupported && (
                <div className="bg-red-400 p-4 rounded-lg">
                  <div>Connected to the wrong network</div>
                  <div>
                    Connect to : {``}
                    {targetNetwork}
                  </div>
                </div>
              )}
              {requireInstallMetamask && <div></div>}
              <div className="chose_content">
                <span>
                  {web3
                    ? "Currently on  "
                    : "You are not connected , Please intall Metamask and connect you wallet on the Ropsten network "}
                </span>
                <strong className="text-2xl">{web3 && network}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
