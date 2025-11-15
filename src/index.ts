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
import networkServersBySystemAlbum from "./networkServers/networkServersBySystemAlbum";
import networkServersByMember from "./networkServers/networkServersByMember";
import networkServersByBrand from "./networkServers/networkServersByBrand";
import useNetworkServersByBrand from "./networkServers/networkServersByBrand";
import networkServersByCategory from "./networkServers/networkServersByCategory";
import useNetworkServersBySpu from "./networkServers/networkServersBySpu";
import useNetworkServersByServices from "./networkServers/networkServersByServices";
import useNetworkServersByProduction from "./networkServers/networkServersByProduction";

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
        useNetworkServesBySystemMenu,
        useNetworkServersByBrand,
        useNetworkServersBySpu,
        useNetworkServersByServices,
        useNetworkServersByProduction,
        // 命名错误
        networkServersBySystemAlbum,
        networkServersByMember,
        // 统一命名规范
        useNetworkServersByMember: networkServersByMember,
        useNetworkServersBySystemAlbum: networkServersBySystemAlbum,
        useNetworkServersByCategory: networkServersByCategory
    }
}


export default useIceStalkerNetwork