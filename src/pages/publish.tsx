import 'moment'
import moment from 'moment'
import { useReducer, useState } from 'react'
import shortNumber from 'short-number'
import useSWR from 'swr'
import ContractPicker from '../components/ContractTools/ContractPicker'

export default function Publish() {

    const initialState = {
        expiration: moment().add(2, 'hours').format(),
        duration: {
            interval: 2,
            unit: 'hours'
        },
        price: 100,
        supply: 100
    };

    function reducer(state, action) {
        switch (action.type) {
            case 'SET_FIELD':
                return {
                    ...state,
                    [action.field]: action.payload
                };
            case 'SET_PRICE':
                return {
                    ...state,
                    price: Number(action.payload)
                };
            case 'SET_SUPPLY':
                return {
                    ...state,
                    supply: Number(action.payload)
                };
            case 'SET_EXPIRE_DATE':
                return {
                    ...state,
                    expiration: state.expiration
                }
            case 'SET_DURATION_INTERVAL':
                state.duration.interval = action.payload > 9999 ? 9999 : action.payload
                return {
                    ...state,
                    expiration: moment().add(state.duration.interval, state.duration.unit).format()
                }
            case 'SET_DURATION_UNIT':
                state.duration.unit = action.payload
                return {
                    ...state,
                    expiration: moment().add(state.duration.interval, state.duration.unit).format()
                }
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    const { data } = useSWR('https://api.coingecko.com/api/v3/simple/price?ids=fantom&vs_currencies=usd')
    const fantomPrice = 0.00 || data?.fantom?.usd

    return <>
        {/* <ContractSelector /> */}
        {/* <ContractCreator /> */}

        <div className="max-w-screen-2xl mx-auto p-12 py-24 space-y-24">

            <div className='max-w-3xl space-y-6 mx-auto'>
                <p className='text-5xl md:text-7xl font-extrabold'>Publish your work.</p>
                <p className='text-2xl opacity-50'>Adipisicing consequat et consequat est culpa incididunt Lorem nulla minim. Laboris velit aute est magna consequat. Consectetur cillum aliquip consectetur dolor magna tempor. Dolor voluptate eu dolor veniam sunt quis qui mollit non officia.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-12">


                <div className='flex-1 space-y-12'>
                    <button className="w-full flex flex-col items-center space-y-6 bg-zinc-100 border-dotted border-8 rounded-2xl p-12 py-24">
                        <i className="fas fa-upload text-4xl text-zinc-400"></i>
                        <span className="text-4xl text-zinc-400 font-extrabold">Upload a File</span>
                    </button>
                </div>

                <div className='md:max-w-md w-full space-y-6'>
                    <div className="space-y-2">
                        <p className="font-extrabold">Name</p>
                        <input value={state.name} onChange={e => dispatch({ type: 'SET_FIELD', field: 'name', payload: e.target.value })} placeholder="Consequat Veniam" className="w-full border rounded text-xl p-2" type="text" />
                    </div>
                    <div className="space-y-2">
                        <p className="font-extrabold">Description</p>
                        <textarea value={state.description} onChange={e => dispatch({ type: 'SET_FIELD', field: 'description', payload: e.target.value })} placeholder="Lorem laborum laboris cillum nostrud amet pariatur labore laborum dolor. Pariatur occaecat nisi officia in." className="w-full border rounded text-xl p-2 h-36" />
                    </div>
                    <div className="flex gap-6">
                        <div className="space-y-2">
                            <p className="font-extrabold">Price</p>
                            <input value={state.price} onChange={e => dispatch({ type: 'SET_PRICE', payload: e.target.value })} placeholder="100" className="w-full border rounded text-xl p-2" type="number" />
                            <p className='opacity-50'>Your artwork will be available for {state.price ? <>${shortNumber((fantomPrice * state.price))} in FTM</> : 'free'}.</p>
                        </div>
                        <div className="space-y-2">
                            <p className="font-extrabold">Supply</p>
                            <input value={state.supply} onChange={e => dispatch({ type: 'SET_SUPPLY', payload: e.target.value })} placeholder="100" className="w-full border rounded text-xl p-2" type="number" />
                            <p className='opacity-50'>{state.supply || 'Unlimited'} editions will be available for minting.</p>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className='flex'>
                            <p className="font-extrabold">Duration</p>
                            <div className="flex-1"></div>
                        </div>
                        <div className='flex gap-2'>
                            <input value={state.duration.interval} onChange={e => dispatch({ type: 'SET_DURATION_INTERVAL', payload: e.target.value })} placeholder="100" className="w-full border rounded text-xl p-2" type="number" />
                            <select value={state.duration.unit} onChange={e => dispatch({ type: 'SET_DURATION_UNIT', payload: e.target.value })} placeholder="100" className="border rounded text-xl p-2">
                                <option value="minutes">mins</option>
                                <option value="hours">hrs</option>
                                <option value="days">days</option>
                            </select>
                        </div>
                        <p className='opacity-50'>The mint will expire at {moment(state.expiration).format('MMM Do, YYYY [at] hh:mm A')}.</p>

                        {/* <p className='opacity-50'>{state.expiration}</p> */}
                    </div>


                    <div className="space-y-2">
                        <p className="font-extrabold">Contract</p>
                        <ContractPicker
                            value={state.contract}
                            onChange={data => dispatch({ type: 'SET_FIELD', field: 'contract', payload: data })}
                        />
                    </div>
                </div>
            </div>
        </div>
    </>
}