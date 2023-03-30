import { useDeferredValue, Suspense } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";

import usePeriodOfDay from "./hooks/usePeriodOfDay";
import DynamicBackground from "./component/common/DynamicBackground";
import router from "./route";

function App() {
    const period = useDeferredValue(usePeriodOfDay());
    const queryClient = useQueryClient();

    if (period === null) {
        return null;
    }

    const route = router(period, queryClient);

    return (
        <>
            <DynamicBackground period={period} />
            <Suspense fallback={<div>로딩중이여유~</div>}>
                <RouterProvider router={route} />
            </Suspense>
        </>
    );
}

export default App;
