import moment from 'moment';

export default [{
    id: '1',
    description: 'gum',
    note: '',
    amount: 195,
    createdAt: 0
}, {
    id: '2',
    description: 'rent',
    note: '',
    amount: 2999,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'credit card',
    note: '',
    amount: 391,
    createdAt: moment().add(4, 'days').valueOf()
}];