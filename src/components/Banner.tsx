import Ticker from 'react-ticker'

export default function Banner() {
    <>
        <div>123</div>
        <Ticker>
            {({ index }) => (
                <>
                    <h1>This is the Headline of element #{index}!</h1>
                    <img src="www.my-image-source.com/" alt="" />
                </>
            )}
        </Ticker>
    </>
}
