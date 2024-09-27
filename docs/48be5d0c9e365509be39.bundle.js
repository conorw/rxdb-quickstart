"use strict";(self.webpackChunkrxdb_quickstart=self.webpackChunkrxdb_quickstart||[]).push([[761],{7761:(e,t,a)=>{a.r(t),a.d(t,{DEV_MODE_PLUGIN_NAME:()=>$,RxDBDevModePlugin:()=>W,areSelectorsSatisfiedByIndex:()=>N,checkFieldNameRegex:()=>C,checkMangoQuery:()=>U,checkPrimaryKey:()=>g,checkQuery:()=>P,checkSchema:()=>v,deepFreezeWhenDevMode:()=>J,disableWarnings:()=>F,ensureCollectionNameValid:()=>D,ensureDatabaseNameIsValid:()=>R,ensureObjectDoesNotContainRegExp:()=>q,validateDatabaseName:()=>j,validateFieldsDeep:()=>w});var r,n,o={UT1:"given name is no string or empty",UT2:"collection- and database-names must match the regex to be compatible with couchdb databases.\n    See https://neighbourhood.ie/blog/2020/10/13/everything-you-need-to-know-about-couchdb-database-names/\n    info: if your database-name specifies a folder, the name must contain the slash-char '/' or '\\'",UT3:"replication-direction must either be push or pull or both. But not none",UT4:"given leveldown is no valid adapter",UT5:"keyCompression is set to true in the schema but no key-compression handler is used in the storage",UT6:"schema contains encrypted fields but no encryption handler is used in the storage",UT7:"attachments.compression is enabled but no attachment-compression plugin is used",PL1:"Given plugin is not RxDB plugin.",PL3:"A plugin with the same name was already added but it was not the exact same JavaScript object",P2:"bulkWrite() cannot be called with an empty array",QU1:"RxQuery._execOverDatabase(): op not known",QU4:"RxQuery.regex(): You cannot use .regex() on the primary field",QU5:"RxQuery.sort(): does not work because key is not defined in the schema",QU6:"RxQuery.limit(): cannot be called on .findOne()",QU9:"throwIfMissing can only be used in findOne queries",QU10:"result empty and throwIfMissing: true",QU11:"RxQuery: no valid query params given",QU12:"Given index is not in schema",QU13:"A top level field of the query is not included in the schema",QU14:"Running a count() query in slow mode is now allowed. Either run a count() query with a selector that fully matches an index or set allowSlowCount=true when calling the createRxDatabase",QU15:"For count queries it is not allowed to use skip or limit",QU16:"$regex queries must be defined by a string, not an RegExp instance. This is because RegExp objects cannot be JSON stringified and also they are mutable which would be dangerous",QU17:"Chained queries cannot be used on findByIds() RxQuery instances",MQ1:"path must be a string or object",MQ2:"Invalid argument",MQ3:"Invalid sort() argument. Must be a string, object, or array",MQ4:"Invalid argument. Expected instanceof mquery or plain object",MQ5:"method must be used after where() when called with these arguments",MQ6:"Can't mix sort syntaxes. Use either array or object | .sort([['field', 1], ['test', -1]]) | .sort({ field: 1, test: -1 })",MQ7:"Invalid sort value",MQ8:"Can't mix sort syntaxes. Use either array or object",DB1:"RxDocument.prepare(): another instance on this adapter has a different password",DB2:"RxDatabase.addCollections(): collection-names cannot start with underscore _",DB3:"RxDatabase.addCollections(): collection already exists. use myDatabase[collectionName] to get it",DB4:"RxDatabase.addCollections(): schema is missing",DB5:"RxDatabase.addCollections(): collection-name not allowed",DB6:"RxDatabase.addCollections(): another instance created this collection with a different schema. Read this https://rxdb.info/questions-answers.html?console=qa#cant-change-the-schema ",DB8:"createRxDatabase(): A RxDatabase with the same name and adapter already exists.\nMake sure to use this combination only once or set ignoreDuplicate to true if you do this intentional-\nThis often happens in react projects with hot reload that reloads the code without reloading the process.",DB11:"createRxDatabase(): Invalid db-name, folder-paths must not have an ending slash",DB12:"RxDatabase.addCollections(): could not write to internal store",DB13:"createRxDatabase(): Invalid db-name or collection name, name contains the dollar sign",DB14:"no custom reactivity factory added on database creation",COL1:"RxDocument.insert() You cannot insert an existing document",COL2:"RxCollection.insert() fieldName ._id can only be used as primaryKey",COL3:"RxCollection.upsert() does not work without primary",COL4:"RxCollection.incrementalUpsert() does not work without primary",COL5:"RxCollection.find() if you want to search by _id, use .findOne(_id)",COL6:"RxCollection.findOne() needs a queryObject or string",COL7:"hook must be a function",COL8:"hooks-when not known",COL9:"RxCollection.addHook() hook-name not known",COL10:"RxCollection .postCreate-hooks cannot be async",COL11:"migrationStrategies must be an object",COL12:"A migrationStrategy is missing or too much",COL13:"migrationStrategy must be a function",COL14:"given static method-name is not a string",COL15:"static method-names cannot start with underscore _",COL16:"given static method is not a function",COL17:"RxCollection.ORM: statics-name not allowed",COL18:"collection-method not allowed because fieldname is in the schema",COL20:"Storage write error",COL21:"The RxCollection is destroyed or removed already, either from this JavaScript realm or from another, like a browser tab",CONFLICT:"Document update conflict. When changing a document you must work on the previous revision",DOC1:"RxDocument.get$ cannot get observable of in-array fields because order cannot be guessed",DOC2:"cannot observe primary path",DOC3:"final fields cannot be observed",DOC4:"RxDocument.get$ cannot observe a non-existed field",DOC5:"RxDocument.populate() cannot populate a non-existed field",DOC6:"RxDocument.populate() cannot populate because path has no ref",DOC7:"RxDocument.populate() ref-collection not in database",DOC8:"RxDocument.set(): primary-key cannot be modified",DOC9:"final fields cannot be modified",DOC10:"RxDocument.set(): cannot set childpath when rootPath not selected",DOC11:"RxDocument.save(): can't save deleted document",DOC13:"RxDocument.remove(): Document is already deleted",DOC14:"RxDocument.destroy() does not exist",DOC15:"query cannot be an array",DOC16:"Since version 8.0.0 RxDocument.set() can only be called on temporary RxDocuments",DOC17:"Since version 8.0.0 RxDocument.save() can only be called on non-temporary documents",DOC18:"Document property for composed primary key is missing",DOC19:"Value of primary key(s) cannot be changed",DOC20:"PrimaryKey missing",DOC21:"PrimaryKey must be equal to PrimaryKey.trim(). It cannot start or end with a whitespace",DOC22:"PrimaryKey must not contain a linebreak",DOC23:'PrimaryKey must not contain a double-quote ["]',DOC24:"Given document data could not be structured cloned. This happens if you pass non-plain-json data into it, like a Date() object or a Function. In vue.js this happens if you use ref() on the document data which transforms it into a Proxy object.",DM1:"migrate() Migration has already run",DM2:"migration of document failed final document does not match final schema",DM3:"migration already running",DM4:"Migration errored",DM5:"Cannot open database state with newer RxDB version. You have to migrate your database state first. See https://rxdb.info/migration-storage.html?console=storage ",AT1:"to use attachments, please define this in your schema",EN1:"password is not valid",EN2:"validatePassword: min-length of password not complied",EN3:"Schema contains encrypted properties but no password is given",EN4:"Password not valid",JD1:"You must create the collections before you can import their data",JD2:"RxCollection.importJSON(): the imported json relies on a different schema",JD3:"RxCollection.importJSON(): json.passwordHash does not match the own",LD1:"RxDocument.allAttachments$ can't use attachments on local documents",LD2:"RxDocument.get(): objPath must be a string",LD3:"RxDocument.get$ cannot get observable of in-array fields because order cannot be guessed",LD4:"cannot observe primary path",LD5:"RxDocument.set() id cannot be modified",LD6:"LocalDocument: Function is not usable on local documents",LD7:"Local document already exists",LD8:"localDocuments not activated. Set localDocuments=true on creation, when you want to store local documents on the RxDatabase or RxCollection.",RC1:"Replication: already added",RC2:"replicateCouchDB() query must be from the same RxCollection",RC4:"RxCouchDBReplicationState.awaitInitialReplication() cannot await initial replication when live: true",RC5:"RxCouchDBReplicationState.awaitInitialReplication() cannot await initial replication if multiInstance because the replication might run on another instance",RC6:"syncFirestore() serverTimestampField MUST NOT be part of the collections schema and MUST NOT be nested.",RC7:"SimplePeer requires to have process.nextTick() polyfilled, see https://rxdb.info/replication-webrtc.html?console=webrtc ",RC_PULL:"RxReplication pull handler threw an error - see .errors for more details",RC_STREAM:"RxReplication pull stream$ threw an error - see .errors for more details",RC_PUSH:"RxReplication push handler threw an error - see .errors for more details",RC_PUSH_NO_AR:"RxReplication push handler did not return an array with the conflicts",RC_WEBRTC_PEER:"RxReplication WebRTC Peer has error",RC_COUCHDB_1:"replicateCouchDB() url must end with a slash like 'https://example.com/mydatabase/'",RC_COUCHDB_2:"replicateCouchDB() did not get valid result with rows.",RC_OUTDATED:"Outdated client, update required. Replication was canceled",RC_UNAUTHORIZED:"Unauthorized client, update the replicationState.headers to set correct auth data",RC_FORBIDDEN:"Client behaves wrong so the replication was canceled. Mostly happens if the client tries to write data that it is not allowed to",SC1:"fieldnames do not match the regex",SC2:"SchemaCheck: name 'item' reserved for array-fields",SC3:"SchemaCheck: fieldname has a ref-array but items-type is not string",SC4:"SchemaCheck: fieldname has a ref but is not type string, [string,null] or array<string>",SC6:"SchemaCheck: primary can only be defined at top-level",SC7:"SchemaCheck: default-values can only be defined at top-level",SC8:"SchemaCheck: first level-fields cannot start with underscore _",SC10:"SchemaCheck: schema defines ._rev, this will be done automatically",SC11:"SchemaCheck: schema needs a number >=0 as version",SC13:"SchemaCheck: primary is always index, do not declare it as index",SC14:"SchemaCheck: primary is always unique, do not declare it as index",SC15:"SchemaCheck: primary cannot be encrypted",SC16:"SchemaCheck: primary must have type: string",SC17:"SchemaCheck: top-level fieldname is not allowed",SC18:"SchemaCheck: indexes must be an array",SC19:"SchemaCheck: indexes must contain strings or arrays of strings",SC20:"SchemaCheck: indexes.array must contain strings",SC21:"SchemaCheck: given index is not defined in schema",SC22:"SchemaCheck: given indexKey is not type:string",SC23:"SchemaCheck: fieldname is not allowed",SC24:"SchemaCheck: required fields must be set via array. See https://spacetelescope.github.io/understanding-json-schema/reference/object.html#required",SC25:"SchemaCheck: compoundIndexes needs to be specified in the indexes field",SC26:"SchemaCheck: indexes needs to be specified at collection schema level",SC27:"SchemaCheck: encrypted fields need to be specified at collection schema level",SC28:"SchemaCheck: encrypted fields is not defined in the schema",SC29:"SchemaCheck: missing object key 'properties'",SC30:"SchemaCheck: primaryKey is required",SC32:"SchemaCheck: primary field must have the type string/number/integer",SC33:"SchemaCheck: used primary key is not a property in the schema",SC34:"Fields of type string that are used in an index, must have set the maxLength attribute in the schema",SC35:"Fields of type number/integer that are used in an index, must have set the multipleOf attribute in the schema",SC36:"A field of this type cannot be used as index",SC37:"Fields of type number that are used in an index, must have set the minimum and maximum attribute in the schema",SC38:"Fields of type boolean that are used in an index, must be required in the schema",SC39:"The primary key must have the maxLength attribute set",SC40:"$ref fields in the schema are not allowed. RxDB cannot resolve related schemas because it would have a negative performance impact.It would have to run http requests on runtime. $ref fields should be resolved during build time.",SC41:"minimum, maximum and maxLength values for indexes must be real numbers, not Infinity or -Infinity",VD1:"Sub-schema not found, does the schemaPath exists in your schema?",VD2:"object does not match schema",S1:"You cannot create collections after calling RxDatabase.server()",GQL1:"GraphQL replication: cannot find sub schema by key",GQL3:"GraphQL replication: pull returns more documents then batchSize",CRDT1:"CRDT operations cannot be used because the crdt options are not set in the schema.",CRDT2:"RxDocument.incrementalModify() cannot be used when CRDTs are activated.",CRDT3:"To use CRDTs you MUST NOT set a conflictHandler because the default CRDT conflict handler must be used",SNH:"This should never happen"},i=a(6606),s=a(6143),c=a(4815),l=a(2217),d=a(2085),h=a(9101),m=a(7579),u=a(5131),p=a(2497);var f,y=new((0,p.cM)(p.ky));function b(){if(!f){var e=Object.getOwnPropertyNames(y),t=Object.getOwnPropertyNames(p.ky);f=[...e,...t,"deleted","synced"]}return f}function C(e){if("_deleted"!==e){if(["properties"].includes(e))throw(0,i.Br)("SC23",{fieldName:e});var t="^[a-zA-Z](?:[[a-zA-Z0-9_]*]?[a-zA-Z0-9])?$",a=new RegExp(t);if("_id"!==e&&!e.match(a))throw(0,i.Br)("SC1",{regex:t,fieldName:e})}}function w(e){var t=(0,s.xQ)(e.primaryKey);return function e(a,r){a&&"object"==typeof a&&Object.keys(a).forEach((n=>{var o=a[n];a.properties||!o||"object"!=typeof o||Array.isArray(a)||function(e,a,r){if("string"!=typeof e||"object"!=typeof a||Array.isArray(a)||"patternProperties"===r.split(".").pop()||C(e),Object.prototype.hasOwnProperty.call(a,"item")&&"array"!==a.type)throw(0,i.Br)("SC2",{fieldName:e});if(Object.prototype.hasOwnProperty.call(a,"required")&&"boolean"==typeof a.required)throw(0,i.Br)("SC24",{fieldName:e});if(Object.prototype.hasOwnProperty.call(a,"$ref"))throw(0,i.Br)("SC40",{fieldName:e});if(Object.prototype.hasOwnProperty.call(a,"ref"))if(Array.isArray(a.type)){if(a.type.length>2||!a.type.includes("string")||!a.type.includes("null"))throw(0,i.Br)("SC4",{fieldName:e})}else switch(a.type){case"string":break;case"array":if(!a.items||!a.items.type||"string"!==a.items.type)throw(0,i.Br)("SC3",{fieldName:e});break;default:throw(0,i.Br)("SC4",{fieldName:e})}var n=r.split(".").length>=2;if(n&&a.default)throw(0,i.Br)("SC7",{path:r});if(!n){if("_id"===e&&"_id"!==t)throw(0,i.Br)("COL2",{fieldName:e});if("_"===e.charAt(0)){if("_id"===e||"_deleted"===e)return;throw(0,i.Br)("SC8",{fieldName:e})}}}(n,o,r);var s=r;"properties"!==n&&(s=s+"."+n),e(o,s)}))}(e,""),!0}function g(e){if(!e.primaryKey)throw(0,i.Br)("SC30",{schema:e});function t(t){if(!t)throw(0,i.Br)("SC33",{schema:e});var a=t.type;if(!a||!["string","number","integer"].includes(a))throw(0,i.Br)("SC32",{schema:e,args:{schemaPart:t}})}if("string"==typeof e.primaryKey){var a=e.primaryKey;t(e.properties[a])}else{var r=e.primaryKey;t((0,s.nT)(e,r.key)),r.fields.forEach((a=>{t((0,s.nT)(e,a))}))}var n=(0,s.xQ)(e.primaryKey),o=e.properties[n];if(!o.maxLength)throw(0,i.Br)("SC39",{schema:e,args:{primaryPathSchemaPart:o}});if(!isFinite(o.maxLength))throw(0,i.Br)("SC41",{schema:e,args:{primaryPathSchemaPart:o}})}function x(e){for(var t=e.split("."),a="",r=0;r<t.length;r+=1)a="[]"!==t[r]?a.concat(".properties.".concat(t[r])):a.concat(".items");return(0,c.L$)(a)}function v(e){if(!e.primaryKey)throw(0,i.Br)("SC30",{schema:e});if(!Object.prototype.hasOwnProperty.call(e,"properties"))throw(0,i.Br)("SC29",{schema:e});if(e.properties._rev)throw(0,i.Br)("SC10",{schema:e});if(!Object.prototype.hasOwnProperty.call(e,"version")||"number"!=typeof e.version||e.version<0)throw(0,i.Br)("SC11",{version:e.version});if(w(e),g(e),Object.keys(e.properties).forEach((t=>{var a=e.properties[t];if(t===e.primaryKey){if(e.indexes&&e.indexes.includes(t))throw(0,i.Br)("SC13",{value:a,schema:e});if(a.unique)throw(0,i.Br)("SC14",{value:a,schema:e});if(e.encrypted&&e.encrypted.includes(t))throw(0,i.Br)("SC15",{value:a,schema:e});if("string"!==a.type)throw(0,i.Br)("SC16",{value:a,schema:e})}if(b().includes(t))throw(0,i.Br)("SC17",{key:t,schema:e})})),e.indexes){if(!(0,l.k_)(e.indexes))throw(0,i.Br)("SC18",{indexes:e.indexes,schema:e});e.indexes.forEach((t=>{if("string"!=typeof t&&!Array.isArray(t))throw(0,i.Br)("SC19",{index:t,schema:e});if(Array.isArray(t))for(var a=0;a<t.length;a+=1)if("string"!=typeof t[a])throw(0,i.Br)("SC20",{index:t,schema:e});((0,l.k_)(t)?t:[t]).forEach((a=>{var r=(0,s.nT)(e,a);switch(r.type){case"string":if(!r.maxLength)throw(0,i.Br)("SC34",{index:t,field:a,schema:e});break;case"number":case"integer":if(!r.multipleOf)throw(0,i.Br)("SC35",{index:t,field:a,schema:e});var n=r.maximum,o=r.minimum;if(void 0===n||void 0===o)throw(0,i.Br)("SC37",{index:t,field:a,schema:e});if(!isFinite(n)||!isFinite(o))throw(0,i.Br)("SC41",{index:t,field:a,schema:e});break;case"boolean":var c="",l=a;if(a.includes(".")){var d=a.split(".");l=d.pop(),c=d.join(".")}var h=""===c?e:(0,s.nT)(e,c);if(!h.required||!h.required.includes(l))throw(0,i.Br)("SC38",{index:t,field:a,schema:e});break;default:throw(0,i.Br)("SC36",{fieldName:a,type:r.type,schema:e})}}))}))}Object.keys((0,d.YO)(e)).map((e=>{var t=e.split(".");return t.pop(),t.join(".")})).filter((e=>""!==e)).filter(((e,t,a)=>a.indexOf(e)===t)).filter((t=>{var a=(0,h.UU)(e,t);return a&&!!a.index})).forEach((t=>{throw t=(t=t.replace("properties.","")).replace(/\.properties\./g,"."),(0,i.Br)("SC26",{index:(0,c.L$)(t),schema:e})})),(e.indexes||[]).reduce(((e,t)=>((0,l.k_)(t)?(0,l.Hb)(e,t):e.push(t),e)),[]).filter(((e,t,a)=>a.indexOf(e)===t)).map((t=>{var a=x(t),r=(0,h.UU)(e,a);if(!r||"object"!=typeof r)throw(0,i.Br)("SC21",{index:t,schema:e});return{indexPath:t,schemaObj:r}})).filter((e=>"string"!==e.schemaObj.type&&"integer"!==e.schemaObj.type&&"number"!==e.schemaObj.type&&"boolean"!==e.schemaObj.type)).forEach((t=>{throw(0,i.Br)("SC22",{key:t.indexPath,type:t.schemaObj.type,schema:e})})),Object.keys((0,d.YO)(e)).map((e=>{var t=e.split(".");return t.pop(),t.join(".")})).filter((e=>""!==e&&"attachments"!==e)).filter(((e,t,a)=>a.indexOf(e)===t)).filter((t=>{var a=(0,h.UU)(e,t);return a&&!!a.encrypted})).forEach((t=>{throw t=(t=t.replace("properties.","")).replace(/\.properties\./g,"."),(0,i.Br)("SC27",{index:(0,c.L$)(t),schema:e})})),e.encrypted&&e.encrypted.forEach((t=>{var a=x(t),r=(0,h.UU)(e,a);if(!r||"object"!=typeof r)throw(0,i.Br)("SC28",{field:t,schema:e})}))}function O(e){e&&Object.entries(e).forEach((([e,t])=>{if("string"!=typeof e)throw(0,i.JX)("COL14",{name:e});if(e.startsWith("_"))throw(0,i.JX)("COL15",{name:e});if("function"!=typeof t)throw(0,i.JX)("COL16",{name:e,type:typeof e});if(function(){if(!r){var e=new m.wm,t=Object.getOwnPropertyNames(e),a=Object.getOwnPropertyNames(Object.getPrototypeOf(e));r=[...t,...a]}return r}().includes(e)||b().includes(e))throw(0,i.Br)("COL17",{name:e})}))}var S=a(3907);function D(e){if(function(){if(!n){var e=new u.lB("pseudoInstance","memory"),t=Object.getOwnPropertyNames(e),a=Object.getOwnPropertyNames(Object.getPrototypeOf(e));n=[...t,...a],e.destroy()}return n}().includes(e.name))throw(0,i.Br)("DB5",{name:e.name});j(e.name)}function R(e){if(j(e.name),e.name.includes("$"))throw(0,i.Br)("DB13",{name:e.name});if((0,c.ky)(e.name)&&(e.name.endsWith("/")||e.name.endsWith("\\")))throw(0,i.Br)("DB11",{name:e.name})}var k="^[a-z][_$a-z0-9\\-]*$",B=new RegExp(k);function j(e){if("string"!=typeof e||0===e.length)throw(0,i.JX)("UT1",{name:e});if((0,c.ky)(e))return!0;if(!e.match(B)&&":memory:"!==e)throw(0,i.Br)("UT2",{regex:k,givenName:e});return!0}var Q=a(4701),L=a(915);function P(e){if(!("[object Object]"===Object.prototype.toString.call(e.queryObj)))throw(0,i.JX)("QU11",{op:e.op,collection:e.collection.name,queryObj:e.queryObj});var t=["selector","limit","skip","sort","index"];if(Object.keys(e.queryObj).forEach((a=>{if(!t.includes(a))throw(0,i.JX)("QU11",{op:e.op,collection:e.collection.name,queryObj:e.queryObj,key:a,args:{validKeys:t}})})),"count"===e.op&&(e.queryObj.limit||e.queryObj.skip))throw(0,i.Br)("QU15",{collection:e.collection.name,query:e.queryObj});q(e.queryObj)}function U(e){var t=e.rxQuery.collection.schema.jsonSchema,a=e.mangoQuery.selector,r=Object.keys(t.properties);Object.keys(a).filter((e=>!e.startsWith("$"))).filter((e=>!e.includes("."))).forEach((a=>{if(!r.includes(a))throw(0,i.Br)("QU13",{schema:t,field:a,query:e.mangoQuery})}));var n=t.indexes?t.indexes:[],o=e.mangoQuery.index;if(o&&!n.find((e=>(0,Q.b)(e,o))))throw(0,i.Br)("QU12",{collection:e.rxQuery.collection.name,query:e.mangoQuery,schema:t});if("count"===e.rxQuery.op&&!N(e.rxQuery.collection.schema.jsonSchema,e.mangoQuery)&&!e.rxQuery.collection.database.allowSlowCount)throw(0,i.Br)("QU14",{collection:e.rxQuery.collection,query:e.mangoQuery});e.mangoQuery.sort&&e.mangoQuery.sort.map((e=>Object.keys(e)[0])).filter((e=>!e.includes("."))).forEach((a=>{if(!r.includes(a))throw(0,i.Br)("QU13",{schema:t,field:a,query:e.mangoQuery})})),q(e.mangoQuery)}function N(e,t){return(0,L.Ib)(e,t).queryPlan.selectorSatisfiedByIndex}function q(e){"object"==typeof e&&null!==e&&Object.keys(e).forEach((t=>{var a=e[t];if(a instanceof RegExp)throw(0,i.Br)("QU16",{field:t,query:e});Array.isArray(a)?a.forEach((e=>q(e))):q(a)}))}function E(e){if("object"!=typeof e||null===e)return!1;for(var t in e)if(e.hasOwnProperty(t)){if(e[t]instanceof Date)return!0;if("object"==typeof e[t]&&E(e[t]))return!0}return!1}function T(e,t){var a=(0,s.xQ)(e.schema.primaryKey),r=function(t){t.document=(0,s.Nq)(a,e.schema,t.document),t.previous&&Object.keys(t.previous._meta).forEach((e=>{if(!Object.prototype.hasOwnProperty.call(t.document._meta,e))throw(0,i.Br)("SNH",{dataBefore:t.previous,dataAfter:t.document,args:{metaFieldName:e}})}));try{"function"==typeof structuredClone?structuredClone(t):JSON.parse(JSON.stringify(t))}catch(a){throw(0,i.Br)("DOC24",{collection:e.collectionName,document:t.document})}if(E(t.document))throw(0,i.Br)("DOC24",{collection:e.collectionName,document:t.document})};for(var n of t)r(n)}var _=a(1081),M=a(2748),A=a(4807),I=!1;var K=!0;function F(){K=!1}function J(e){return e&&"string"!=typeof e&&"number"!=typeof e?(0,d.ol)(e):e}var $="dev-mode",W={name:$,rxdb:!0,init:()=>{K&&console.warn(["-------------- RxDB dev-mode warning -------------------------------","you are seeing this because you use the RxDB dev-mode plugin https://rxdb.info/dev-mode.html?console=dev-mode ","This is great in development mode, because it will run many checks to ensure","that you use RxDB correct. If you see this in production mode,","you did something wrong because the dev-mode plugin will decrease the performance.","","🤗 Hint: To get the most out of RxDB, check out the Premium Plugins","to get access to faster storages and more professional features: https://rxdb.info/premium?console=dev-mode ","","You can disable this warning by calling disableWarnings() from the dev-mode plugin.","---------------------------------------------------------------------"].join("\n"))},overwritable:{isDevMode:()=>!0,deepFreezeWhenDevMode:J,tunnelErrorMessage(e){if(!o[e])throw console.error("RxDB: Error-Code not known: "+e),new Error("Error-Code "+e+" not known, contact the maintainer");return o[e]}},hooks:{preCreateRxSchema:{after:v},preCreateRxDatabase:{after:function(e){R(e)}},createRxDatabase:{after:async function(e){!async function(){if(!(I||"undefined"==typeof window||"undefined"==typeof location||_.P.premium&&"string"==typeof _.P.premium&&await(0,M.V0)(_.P.premium)===_.Y)){I=!0;var e=document.createElement("iframe");e.style.display="none",e.src="https://rxdb.info/html/dev-mode-iframe.html?version="+A.o,document.body.appendChild(e)}}(e.database)}},preCreateRxCollection:{after:function(e){var t,a,r;if(D(e),t=e.schema,a=e.methods,r=Object.keys(t.properties),a&&Object.keys(a).filter((e=>r.includes(e))).forEach((e=>{throw(0,i.Br)("COL18",{funName:e})})),"_"===e.name.charAt(0))throw(0,i.Br)("DB2",{name:e.name});if(!e.schema)throw(0,i.Br)("DB4",{name:e.name,args:e})}},createRxDocument:{before:function(e){!function(e,t){if(!e)throw(0,i.Br)("DOC20",{primaryKey:e,document:t});if(e!==e.trim())throw(0,i.Br)("DOC21",{primaryKey:e,document:t});if(e.includes("\r")||e.includes("\n"))throw(0,i.Br)("DOC22",{primaryKey:e,document:t});if(e.includes('"'))throw(0,i.Br)("DOC23",{primaryKey:e,document:t})}(e.primary,e.toJSON(!0))}},preCreateRxQuery:{after:function(e){P(e)}},prePrepareQuery:{after:e=>{U(e)}},preStorageWrite:{before:e=>{T(e.storageInstance,e.rows)}},createRxCollection:{after:e=>{O(e.creator.statics),O(e.creator.methods),O(e.creator.attachments),e.creator.schema&&e.creator.migrationStrategies&&function(e,t){if("object"!=typeof t||Array.isArray(t))throw(0,i.JX)("COL11",{schema:e});var a=(0,S.NP)(e);if(a.length!==Object.keys(t).length)throw(0,i.Br)("COL12",{have:Object.keys(t),should:a});a.map((e=>({v:e,s:t[e+1]}))).filter((e=>"function"!=typeof e.s)).forEach((t=>{throw(0,i.JX)("COL13",{version:t.v,type:typeof t,schema:e})}))}(e.creator.schema,e.creator.migrationStrategies)}}}}}}]);
//# sourceMappingURL=48be5d0c9e365509be39.bundle.js.map