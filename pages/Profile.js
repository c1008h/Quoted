import React, { useState } from 'react';

export default function Profile() {
    return ( 
        <div>
            <h1>Profile</h1>
            <form>
                <div>
                    <label>First:</label>
                    <input  type="text" name="firstname" />
                </div>
                <div>
                    <label>Last:</label>
                    <input  type="text" name="lastname" />
                </div>
                <div>
                    <label>Email:</label>
                    <input  type="text" name="email" />
                </div>
                <div>
                    <button>Delete Account</button>
                </div>
                <input className='updateBtn' type='submit' value='Update'/>
            </form>
        </div>
    )
}