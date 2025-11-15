import {AxiosProgressEvent} from "axios";

export type TypeBySystemMenuParams = {
    "version"?: number,
    "delFlag"?: number,
    "createId"?: number,
    "createBy"?: string,
    "createTime"?: number,
    "updateId"?: number,
    "updateBy"?: string,
    "updateTime"?: number,
    "name": string,
    "parentId": number,
    "type": string,
    "perms"?: string,
    "path": string,
    "component": string,
    "queryParam"?: string,
    "isFrame"?: boolean,
    "icon"?: string,
    "sort": number,
    "visible": '0' | '1',
    "status": '0' | '1',
    "remark"?: string
}

export interface InterfaceBySystemMenuParamsByAdd extends TypeBySystemMenuParams {
    id?: number
}


export interface InterfaceBySystemMenuParamsByPut extends TypeBySystemMenuParams {
    id: number
}


export type TypeByStatusByString = 'DISABLE' | 'ENABLE'

export type TypeByStatusByNumber = 0 | 1;

export declare namespace APIByParams {

    type TypeByCategoryListParams = {
        pageParams: TypeByPageParams<'id' | 'createTime' | 'updateTime'>,
        name?: string
        shortName?: string
        parentId?: number
        level?: number
        isHot?: string
        isShow?: string
        status?: string
    }

    type TypeBySpuListParams = {
        pageParams: TypeByPageParams<any>,
        name?: string
    }

    type TypeByServicesListParams = {
        pageParams: TypeByPageParams<'id' | 'createTime' | 'updateTime'>,
        name?: string
    }


    type TypeByBrandListParams = {
        pageParams: TypeByPageParams<'id' | 'createTime' | 'updateTime'>,
        name?: string
        firstLetter?: string
        isHot?: string
        isShow?: string
        auditStatus?: string
        shopId?: number
        tenantId?: string
    }


    type TypeByProdListParams = {
        pageParams: TypeByPageParams<'id' | 'createTime' | 'updateTime'>,
        type?: 'NORMAL' | 'CARD' | 'VIRTUAL'
        brandId?: string
        name?: string
        categoryId?: string
        shopId?: string
        tenantId?: number
        status?: 'ON' | 'OFF'
        auditStatus?: 'PENDING' | 'APPROVE' | 'REJECTED'
    }


    type TypeByMemberListParams = {
        pageParams: TypeByPageParams<'id' | 'createTime' | 'updateTime'>,
        keyword: string,
        source?: 'MINI_PROGRAM' | 'APP' | 'PC_WEB' | 'H5' | 'OFFLINE_STORE' | 'WECHAT',
        createBeginTime?: string
        createEndTime?: string

    }


    type TypeByMemBerParams = {
        nickname: string,
        phone: string,
        email?: string
        sex?: 'UNKNOWN' | 'MAN' | 'WOMAN',
        birthday?: string,
        source: 'MINI_PROGRAM' | 'APP' | 'PC_WEB' | 'H5' | 'OFFLINE_STORE' | 'WECHAT'
    }

    type TypeByBrandParams = {
        name: string
        firstLetter?: string
        logo?: string
        description?: string
        isHot?: string
        isShow?: string
        sort?: number
    }


    type TypeByProdParams = {
        type: string
        medias: Array<{
            mediaType: string
            url: string
            title: string
            sort: number
        }>
        name: string
        brandId: number
        weight: number
        categoryId: number
        shopCategoryId: number
        barcode: string
        spuCode: string
        keywords: string
        description: string
        status: string
        auditStatus: string
        price: number
        marketPrice: number
        templateId: number
        attrs: Array<{
            spuId: number
            attrId: number
            attrName: string
            attrType: string
            attrImage: string
            value: string
            extraPrice: number
            sort: number
        }>
        skus: Array<{
            spuId: number
            skuCode: string
            barcode: string
            name: string
            imageUrl: string
            price: number
            stock: number
            status: string
        }>
        stockTotal: number
        limitType: string
        limitCycle: string
        limitValue: number
        freightType: string
        freightFee: number
        freightTemplateId: number
        detailHtml: string
        tags: Array<any>
        serviceIds: Array<any>
        salesVirtual: number
        relatedSpuIds: Array<any>
        relatedArticleIds: Array<any>
    }


    type TypeByCategoryParams = {
        name: string
        shortName?: string
        parentId: number
        level: number
        image?: string
        unit?: string
        seoTitle?: string
        keywords?: string
        description?: string
        sort?: number
        isHot?: string
        isShow?: string
        status?: string
    }


