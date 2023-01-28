import { useDeferredValue } from "react";
import { RouterProvider } from "react-router-dom";

import usePeriodOfDay from "./hooks/usePeriodOfDay";
import DynamicBackground from "./component/common/DynamicBackground";
import router from "./route";

function App() {
    const period = usePeriodOfDay();

    const deferredPeriod = useDeferredValue(period);

    if (deferredPeriod === null) {
        return null;
    }

    const route = router(deferredPeriod);

    return (
        <>
            <DynamicBackground period={deferredPeriod} />
            <RouterProvider router={route} />
        </>
    );
}

export default App;
