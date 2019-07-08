import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Helper from '../helpers/local-storage-helpers';
import StarRatingComponent from 'react-star-rating-component';

export class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTypeScriptLover: '',
            typescriptLevel: 5,

            isFormSubmitted: false

        };


    }

    componentDidMount() {
        const user = Helper.read('user');

        if (!user) {
            return;
        }

        this.setState({
            isTypeScriptLover: user.isTypeScriptLover,
            typescriptLevel: user.typescriptLevel
        });

    }

    onChangeField_isTypeScriptLover() {
        console.log('onChangeField_isTypeScriptLover');
        this.setState({ isTypeScriptLover: !this.state.isTypeScriptLover });

    }

    onChangeField_typescriptLevel(va) {

        this.setState({ typescriptLevel: va });

    }

    onSubmit(evt) {
        evt.preventDefault();
        Helper.create('user', this.state);

        this.setState({ isFormSubmitted: true });

    }

    render() {
        const userId = this.props.match.params.NAZWA;
        return (<
            div >
            <
                h2 > Profil uzytkownika({
                    userId
                }) < /h2> <
                Link to = "/" > Back < /Link>

            {
                this.state.isFormSubmitted
            && <div className="alert alert-success">
                    Dziekujemy!
            </div>
            }
            <
                form onSubmit = {
                    (evt) => this.onSubmit(evt)
                }
                action = "/BrakStrony" >
                <
                    div className = "jumbotron" >
                    <
                        div className = "form-group form-check" >
                        <
                            label className = "form-check-label" >
                            <
                                input className = "form-check-input"
                                type = "checkbox"
                                value = "1"
                                checked = {
                                    this.state.isTypeScriptLover
                                }
                                name = "isTypeScriptLover"
                                onChange = {
                                    () => this.onChangeField_isTypeScriptLover()
                                }
                            />
      Czy preferujesz pisanie kodu w TypeScript ?
                        <
                        /label>

                    < /
                        div >

                    <StarRatingComponent
                        starCount={10}
                        name="typescriptLevel" /* name of the radio input, it is required */
                        value={this.state.typescriptLevel} /* number of selected icon (`0` - none, `1` - first) */
                        onStarClick={(value) => this.onChangeField_typescriptLevel(value)} /* number of icons in rating, default `5` */

                    />
                    <
                        div className = "form-group" >
                        <
                            input className = "btn btn-primary"
                            type = "submit"
                            value = "Zapisz" / >
                    <
                    /div> < /
                    div > <
            /form> < /
            div >
        );
    }

}
