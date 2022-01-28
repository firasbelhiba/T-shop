export default function EthPriceDisplay({ eth }) {

  return (
    <div class="bg-white border-t border-b sm:border-l sm:border-r sm:rounded shadow mb-6">
      <div class="hidden lg:flex">
        <div class="w-1/2 text-center py-8">
          <div class="border-r">
            <div class="text-grey-darker mb-2">
              <span class="text-3xl align-top">$</span>
              <span class="text-5xl">{eth}</span>
            </div>
            <div class="text-sm uppercase text-grey tracking-wide">
              Ether Price 
            </div>
          </div>
        </div>
        <div class="w-1/2 text-center py-8">
          <div>
            <div class="text-grey-darker mb-2">
              <span class="text-3xl align-top">
                <span class="text-green align-top">DT</span>
              </span>
              <span class="text-5xl">{eth * 2.9}</span>
            </div>
            <div class="text-sm uppercase text-grey tracking-wide">
              Ether in Tunisian Dinar 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