    type TypeByTagParams = {
        name: string
        shortName?: string
        parentId: number
        level: number
        image?: string
        unit?: string
        seoTitle?: string
        keywords?: string
        description?: string
        sort?: number
        isHot?: string
        isShow?: string
        status?: string
    }


    type TypeBySpuParams = {
        name: string
        description: string
        status: string
        attrs: Array<{
            name: string
            type: 'attr' | 'spec' | 'extraSpec'
            sort: number
            description: string
        }>
    }


    type TypeByServicesParams = {
        name: string
        description?: string
        icon?: string
        sort?: number
        isDefault?: string
    }

    type TypeBySpuParamsByEdit = {
        id: string
        name: string
        description: string
        status: string
        attrs: Array<{
            id: string
            name: string
            type: 'attr' | 'spec' | 'extraSpec'
            sort: number
            description: string
        }>
    }


    /**
     * 表格分页基础类型
     */
    type TypeByPageParams<T> = {
        current: number, size: number, sortingFields?: Array<{
            sortField: T, sortOrder: 'desc' | 'asc',
        }>, extra?: Record<any, any>,
    }


    /**
     * 账户登录参数
     */
    type TypeByAuthLoginParams = {
        username: string
        password: string
        uuid: string
        code: string
        deviceId?: string
        deviceType?: 'PC' | 'WEB' | 'H5' | 'APP' | 'MINI_WX'
    }

    /**
     * 智能解析地址
     */
    type TypeLogisticsByResolve = {
        address: string
    }


    /**
     * 上传文件基础参数
     */
    type TypeByUploadByParams = {
        file: File, headerConfig?: Record<string, any>, uploadProgressFn?: (progress: AxiosProgressEvent) => {}
    }

    /**
     * 上传文件参数
     */
    type TypeByUploadByFileParams = TypeByUploadByParams & {}

    /**
     * 上传文件为图片基础参数
     */
    type TypeByUploadByImageParams = TypeByUploadByParams & {
        file: File, needThumb?: 'false' | 'true', maxWidth?: string, maxHeight?: string, format?: 'jpg' | 'png'
    }


    /**
     * 新增用户参数
     */
    type TypeByUserAddParams = {
        "username": string,
        "nickname": string,
        "phone": string,
        "email": string,
        "sex": string,
        "age": number,
        "avatar": string,
        "status": string,
        "roleIds": Array<string>,
        "remark"?: string
    }


    /**
     * 获取系统配置参数
     */
    type TypeBySystemConfigParams = {
        configCategory: string, configType?: string, configKey?: string
    }


    type TypeBySystemConfigUpdateParams = {
        configCategory: string, editConfigList: Array<{
            id: number, configValue: string
        }>
    }


    /**
     * 新增角色参数
     */
    type TypeByRoleAddParams = {
        version?: number
        delFlag?: number
        createId?: number
        createBy?: string
        createTime?: number
        updateId?: number
        updateBy?: string
        updateTime?: number
        tenantId?: string
        id?: number
        name: string
        code: string
        status?: TypeByStatusByString
        remark?: string
        menuIds?: Array<any>
    }

    /**
     * 用户分页参数
     */
    type TypeByUserPageParams = TypeByPageParams<any> & {
        param: Record<any, any>
    }

    /**
     * 获取消息分页
     */

    type TypeByNotifyPageParams = TypeByPageParams<any> & {
        param: {
            targetType: 'ADMIN' | 'CUSTOMER', keyword: string
        }
    }


    /**
     * 修改通知模板参数
     */
    type TypeByUpdateByTemplateParams = {
        id: number
        titleTemplate?: string
        contentTemplate?: string
        templateId?: string
        status?: TypeByStatusByString
        remark?: string
    }


}


export declare namespace APIByResponse {


    type TypeByResponseBySuccess<T> = {
        code: number, extraCode: string, msg: string, data: T
    }


    type TypeByResponseByPage<T> = {
        size: number, current: number, records: Array<T>, total: number, pages: number
    }


    type TypeByResponseBySystemConfigItem = {
        id: number
        configCategory: string
        configType: string
        configKey: string
        configName: string
        description: string
        sortIndex: number
        configValue: string
        required: number
        editable: number
    }

    type TypeByResponseByUserInfo = {
        userId: number
        tenantId: string
        userName: string
        nickName: string
        deptId: number
        deptName: string
        email: string
        phone: string
        sex: string
        avatar: string
        status: string
        createTime: number, perms: Array<string>, roleCodes: Array<string>
    }

