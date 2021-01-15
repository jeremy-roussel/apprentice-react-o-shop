import React, {useState} from 'react';
import { useDispatch } from 'react-redux';

import InputField from '../components/InputField/InputField';
import { formFields } from '../utils/constants';
import addProductActions from '../store/addProduct/addProductActions';

function NewProduct() {

    const dispatch = useDispatch();

    const initialProductValues = {
        title: '',
        price: '',
        category: '',
        imageURL: '',
    }

    const [productValues, setProductValues] = useState(initialProductValues);

    const [productFormSubmitted, setProductFormSubmitted] = useState(false);

    const { title, price, category, imageURL } = productValues;

    const submitProductForm = (event) => {
        event.preventDefault();
        setProductFormSubmitted(true);

        const product = {...productValues}
            
        dispatch(addProductActions.addProduct(product))
        setProductValues(initialProductValues)

    };

    const updateProductValues = (event) => {
        const {name, value} = event.target;
        setProductValues((productValues) => ({...productValues, [name]: value}))
    };

    const inputFieldList = [];

    formFields.forEach(inputObject => {
        if (inputObject.addProduct){
            var referenceVariable;
            switch (inputObject.name) {
                case "title":
                    referenceVariable = title
                    break;
                case "price":
                    referenceVariable = price
                    break;
                case "imageURL":
                    referenceVariable = imageURL
                    break;
                case "category":
                    referenceVariable = category
                    break;
                default:
                    break;
            };
            inputFieldList.push(
                <div key={inputObject.name}>
                    <p>{inputObject.text}</p>
                    <InputField
                        key={inputObject.name}
                        FieldType={inputObject.type}
                        FieldName={inputObject.name}
                        FieldPlaceholder={''}
                        FieldValue={referenceVariable}
                        FieldChangeFunction={updateProductValues}
                        FormSubmitted={productFormSubmitted}
                        />
                </div>
        )
        }
});

  return (
        <div className="container-fluid form-offset">
            <div className="col-lg-4 offset-lg-4">
                <h2>Add a Product</h2>
                <form name="productForm" onSubmit={submitProductForm}>
                    {inputFieldList}
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
  );
};

export default NewProduct;
