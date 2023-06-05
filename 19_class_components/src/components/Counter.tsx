import React from "react";

// описываем interface state компонента
interface ICounterState {
    count: number,
    // title: string
}

interface ICounterProps {
    initialValue: number
}

// создали и типизировали классовый компонент
// классовый компонент - альтернатива для работы с компонентами функциональному компоненту
// имеет больше возможностей, но более ресурсозатратный для приложения
class Counter extends React.Component<{initialValue: number}, ICounterState> {
    // в классовом компоненте обязательно прописывается конструктор, который позволяет в дальнейшем
    // работать с props (данными, полученными от родительского компонента)
    constructor(props: ICounterProps) {
        super(props);
        // создали состояние компонента, в котором хранятся ключевые данные, за изменениями которых
        // react необходимо следить
        this.state = {
            count: props.initialValue,
            // title: ''
        }
    }

    decrement = (): void => {
        // изменять state можно только с помощью метода setState()  (!!!)
        this.setState(prev => ({ // перед первым кликом prev = {count: 0}
            count: prev.count - 1
        }))

        // НЕКОРРЕКТНАЯ запись. Нельзя изменять state напрямую (!!!)
        // this.state = {
        //     count: this.state.count - 1
        // }
    }

    increment = (): void => {
        this.setState(prev => ({count: prev.count + 1}))
    }

    // componentDidMount() будет запущен, когда компонет будет смонтирован (помещён в dom дерево)
    componentDidMount(): void {
        console.log('Компонент смонтирован');
    }

    // componentDidUpdate() будет запущен, когда компонет будет обновлён
    // (например, с помощью хука useState())
    componentDidUpdate(prevProps: Readonly<{ initialValue: number; }>, prevState: Readonly<ICounterState>, snapshot?: any): void {
        console.log('Компонент обновлён');       
    }

    // componentWillUnmount() будет запущен, перед размонтированием (удалением из DOM дерева)
    componentWillUnmount(): void {
        console.log('Компонент будет удалён');
    }

    // в методе render(), после ключевого слова return начинается JSX синтаксис, где мы описываем
    // вёрстку компонента (полный аналог того, что в FC пишется после ключевого слова return)
    render() {
        return (
            <>
                <h2>Counter App</h2>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <span>{this.state.count}</span>
                    <button onClick={this.increment} >+</button>
                </div>
            </>
        );
    }
}

export default Counter;