    type TypeByResponseByNotify = {
        id: number
        eventCode: string
        eventName: string
        sceneDesc: string
        inboxNotify: TypeByStatusByNumber
        smsNotify: TypeByStatusByNumber
        mpNotify: TypeByStatusByNumber
        maNotify: TypeByStatusByNumber
        status: TypeByStatusByString
        remark: string
        createTime: number
        updateTime: number
    }
    type TypeByResponseByNotifyPage = TypeByResponseByPage<TypeByResponseByNotify>

    type TypeByResponseByUserPage = TypeByResponseByPage<TypeByResponseByUserInfo>

    type TypeByResponseByError = {
        code: string, msg: string, extraCode: string
    }


    type TypeByRouterInfoItem = {
        "name": "", "path": "", "visible": "", "component": "", "children"?: Array<TypeByRouterInfoItem>
    }

    type APIByRequestByRouterInfo = {
        routerNodes: Array<TypeByRouterInfoItem>
    }

    type TypeByResponseByTemplateInfo = {
        id: number
        eventCode: string
        channel: string
        lang: string
        titleTemplate: string
        contentTemplate: string
        templateId: string
        templateParams: string
        status: TypeByStatusByString
        remark: string
        createTime: number
        updateTime: number
    }


    type TypeByMenuItem = {
        "id": number,
        "name": string,
        "parentId": number,
        "type": { value: number, label: string },
        "perms": string,
        "path": string,
        "component": string,
        "queryParam": string,
        "isFrame": string,
        "icon": string,
        "sort": number,
        "visible": string,
        "status": string,
        "remark": string,
        "meta": {
            icon?: string, link?: string, title: string
        },
        "children": Array<TypeByMenuItem>
    }

    type TypeByMenuTree = Array<TypeByMenuItem>

    type TypeByResponseUploadResult = {
        url: string
        filename: string
    }


    type TypeByResponseUploadResultByImage = TypeByResponseUploadResult & {
        thumbUrl: string
    }

    /**
     *  解析地址结果
     */
    type TypeByResponseByLogisticsByResolve = {
        provinceName?: string
        cityName?: string
        expAreaName?: string
        streetName?: string
        address?: string
        mobile?: string
        name?: string
    }

    type TypeResponseByLogisticsByTrackItem = {
        acceptTime: string
        acceptStation: string
        remark: string
    }


    type TypeResponseByVerifyCodeByImage = {
        captchaEnabled: boolean
        uuid: string
        imageBase64: string
        captchaType: string
    }


    type albumNode = {
        "id": number, "name": string, "parentId": number, "sortIndex": number, "children": Array<albumNode>
    }

    type  TypeResponseByAlbumNodes = {
        albumNodes: Array<albumNode>
    }
    type TypeResponseByEnum = {
        label: any, value: any
    }

    type TypeResponseByMember = {
        id: number
        nickname: string
        sex: string | TypeResponseByEnum
        countryCode: string
        phone: string
        avatar: string
        source: string | TypeResponseByEnum
        status: string | TypeResponseByEnum
        createTime: number
        memberLevel: string
        balance: number
        frozenBalance: number
        growthValue: number
        totalOrderCount: number
        totalOrderAmount: number
        lastOrderTime: number
    }


    type TypeResponseByCategory = {
        id: number
        name: string
        shortName: string
        parentId: number
        level: number
        image: string
        unit: string
        seoTitle: string
        keywords: string
        description: string
        sort: number
        isHot: string | TypeResponseByEnum
        isShow: string | TypeResponseByEnum
        status: string | TypeResponseByEnum
    }
    type TypeResponseByServices = {
        id: number
        name: string
        description: string
        icon: string
        sort: number
        isDefault: string | TypeResponseByEnum
    }


    type TypeResponseBySpu = {
        id: number
        name: string
        description: string
        status: string
        tenantId: string
        shopId: number
        attrs: Array<{
            id: number
            templateId: number
            name: string
            type: 'attr' | 'spec' | 'extra_spec'
            sort: number
            description: string
        }>
    }


    type TypeResponseByBrand = {
        id: number
        name: string
        firstLetter: string
        logo: string
        description: string
        isHot: string
        isShow: string
        sort: number
        auditStatus: string
        shopId: number
        tenantId: string
    }


    type TypeResponseByMemberAddress = {
        id: number
        memberId: number
        consignee: string
        phoneCountryCode: string
        phone: string
        countryCode: string
        province: string
        city: string
        district: string
        detailAddress: string
        fullAddress: string
        stateCode: string
        town: string
        postalCode: string
        defaulted: string
    }


}









