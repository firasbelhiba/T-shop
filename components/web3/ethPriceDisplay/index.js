export default function EthPriceDisplay({ eth }) {

  return (
    <div className="bg-white border-t border-b sm:border-l sm:border-r sm:rounded shadow mb-6">
      <div className="hidden lg:flex">
        <div className="w-1/2 text-center py-8">
          <div className="border-r">
            <div className="text-grey-darker mb-2">
              <span className="text-3xl align-top">$</span>
              <span className="text-5xl">{eth}</span>
            </div>
            <div className="text-sm uppercase text-grey tracking-wide">
              Current Ether Price 
            </div>
          </div>
        </div>
        <div className="w-1/2 text-center py-8">
          <div>
            <div className="text-grey-darker mb-2">
              <span className="text-3xl align-top">
                <span className="text-green align-top">DT</span>
              </span>
              <span className="text-5xl">{eth * 2.9}</span>
            </div>
            <div className="text-sm uppercase text-grey tracking-wide">
              Current Ether in Tunisian Dinar 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
