import initNetwork from "./config/initNetwork";
import useNetworkServesByRole from "./networkServers/networkServersByRole";
import useNetworkServersByConfig from "./networkServers/networkServersByConfig";
import useNetworkServersByNotify from "./networkServers/networkServersByNotify";
import userNetworkServersBySystemByUser from "./networkServers/networkServersByUser";
import useNetworkServesBySystemMenu from "./networkServers/networkServersBySystemMenu";
import useNetworkServersByUpload from "./networkServers/networkServersByUpload";
import useNetworkServersByAuth from "./networkServers/networkServersByAuth";
import useNetworkServersByLogistics from "./networkServers/networkServersByLogistics";
import useNetworkServesByVerifyCode from "./networkServers/networkServesByVerifyCode";

const useIceStalkerNetwork = () => {
    return {
        initNetwork,
        useNetworkServesByRole,
        useNetworkServersByConfig,
        useNetworkServersByNotify,
        useNetworkServersByUpload,
        useNetworkServersByAuth,
        useNetworkServersByLogistics,
        useNetworkServesByVerifyCode,
        userNetworkServersBySystemByUser,
        useNetworkServesBySystemMenu
    }
}


export default useIceStalkerNetwork