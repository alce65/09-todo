import { UserModel } from '../../models/user';
import { Input } from '../core/input';

export function Step1() {
    let data: Partial<UserModel> = {
        firstName: '',
        lastName: '',
        birthDate: '', // al lado de este campo debe aparecer su edad en años
        gender: null, // --> Radio button (male/female/other/prefer not to mention)
        eMail: '',
        isSubscripted: false, // Desea recibir información de nuestra newsletter? --> Checkbox
    };
    function handleChange() {}
    return (
        <ul>
            <li>
                <Input
                    name="firstName"
                    label="Name"
                    value={data.firstName}
                    handleChange={handleChange}
                />
            </li>
        </ul>
    );
}
