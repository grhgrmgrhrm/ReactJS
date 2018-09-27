import React from 'react';

export default class Articles extends React.Component {
    render() {
        let items = this.props.items.map((item, index) => {
            return (
                <div className="col-xs-4" key={index}>
                    <div className="thumbnail">
                        <img src={item.image} width="800" height="600" alt={item.title}/>
                        <div className="caption">
                            <h2>{item.title}</h2>
                            <p className="text-justify">{item.text}</p>
                            <p className="text-right"><i>Автор: {item.author}</i></p>
                            <div className="btn-group" role="group">
                                <button type="button" className="btn btn-default">Коммент.</button>
                                <button type="button" className="btn btn-default">Редак.</button>
                                <button type="button" className="btn btn-default">Удалить</button>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <div>
                {this.props.children}
                <div>
                    {items}
                </div>
            </div>
        );
    }
}