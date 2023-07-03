import {memo} from "react";

const Component = memo(() => {
    return <>
        <h2 className="mb-4 text-xl font-semibold text-light-blue-hover dark:text-dark-white">
            My basic information
        </h2>
        </>
})

Component.displayName = 'AccountSettings'
export default Component;