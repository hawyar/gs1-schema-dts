/** Used at the top-level node to indicate the context for the JSON-LD objects used. The context provided in this type is compatible with the keys and URLs in the rest of this generated file. */
export declare type WithContext<T extends Thing> = T & {
    "@context": "https://www.gs1.org/voc/";
};
export interface Graph {
    "@context": "https://www.gs1.org/voc/";
    "@graph": readonly Thing[];
}
declare type SchemaValue<T, TProperty extends string> = T | Role<T, TProperty> | readonly (T | Role<T, TProperty>)[];
declare type IdReference = {
    /** IRI identifying the canonical address of this object. */
    "@id": string;
};
/** Boolean: True or False. */
export declare type Boolean = "https://schema.org/False" | "https://schema.org/True" | boolean;
/** A date value in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}. */
export declare type Date = string;
/** A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm] (see Chapter 5.4 of ISO 8601). */
export declare type DateTime = string;
interface EmployeeRoleBase extends OrganizationRoleBase {
    /** The base salary of the job or of an employee in an EmployeeRole. */
    "https://schema.org/baseSalary"?: SchemaValue<MonetaryAmount | Number | PriceSpecification | IdReference, "https://schema.org/baseSalary">;
    /** The currency (coded using {@link http://en.wikipedia.org/wiki/ISO_4217 ISO 4217} ) used for the main salary information in this job posting or for this employee. */
    "https://schema.org/salaryCurrency"?: SchemaValue<Text, "https://schema.org/salaryCurrency">;
}
declare type EmployeeRoleLeaf<TContent, TProperty extends string> = EmployeeRoleBase & {
    "@type": "http://schema.org/EmployeeRole";
} & {
    [key in TProperty]: TContent;
};
/** A subclass of OrganizationRole used to describe employee relationships. */
export declare type EmployeeRole<TContent = never, TProperty extends string = never> = EmployeeRoleLeaf<TContent, TProperty>;
interface LinkRoleBase extends RoleBase {
    /** The language of the content or performance or used in an action. Please use one of the language codes from the {@link http://tools.ietf.org/html/bcp47 IETF BCP 47 standard}. See also {@link https://schema.org/availableLanguage availableLanguage}. */
    "https://schema.org/inLanguage"?: SchemaValue<Language | Text | IdReference, "https://schema.org/inLanguage">;
    /** Indicates the relationship type of a Web link. */
    "https://schema.org/linkRelationship"?: SchemaValue<Text, "https://schema.org/linkRelationship">;
}
declare type LinkRoleLeaf<TContent, TProperty extends string> = LinkRoleBase & {
    "@type": "http://schema.org/LinkRole";
} & {
    [key in TProperty]: TContent;
};
/** A Role that represents a Web link e.g. as expressed via the 'url' property. Its linkRelationship property can indicate URL-based and plain textual link types e.g. those in IANA link registry or others such as 'amphtml'. This structure provides a placeholder where details from HTML's link element can be represented outside of HTML, e.g. in JSON-LD feeds. */
export declare type LinkRole<TContent = never, TProperty extends string = never> = LinkRoleLeaf<TContent, TProperty>;
/**
 * Data type: Number.
 *
 * Usage guidelines:
 * - Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.
 * - Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
 */
export declare type Number = Float | Integer | number | `${number}`;
interface OrganizationRoleBase extends RoleBase {
    /** A number associated with a role in an organization, for example, the number on an athlete's jersey. */
    "https://schema.org/numberedPosition"?: SchemaValue<Number, "https://schema.org/numberedPosition">;
}
declare type OrganizationRoleLeaf<TContent, TProperty extends string> = OrganizationRoleBase & {
    "@type": "http://schema.org/OrganizationRole";
} & {
    [key in TProperty]: TContent;
};
/** A subclass of Role used to describe roles within organizations. */
export declare type OrganizationRole<TContent = never, TProperty extends string = never> = OrganizationRoleLeaf<TContent, TProperty> | EmployeeRole<TContent, TProperty>;
interface PerformanceRoleBase extends RoleBase {
    /** The name of a character played in some acting or performing role, i.e. in a PerformanceRole. */
    "https://schema.org/characterName"?: SchemaValue<Text, "https://schema.org/characterName">;
}
declare type PerformanceRoleLeaf<TContent, TProperty extends string> = PerformanceRoleBase & {
    "@type": "http://schema.org/PerformanceRole";
} & {
    [key in TProperty]: TContent;
};
/** A PerformanceRole is a Role that some entity places with regard to a theatrical performance, e.g. in a Movie, TVSeries etc. */
export declare type PerformanceRole<TContent = never, TProperty extends string = never> = PerformanceRoleLeaf<TContent, TProperty>;
interface RoleBase extends ThingBase {
    /** The end date and time of the item (in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}). */
    "https://schema.org/endDate"?: SchemaValue<Date | DateTime, "https://schema.org/endDate">;
    /**
     * A position played, performed or filled by a person or organization, as part of an organization. For example, an athlete in a SportsTeam might play in the position named 'Quarterback'.
     *
     * @deprecated Consider using https://schema.org/roleName instead.
     */
    "https://schema.org/namedPosition"?: SchemaValue<Text | URL, "https://schema.org/namedPosition">;
    /** A role played, performed or filled by a person or organization. For example, the team of creators for a comic book might fill the roles named 'inker', 'penciller', and 'letterer'; or an athlete in a SportsTeam might play in the position named 'Quarterback'. */
    "https://schema.org/roleName"?: SchemaValue<Text | URL, "https://schema.org/roleName">;
    /** The start date and time of the item (in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}). */
    "https://schema.org/startDate"?: SchemaValue<Date | DateTime, "https://schema.org/startDate">;
}
declare type RoleLeaf<TContent, TProperty extends string> = RoleBase & {
    "@type": "http://schema.org/Role";
} & {
    [key in TProperty]: TContent;
};
/**
 * Represents additional information about a relationship or property. For example a Role can be used to say that a 'member' role linking some SportsTeam to a player occurred during a particular time period. Or that a Person's 'actor' role in a Movie was for some particular characterName. Such properties can be attached to a Role entity, which is then associated with the main entities using ordinary properties like 'member' or 'actor'.
 *
 * See also {@link http://blog.schema.org/2014/06/introducing-role.html blog post}.
 */
export declare type Role<TContent = never, TProperty extends string = never> = RoleLeaf<TContent, TProperty> | LinkRole<TContent, TProperty> | OrganizationRole<TContent, TProperty> | PerformanceRole<TContent, TProperty>;
/** Data type: Text. */
export declare type Text = CssSelectorType | PronounceableText | URL | XPathType | string;
/** A point in time recurring on multiple days in the form hh:mm:ss[Z|(+|-)hh:mm] (see {@link http://www.w3.org/TR/xmlschema-2/#time XML schema for details}). */
export declare type Time = string;
/** The basic data types such as Integers, Strings, etc. */
export declare type DataType = Boolean | Date | DateTime | Number | Text | Time;
interface _3DModelBase extends MediaObjectBase {
    /** Whether the 3DModel allows resizing. For example, room layout applications often do not allow 3DModel elements to be resized to reflect reality. */
    "https://schema.org/isResizable"?: SchemaValue<Boolean, "https://schema.org/isResizable">;
}
interface _3DModelLeaf extends _3DModelBase {
    "@type": "https://schema.org/3DModel";
}
/** A 3D model represents some kind of 3D content, which may have {@link https://schema.org/encoding encoding}s in one or more {@link https://schema.org/MediaObject MediaObject}s. Many 3D formats are available (e.g. see {@link https://en.wikipedia.org/wiki/Category:3D_graphics_file_formats Wikipedia}); specific encoding formats can be represented using the {@link https://schema.org/encodingFormat encodingFormat} property applied to the relevant {@link https://schema.org/MediaObject MediaObject}. For the case of a single file published after Zip compression, the convention of appending '+zip' to the {@link https://schema.org/encodingFormat encodingFormat} can be used. Geospatial, AR/VR, artistic/animation, gaming, engineering and scientific content can all be represented using {@link https://schema.org/3DModel 3DModel}. */
export declare type _3DModel = _3DModelLeaf;
interface AboutPageLeaf extends WebPageBase {
    "@type": "https://schema.org/AboutPage";
}
/** Web page type: About page. */
export declare type AboutPage = AboutPageLeaf;
interface AcceptActionLeaf extends ActionBase {
    "@type": "https://schema.org/AcceptAction";
}
/**
 * The act of committing to/adopting an object.
 *
 * Related actions:
 * - {@link https://schema.org/RejectAction RejectAction}: The antonym of AcceptAction.
 */
export declare type AcceptAction = AcceptActionLeaf;
interface AccommodationBase extends PlaceBase {
    /** Category of an {@link https://schema.org/Accommodation Accommodation}, following real estate conventions e.g. RESO (see {@link https://ddwiki.reso.org/display/DDW17/PropertySubType+Field PropertySubType}, and {@link https://ddwiki.reso.org/display/DDW17/PropertyType+Field PropertyType} fields for suggested values). */
    "https://schema.org/accommodationCategory"?: SchemaValue<Text, "https://schema.org/accommodationCategory">;
    /** A floorplan of some {@link https://schema.org/Accommodation Accommodation}. */
    "https://schema.org/accommodationFloorPlan"?: SchemaValue<FloorPlan | IdReference, "https://schema.org/accommodationFloorPlan">;
    /** An amenity feature (e.g. a characteristic or service) of the Accommodation. This generic property does not make a statement about whether the feature is included in an offer for the main accommodation or available at extra costs. */
    "https://schema.org/amenityFeature"?: SchemaValue<LocationFeatureSpecification | IdReference, "https://schema.org/amenityFeature">;
    /** The floor level for an {@link https://schema.org/Accommodation Accommodation} in a multi-storey building. Since counting systems {@link https://en.wikipedia.org/wiki/Storey#Consecutive_number_floor_designations vary internationally}, the local system should be used where possible. */
    "https://schema.org/floorLevel"?: SchemaValue<Text, "https://schema.org/floorLevel">;
    /** The size of the accommodation, e.g. in square meter or squarefoot. Typical unit code(s): MTK for square meter, FTK for square foot, or YDK for square yard */
    "https://schema.org/floorSize"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/floorSize">;
    /** Length of the lease for some {@link https://schema.org/Accommodation Accommodation}, either particular to some {@link https://schema.org/Offer Offer} or in some cases intrinsic to the property. */
    "https://schema.org/leaseLength"?: SchemaValue<Duration | QuantitativeValue | IdReference, "https://schema.org/leaseLength">;
    /** The total integer number of bathrooms in a some {@link https://schema.org/Accommodation Accommodation}, following real estate conventions as {@link https://ddwiki.reso.org/display/DDW17/BathroomsTotalInteger+Field documented in RESO}: "The simple sum of the number of bathrooms. For example for a property with two Full Bathrooms and one Half Bathroom, the Bathrooms Total Integer will be 3.". See also {@link https://schema.org/numberOfRooms numberOfRooms}. */
    "https://schema.org/numberOfBathroomsTotal"?: SchemaValue<Integer, "https://schema.org/numberOfBathroomsTotal">;
    /** The total integer number of bedrooms in a some {@link https://schema.org/Accommodation Accommodation}, {@link https://schema.org/ApartmentComplex ApartmentComplex} or {@link https://schema.org/FloorPlan FloorPlan}. */
    "https://schema.org/numberOfBedrooms"?: SchemaValue<Number | QuantitativeValue | IdReference, "https://schema.org/numberOfBedrooms">;
    /** Number of full bathrooms - The total number of full and \u00BE bathrooms in an {@link https://schema.org/Accommodation Accommodation}. This corresponds to the {@link https://ddwiki.reso.org/display/DDW17/BathroomsFull+Field BathroomsFull field in RESO}. */
    "https://schema.org/numberOfFullBathrooms"?: SchemaValue<Number, "https://schema.org/numberOfFullBathrooms">;
    /** Number of partial bathrooms - The total number of half and \u00BC bathrooms in an {@link https://schema.org/Accommodation Accommodation}. This corresponds to the {@link https://ddwiki.reso.org/display/DDW17/BathroomsPartial+Field BathroomsPartial field in RESO}. */
    "https://schema.org/numberOfPartialBathrooms"?: SchemaValue<Number, "https://schema.org/numberOfPartialBathrooms">;
    /** The number of rooms (excluding bathrooms and closets) of the accommodation or lodging business. Typical unit code(s): ROM for room or C62 for no unit. The type of room can be put in the unitText property of the QuantitativeValue. */
    "https://schema.org/numberOfRooms"?: SchemaValue<Number | QuantitativeValue | IdReference, "https://schema.org/numberOfRooms">;
    /** Indications regarding the permitted usage of the accommodation. */
    "https://schema.org/permittedUsage"?: SchemaValue<Text, "https://schema.org/permittedUsage">;
    /** Indicates whether pets are allowed to enter the accommodation or lodging business. More detailed information can be put in a text value. */
    "https://schema.org/petsAllowed"?: SchemaValue<Boolean | Text, "https://schema.org/petsAllowed">;
    /** A page providing information on how to book a tour of some {@link https://schema.org/Place Place}, such as an {@link https://schema.org/Accommodation Accommodation} or {@link https://schema.org/ApartmentComplex ApartmentComplex} in a real estate setting, as well as other kinds of tours as appropriate. */
    "https://schema.org/tourBookingPage"?: SchemaValue<URL, "https://schema.org/tourBookingPage">;
    /** The year an {@link https://schema.org/Accommodation Accommodation} was constructed. This corresponds to the {@link https://ddwiki.reso.org/display/DDW17/YearBuilt+Field YearBuilt field in RESO}. */
    "https://schema.org/yearBuilt"?: SchemaValue<Number, "https://schema.org/yearBuilt">;
}
interface AccommodationLeaf extends AccommodationBase {
    "@type": "https://schema.org/Accommodation";
}
/**
 * An accommodation is a place that can accommodate human beings, e.g. a hotel room, a camping pitch, or a meeting room. Many accommodations are for overnight stays, but this is not a mandatory requirement. For more specific types of accommodations not defined in schema.org, one can use additionalType with external vocabularies.
 *
 * See also the {@link /docs/hotels.html dedicated document on the use of schema.org for marking up hotels and other forms of accommodations}.
 */
export declare type Accommodation = AccommodationLeaf | Apartment | CampingPitch | House | Room | Suite | string;
interface AccountingServiceLeaf extends FinancialServiceBase {
    "@type": "https://schema.org/AccountingService";
}
/**
 * Accountancy business.
 *
 * As a {@link https://schema.org/LocalBusiness LocalBusiness} it can be described as a {@link https://schema.org/provider provider} of one or more {@link https://schema.org/Service Service}\(s).
 */
export declare type AccountingService = AccountingServiceLeaf | string;
interface AchieveActionLeaf extends ActionBase {
    "@type": "https://schema.org/AchieveAction";
}
/** The act of accomplishing something via previous efforts. It is an instantaneous action rather than an ongoing process. */
export declare type AchieveAction = AchieveActionLeaf | LoseAction | TieAction | WinAction;
interface ActionBase extends ThingBase {
    /** Indicates the current disposition of the Action. */
    "https://schema.org/actionStatus"?: SchemaValue<ActionStatusType | IdReference, "https://schema.org/actionStatus">;
    /** The direct performer or driver of the action (animate or inanimate). e.g. _John_ wrote a book. */
    "https://schema.org/agent"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/agent">;
    /**
     * The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. e.g. John wrote a book from January to _December_. For media, including audio and video, it's the time offset of the end of a clip within a larger file.
     *
     * Note that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
     */
    "https://schema.org/endTime"?: SchemaValue<DateTime | Time, "https://schema.org/endTime">;
    /** For failed actions, more information on the cause of the failure. */
    "https://schema.org/error"?: SchemaValue<Thing | IdReference, "https://schema.org/error">;
    /** The object that helped the agent perform the action. e.g. John wrote a book with _a pen_. */
    "https://schema.org/instrument"?: SchemaValue<Thing | IdReference, "https://schema.org/instrument">;
    /** The location of, for example, where an event is happening, where an organization is located, or where an action takes place. */
    "https://schema.org/location"?: SchemaValue<Place | PostalAddress | Text | VirtualLocation | IdReference, "https://schema.org/location">;
    /** The object upon which the action is carried out, whose state is kept intact or changed. Also known as the semantic roles patient, affected or undergoer (which change their state) or theme (which doesn't). e.g. John read _a book_. */
    "https://schema.org/object"?: SchemaValue<Thing | IdReference, "https://schema.org/object">;
    /** Other co-agents that participated in the action indirectly. e.g. John wrote a book with _Steve_. */
    "https://schema.org/participant"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/participant">;
    /** The result produced in the action. e.g. John wrote _a book_. */
    "https://schema.org/result"?: SchemaValue<Thing | IdReference, "https://schema.org/result">;
    /**
     * The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. e.g. John wrote a book from _January_ to December. For media, including audio and video, it's the time offset of the start of a clip within a larger file.
     *
     * Note that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
     */
    "https://schema.org/startTime"?: SchemaValue<DateTime | Time, "https://schema.org/startTime">;
    /** Indicates a target EntryPoint for an Action. */
    "https://schema.org/target"?: SchemaValue<EntryPoint | IdReference, "https://schema.org/target">;
}
interface ActionLeaf extends ActionBase {
    "@type": "https://schema.org/Action";
}
/**
 * An action performed by a direct agent and indirect participants upon a direct object. Optionally happens at a location with the help of an inanimate instrument. The execution of the action may produce a result. Specific action sub-type documentation specifies the exact expectation of each argument/role.
 *
 * See also {@link http://blog.schema.org/2014/04/announcing-schemaorg-actions.html blog post} and {@link https://schema.org/docs/actions.html Actions overview document}.
 */
export declare type Action = ActionLeaf | AchieveAction | AssessAction | ConsumeAction | ControlAction | CreateAction | FindAction | InteractAction | MoveAction | OrganizeAction | PlayAction | SearchAction | SeekToAction | SolveMathAction | TradeAction | TransferAction | UpdateAction;
interface ActionAccessSpecificationBase extends ThingBase {
    /** The end of the availability of the product or service included in the offer. */
    "https://schema.org/availabilityEnds"?: SchemaValue<Date | DateTime | Time, "https://schema.org/availabilityEnds">;
    /** The beginning of the availability of the product or service included in the offer. */
    "https://schema.org/availabilityStarts"?: SchemaValue<Date | DateTime | Time, "https://schema.org/availabilityStarts">;
    /** A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy. */
    "https://schema.org/category"?: SchemaValue<PhysicalActivityCategory | Text | Thing | URL | IdReference, "https://schema.org/category">;
    /**
     * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is valid.
     *
     * See also {@link https://schema.org/ineligibleRegion ineligibleRegion}.
     */
    "https://schema.org/eligibleRegion"?: SchemaValue<GeoShape | Place | Text | IdReference, "https://schema.org/eligibleRegion">;
    /** An Offer which must be accepted before the user can perform the Action. For example, the user may need to buy a movie before being able to watch it. */
    "https://schema.org/expectsAcceptanceOf"?: SchemaValue<Offer | IdReference, "https://schema.org/expectsAcceptanceOf">;
    /**
     * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is not valid, e.g. a region where the transaction is not allowed.
     *
     * See also {@link https://schema.org/eligibleRegion eligibleRegion}.
     */
    "https://schema.org/ineligibleRegion"?: SchemaValue<GeoShape | Place | Text | IdReference, "https://schema.org/ineligibleRegion">;
    /** Indicates if use of the media require a subscription (either paid or free). Allowed values are `true` or `false` (note that an earlier version had 'yes', 'no'). */
    "https://schema.org/requiresSubscription"?: SchemaValue<Boolean | MediaSubscription | IdReference, "https://schema.org/requiresSubscription">;
}
interface ActionAccessSpecificationLeaf extends ActionAccessSpecificationBase {
    "@type": "https://schema.org/ActionAccessSpecification";
}
/** A set of requirements that a must be fulfilled in order to perform an Action. */
export declare type ActionAccessSpecification = ActionAccessSpecificationLeaf;
interface ActionStatusTypeLeaf extends EnumerationBase {
    "@type": "https://schema.org/ActionStatusType";
}
/** The status of an Action. */
export declare type ActionStatusType = "https://schema.org/ActiveActionStatus" | "https://schema.org/CompletedActionStatus" | "https://schema.org/FailedActionStatus" | "https://schema.org/PotentialActionStatus" | ActionStatusTypeLeaf;
interface ActivateActionLeaf extends ActionBase {
    "@type": "https://schema.org/ActivateAction";
}
/** The act of starting or activating a device or application (e.g. starting a timer or turning on a flashlight). */
export declare type ActivateAction = ActivateActionLeaf;
interface AddActionLeaf extends UpdateActionBase {
    "@type": "https://schema.org/AddAction";
}
/** The act of editing by adding an object to a collection. */
export declare type AddAction = AddActionLeaf | InsertAction;
interface AdministrativeAreaLeaf extends PlaceBase {
    "@type": "https://schema.org/AdministrativeArea";
}
/** A geographical region, typically under the jurisdiction of a particular government. */
export declare type AdministrativeArea = AdministrativeAreaLeaf | City | Country | SchoolDistrict | State | string;
interface AdultEntertainmentLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/AdultEntertainment";
}
/** An adult entertainment establishment. */
export declare type AdultEntertainment = AdultEntertainmentLeaf | string;
interface AdvertiserContentArticleLeaf extends ArticleBase {
    "@type": "https://schema.org/AdvertiserContentArticle";
}
/** An {@link https://schema.org/Article Article} that an external entity has paid to place or to produce to its specifications. Includes {@link https://en.wikipedia.org/wiki/Advertorial advertorials}, sponsored content, native advertising and other paid content. */
export declare type AdvertiserContentArticle = AdvertiserContentArticleLeaf;
interface AggregateOfferBase extends OfferBase {
    /**
     * The highest price of all offers available.
     *
     * Usage guidelines:
     * - Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.
     * - Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
     */
    "https://schema.org/highPrice"?: SchemaValue<Number | Text, "https://schema.org/highPrice">;
    /**
     * The lowest price of all offers available.
     *
     * Usage guidelines:
     * - Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.
     * - Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
     */
    "https://schema.org/lowPrice"?: SchemaValue<Number | Text, "https://schema.org/lowPrice">;
    /** The number of offers for the product. */
    "https://schema.org/offerCount"?: SchemaValue<Integer, "https://schema.org/offerCount">;
    /** An offer to provide this item—for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use {@link https://schema.org/businessFunction businessFunction} to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a {@link https://schema.org/Demand Demand}. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer. */
    "https://schema.org/offers"?: SchemaValue<Demand | Offer | IdReference, "https://schema.org/offers">;
}
interface AggregateOfferLeaf extends AggregateOfferBase {
    "@type": "https://schema.org/AggregateOffer";
}
/**
 * When a single product is associated with multiple offers (for example, the same pair of shoes is offered by different merchants), then AggregateOffer can be used.
 *
 * Note: AggregateOffers are normally expected to associate multiple offers that all share the same defined {@link https://schema.org/businessFunction businessFunction} value, or default to http://purl.org/goodrelations/v1#Sell if businessFunction is not explicitly defined.
 */
export declare type AggregateOffer = AggregateOfferLeaf;
interface AggregateRatingBase extends RatingBase {
    /** The item that is being reviewed/rated. */
    "https://schema.org/itemReviewed"?: SchemaValue<Thing | IdReference, "https://schema.org/itemReviewed">;
    /** The count of total number of ratings. */
    "https://schema.org/ratingCount"?: SchemaValue<Integer, "https://schema.org/ratingCount">;
    /** The count of total number of reviews. */
    "https://schema.org/reviewCount"?: SchemaValue<Integer, "https://schema.org/reviewCount">;
}
interface AggregateRatingLeaf extends AggregateRatingBase {
    "@type": "https://schema.org/AggregateRating";
}
/** The average rating based on multiple ratings or reviews. */
export declare type AggregateRating = AggregateRatingLeaf | EmployerAggregateRating;
interface AgreeActionLeaf extends ActionBase {
    "@type": "https://schema.org/AgreeAction";
}
/** The act of expressing a consistency of opinion with the object. An agent agrees to/about an object (a proposition, topic or theme) with participants. */
export declare type AgreeAction = AgreeActionLeaf;
interface AirlineBase extends OrganizationBase {
    /** The type of boarding policy used by the airline (e.g. zone-based or group-based). */
    "https://schema.org/boardingPolicy"?: SchemaValue<BoardingPolicyType | IdReference, "https://schema.org/boardingPolicy">;
    /** IATA identifier for an airline or airport. */
    "https://schema.org/iataCode"?: SchemaValue<Text, "https://schema.org/iataCode">;
}
interface AirlineLeaf extends AirlineBase {
    "@type": "https://schema.org/Airline";
}
/** An organization that provides flights for passengers. */
export declare type Airline = AirlineLeaf | string;
interface AirportBase extends CivicStructureBase {
    /** IATA identifier for an airline or airport. */
    "https://schema.org/iataCode"?: SchemaValue<Text, "https://schema.org/iataCode">;
    /** ICAO identifier for an airport. */
    "https://schema.org/icaoCode"?: SchemaValue<Text, "https://schema.org/icaoCode">;
}
interface AirportLeaf extends AirportBase {
    "@type": "https://schema.org/Airport";
}
/** An airport. */
export declare type Airport = AirportLeaf | string;
interface AlignmentObjectBase extends ThingBase {
    /** A category of alignment between the learning resource and the framework node. Recommended values include: 'requires', 'textComplexity', 'readingLevel', and 'educationalSubject'. */
    "https://schema.org/alignmentType"?: SchemaValue<Text, "https://schema.org/alignmentType">;
    /** The framework to which the resource being described is aligned. */
    "https://schema.org/educationalFramework"?: SchemaValue<Text, "https://schema.org/educationalFramework">;
    /** The description of a node in an established educational framework. */
    "https://schema.org/targetDescription"?: SchemaValue<Text, "https://schema.org/targetDescription">;
    /** The name of a node in an established educational framework. */
    "https://schema.org/targetName"?: SchemaValue<Text, "https://schema.org/targetName">;
    /** The URL of a node in an established educational framework. */
    "https://schema.org/targetUrl"?: SchemaValue<URL, "https://schema.org/targetUrl">;
}
interface AlignmentObjectLeaf extends AlignmentObjectBase {
    "@type": "https://schema.org/AlignmentObject";
}
/**
 * An intangible item that describes an alignment between a learning resource and a node in an educational framework.
 *
 * Should not be used where the nature of the alignment can be described using a simple property, for example to express that a resource {@link https://schema.org/teaches teaches} or {@link https://schema.org/assesses assesses} a competency.
 */
export declare type AlignmentObject = AlignmentObjectLeaf;
interface AllocateActionLeaf extends ActionBase {
    "@type": "https://schema.org/AllocateAction";
}
/** The act of organizing tasks/objects/events by associating resources to it. */
export declare type AllocateAction = AllocateActionLeaf | AcceptAction | AssignAction | AuthorizeAction | RejectAction;
interface AmpStoryLeaf extends CreativeWorkBase {
    "@type": "https://schema.org/AmpStory";
}
/** A creative work with a visual storytelling format intended to be viewed online, particularly on mobile devices. */
export declare type AmpStory = AmpStoryLeaf;
interface AMRadioChannelLeaf extends BroadcastChannelBase {
    "@type": "https://schema.org/AMRadioChannel";
}
/** A radio channel that uses AM. */
export declare type AMRadioChannel = AMRadioChannelLeaf;
interface AmusementParkLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/AmusementPark";
}
/** An amusement park. */
export declare type AmusementPark = AmusementParkLeaf | string;
interface AnalysisNewsArticleLeaf extends NewsArticleBase {
    "@type": "https://schema.org/AnalysisNewsArticle";
}
/** An AnalysisNewsArticle is a {@link https://schema.org/NewsArticle NewsArticle} that, while based on factual reporting, incorporates the expertise of the author/producer, offering interpretations and conclusions. */
export declare type AnalysisNewsArticle = AnalysisNewsArticleLeaf;
interface AnatomicalStructureBase extends MedicalEntityBase {
    /** If applicable, a description of the pathophysiology associated with the anatomical system, including potential abnormal changes in the mechanical, physical, and biochemical functions of the system. */
    "https://schema.org/associatedPathophysiology"?: SchemaValue<Text, "https://schema.org/associatedPathophysiology">;
    /** Location in the body of the anatomical structure. */
    "https://schema.org/bodyLocation"?: SchemaValue<Text, "https://schema.org/bodyLocation">;
    /** Other anatomical structures to which this structure is connected. */
    "https://schema.org/connectedTo"?: SchemaValue<AnatomicalStructure | IdReference, "https://schema.org/connectedTo">;
    /** An image containing a diagram that illustrates the structure and/or its component substructures and/or connections with other structures. */
    "https://schema.org/diagram"?: SchemaValue<ImageObject | IdReference, "https://schema.org/diagram">;
    /** The anatomical or organ system that this structure is part of. */
    "https://schema.org/partOfSystem"?: SchemaValue<AnatomicalSystem | IdReference, "https://schema.org/partOfSystem">;
    /** A medical condition associated with this anatomy. */
    "https://schema.org/relatedCondition"?: SchemaValue<MedicalCondition | IdReference, "https://schema.org/relatedCondition">;
    /** A medical therapy related to this anatomy. */
    "https://schema.org/relatedTherapy"?: SchemaValue<MedicalTherapy | IdReference, "https://schema.org/relatedTherapy">;
    /** Component (sub-)structure(s) that comprise this anatomical structure. */
    "https://schema.org/subStructure"?: SchemaValue<AnatomicalStructure | IdReference, "https://schema.org/subStructure">;
}
interface AnatomicalStructureLeaf extends AnatomicalStructureBase {
    "@type": "https://schema.org/AnatomicalStructure";
}
/** Any part of the human body, typically a component of an anatomical system. Organs, tissues, and cells are all anatomical structures. */
export declare type AnatomicalStructure = AnatomicalStructureLeaf | Bone | BrainStructure | Joint | Ligament | Muscle | Nerve | Vessel;
interface AnatomicalSystemBase extends MedicalEntityBase {
    /** If applicable, a description of the pathophysiology associated with the anatomical system, including potential abnormal changes in the mechanical, physical, and biochemical functions of the system. */
    "https://schema.org/associatedPathophysiology"?: SchemaValue<Text, "https://schema.org/associatedPathophysiology">;
    /** Specifying something physically contained by something else. Typically used here for the underlying anatomical structures, such as organs, that comprise the anatomical system. */
    "https://schema.org/comprisedOf"?: SchemaValue<AnatomicalStructure | AnatomicalSystem | IdReference, "https://schema.org/comprisedOf">;
    /** A medical condition associated with this anatomy. */
    "https://schema.org/relatedCondition"?: SchemaValue<MedicalCondition | IdReference, "https://schema.org/relatedCondition">;
    /** Related anatomical structure(s) that are not part of the system but relate or connect to it, such as vascular bundles associated with an organ system. */
    "https://schema.org/relatedStructure"?: SchemaValue<AnatomicalStructure | IdReference, "https://schema.org/relatedStructure">;
    /** A medical therapy related to this anatomy. */
    "https://schema.org/relatedTherapy"?: SchemaValue<MedicalTherapy | IdReference, "https://schema.org/relatedTherapy">;
}
interface AnatomicalSystemLeaf extends AnatomicalSystemBase {
    "@type": "https://schema.org/AnatomicalSystem";
}
/** An anatomical system is a group of anatomical structures that work together to perform a certain task. Anatomical systems, such as organ systems, are one organizing principle of anatomy, and can includes circulatory, digestive, endocrine, integumentary, immune, lymphatic, muscular, nervous, reproductive, respiratory, skeletal, urinary, vestibular, and other systems. */
export declare type AnatomicalSystem = AnatomicalSystemLeaf;
interface AnimalShelterLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/AnimalShelter";
}
/** Animal shelter. */
export declare type AnimalShelter = AnimalShelterLeaf | string;
interface AnswerBase extends CommentBase {
    /** A step-by-step or full explanation about Answer. Can outline how this Answer was achieved or contain more broad clarification or statement about it. */
    "https://schema.org/answerExplanation"?: SchemaValue<Comment | WebContent | IdReference, "https://schema.org/answerExplanation">;
}
interface AnswerLeaf extends AnswerBase {
    "@type": "https://schema.org/Answer";
}
/** An answer offered to a question; perhaps correct, perhaps opinionated or wrong. */
export declare type Answer = AnswerLeaf;
interface ApartmentBase extends AccommodationBase {
    /** The number of rooms (excluding bathrooms and closets) of the accommodation or lodging business. Typical unit code(s): ROM for room or C62 for no unit. The type of room can be put in the unitText property of the QuantitativeValue. */
    "https://schema.org/numberOfRooms"?: SchemaValue<Number | QuantitativeValue | IdReference, "https://schema.org/numberOfRooms">;
    /** The allowed total occupancy for the accommodation in persons (including infants etc). For individual accommodations, this is not necessarily the legal maximum but defines the permitted usage as per the contractual agreement (e.g. a double room used by a single person). Typical unit code(s): C62 for person */
    "https://schema.org/occupancy"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/occupancy">;
}
interface ApartmentLeaf extends ApartmentBase {
    "@type": "https://schema.org/Apartment";
}
/** An apartment (in American English) or flat (in British English) is a self-contained housing unit (a type of residential real estate) that occupies only part of a building (Source: Wikipedia, the free encyclopedia, see {@link http://en.wikipedia.org/wiki/Apartment http://en.wikipedia.org/wiki/Apartment}). */
export declare type Apartment = ApartmentLeaf | string;
interface ApartmentComplexBase extends ResidenceBase {
    /** Indicates the total (available plus unavailable) number of accommodation units in an {@link https://schema.org/ApartmentComplex ApartmentComplex}, or the number of accommodation units for a specific {@link https://schema.org/FloorPlan FloorPlan} (within its specific {@link https://schema.org/ApartmentComplex ApartmentComplex}). See also {@link https://schema.org/numberOfAvailableAccommodationUnits numberOfAvailableAccommodationUnits}. */
    "https://schema.org/numberOfAccommodationUnits"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/numberOfAccommodationUnits">;
    /** Indicates the number of available accommodation units in an {@link https://schema.org/ApartmentComplex ApartmentComplex}, or the number of accommodation units for a specific {@link https://schema.org/FloorPlan FloorPlan} (within its specific {@link https://schema.org/ApartmentComplex ApartmentComplex}). See also {@link https://schema.org/numberOfAccommodationUnits numberOfAccommodationUnits}. */
    "https://schema.org/numberOfAvailableAccommodationUnits"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/numberOfAvailableAccommodationUnits">;
    /** The total integer number of bedrooms in a some {@link https://schema.org/Accommodation Accommodation}, {@link https://schema.org/ApartmentComplex ApartmentComplex} or {@link https://schema.org/FloorPlan FloorPlan}. */
    "https://schema.org/numberOfBedrooms"?: SchemaValue<Number | QuantitativeValue | IdReference, "https://schema.org/numberOfBedrooms">;
    /** Indicates whether pets are allowed to enter the accommodation or lodging business. More detailed information can be put in a text value. */
    "https://schema.org/petsAllowed"?: SchemaValue<Boolean | Text, "https://schema.org/petsAllowed">;
    /** A page providing information on how to book a tour of some {@link https://schema.org/Place Place}, such as an {@link https://schema.org/Accommodation Accommodation} or {@link https://schema.org/ApartmentComplex ApartmentComplex} in a real estate setting, as well as other kinds of tours as appropriate. */
    "https://schema.org/tourBookingPage"?: SchemaValue<URL, "https://schema.org/tourBookingPage">;
}
interface ApartmentComplexLeaf extends ApartmentComplexBase {
    "@type": "https://schema.org/ApartmentComplex";
}
/** Residence type: Apartment complex. */
export declare type ApartmentComplex = ApartmentComplexLeaf | string;
interface APIReferenceBase extends TechArticleBase {
    /**
     * Library file name e.g., mscorlib.dll, system.web.dll.
     *
     * @deprecated Consider using https://schema.org/executableLibraryName instead.
     */
    "https://schema.org/assembly"?: SchemaValue<Text, "https://schema.org/assembly">;
    /** Associated product/technology version. e.g., .NET Framework 4.5. */
    "https://schema.org/assemblyVersion"?: SchemaValue<Text, "https://schema.org/assemblyVersion">;
    /** Library file name e.g., mscorlib.dll, system.web.dll. */
    "https://schema.org/executableLibraryName"?: SchemaValue<Text, "https://schema.org/executableLibraryName">;
    /** Indicates whether API is managed or unmanaged. */
    "https://schema.org/programmingModel"?: SchemaValue<Text, "https://schema.org/programmingModel">;
    /** Type of app development: phone, Metro style, desktop, XBox, etc. */
    "https://schema.org/targetPlatform"?: SchemaValue<Text, "https://schema.org/targetPlatform">;
}
interface APIReferenceLeaf extends APIReferenceBase {
    "@type": "https://schema.org/APIReference";
}
/** Reference documentation for application programming interfaces (APIs). */
export declare type APIReference = APIReferenceLeaf;
interface AppendActionLeaf extends InsertActionBase {
    "@type": "https://schema.org/AppendAction";
}
/** The act of inserting at the end if an ordered collection. */
export declare type AppendAction = AppendActionLeaf;
interface ApplyActionLeaf extends ActionBase {
    "@type": "https://schema.org/ApplyAction";
}
/**
 * The act of registering to an organization/service without the guarantee to receive it.
 *
 * Related actions:
 * - {@link https://schema.org/RegisterAction RegisterAction}: Unlike RegisterAction, ApplyAction has no guarantees that the application will be accepted.
 */
export declare type ApplyAction = ApplyActionLeaf;
interface ApprovedIndicationLeaf extends MedicalEntityBase {
    "@type": "https://schema.org/ApprovedIndication";
}
/** An indication for a medical therapy that has been formally specified or approved by a regulatory body that regulates use of the therapy; for example, the US FDA approves indications for most drugs in the US. */
export declare type ApprovedIndication = ApprovedIndicationLeaf;
interface AquariumLeaf extends CivicStructureBase {
    "@type": "https://schema.org/Aquarium";
}
/** Aquarium. */
export declare type Aquarium = AquariumLeaf | string;
interface ArchiveComponentBase extends CreativeWorkBase {
    /** {@link https://schema.org/ArchiveOrganization ArchiveOrganization} that holds, keeps or maintains the {@link https://schema.org/ArchiveComponent ArchiveComponent}. */
    "https://schema.org/holdingArchive"?: SchemaValue<ArchiveOrganization | IdReference, "https://schema.org/holdingArchive">;
    /** Current location of the item. */
    "https://schema.org/itemLocation"?: SchemaValue<Place | PostalAddress | Text | IdReference, "https://schema.org/itemLocation">;
}
interface ArchiveComponentLeaf extends ArchiveComponentBase {
    "@type": "https://schema.org/ArchiveComponent";
}
/** An intangible type to be applied to any archive content, carrying with it a set of properties required to describe archival items and collections. */
export declare type ArchiveComponent = ArchiveComponentLeaf;
interface ArchiveOrganizationBase extends LocalBusinessBase {
    /** Collection, {@link https://en.wikipedia.org/wiki/Fonds fonds}, or item held, kept or maintained by an {@link https://schema.org/ArchiveOrganization ArchiveOrganization}. */
    "https://schema.org/archiveHeld"?: SchemaValue<ArchiveComponent | IdReference, "https://schema.org/archiveHeld">;
}
interface ArchiveOrganizationLeaf extends ArchiveOrganizationBase {
    "@type": "https://schema.org/ArchiveOrganization";
}
/** An organization with archival holdings. An organization which keeps and preserves archival material and typically makes it accessible to the public. */
export declare type ArchiveOrganization = ArchiveOrganizationLeaf | string;
interface ArriveActionLeaf extends MoveActionBase {
    "@type": "https://schema.org/ArriveAction";
}
/** The act of arriving at a place. An agent arrives at a destination from a fromLocation, optionally with participants. */
export declare type ArriveAction = ArriveActionLeaf;
interface ArteryBase extends AnatomicalStructureBase {
    /** The branches that comprise the arterial structure. */
    "https://schema.org/arterialBranch"?: SchemaValue<AnatomicalStructure | IdReference, "https://schema.org/arterialBranch">;
    /** The area to which the artery supplies blood. */
    "https://schema.org/supplyTo"?: SchemaValue<AnatomicalStructure | IdReference, "https://schema.org/supplyTo">;
}
interface ArteryLeaf extends ArteryBase {
    "@type": "https://schema.org/Artery";
}
/** A type of blood vessel that specifically carries blood away from the heart. */
export declare type Artery = ArteryLeaf;
interface ArtGalleryLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/ArtGallery";
}
/** An art gallery. */
export declare type ArtGallery = ArtGalleryLeaf | string;
interface ArticleBase extends CreativeWorkBase {
    /** The actual body of the article. */
    "https://schema.org/articleBody"?: SchemaValue<Text, "https://schema.org/articleBody">;
    /** Articles may belong to one or more 'sections' in a magazine or newspaper, such as Sports, Lifestyle, etc. */
    "https://schema.org/articleSection"?: SchemaValue<Text, "https://schema.org/articleSection">;
    /** For an {@link https://schema.org/Article Article}, typically a {@link https://schema.org/NewsArticle NewsArticle}, the backstory property provides a textual summary giving a brief explanation of why and how an article was created. In a journalistic setting this could include information about reporting process, methods, interviews, data sources, etc. */
    "https://schema.org/backstory"?: SchemaValue<CreativeWork | Text | IdReference, "https://schema.org/backstory">;
    /** The page on which the work ends; for example "138" or "xvi". */
    "https://schema.org/pageEnd"?: SchemaValue<Integer | Text, "https://schema.org/pageEnd">;
    /** The page on which the work starts; for example "135" or "xiii". */
    "https://schema.org/pageStart"?: SchemaValue<Integer | Text, "https://schema.org/pageStart">;
    /** Any description of pages that is not separated into pageStart and pageEnd; for example, "1-6, 9, 55" or "10-12, 46-49". */
    "https://schema.org/pagination"?: SchemaValue<Text, "https://schema.org/pagination">;
    /**
     * Indicates sections of a Web page that are particularly 'speakable' in the sense of being highlighted as being especially appropriate for text-to-speech conversion. Other sections of a page may also be usefully spoken in particular circumstances; the 'speakable' property serves to indicate the parts most likely to be generally useful for speech.
     *
     * The _speakable_ property can be repeated an arbitrary number of times, with three kinds of possible 'content-locator' values:
     *
     * 1.) _id-value_ URL references - uses _id-value_ of an element in the page being annotated. The simplest use of _speakable_ has (potentially relative) URL values, referencing identified sections of the document concerned.
     *
     * 2.) CSS Selectors - addresses content in the annotated page, eg. via class attribute. Use the {@link https://schema.org/cssSelector cssSelector} property.
     *
     * 3.) XPaths - addresses content via XPaths (assuming an XML view of the content). Use the {@link https://schema.org/xpath xpath} property.
     *
     * For more sophisticated markup of speakable sections beyond simple ID references, either CSS selectors or XPath expressions to pick out document section(s) as speakable. For this we define a supporting type, {@link https://schema.org/SpeakableSpecification SpeakableSpecification} which is defined to be a possible value of the _speakable_ property.
     */
    "https://schema.org/speakable"?: SchemaValue<SpeakableSpecification | URL | IdReference, "https://schema.org/speakable">;
    /** The number of words in the text of the Article. */
    "https://schema.org/wordCount"?: SchemaValue<Integer, "https://schema.org/wordCount">;
}
interface ArticleLeaf extends ArticleBase {
    "@type": "https://schema.org/Article";
}
/**
 * An article, such as a news article or piece of investigative report. Newspapers and magazines have articles of many different types and this is intended to cover them all.
 *
 * See also {@link http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html blog post}.
 */
export declare type Article = ArticleLeaf | AdvertiserContentArticle | NewsArticle | Report | SatiricalArticle | ScholarlyArticle | SocialMediaPosting | TechArticle;
interface AskActionBase extends CommunicateActionBase {
    /** A sub property of object. A question. */
    "https://schema.org/question"?: SchemaValue<Question | IdReference, "https://schema.org/question">;
}
interface AskActionLeaf extends AskActionBase {
    "@type": "https://schema.org/AskAction";
}
/**
 * The act of posing a question / favor to someone.
 *
 * Related actions:
 * - {@link https://schema.org/ReplyAction ReplyAction}: Appears generally as a response to AskAction.
 */
export declare type AskAction = AskActionLeaf;
interface AskPublicNewsArticleLeaf extends NewsArticleBase {
    "@type": "https://schema.org/AskPublicNewsArticle";
}
/** A {@link https://schema.org/NewsArticle NewsArticle} expressing an open call by a {@link https://schema.org/NewsMediaOrganization NewsMediaOrganization} asking the public for input, insights, clarifications, anecdotes, documentation, etc., on an issue, for reporting purposes. */
export declare type AskPublicNewsArticle = AskPublicNewsArticleLeaf;
interface AssessActionLeaf extends ActionBase {
    "@type": "https://schema.org/AssessAction";
}
/** The act of forming one's opinion, reaction or sentiment. */
export declare type AssessAction = AssessActionLeaf | ChooseAction | IgnoreAction | ReactAction | ReviewAction;
interface AssignActionLeaf extends ActionBase {
    "@type": "https://schema.org/AssignAction";
}
/** The act of allocating an action/event/task to some destination (someone or something). */
export declare type AssignAction = AssignActionLeaf;
interface AtlasLeaf extends CreativeWorkBase {
    "@type": "https://schema.org/Atlas";
}
/** A collection or bound volume of maps, charts, plates or tables, physical or in media form illustrating any subject. */
export declare type Atlas = AtlasLeaf;
interface AttorneyLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/Attorney";
}
/**
 * Professional service: Attorney.
 *
 * This type is deprecated - {@link https://schema.org/LegalService LegalService} is more inclusive and less ambiguous.
 */
export declare type Attorney = AttorneyLeaf | string;
interface AudienceBase extends ThingBase {
    /** The target group associated with a given audience (e.g. veterans, car owners, musicians, etc.). */
    "https://schema.org/audienceType"?: SchemaValue<Text, "https://schema.org/audienceType">;
    /** The geographic area associated with the audience. */
    "https://schema.org/geographicArea"?: SchemaValue<AdministrativeArea | IdReference, "https://schema.org/geographicArea">;
}
interface AudienceLeaf extends AudienceBase {
    "@type": "https://schema.org/Audience";
}
/** Intended audience for an item, i.e. the group for whom the item was created. */
export declare type Audience = AudienceLeaf | BusinessAudience | EducationalAudience | MedicalAudience | PeopleAudience | Researcher;
interface AudiobookBase extends BookBase, AudioObjectBase {
    /** The duration of the item (movie, audio recording, event, etc.) in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}. */
    "https://schema.org/duration"?: SchemaValue<Duration | IdReference, "https://schema.org/duration">;
    /** A person who reads (performs) the audiobook. */
    "https://schema.org/readBy"?: SchemaValue<Person | IdReference, "https://schema.org/readBy">;
}
interface AudiobookLeaf extends AudiobookBase {
    "@type": "https://schema.org/Audiobook";
}
/** An audiobook. */
export declare type Audiobook = AudiobookLeaf;
interface AudioObjectBase extends MediaObjectBase {
    /** The caption for this object. For downloadable machine formats (closed caption, subtitles etc.) use MediaObject and indicate the {@link https://schema.org/encodingFormat encodingFormat}. */
    "https://schema.org/caption"?: SchemaValue<MediaObject | Text | IdReference, "https://schema.org/caption">;
    /** Represents textual captioning from a {@link https://schema.org/MediaObject MediaObject}, e.g. text of a 'meme'. */
    "https://schema.org/embeddedTextCaption"?: SchemaValue<Text, "https://schema.org/embeddedTextCaption">;
    /** If this MediaObject is an AudioObject or VideoObject, the transcript of that object. */
    "https://schema.org/transcript"?: SchemaValue<Text, "https://schema.org/transcript">;
}
interface AudioObjectLeaf extends AudioObjectBase {
    "@type": "https://schema.org/AudioObject";
}
/** An audio file. */
export declare type AudioObject = AudioObjectLeaf | Audiobook | AudioObjectSnapshot;
interface AudioObjectSnapshotLeaf extends AudioObjectBase {
    "@type": "https://schema.org/AudioObjectSnapshot";
}
/** A specific and exact (byte-for-byte) version of an {@link https://schema.org/AudioObject AudioObject}. Two byte-for-byte identical files, for the purposes of this type, considered identical. If they have different embedded metadata the files will differ. Different external facts about the files, e.g. creator or dateCreated that aren't represented in their actual content, do not affect this notion of identity. */
export declare type AudioObjectSnapshot = AudioObjectSnapshotLeaf;
interface AuthorizeActionBase extends ActionBase {
    /** A sub property of participant. The participant who is at the receiving end of the action. */
    "https://schema.org/recipient"?: SchemaValue<Audience | ContactPoint | Organization | Person | IdReference, "https://schema.org/recipient">;
}
interface AuthorizeActionLeaf extends AuthorizeActionBase {
    "@type": "https://schema.org/AuthorizeAction";
}
/** The act of granting permission to an object. */
export declare type AuthorizeAction = AuthorizeActionLeaf;
interface AutoBodyShopLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/AutoBodyShop";
}
/** Auto body shop. */
export declare type AutoBodyShop = AutoBodyShopLeaf | string;
interface AutoDealerLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/AutoDealer";
}
/** An car dealership. */
export declare type AutoDealer = AutoDealerLeaf | string;
interface AutomatedTellerLeaf extends FinancialServiceBase {
    "@type": "https://schema.org/AutomatedTeller";
}
/** ATM/cash machine. */
export declare type AutomatedTeller = AutomatedTellerLeaf | string;
interface AutomotiveBusinessLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/AutomotiveBusiness";
}
/** Car repair, sales, or parts. */
export declare type AutomotiveBusiness = AutomotiveBusinessLeaf | AutoBodyShop | AutoDealer | AutoPartsStore | AutoRental | AutoRepair | AutoWash | GasStation | MotorcycleDealer | MotorcycleRepair | string;
interface AutoPartsStoreBase extends LocalBusinessBase, LocalBusinessBase {
}
interface AutoPartsStoreLeaf extends AutoPartsStoreBase {
    "@type": "https://schema.org/AutoPartsStore";
}
/** An auto parts store. */
export declare type AutoPartsStore = AutoPartsStoreLeaf | string;
interface AutoRentalLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/AutoRental";
}
/** A car rental business. */
export declare type AutoRental = AutoRentalLeaf | string;
interface AutoRepairLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/AutoRepair";
}
/** Car repair business. */
export declare type AutoRepair = AutoRepairLeaf | string;
interface AutoWashLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/AutoWash";
}
/** A car wash business. */
export declare type AutoWash = AutoWashLeaf | string;
interface BackgroundNewsArticleLeaf extends NewsArticleBase {
    "@type": "https://schema.org/BackgroundNewsArticle";
}
/** A {@link https://schema.org/NewsArticle NewsArticle} providing historical context, definition and detail on a specific topic (aka "explainer" or "backgrounder"). For example, an in-depth article or frequently-asked-questions ({@link https://en.wikipedia.org/wiki/FAQ FAQ}) document on topics such as Climate Change or the European Union. Other kinds of background material from a non-news setting are often described using {@link https://schema.org/Book Book} or {@link https://schema.org/Article Article}, in particular {@link https://schema.org/ScholarlyArticle ScholarlyArticle}. See also {@link https://schema.org/NewsArticle NewsArticle} for related vocabulary from a learning/education perspective. */
export declare type BackgroundNewsArticle = BackgroundNewsArticleLeaf;
interface BakeryLeaf extends FoodEstablishmentBase {
    "@type": "https://schema.org/Bakery";
}
/** A bakery. */
export declare type Bakery = BakeryLeaf | string;
interface BankAccountBase extends FinancialProductBase {
    /** A minimum amount that has to be paid in every month. */
    "https://schema.org/accountMinimumInflow"?: SchemaValue<MonetaryAmount | IdReference, "https://schema.org/accountMinimumInflow">;
    /** An overdraft is an extension of credit from a lending institution when an account reaches zero. An overdraft allows the individual to continue withdrawing money even if the account has no funds in it. Basically the bank allows people to borrow a set amount of money. */
    "https://schema.org/accountOverdraftLimit"?: SchemaValue<MonetaryAmount | IdReference, "https://schema.org/accountOverdraftLimit">;
    /** The type of a bank account. */
    "https://schema.org/bankAccountType"?: SchemaValue<Text | URL, "https://schema.org/bankAccountType">;
}
interface BankAccountLeaf extends BankAccountBase {
    "@type": "https://schema.org/BankAccount";
}
/** A product or service offered by a bank whereby one may deposit, withdraw or transfer money and in some cases be paid interest. */
export declare type BankAccount = BankAccountLeaf | DepositAccount;
interface BankOrCreditUnionLeaf extends FinancialServiceBase {
    "@type": "https://schema.org/BankOrCreditUnion";
}
/** Bank or credit union. */
export declare type BankOrCreditUnion = BankOrCreditUnionLeaf | string;
interface BarcodeLeaf extends ImageObjectBase {
    "@type": "https://schema.org/Barcode";
}
/** An image of a visual machine-readable code such as a barcode or QR code. */
export declare type Barcode = BarcodeLeaf;
interface BarOrPubLeaf extends FoodEstablishmentBase {
    "@type": "https://schema.org/BarOrPub";
}
/** A bar or pub. */
export declare type BarOrPub = BarOrPubLeaf | string;
interface BeachLeaf extends CivicStructureBase {
    "@type": "https://schema.org/Beach";
}
/** Beach. */
export declare type Beach = BeachLeaf | string;
interface BeautySalonLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/BeautySalon";
}
/** Beauty salon. */
export declare type BeautySalon = BeautySalonLeaf | string;
interface BedAndBreakfastLeaf extends LodgingBusinessBase {
    "@type": "https://schema.org/BedAndBreakfast";
}
/**
 * Bed and breakfast.
 *
 * See also the {@link /docs/hotels.html dedicated document on the use of schema.org for marking up hotels and other forms of accommodations}.
 */
export declare type BedAndBreakfast = BedAndBreakfastLeaf | string;
interface BedDetailsBase extends ThingBase {
    /** The quantity of the given bed type available in the HotelRoom, Suite, House, or Apartment. */
    "https://schema.org/numberOfBeds"?: SchemaValue<Number, "https://schema.org/numberOfBeds">;
    /** The type of bed to which the BedDetail refers, i.e. the type of bed available in the quantity indicated by quantity. */
    "https://schema.org/typeOfBed"?: SchemaValue<BedType | Text | IdReference, "https://schema.org/typeOfBed">;
}
interface BedDetailsLeaf extends BedDetailsBase {
    "@type": "https://schema.org/BedDetails";
}
/** An entity holding detailed information about the available bed types, e.g. the quantity of twin beds for a hotel room. For the single case of just one bed of a certain type, you can use bed directly with a text. See also {@link https://schema.org/BedType BedType} (under development). */
export declare type BedDetails = BedDetailsLeaf;
interface BedTypeLeaf extends QualitativeValueBase {
    "@type": "https://schema.org/BedType";
}
/** A type of bed. This is used for indicating the bed or beds available in an accommodation. */
export declare type BedType = BedTypeLeaf;
interface BefriendActionLeaf extends ActionBase {
    "@type": "https://schema.org/BefriendAction";
}
/**
 * The act of forming a personal connection with someone (object) mutually/bidirectionally/symmetrically.
 *
 * Related actions:
 * - {@link https://schema.org/FollowAction FollowAction}: Unlike FollowAction, BefriendAction implies that the connection is reciprocal.
 */
export declare type BefriendAction = BefriendActionLeaf;
interface BikeStoreLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/BikeStore";
}
/** A bike store. */
export declare type BikeStore = BikeStoreLeaf | string;
interface BioChemEntityBase extends ThingBase {
    /** Disease associated to this BioChemEntity. Such disease can be a MedicalCondition or a URL. If you want to add an evidence supporting the association, please use PropertyValue. */
    "https://schema.org/associatedDisease"?: SchemaValue<MedicalCondition | PropertyValue | URL | IdReference, "https://schema.org/associatedDisease">;
    /** A BioChemEntity that is known to interact with this item. */
    "https://schema.org/bioChemInteraction"?: SchemaValue<BioChemEntity | IdReference, "https://schema.org/bioChemInteraction">;
    /** A similar BioChemEntity, e.g., obtained by fingerprint similarity algorithms. */
    "https://schema.org/bioChemSimilarity"?: SchemaValue<BioChemEntity | IdReference, "https://schema.org/bioChemSimilarity">;
    /** A role played by the BioChemEntity within a biological context. */
    "https://schema.org/biologicalRole"?: SchemaValue<DefinedTerm | IdReference, "https://schema.org/biologicalRole">;
    /** Indicates a BioChemEntity that (in some sense) has this BioChemEntity as a part. */
    "https://schema.org/hasBioChemEntityPart"?: SchemaValue<BioChemEntity | IdReference, "https://schema.org/hasBioChemEntityPart">;
    /** Molecular function performed by this BioChemEntity; please use PropertyValue if you want to include any evidence. */
    "https://schema.org/hasMolecularFunction"?: SchemaValue<DefinedTerm | PropertyValue | URL | IdReference, "https://schema.org/hasMolecularFunction">;
    /** A common representation such as a protein sequence or chemical structure for this entity. For images use schema.org/image. */
    "https://schema.org/hasRepresentation"?: SchemaValue<PropertyValue | Text | URL | IdReference, "https://schema.org/hasRepresentation">;
    /** Another BioChemEntity encoding by this one. */
    "https://schema.org/isEncodedByBioChemEntity"?: SchemaValue<Gene | IdReference, "https://schema.org/isEncodedByBioChemEntity">;
    /** Biological process this BioChemEntity is involved in; please use PropertyValue if you want to include any evidence. */
    "https://schema.org/isInvolvedInBiologicalProcess"?: SchemaValue<DefinedTerm | PropertyValue | URL | IdReference, "https://schema.org/isInvolvedInBiologicalProcess">;
    /** Subcellular location where this BioChemEntity is located; please use PropertyValue if you want to include any evidence. */
    "https://schema.org/isLocatedInSubcellularLocation"?: SchemaValue<DefinedTerm | PropertyValue | URL | IdReference, "https://schema.org/isLocatedInSubcellularLocation">;
    /** Indicates a BioChemEntity that is (in some sense) a part of this BioChemEntity. */
    "https://schema.org/isPartOfBioChemEntity"?: SchemaValue<BioChemEntity | IdReference, "https://schema.org/isPartOfBioChemEntity">;
    /** The taxonomic grouping of the organism that expresses, encodes, or in someway related to the BioChemEntity. */
    "https://schema.org/taxonomicRange"?: SchemaValue<DefinedTerm | Taxon | Text | URL | IdReference, "https://schema.org/taxonomicRange">;
}
interface BioChemEntityLeaf extends BioChemEntityBase {
    "@type": "https://schema.org/BioChemEntity";
}
/** Any biological, chemical, or biochemical thing. For example: a protein; a gene; a chemical; a synthetic chemical. */
export declare type BioChemEntity = BioChemEntityLeaf | ChemicalSubstance | Gene | MolecularEntity | Protein;
interface BlogBase extends CreativeWorkBase {
    /** A posting that is part of this blog. */
    "https://schema.org/blogPost"?: SchemaValue<BlogPosting | IdReference, "https://schema.org/blogPost">;
    /**
     * Indicates a post that is part of a {@link https://schema.org/Blog Blog}. Note that historically, what we term a "Blog" was once known as a "weblog", and that what we term a "BlogPosting" is now often colloquially referred to as a "blog".
     *
     * @deprecated Consider using https://schema.org/blogPost instead.
     */
    "https://schema.org/blogPosts"?: SchemaValue<BlogPosting | IdReference, "https://schema.org/blogPosts">;
    /** The International Standard Serial Number (ISSN) that identifies this serial publication. You can repeat this property to identify different formats of, or the linking ISSN (ISSN-L) for, this serial publication. */
    "https://schema.org/issn"?: SchemaValue<Text, "https://schema.org/issn">;
}
interface BlogLeaf extends BlogBase {
    "@type": "https://schema.org/Blog";
}
/** A {@link https://en.wikipedia.org/wiki/Blog blog}, sometimes known as a "weblog". Note that the individual posts ({@link https://schema.org/BlogPosting BlogPosting}s) in a {@link https://schema.org/Blog Blog} are often colloqually referred to by the same term. */
export declare type Blog = BlogLeaf;
interface BlogPostingLeaf extends SocialMediaPostingBase {
    "@type": "https://schema.org/BlogPosting";
}
/** A blog post. */
export declare type BlogPosting = BlogPostingLeaf | LiveBlogPosting;
interface BloodTestLeaf extends MedicalTestBase {
    "@type": "https://schema.org/BloodTest";
}
/** A medical test performed on a sample of a patient's blood. */
export declare type BloodTest = BloodTestLeaf;
interface BoardingPolicyTypeLeaf extends EnumerationBase {
    "@type": "https://schema.org/BoardingPolicyType";
}
/** A type of boarding policy used by an airline. */
export declare type BoardingPolicyType = "https://schema.org/GroupBoardingPolicy" | "https://schema.org/ZoneBoardingPolicy" | BoardingPolicyTypeLeaf;
interface BoatReservationLeaf extends ReservationBase {
    "@type": "https://schema.org/BoatReservation";
}
/**
 * A reservation for boat travel.
 *
 * Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use {@link https://schema.org/Offer Offer}.
 */
export declare type BoatReservation = BoatReservationLeaf;
interface BoatTerminalLeaf extends CivicStructureBase {
    "@type": "https://schema.org/BoatTerminal";
}
/** A terminal for boats, ships, and other water vessels. */
export declare type BoatTerminal = BoatTerminalLeaf | string;
interface BoatTripBase extends TripBase {
    /** The terminal or port from which the boat arrives. */
    "https://schema.org/arrivalBoatTerminal"?: SchemaValue<BoatTerminal | IdReference, "https://schema.org/arrivalBoatTerminal">;
    /** The terminal or port from which the boat departs. */
    "https://schema.org/departureBoatTerminal"?: SchemaValue<BoatTerminal | IdReference, "https://schema.org/departureBoatTerminal">;
}
interface BoatTripLeaf extends BoatTripBase {
    "@type": "https://schema.org/BoatTrip";
}
/** A trip on a commercial ferry line. */
export declare type BoatTrip = BoatTripLeaf;
interface BodyMeasurementTypeEnumerationLeaf extends EnumerationBase {
    "@type": "https://schema.org/BodyMeasurementTypeEnumeration";
}
/** Enumerates types (or dimensions) of a person's body measurements, for example for fitting of clothes. */
export declare type BodyMeasurementTypeEnumeration = "https://schema.org/BodyMeasurementArm" | "https://schema.org/BodyMeasurementBust" | "https://schema.org/BodyMeasurementChest" | "https://schema.org/BodyMeasurementFoot" | "https://schema.org/BodyMeasurementHand" | "https://schema.org/BodyMeasurementHead" | "https://schema.org/BodyMeasurementHeight" | "https://schema.org/BodyMeasurementHips" | "https://schema.org/BodyMeasurementInsideLeg" | "https://schema.org/BodyMeasurementNeck" | "https://schema.org/BodyMeasurementUnderbust" | "https://schema.org/BodyMeasurementWaist" | "https://schema.org/BodyMeasurementWeight" | BodyMeasurementTypeEnumerationLeaf;
interface BodyOfWaterLeaf extends PlaceBase {
    "@type": "https://schema.org/BodyOfWater";
}
/** A body of water, such as a sea, ocean, or lake. */
export declare type BodyOfWater = BodyOfWaterLeaf | Canal | LakeBodyOfWater | OceanBodyOfWater | Pond | Reservoir | RiverBodyOfWater | SeaBodyOfWater | Waterfall | string;
interface BoneLeaf extends AnatomicalStructureBase {
    "@type": "https://schema.org/Bone";
}
/** Rigid connective tissue that comprises up the skeletal structure of the human body. */
export declare type Bone = BoneLeaf;
interface BookBase extends CreativeWorkBase {
    /** Indicates whether the book is an abridged edition. */
    "https://schema.org/abridged"?: SchemaValue<Boolean, "https://schema.org/abridged">;
    /** The edition of the book. */
    "https://schema.org/bookEdition"?: SchemaValue<Text, "https://schema.org/bookEdition">;
    /** The format of the book. */
    "https://schema.org/bookFormat"?: SchemaValue<BookFormatType | IdReference, "https://schema.org/bookFormat">;
    /** The illustrator of the book. */
    "https://schema.org/illustrator"?: SchemaValue<Person | IdReference, "https://schema.org/illustrator">;
    /** The ISBN of the book. */
    "https://schema.org/isbn"?: SchemaValue<Text, "https://schema.org/isbn">;
    /** The number of pages in the book. */
    "https://schema.org/numberOfPages"?: SchemaValue<Integer, "https://schema.org/numberOfPages">;
}
interface BookLeaf extends BookBase {
    "@type": "https://schema.org/Book";
}
/** A book. */
export declare type Book = BookLeaf | Audiobook;
interface BookFormatTypeLeaf extends EnumerationBase {
    "@type": "https://schema.org/BookFormatType";
}
/** The publication format of the book. */
export declare type BookFormatType = "https://schema.org/AudiobookFormat" | "https://schema.org/EBook" | "https://schema.org/GraphicNovel" | "https://schema.org/Hardcover" | "https://schema.org/Paperback" | BookFormatTypeLeaf;
interface BookmarkActionLeaf extends ActionBase {
    "@type": "https://schema.org/BookmarkAction";
}
/** An agent bookmarks/flags/labels/tags/marks an object. */
export declare type BookmarkAction = BookmarkActionLeaf;
interface BookSeriesLeaf extends CreativeWorkSeriesBase {
    "@type": "https://schema.org/BookSeries";
}
/** A series of books. Included books can be indicated with the hasPart property. */
export declare type BookSeries = BookSeriesLeaf;
interface BookStoreLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/BookStore";
}
/** A bookstore. */
export declare type BookStore = BookStoreLeaf | string;
interface BorrowActionBase extends TransferActionBase {
    /** A sub property of participant. The person that lends the object being borrowed. */
    "https://schema.org/lender"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/lender">;
}
interface BorrowActionLeaf extends BorrowActionBase {
    "@type": "https://schema.org/BorrowAction";
}
/**
 * The act of obtaining an object under an agreement to return it at a later date. Reciprocal of LendAction.
 *
 * Related actions:
 * - {@link https://schema.org/LendAction LendAction}: Reciprocal of BorrowAction.
 */
export declare type BorrowAction = BorrowActionLeaf;
interface BowlingAlleyLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/BowlingAlley";
}
/** A bowling alley. */
export declare type BowlingAlley = BowlingAlleyLeaf | string;
interface BrainStructureLeaf extends AnatomicalStructureBase {
    "@type": "https://schema.org/BrainStructure";
}
/** Any anatomical structure which pertains to the soft nervous tissue functioning as the coordinating center of sensation and intellectual and nervous activity. */
export declare type BrainStructure = BrainStructureLeaf;
interface BrandBase extends ThingBase {
    /** The overall rating, based on a collection of reviews or ratings, of the item. */
    "https://schema.org/aggregateRating"?: SchemaValue<AggregateRating | IdReference, "https://schema.org/aggregateRating">;
    /** An associated logo. */
    "https://schema.org/logo"?: SchemaValue<ImageObject | URL | IdReference, "https://schema.org/logo">;
    /** A review of the item. */
    "https://schema.org/review"?: SchemaValue<Review | IdReference, "https://schema.org/review">;
    /** A slogan or motto associated with the item. */
    "https://schema.org/slogan"?: SchemaValue<Text, "https://schema.org/slogan">;
}
interface BrandLeaf extends BrandBase {
    "@type": "https://schema.org/Brand";
}
/** A brand is a name used by an organization or business person for labeling a product, product group, or similar. */
export declare type Brand = BrandLeaf;
interface BreadcrumbListLeaf extends ItemListBase {
    "@type": "https://schema.org/BreadcrumbList";
}
/**
 * A BreadcrumbList is an ItemList consisting of a chain of linked Web pages, typically described using at least their URL and their name, and typically ending with the current page.
 *
 * The {@link https://schema.org/position position} property is used to reconstruct the order of the items in a BreadcrumbList The convention is that a breadcrumb list has an {@link https://schema.org/itemListOrder itemListOrder} of {@link https://schema.org/ItemListOrderAscending ItemListOrderAscending} (lower values listed first), and that the first items in this list correspond to the "top" or beginning of the breadcrumb trail, e.g. with a site or section homepage. The specific values of 'position' are not assigned meaning for a BreadcrumbList, but they should be integers, e.g. beginning with '1' for the first item in the list.
 */
export declare type BreadcrumbList = BreadcrumbListLeaf;
interface BreweryLeaf extends FoodEstablishmentBase {
    "@type": "https://schema.org/Brewery";
}
/** Brewery. */
export declare type Brewery = BreweryLeaf | string;
interface BridgeLeaf extends CivicStructureBase {
    "@type": "https://schema.org/Bridge";
}
/** A bridge. */
export declare type Bridge = BridgeLeaf | string;
interface BroadcastChannelBase extends ThingBase {
    /** The unique address by which the BroadcastService can be identified in a provider lineup. In US, this is typically a number. */
    "https://schema.org/broadcastChannelId"?: SchemaValue<Text, "https://schema.org/broadcastChannelId">;
    /** The frequency used for over-the-air broadcasts. Numeric values or simple ranges e.g. 87-99. In addition a shortcut idiom is supported for frequences of AM and FM radio channels, e.g. "87 FM". */
    "https://schema.org/broadcastFrequency"?: SchemaValue<BroadcastFrequencySpecification | Text | IdReference, "https://schema.org/broadcastFrequency">;
    /** The type of service required to have access to the channel (e.g. Standard or Premium). */
    "https://schema.org/broadcastServiceTier"?: SchemaValue<Text, "https://schema.org/broadcastServiceTier">;
    /** Genre of the creative work, broadcast channel or group. */
    "https://schema.org/genre"?: SchemaValue<Text | URL, "https://schema.org/genre">;
    /** The CableOrSatelliteService offering the channel. */
    "https://schema.org/inBroadcastLineup"?: SchemaValue<CableOrSatelliteService | IdReference, "https://schema.org/inBroadcastLineup">;
    /** The BroadcastService offered on this channel. */
    "https://schema.org/providesBroadcastService"?: SchemaValue<BroadcastService | IdReference, "https://schema.org/providesBroadcastService">;
}
interface BroadcastChannelLeaf extends BroadcastChannelBase {
    "@type": "https://schema.org/BroadcastChannel";
}
/** A unique instance of a BroadcastService on a CableOrSatelliteService lineup. */
export declare type BroadcastChannel = BroadcastChannelLeaf | RadioChannel | TelevisionChannel;
interface BroadcastEventBase extends PublicationEventBase {
    /** The event being broadcast such as a sporting event or awards ceremony. */
    "https://schema.org/broadcastOfEvent"?: SchemaValue<Event | IdReference, "https://schema.org/broadcastOfEvent">;
    /** True if the broadcast is of a live event. */
    "https://schema.org/isLiveBroadcast"?: SchemaValue<Boolean, "https://schema.org/isLiveBroadcast">;
    /** Languages in which subtitles/captions are available, in {@link http://tools.ietf.org/html/bcp47 IETF BCP 47 standard format}. */
    "https://schema.org/subtitleLanguage"?: SchemaValue<Language | Text | IdReference, "https://schema.org/subtitleLanguage">;
    /** The type of screening or video broadcast used (e.g. IMAX, 3D, SD, HD, etc.). */
    "https://schema.org/videoFormat"?: SchemaValue<Text, "https://schema.org/videoFormat">;
}
interface BroadcastEventLeaf extends BroadcastEventBase {
    "@type": "https://schema.org/BroadcastEvent";
}
/** An over the air or online broadcast event. */
export declare type BroadcastEvent = BroadcastEventLeaf;
interface BroadcastFrequencySpecificationBase extends ThingBase {
    /** The frequency in MHz for a particular broadcast. */
    "https://schema.org/broadcastFrequencyValue"?: SchemaValue<Number | QuantitativeValue | IdReference, "https://schema.org/broadcastFrequencyValue">;
    /** The modulation (e.g. FM, AM, etc) used by a particular broadcast service. */
    "https://schema.org/broadcastSignalModulation"?: SchemaValue<QualitativeValue | Text | IdReference, "https://schema.org/broadcastSignalModulation">;
    /** The subchannel used for the broadcast. */
    "https://schema.org/broadcastSubChannel"?: SchemaValue<Text, "https://schema.org/broadcastSubChannel">;
}
interface BroadcastFrequencySpecificationLeaf extends BroadcastFrequencySpecificationBase {
    "@type": "https://schema.org/BroadcastFrequencySpecification";
}
/** The frequency in MHz and the modulation used for a particular BroadcastService. */
export declare type BroadcastFrequencySpecification = BroadcastFrequencySpecificationLeaf;
interface BroadcastServiceBase extends ServiceBase {
    /**
     * The area within which users can expect to reach the broadcast service.
     *
     * @deprecated Consider using https://schema.org/serviceArea instead.
     */
    "https://schema.org/area"?: SchemaValue<Place | IdReference, "https://schema.org/area">;
    /** The media network(s) whose content is broadcast on this station. */
    "https://schema.org/broadcastAffiliateOf"?: SchemaValue<Organization | IdReference, "https://schema.org/broadcastAffiliateOf">;
    /** The name displayed in the channel guide. For many US affiliates, it is the network name. */
    "https://schema.org/broadcastDisplayName"?: SchemaValue<Text, "https://schema.org/broadcastDisplayName">;
    /** The organization owning or operating the broadcast service. */
    "https://schema.org/broadcaster"?: SchemaValue<Organization | IdReference, "https://schema.org/broadcaster">;
    /** The frequency used for over-the-air broadcasts. Numeric values or simple ranges e.g. 87-99. In addition a shortcut idiom is supported for frequences of AM and FM radio channels, e.g. "87 FM". */
    "https://schema.org/broadcastFrequency"?: SchemaValue<BroadcastFrequencySpecification | Text | IdReference, "https://schema.org/broadcastFrequency">;
    /** The timezone in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 format} for which the service bases its broadcasts */
    "https://schema.org/broadcastTimezone"?: SchemaValue<Text, "https://schema.org/broadcastTimezone">;
    /** A {@link https://en.wikipedia.org/wiki/Call_sign callsign}, as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles. */
    "https://schema.org/callSign"?: SchemaValue<Text, "https://schema.org/callSign">;
    /** A broadcast channel of a broadcast service. */
    "https://schema.org/hasBroadcastChannel"?: SchemaValue<BroadcastChannel | IdReference, "https://schema.org/hasBroadcastChannel">;
    /** The language of the content or performance or used in an action. Please use one of the language codes from the {@link http://tools.ietf.org/html/bcp47 IETF BCP 47 standard}. See also {@link https://schema.org/availableLanguage availableLanguage}. */
    "https://schema.org/inLanguage"?: SchemaValue<Language | Text | IdReference, "https://schema.org/inLanguage">;
    /** A broadcast service to which the broadcast service may belong to such as regional variations of a national channel. */
    "https://schema.org/parentService"?: SchemaValue<BroadcastService | IdReference, "https://schema.org/parentService">;
    /** The type of screening or video broadcast used (e.g. IMAX, 3D, SD, HD, etc.). */
    "https://schema.org/videoFormat"?: SchemaValue<Text, "https://schema.org/videoFormat">;
}
interface BroadcastServiceLeaf extends BroadcastServiceBase {
    "@type": "https://schema.org/BroadcastService";
}
/** A delivery service through which content is provided via broadcast over the air or online. */
export declare type BroadcastService = BroadcastServiceLeaf | RadioBroadcastService;
interface BrokerageAccountLeaf extends InvestmentOrDepositBase {
    "@type": "https://schema.org/BrokerageAccount";
}
/** An account that allows an investor to deposit funds and place investment orders with a licensed broker or brokerage firm. */
export declare type BrokerageAccount = BrokerageAccountLeaf;
interface BuddhistTempleLeaf extends CivicStructureBase {
    "@type": "https://schema.org/BuddhistTemple";
}
/** A Buddhist temple. */
export declare type BuddhistTemple = BuddhistTempleLeaf | string;
interface BusinessAudienceBase extends AudienceBase {
    /** The number of employees in an organization e.g. business. */
    "https://schema.org/numberOfEmployees"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/numberOfEmployees">;
    /** The size of the business in annual revenue. */
    "https://schema.org/yearlyRevenue"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/yearlyRevenue">;
    /** The age of the business. */
    "https://schema.org/yearsInOperation"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/yearsInOperation">;
}
interface BusinessAudienceLeaf extends BusinessAudienceBase {
    "@type": "https://schema.org/BusinessAudience";
}
/** A set of characteristics belonging to businesses, e.g. who compose an item's target audience. */
export declare type BusinessAudience = BusinessAudienceLeaf;
interface BusinessEntityTypeLeaf extends EnumerationBase {
    "@type": "https://schema.org/BusinessEntityType";
}
/**
 * A business entity type is a conceptual entity representing the legal form, the size, the main line of business, the position in the value chain, or any combination thereof, of an organization or business person.
 *
 * Commonly used values:
 * - http://purl.org/goodrelations/v1#Business
 * - http://purl.org/goodrelations/v1#Enduser
 * - http://purl.org/goodrelations/v1#PublicInstitution
 * - http://purl.org/goodrelations/v1#Reseller
 */
export declare type BusinessEntityType = BusinessEntityTypeLeaf;
interface BusinessEventLeaf extends EventBase {
    "@type": "https://schema.org/BusinessEvent";
}
/** Event type: Business event. */
export declare type BusinessEvent = BusinessEventLeaf;
interface BusinessFunctionLeaf extends EnumerationBase {
    "@type": "https://schema.org/BusinessFunction";
}
/**
 * The business function specifies the type of activity or access (i.e., the bundle of rights) offered by the organization or business person through the offer. Typical are sell, rental or lease, maintenance or repair, manufacture / produce, recycle / dispose, engineering / construction, or installation. Proprietary specifications of access rights are also instances of this class.
 *
 * Commonly used values:
 * - http://purl.org/goodrelations/v1#ConstructionInstallation
 * - http://purl.org/goodrelations/v1#Dispose
 * - http://purl.org/goodrelations/v1#LeaseOut
 * - http://purl.org/goodrelations/v1#Maintain
 * - http://purl.org/goodrelations/v1#ProvideService
 * - http://purl.org/goodrelations/v1#Repair
 * - http://purl.org/goodrelations/v1#Sell
 * - http://purl.org/goodrelations/v1#Buy
 */
export declare type BusinessFunction = BusinessFunctionLeaf;
interface BusOrCoachBase extends VehicleBase {
    /** The ACRISS Car Classification Code is a code used by many car rental companies, for classifying vehicles. ACRISS stands for Association of Car Rental Industry Systems and Standards. */
    "https://schema.org/acrissCode"?: SchemaValue<Text, "https://schema.org/acrissCode">;
    /**
     * The permitted total weight of cargo and installations (e.g. a roof rack) on top of the vehicle.
     *
     * Typical unit code(s): KGM for kilogram, LBR for pound
     * - Note 1: You can indicate additional information in the {@link https://schema.org/name name} of the {@link https://schema.org/QuantitativeValue QuantitativeValue} node.
     * - Note 2: You may also link to a {@link https://schema.org/QualitativeValue QualitativeValue} node that provides additional information using {@link https://schema.org/valueReference valueReference}
     * - Note 3: Note that you can use {@link https://schema.org/minValue minValue} and {@link https://schema.org/maxValue maxValue} to indicate ranges.
     */
    "https://schema.org/roofLoad"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/roofLoad">;
}
interface BusOrCoachLeaf extends BusOrCoachBase {
    "@type": "https://schema.org/BusOrCoach";
}
/** A bus (also omnibus or autobus) is a road vehicle designed to carry passengers. Coaches are luxury busses, usually in service for long distance travel. */
export declare type BusOrCoach = BusOrCoachLeaf;
interface BusReservationLeaf extends ReservationBase {
    "@type": "https://schema.org/BusReservation";
}
/**
 * A reservation for bus travel.
 *
 * Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use {@link https://schema.org/Offer Offer}.
 */
export declare type BusReservation = BusReservationLeaf;
interface BusStationLeaf extends CivicStructureBase {
    "@type": "https://schema.org/BusStation";
}
/** A bus station. */
export declare type BusStation = BusStationLeaf | string;
interface BusStopLeaf extends CivicStructureBase {
    "@type": "https://schema.org/BusStop";
}
/** A bus stop. */
export declare type BusStop = BusStopLeaf | string;
interface BusTripBase extends TripBase {
    /** The stop or station from which the bus arrives. */
    "https://schema.org/arrivalBusStop"?: SchemaValue<BusStation | BusStop | IdReference, "https://schema.org/arrivalBusStop">;
    /** The name of the bus (e.g. Bolt Express). */
    "https://schema.org/busName"?: SchemaValue<Text, "https://schema.org/busName">;
    /** The unique identifier for the bus. */
    "https://schema.org/busNumber"?: SchemaValue<Text, "https://schema.org/busNumber">;
    /** The stop or station from which the bus departs. */
    "https://schema.org/departureBusStop"?: SchemaValue<BusStation | BusStop | IdReference, "https://schema.org/departureBusStop">;
}
interface BusTripLeaf extends BusTripBase {
    "@type": "https://schema.org/BusTrip";
}
/** A trip on a commercial bus line. */
export declare type BusTrip = BusTripLeaf;
interface BuyActionBase extends TradeActionBase {
    /** An entity which offers (sells / leases / lends / loans) the services / goods. A seller may also be a provider. */
    "https://schema.org/seller"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/seller">;
    /**
     * 'vendor' is an earlier term for 'seller'.
     *
     * @deprecated Consider using https://schema.org/seller instead.
     */
    "https://schema.org/vendor"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/vendor">;
    /**
     * The warranty promise(s) included in the offer.
     *
     * @deprecated Consider using https://schema.org/warranty instead.
     */
    "https://schema.org/warrantyPromise"?: SchemaValue<WarrantyPromise | IdReference, "https://schema.org/warrantyPromise">;
}
interface BuyActionLeaf extends BuyActionBase {
    "@type": "https://schema.org/BuyAction";
}
/** The act of giving money to a seller in exchange for goods or services rendered. An agent buys an object, product, or service from a seller for a price. Reciprocal of SellAction. */
export declare type BuyAction = BuyActionLeaf;
interface CableOrSatelliteServiceLeaf extends ServiceBase {
    "@type": "https://schema.org/CableOrSatelliteService";
}
/** A service which provides access to media programming like TV or radio. Access may be via cable or satellite. */
export declare type CableOrSatelliteService = CableOrSatelliteServiceLeaf;
interface CafeOrCoffeeShopLeaf extends FoodEstablishmentBase {
    "@type": "https://schema.org/CafeOrCoffeeShop";
}
/** A cafe or coffee shop. */
export declare type CafeOrCoffeeShop = CafeOrCoffeeShopLeaf | string;
interface CampgroundBase extends CivicStructureBase, LodgingBusinessBase {
}
interface CampgroundLeaf extends CampgroundBase {
    "@type": "https://schema.org/Campground";
}
/**
 * A camping site, campsite, or {@link https://schema.org/Campground Campground} is a place used for overnight stay in the outdoors, typically containing individual {@link https://schema.org/CampingPitch CampingPitch} locations.
 *
 * In British English a campsite is an area, usually divided into a number of pitches, where people can camp overnight using tents or camper vans or caravans; this British English use of the word is synonymous with the American English expression campground. In American English the term campsite generally means an area where an individual, family, group, or military unit can pitch a tent or park a camper; a campground may contain many campsites (Source: Wikipedia see {@link https://en.wikipedia.org/wiki/Campsite https://en.wikipedia.org/wiki/Campsite}).
 *
 * See also the dedicated {@link /docs/hotels.html document on the use of schema.org for marking up hotels and other forms of accommodations}.
 */
export declare type Campground = CampgroundLeaf | string;
interface CampingPitchLeaf extends AccommodationBase {
    "@type": "https://schema.org/CampingPitch";
}
/**
 * A {@link https://schema.org/CampingPitch CampingPitch} is an individual place for overnight stay in the outdoors, typically being part of a larger camping site, or {@link https://schema.org/Campground Campground}.
 *
 * In British English a campsite, or campground, is an area, usually divided into a number of pitches, where people can camp overnight using tents or camper vans or caravans; this British English use of the word is synonymous with the American English expression campground. In American English the term campsite generally means an area where an individual, family, group, or military unit can pitch a tent or park a camper; a campground may contain many campsites. (Source: Wikipedia see {@link https://en.wikipedia.org/wiki/Campsite https://en.wikipedia.org/wiki/Campsite}).
 *
 * See also the dedicated {@link /docs/hotels.html document on the use of schema.org for marking up hotels and other forms of accommodations}.
 */
export declare type CampingPitch = CampingPitchLeaf | string;
interface CanalLeaf extends PlaceBase {
    "@type": "https://schema.org/Canal";
}
/** A canal, like the Panama Canal. */
export declare type Canal = CanalLeaf | string;
interface CancelActionLeaf extends PlanActionBase {
    "@type": "https://schema.org/CancelAction";
}
/**
 * The act of asserting that a future event/action is no longer going to happen.
 *
 * Related actions:
 * - {@link https://schema.org/ConfirmAction ConfirmAction}: The antonym of CancelAction.
 */
export declare type CancelAction = CancelActionLeaf;
interface CarBase extends VehicleBase {
    /** The ACRISS Car Classification Code is a code used by many car rental companies, for classifying vehicles. ACRISS stands for Association of Car Rental Industry Systems and Standards. */
    "https://schema.org/acrissCode"?: SchemaValue<Text, "https://schema.org/acrissCode">;
    /**
     * The permitted total weight of cargo and installations (e.g. a roof rack) on top of the vehicle.
     *
     * Typical unit code(s): KGM for kilogram, LBR for pound
     * - Note 1: You can indicate additional information in the {@link https://schema.org/name name} of the {@link https://schema.org/QuantitativeValue QuantitativeValue} node.
     * - Note 2: You may also link to a {@link https://schema.org/QualitativeValue QualitativeValue} node that provides additional information using {@link https://schema.org/valueReference valueReference}
     * - Note 3: Note that you can use {@link https://schema.org/minValue minValue} and {@link https://schema.org/maxValue maxValue} to indicate ranges.
     */
    "https://schema.org/roofLoad"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/roofLoad">;
}
interface CarLeaf extends CarBase {
    "@type": "https://schema.org/Car";
}
/** A car is a wheeled, self-powered motor vehicle used for transportation. */
export declare type Car = CarLeaf;
interface CarUsageTypeLeaf extends EnumerationBase {
    "@type": "https://schema.org/CarUsageType";
}
/** A value indicating a special usage of a car, e.g. commercial rental, driving school, or as a taxi. */
export declare type CarUsageType = "https://schema.org/DrivingSchoolVehicleUsage" | "https://schema.org/RentalVehicleUsage" | "https://schema.org/TaxiVehicleUsage" | CarUsageTypeLeaf;
interface CasinoLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/Casino";
}
/** A casino. */
export declare type Casino = CasinoLeaf | string;
interface CategoryCodeBase extends DefinedTermBase {
    /** A short textual code that uniquely identifies the value. */
    "https://schema.org/codeValue"?: SchemaValue<Text, "https://schema.org/codeValue">;
    /** A {@link https://schema.org/CategoryCodeSet CategoryCodeSet} that contains this category code. */
    "https://schema.org/inCodeSet"?: SchemaValue<CategoryCodeSet | URL | IdReference, "https://schema.org/inCodeSet">;
}
interface CategoryCodeLeaf extends CategoryCodeBase {
    "@type": "https://schema.org/CategoryCode";
}
/** A Category Code. */
export declare type CategoryCode = CategoryCodeLeaf | MedicalCode;
interface CategoryCodeSetBase extends DefinedTermSetBase {
    /** A Category code contained in this code set. */
    "https://schema.org/hasCategoryCode"?: SchemaValue<CategoryCode | IdReference, "https://schema.org/hasCategoryCode">;
}
interface CategoryCodeSetLeaf extends CategoryCodeSetBase {
    "@type": "https://schema.org/CategoryCodeSet";
}
/** A set of Category Code values. */
export declare type CategoryCodeSet = CategoryCodeSetLeaf;
interface CatholicChurchLeaf extends CivicStructureBase {
    "@type": "https://schema.org/CatholicChurch";
}
/** A Catholic church. */
export declare type CatholicChurch = CatholicChurchLeaf | string;
interface CDCPMDRecordBase extends ThingBase {
    /** collectiondate - Date for which patient counts are reported. */
    "https://schema.org/cvdCollectionDate"?: SchemaValue<DateTime | Text, "https://schema.org/cvdCollectionDate">;
    /** Name of the County of the NHSN facility that this data record applies to. Use {@link https://schema.org/cvdFacilityId cvdFacilityId} to identify the facility. To provide other details, {@link https://schema.org/healthcareReportingData healthcareReportingData} can be used on a {@link https://schema.org/Hospital Hospital} entry. */
    "https://schema.org/cvdFacilityCounty"?: SchemaValue<Text, "https://schema.org/cvdFacilityCounty">;
    /** Identifier of the NHSN facility that this data record applies to. Use {@link https://schema.org/cvdFacilityCounty cvdFacilityCounty} to indicate the county. To provide other details, {@link https://schema.org/healthcareReportingData healthcareReportingData} can be used on a {@link https://schema.org/Hospital Hospital} entry. */
    "https://schema.org/cvdFacilityId"?: SchemaValue<Text, "https://schema.org/cvdFacilityId">;
    /** numbeds - HOSPITAL INPATIENT BEDS: Inpatient beds, including all staffed, licensed, and overflow (surge) beds used for inpatients. */
    "https://schema.org/cvdNumBeds"?: SchemaValue<Number, "https://schema.org/cvdNumBeds">;
    /** numbedsocc - HOSPITAL INPATIENT BED OCCUPANCY: Total number of staffed inpatient beds that are occupied. */
    "https://schema.org/cvdNumBedsOcc"?: SchemaValue<Number, "https://schema.org/cvdNumBedsOcc">;
    /** numc19died - DEATHS: Patients with suspected or confirmed COVID-19 who died in the hospital, ED, or any overflow location. */
    "https://schema.org/cvdNumC19Died"?: SchemaValue<Number, "https://schema.org/cvdNumC19Died">;
    /** numc19hopats - HOSPITAL ONSET: Patients hospitalized in an NHSN inpatient care location with onset of suspected or confirmed COVID-19 14 or more days after hospitalization. */
    "https://schema.org/cvdNumC19HOPats"?: SchemaValue<Number, "https://schema.org/cvdNumC19HOPats">;
    /** numc19hosppats - HOSPITALIZED: Patients currently hospitalized in an inpatient care location who have suspected or confirmed COVID-19. */
    "https://schema.org/cvdNumC19HospPats"?: SchemaValue<Number, "https://schema.org/cvdNumC19HospPats">;
    /** numc19mechventpats - HOSPITALIZED and VENTILATED: Patients hospitalized in an NHSN inpatient care location who have suspected or confirmed COVID-19 and are on a mechanical ventilator. */
    "https://schema.org/cvdNumC19MechVentPats"?: SchemaValue<Number, "https://schema.org/cvdNumC19MechVentPats">;
    /** numc19ofmechventpats - ED/OVERFLOW and VENTILATED: Patients with suspected or confirmed COVID-19 who are in the ED or any overflow location awaiting an inpatient bed and on a mechanical ventilator. */
    "https://schema.org/cvdNumC19OFMechVentPats"?: SchemaValue<Number, "https://schema.org/cvdNumC19OFMechVentPats">;
    /** numc19overflowpats - ED/OVERFLOW: Patients with suspected or confirmed COVID-19 who are in the ED or any overflow location awaiting an inpatient bed. */
    "https://schema.org/cvdNumC19OverflowPats"?: SchemaValue<Number, "https://schema.org/cvdNumC19OverflowPats">;
    /** numicubeds - ICU BEDS: Total number of staffed inpatient intensive care unit (ICU) beds. */
    "https://schema.org/cvdNumICUBeds"?: SchemaValue<Number, "https://schema.org/cvdNumICUBeds">;
    /** numicubedsocc - ICU BED OCCUPANCY: Total number of staffed inpatient ICU beds that are occupied. */
    "https://schema.org/cvdNumICUBedsOcc"?: SchemaValue<Number, "https://schema.org/cvdNumICUBedsOcc">;
    /** numtotbeds - ALL HOSPITAL BEDS: Total number of all Inpatient and outpatient beds, including all staffed,ICU, licensed, and overflow (surge) beds used for inpatients or outpatients. */
    "https://schema.org/cvdNumTotBeds"?: SchemaValue<Number, "https://schema.org/cvdNumTotBeds">;
    /** numvent - MECHANICAL VENTILATORS: Total number of ventilators available. */
    "https://schema.org/cvdNumVent"?: SchemaValue<Number, "https://schema.org/cvdNumVent">;
    /** numventuse - MECHANICAL VENTILATORS IN USE: Total number of ventilators in use. */
    "https://schema.org/cvdNumVentUse"?: SchemaValue<Number, "https://schema.org/cvdNumVentUse">;
    /** Publication date of an online listing. */
    "https://schema.org/datePosted"?: SchemaValue<Date | DateTime, "https://schema.org/datePosted">;
}
interface CDCPMDRecordLeaf extends CDCPMDRecordBase {
    "@type": "https://schema.org/CDCPMDRecord";
}
/** A CDCPMDRecord is a data structure representing a record in a CDC tabular data format used for hospital data reporting. See {@link /docs/cdc-covid.html documentation} for details, and the linked CDC materials for authoritative definitions used as the source here. */
export declare type CDCPMDRecord = CDCPMDRecordLeaf;
interface CemeteryLeaf extends CivicStructureBase {
    "@type": "https://schema.org/Cemetery";
}
/** A graveyard. */
export declare type Cemetery = CemeteryLeaf | string;
interface ChapterBase extends CreativeWorkBase {
    /** The page on which the work ends; for example "138" or "xvi". */
    "https://schema.org/pageEnd"?: SchemaValue<Integer | Text, "https://schema.org/pageEnd">;
    /** The page on which the work starts; for example "135" or "xiii". */
    "https://schema.org/pageStart"?: SchemaValue<Integer | Text, "https://schema.org/pageStart">;
    /** Any description of pages that is not separated into pageStart and pageEnd; for example, "1-6, 9, 55" or "10-12, 46-49". */
    "https://schema.org/pagination"?: SchemaValue<Text, "https://schema.org/pagination">;
}
interface ChapterLeaf extends ChapterBase {
    "@type": "https://schema.org/Chapter";
}
/** One of the sections into which a book is divided. A chapter usually has a section number or a name. */
export declare type Chapter = ChapterLeaf;
interface CheckActionLeaf extends ActionBase {
    "@type": "https://schema.org/CheckAction";
}
/** An agent inspects, determines, investigates, inquires, or examines an object's accuracy, quality, condition, or state. */
export declare type CheckAction = CheckActionLeaf;
interface CheckInActionLeaf extends CommunicateActionBase {
    "@type": "https://schema.org/CheckInAction";
}
/**
 * The act of an agent communicating (service provider, social media, etc) their arrival by registering/confirming for a previously reserved service (e.g. flight check in) or at a place (e.g. hotel), possibly resulting in a result (boarding pass, etc).
 *
 * Related actions:
 * - {@link https://schema.org/CheckOutAction CheckOutAction}: The antonym of CheckInAction.
 * - {@link https://schema.org/ArriveAction ArriveAction}: Unlike ArriveAction, CheckInAction implies that the agent is informing/confirming the start of a previously reserved service.
 * - {@link https://schema.org/ConfirmAction ConfirmAction}: Unlike ConfirmAction, CheckInAction implies that the agent is informing/confirming the _start_ of a previously reserved service rather than its validity/existence.
 */
export declare type CheckInAction = CheckInActionLeaf;
interface CheckOutActionLeaf extends CommunicateActionBase {
    "@type": "https://schema.org/CheckOutAction";
}
/**
 * The act of an agent communicating (service provider, social media, etc) their departure of a previously reserved service (e.g. flight check in) or place (e.g. hotel).
 *
 * Related actions:
 * - {@link https://schema.org/CheckInAction CheckInAction}: The antonym of CheckOutAction.
 * - {@link https://schema.org/DepartAction DepartAction}: Unlike DepartAction, CheckOutAction implies that the agent is informing/confirming the end of a previously reserved service.
 * - {@link https://schema.org/CancelAction CancelAction}: Unlike CancelAction, CheckOutAction implies that the agent is informing/confirming the end of a previously reserved service.
 */
export declare type CheckOutAction = CheckOutActionLeaf;
interface CheckoutPageLeaf extends WebPageBase {
    "@type": "https://schema.org/CheckoutPage";
}
/** Web page type: Checkout page. */
export declare type CheckoutPage = CheckoutPageLeaf;
interface ChemicalSubstanceBase extends BioChemEntityBase {
    /** The chemical composition describes the identity and relative ratio of the chemical elements that make up the substance. */
    "https://schema.org/chemicalComposition"?: SchemaValue<Text, "https://schema.org/chemicalComposition">;
    /** A role played by the BioChemEntity within a chemical context. */
    "https://schema.org/chemicalRole"?: SchemaValue<DefinedTerm | IdReference, "https://schema.org/chemicalRole">;
    /** Intended use of the BioChemEntity by humans. */
    "https://schema.org/potentialUse"?: SchemaValue<DefinedTerm | IdReference, "https://schema.org/potentialUse">;
}
interface ChemicalSubstanceLeaf extends ChemicalSubstanceBase {
    "@type": "https://schema.org/ChemicalSubstance";
}
/** A chemical substance is 'a portion of matter of constant composition, composed of molecular entities of the same type or of different types' (source: {@link https://www.ebi.ac.uk/chebi/searchId.do?chebiId=59999 ChEBI:59999}). */
export declare type ChemicalSubstance = ChemicalSubstanceLeaf;
interface ChildCareLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/ChildCare";
}
/** A Childcare center. */
export declare type ChildCare = ChildCareLeaf | string;
interface ChildrensEventLeaf extends EventBase {
    "@type": "https://schema.org/ChildrensEvent";
}
/** Event type: Children's event. */
export declare type ChildrensEvent = ChildrensEventLeaf;
interface ChooseActionBase extends ActionBase {
    /** A sub property of object. The options subject to this action. */
    "https://schema.org/actionOption"?: SchemaValue<Text | Thing | IdReference, "https://schema.org/actionOption">;
    /**
     * A sub property of object. The options subject to this action.
     *
     * @deprecated Consider using https://schema.org/actionOption instead.
     */
    "https://schema.org/option"?: SchemaValue<Text | Thing | IdReference, "https://schema.org/option">;
}
interface ChooseActionLeaf extends ChooseActionBase {
    "@type": "https://schema.org/ChooseAction";
}
/** The act of expressing a preference from a set of options or a large or unbounded set of choices/options. */
export declare type ChooseAction = ChooseActionLeaf | VoteAction;
interface ChurchLeaf extends CivicStructureBase {
    "@type": "https://schema.org/Church";
}
/** A church. */
export declare type Church = ChurchLeaf | CatholicChurch | string;
interface CityLeaf extends PlaceBase {
    "@type": "https://schema.org/City";
}
/** A city or town. */
export declare type City = CityLeaf | string;
interface CityHallLeaf extends CivicStructureBase {
    "@type": "https://schema.org/CityHall";
}
/** A city hall. */
export declare type CityHall = CityHallLeaf | string;
interface CivicStructureBase extends PlaceBase {
    /**
     * The general opening hours for a business. Opening hours can be specified as a weekly time range, starting with days, then times per day. Multiple days can be listed with commas ',' separating each day. Day or time ranges are specified using a hyphen '-'.
     * - Days are specified using the following two-letter combinations: `Mo`, `Tu`, `We`, `Th`, `Fr`, `Sa`, `Su`.
     * - Times are specified using 24:00 format. For example, 3pm is specified as `15:00`, 10am as `10:00`.
     * - Here is an example: `<time itemprop="openingHours" datetime="Tu,Th 16:00-20:00">Tuesdays and Thursdays 4-8pm</time>`.
     * - If a business is open 7 days a week, then it can be specified as `<time itemprop="openingHours" datetime="Mo-Su">Monday through Sunday, all day</time>`.
     */
    "https://schema.org/openingHours"?: SchemaValue<Text, "https://schema.org/openingHours">;
}
interface CivicStructureLeaf extends CivicStructureBase {
    "@type": "https://schema.org/CivicStructure";
}
/** A public structure, such as a town hall or concert hall. */
export declare type CivicStructure = CivicStructureLeaf | Airport | Aquarium | Beach | BoatTerminal | Bridge | BusStation | BusStop | Campground | Cemetery | Crematorium | EducationalOrganization | EventVenue | FireStation | GovernmentBuilding | Hospital | MovieTheater | Museum | MusicVenue | Park | ParkingFacility | PerformingArtsTheater | PlaceOfWorship | Playground | PoliceStation | PublicToilet | RVPark | StadiumOrArena | SubwayStation | TaxiStand | TrainStation | Zoo | string;
interface ClaimBase extends CreativeWorkBase {
    /** Indicates an occurence of a {@link https://schema.org/Claim Claim} in some {@link https://schema.org/CreativeWork CreativeWork}. */
    "https://schema.org/appearance"?: SchemaValue<CreativeWork | IdReference, "https://schema.org/appearance">;
    /** For a {@link https://schema.org/Claim Claim} interpreted from {@link https://schema.org/MediaObject MediaObject} content sed to indicate a claim contained, implied or refined from the content of a {@link https://schema.org/MediaObject MediaObject}. */
    "https://schema.org/claimInterpreter"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/claimInterpreter">;
    /** Indicates the first known occurence of a {@link https://schema.org/Claim Claim} in some {@link https://schema.org/CreativeWork CreativeWork}. */
    "https://schema.org/firstAppearance"?: SchemaValue<CreativeWork | IdReference, "https://schema.org/firstAppearance">;
}
interface ClaimLeaf extends ClaimBase {
    "@type": "https://schema.org/Claim";
}
/**
 * A {@link https://schema.org/Claim Claim} in Schema.org represents a specific, factually-oriented claim that could be the {@link https://schema.org/itemReviewed itemReviewed} in a {@link https://schema.org/ClaimReview ClaimReview}. The content of a claim can be summarized with the {@link https://schema.org/text text} property. Variations on well known claims can have their common identity indicated via {@link https://schema.org/sameAs sameAs} links, and summarized with a {@link https://schema.org/name name}. Ideally, a {@link https://schema.org/Claim Claim} description includes enough contextual information to minimize the risk of ambiguity or inclarity. In practice, many claims are better understood in the context in which they appear or the interpretations provided by claim reviews.
 *
 * Beyond {@link https://schema.org/ClaimReview ClaimReview}, the Claim type can be associated with related creative works - for example a {@link https://schema.org/ScholarlyArticle ScholarlyArticle} or {@link https://schema.org/Question Question} might be {@link https://schema.org/about about} some {@link https://schema.org/Claim Claim}.
 *
 * At this time, Schema.org does not define any types of relationship between claims. This is a natural area for future exploration.
 */
export declare type Claim = ClaimLeaf;
interface ClaimReviewBase extends ReviewBase {
    /** A short summary of the specific claims reviewed in a ClaimReview. */
    "https://schema.org/claimReviewed"?: SchemaValue<Text, "https://schema.org/claimReviewed">;
}
interface ClaimReviewLeaf extends ClaimReviewBase {
    "@type": "https://schema.org/ClaimReview";
}
/** A fact-checking review of claims made (or reported) in some creative work (referenced via itemReviewed). */
export declare type ClaimReview = ClaimReviewLeaf;
interface ClassBase extends ThingBase {
    /** Relates a term (i.e. a property, class or enumeration) to one that supersedes it. */
    "https://schema.org/supersededBy"?: SchemaValue<Class | Enumeration | Property | IdReference, "https://schema.org/supersededBy">;
}
interface ClassLeaf extends ClassBase {
    "@type": "https://schema.org/Class";
}
/** A class, also often called a 'Type'; equivalent to rdfs:Class. */
export declare type Class = ClassLeaf;
interface ClipBase extends CreativeWorkBase {
    /** An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip. */
    "https://schema.org/actor"?: SchemaValue<Person | IdReference, "https://schema.org/actor">;
    /**
     * An actor, e.g. in tv, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip.
     *
     * @deprecated Consider using https://schema.org/actor instead.
     */
    "https://schema.org/actors"?: SchemaValue<Person | IdReference, "https://schema.org/actors">;
    /** Position of the clip within an ordered group of clips. */
    "https://schema.org/clipNumber"?: SchemaValue<Integer | Text, "https://schema.org/clipNumber">;
    /** A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip. */
    "https://schema.org/director"?: SchemaValue<Person | IdReference, "https://schema.org/director">;
    /**
     * A director of e.g. tv, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip.
     *
     * @deprecated Consider using https://schema.org/director instead.
     */
    "https://schema.org/directors"?: SchemaValue<Person | IdReference, "https://schema.org/directors">;
    /** The end time of the clip expressed as the number of seconds from the beginning of the work. */
    "https://schema.org/endOffset"?: SchemaValue<HyperTocEntry | Number | IdReference, "https://schema.org/endOffset">;
    /** The composer of the soundtrack. */
    "https://schema.org/musicBy"?: SchemaValue<MusicGroup | Person | IdReference, "https://schema.org/musicBy">;
    /** The episode to which this clip belongs. */
    "https://schema.org/partOfEpisode"?: SchemaValue<Episode | IdReference, "https://schema.org/partOfEpisode">;
    /** The season to which this episode belongs. */
    "https://schema.org/partOfSeason"?: SchemaValue<CreativeWorkSeason | IdReference, "https://schema.org/partOfSeason">;
    /** The series to which this episode or season belongs. */
    "https://schema.org/partOfSeries"?: SchemaValue<CreativeWorkSeries | IdReference, "https://schema.org/partOfSeries">;
    /** The start time of the clip expressed as the number of seconds from the beginning of the work. */
    "https://schema.org/startOffset"?: SchemaValue<HyperTocEntry | Number | IdReference, "https://schema.org/startOffset">;
}
interface ClipLeaf extends ClipBase {
    "@type": "https://schema.org/Clip";
}
/** A short TV or radio program or a segment/part of a program. */
export declare type Clip = ClipLeaf | MovieClip | RadioClip | TVClip | VideoGameClip;
interface ClothingStoreLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/ClothingStore";
}
/** A clothing store. */
export declare type ClothingStore = ClothingStoreLeaf | string;
interface CodeLeaf extends CreativeWorkBase {
    "@type": "https://schema.org/Code";
}
/**
 * Computer programming source code. Example: Full (compile ready) solutions, code snippet samples, scripts, templates.
 *
 * @deprecated Use SoftwareSourceCode instead.
 */
export declare type Code = CodeLeaf;
interface CollectionBase extends CreativeWorkBase {
    /** The number of items in the {@link https://schema.org/Collection Collection}. */
    "https://schema.org/collectionSize"?: SchemaValue<Integer, "https://schema.org/collectionSize">;
}
interface CollectionLeaf extends CollectionBase {
    "@type": "https://schema.org/Collection";
}
/** A collection of items e.g. creative works or products. */
export declare type Collection = CollectionLeaf | ProductCollection;
interface CollectionPageLeaf extends WebPageBase {
    "@type": "https://schema.org/CollectionPage";
}
/** Web page type: Collection page. */
export declare type CollectionPage = CollectionPageLeaf | MediaGallery;
interface CollegeOrUniversityLeaf extends EducationalOrganizationBase {
    "@type": "https://schema.org/CollegeOrUniversity";
}
/** A college, university, or other third-level educational institution. */
export declare type CollegeOrUniversity = CollegeOrUniversityLeaf | string;
interface ComedyClubLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/ComedyClub";
}
/** A comedy club. */
export declare type ComedyClub = ComedyClubLeaf | string;
interface ComedyEventLeaf extends EventBase {
    "@type": "https://schema.org/ComedyEvent";
}
/** Event type: Comedy event. */
export declare type ComedyEvent = ComedyEventLeaf;
interface ComicCoverArtBase extends VisualArtworkBase, ComicStoryBase {
}
interface ComicCoverArtLeaf extends ComicCoverArtBase {
    "@type": "https://schema.org/ComicCoverArt";
}
/** The artwork on the cover of a comic. */
export declare type ComicCoverArt = ComicCoverArtLeaf;
interface ComicIssueBase extends PublicationIssueBase {
    /** The primary artist for a work in a medium other than pencils or digital line art--for example, if the primary artwork is done in watercolors or digital paints. */
    "https://schema.org/artist"?: SchemaValue<Person | IdReference, "https://schema.org/artist">;
    /** The individual who adds color to inked drawings. */
    "https://schema.org/colorist"?: SchemaValue<Person | IdReference, "https://schema.org/colorist">;
    /** The individual who traces over the pencil drawings in ink after pencils are complete. */
    "https://schema.org/inker"?: SchemaValue<Person | IdReference, "https://schema.org/inker">;
    /** The individual who adds lettering, including speech balloons and sound effects, to artwork. */
    "https://schema.org/letterer"?: SchemaValue<Person | IdReference, "https://schema.org/letterer">;
    /** The individual who draws the primary narrative artwork. */
    "https://schema.org/penciler"?: SchemaValue<Person | IdReference, "https://schema.org/penciler">;
    /** A description of the variant cover for the issue, if the issue is a variant printing. For example, "Bryan Hitch Variant Cover" or "2nd Printing Variant". */
    "https://schema.org/variantCover"?: SchemaValue<Text, "https://schema.org/variantCover">;
}
interface ComicIssueLeaf extends ComicIssueBase {
    "@type": "https://schema.org/ComicIssue";
}
/** Individual comic issues are serially published as part of a larger series. For the sake of consistency, even one-shot issues belong to a series comprised of a single issue. All comic issues can be uniquely identified by: the combination of the name and volume number of the series to which the issue belongs; the issue number; and the variant description of the issue (if any). */
export declare type ComicIssue = ComicIssueLeaf;
interface ComicSeriesLeaf extends CreativeWorkSeriesBase {
    "@type": "https://schema.org/ComicSeries";
}
/** A sequential publication of comic stories under a unifying title, for example "The Amazing Spider-Man" or "Groo the Wanderer". */
export declare type ComicSeries = ComicSeriesLeaf;
interface ComicStoryBase extends CreativeWorkBase {
    /** The primary artist for a work in a medium other than pencils or digital line art--for example, if the primary artwork is done in watercolors or digital paints. */
    "https://schema.org/artist"?: SchemaValue<Person | IdReference, "https://schema.org/artist">;
    /** The individual who adds color to inked drawings. */
    "https://schema.org/colorist"?: SchemaValue<Person | IdReference, "https://schema.org/colorist">;
    /** The individual who traces over the pencil drawings in ink after pencils are complete. */
    "https://schema.org/inker"?: SchemaValue<Person | IdReference, "https://schema.org/inker">;
    /** The individual who adds lettering, including speech balloons and sound effects, to artwork. */
    "https://schema.org/letterer"?: SchemaValue<Person | IdReference, "https://schema.org/letterer">;
    /** The individual who draws the primary narrative artwork. */
    "https://schema.org/penciler"?: SchemaValue<Person | IdReference, "https://schema.org/penciler">;
}
interface ComicStoryLeaf extends ComicStoryBase {
    "@type": "https://schema.org/ComicStory";
}
/** The term "story" is any indivisible, re-printable unit of a comic, including the interior stories, covers, and backmatter. Most comics have at least two stories: a cover (ComicCoverArt) and an interior story. */
export declare type ComicStory = ComicStoryLeaf | ComicCoverArt;
interface CommentBase extends CreativeWorkBase {
    /** The number of downvotes this question, answer or comment has received from the community. */
    "https://schema.org/downvoteCount"?: SchemaValue<Integer, "https://schema.org/downvoteCount">;
    /** The parent of a question, answer or item in general. */
    "https://schema.org/parentItem"?: SchemaValue<Comment | IdReference, "https://schema.org/parentItem">;
    /** The number of upvotes this question, answer or comment has received from the community. */
    "https://schema.org/upvoteCount"?: SchemaValue<Integer, "https://schema.org/upvoteCount">;
}
interface CommentLeaf extends CommentBase {
    "@type": "https://schema.org/Comment";
}
/** A comment on an item - for example, a comment on a blog post. The comment's content is expressed via the {@link https://schema.org/text text} property, and its topic via {@link https://schema.org/about about}, properties shared with all CreativeWorks. */
export declare type Comment = CommentLeaf | Answer | CorrectionComment | Question;
interface CommentActionBase extends CommunicateActionBase {
    /** A sub property of result. The Comment created or sent as a result of this action. */
    "https://schema.org/resultComment"?: SchemaValue<Comment | IdReference, "https://schema.org/resultComment">;
}
interface CommentActionLeaf extends CommentActionBase {
    "@type": "https://schema.org/CommentAction";
}
/** The act of generating a comment about a subject. */
export declare type CommentAction = CommentActionLeaf;
interface CommunicateActionBase extends ActionBase {
    /** The subject matter of the content. */
    "https://schema.org/about"?: SchemaValue<Thing | IdReference, "https://schema.org/about">;
    /** The language of the content or performance or used in an action. Please use one of the language codes from the {@link http://tools.ietf.org/html/bcp47 IETF BCP 47 standard}. See also {@link https://schema.org/availableLanguage availableLanguage}. */
    "https://schema.org/inLanguage"?: SchemaValue<Language | Text | IdReference, "https://schema.org/inLanguage">;
    /**
     * A sub property of instrument. The language used on this action.
     *
     * @deprecated Consider using https://schema.org/inLanguage instead.
     */
    "https://schema.org/language"?: SchemaValue<Language | IdReference, "https://schema.org/language">;
    /** A sub property of participant. The participant who is at the receiving end of the action. */
    "https://schema.org/recipient"?: SchemaValue<Audience | ContactPoint | Organization | Person | IdReference, "https://schema.org/recipient">;
}
interface CommunicateActionLeaf extends CommunicateActionBase {
    "@type": "https://schema.org/CommunicateAction";
}
/** The act of conveying information to another person via a communication medium (instrument) such as speech, email, or telephone conversation. */
export declare type CommunicateAction = CommunicateActionLeaf | AskAction | CheckInAction | CheckOutAction | CommentAction | InformAction | InviteAction | ReplyAction | ShareAction;
interface CompleteDataFeedLeaf extends DataFeedBase {
    "@type": "https://schema.org/CompleteDataFeed";
}
/**
 * A {@link https://schema.org/CompleteDataFeed CompleteDataFeed} is a {@link https://schema.org/DataFeed DataFeed} whose standard representation includes content for every item currently in the feed.
 *
 * This is the equivalent of Atom's element as defined in Feed Paging and Archiving {@link https://tools.ietf.org/html/rfc5005 RFC 5005}, For example (and as defined for Atom), when using data from a feed that represents a collection of items that varies over time (e.g. "Top Twenty Records") there is no need to have newer entries mixed in alongside older, obsolete entries. By marking this feed as a CompleteDataFeed, old entries can be safely discarded when the feed is refreshed, since we can assume the feed has provided descriptions for all current items.
 */
export declare type CompleteDataFeed = CompleteDataFeedLeaf;
interface CompoundPriceSpecificationBase extends PriceSpecificationBase {
    /** This property links to all {@link https://schema.org/UnitPriceSpecification UnitPriceSpecification} nodes that apply in parallel for the {@link https://schema.org/CompoundPriceSpecification CompoundPriceSpecification} node. */
    "https://schema.org/priceComponent"?: SchemaValue<UnitPriceSpecification | IdReference, "https://schema.org/priceComponent">;
    /** Defines the type of a price specified for an offered product, for example a list price, a (temporary) sale price or a manufacturer suggested retail price. If multiple prices are specified for an offer the {@link https://schema.org/priceType priceType} property can be used to identify the type of each such specified price. The value of priceType can be specified as a value from enumeration PriceTypeEnumeration or as a free form text string for price types that are not already predefined in PriceTypeEnumeration. */
    "https://schema.org/priceType"?: SchemaValue<PriceTypeEnumeration | Text | IdReference, "https://schema.org/priceType">;
}
interface CompoundPriceSpecificationLeaf extends CompoundPriceSpecificationBase {
    "@type": "https://schema.org/CompoundPriceSpecification";
}
/** A compound price specification is one that bundles multiple prices that all apply in combination for different dimensions of consumption. Use the name property of the attached unit price specification for indicating the dimension of a price component (e.g. "electricity" or "final cleaning"). */
export declare type CompoundPriceSpecification = CompoundPriceSpecificationLeaf;
interface ComputerLanguageLeaf extends ThingBase {
    "@type": "https://schema.org/ComputerLanguage";
}
/** This type covers computer programming languages such as Scheme and Lisp, as well as other language-like computer representations. Natural languages are best represented with the {@link https://schema.org/Language Language} type. */
export declare type ComputerLanguage = ComputerLanguageLeaf;
interface ComputerStoreLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/ComputerStore";
}
/** A computer store. */
export declare type ComputerStore = ComputerStoreLeaf | string;
interface ConfirmActionLeaf extends InformActionBase {
    "@type": "https://schema.org/ConfirmAction";
}
/**
 * The act of notifying someone that a future event/action is going to happen as expected.
 *
 * Related actions:
 * - {@link https://schema.org/CancelAction CancelAction}: The antonym of ConfirmAction.
 */
export declare type ConfirmAction = ConfirmActionLeaf;
interface ConsortiumLeaf extends OrganizationBase {
    "@type": "https://schema.org/Consortium";
}
/** A Consortium is a membership {@link https://schema.org/Organization Organization} whose members are typically Organizations. */
export declare type Consortium = ConsortiumLeaf | string;
interface ConsumeActionBase extends ActionBase {
    /** A set of requirements that a must be fulfilled in order to perform an Action. If more than one value is specied, fulfilling one set of requirements will allow the Action to be performed. */
    "https://schema.org/actionAccessibilityRequirement"?: SchemaValue<ActionAccessSpecification | IdReference, "https://schema.org/actionAccessibilityRequirement">;
    /** An Offer which must be accepted before the user can perform the Action. For example, the user may need to buy a movie before being able to watch it. */
    "https://schema.org/expectsAcceptanceOf"?: SchemaValue<Offer | IdReference, "https://schema.org/expectsAcceptanceOf">;
}
interface ConsumeActionLeaf extends ConsumeActionBase {
    "@type": "https://schema.org/ConsumeAction";
}
/** The act of ingesting information/resources/food. */
export declare type ConsumeAction = ConsumeActionLeaf | DrinkAction | EatAction | InstallAction | ListenAction | ReadAction | UseAction | ViewAction | WatchAction;
interface ContactPageLeaf extends WebPageBase {
    "@type": "https://schema.org/ContactPage";
}
/** Web page type: Contact page. */
export declare type ContactPage = ContactPageLeaf;
interface ContactPointBase extends ThingBase {
    /** The geographic area where a service or offered item is provided. */
    "https://schema.org/areaServed"?: SchemaValue<AdministrativeArea | GeoShape | Place | Text | IdReference, "https://schema.org/areaServed">;
    /** A language someone may use with or at the item, service or place. Please use one of the language codes from the {@link http://tools.ietf.org/html/bcp47 IETF BCP 47 standard}. See also {@link https://schema.org/inLanguage inLanguage} */
    "https://schema.org/availableLanguage"?: SchemaValue<Language | Text | IdReference, "https://schema.org/availableLanguage">;
    /** An option available on this contact point (e.g. a toll-free number or support for hearing-impaired callers). */
    "https://schema.org/contactOption"?: SchemaValue<ContactPointOption | IdReference, "https://schema.org/contactOption">;
    /** A person or organization can have different contact points, for different purposes. For example, a sales contact point, a PR contact point and so on. This property is used to specify the kind of contact point. */
    "https://schema.org/contactType"?: SchemaValue<Text, "https://schema.org/contactType">;
    /** Email address. */
    "https://schema.org/email"?: SchemaValue<Text, "https://schema.org/email">;
    /** The fax number. */
    "https://schema.org/faxNumber"?: SchemaValue<Text, "https://schema.org/faxNumber">;
    /** The hours during which this service or contact is available. */
    "https://schema.org/hoursAvailable"?: SchemaValue<OpeningHoursSpecification | IdReference, "https://schema.org/hoursAvailable">;
    /** The product or service this support contact point is related to (such as product support for a particular product line). This can be a specific product or product line (e.g. "iPhone") or a general category of products or services (e.g. "smartphones"). */
    "https://schema.org/productSupported"?: SchemaValue<Product | Text | IdReference, "https://schema.org/productSupported">;
    /**
     * The geographic area where the service is provided.
     *
     * @deprecated Consider using https://schema.org/areaServed instead.
     */
    "https://schema.org/serviceArea"?: SchemaValue<AdministrativeArea | GeoShape | Place | IdReference, "https://schema.org/serviceArea">;
    /** The telephone number. */
    "https://schema.org/telephone"?: SchemaValue<Text, "https://schema.org/telephone">;
}
interface ContactPointLeaf extends ContactPointBase {
    "@type": "https://schema.org/ContactPoint";
}
/** A contact point—for example, a Customer Complaints department. */
export declare type ContactPoint = ContactPointLeaf | PostalAddress;
interface ContactPointOptionLeaf extends EnumerationBase {
    "@type": "https://schema.org/ContactPointOption";
}
/** Enumerated options related to a ContactPoint. */
export declare type ContactPointOption = "https://schema.org/HearingImpairedSupported" | "https://schema.org/TollFree" | ContactPointOptionLeaf;
interface ContinentLeaf extends PlaceBase {
    "@type": "https://schema.org/Continent";
}
/** One of the continents (for example, Europe or Africa). */
export declare type Continent = ContinentLeaf | string;
interface ControlActionLeaf extends ActionBase {
    "@type": "https://schema.org/ControlAction";
}
/** An agent controls a device or application. */
export declare type ControlAction = ControlActionLeaf | ActivateAction | DeactivateAction | ResumeAction | SuspendAction;
interface ConvenienceStoreLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/ConvenienceStore";
}
/** A convenience store. */
export declare type ConvenienceStore = ConvenienceStoreLeaf | string;
interface ConversationLeaf extends CreativeWorkBase {
    "@type": "https://schema.org/Conversation";
}
/** One or more messages between organizations or people on a particular topic. Individual messages can be linked to the conversation with isPartOf or hasPart properties. */
export declare type Conversation = ConversationLeaf;
interface CookActionBase extends ActionBase {
    /** A sub property of location. The specific food establishment where the action occurred. */
    "https://schema.org/foodEstablishment"?: SchemaValue<FoodEstablishment | Place | IdReference, "https://schema.org/foodEstablishment">;
    /** A sub property of location. The specific food event where the action occurred. */
    "https://schema.org/foodEvent"?: SchemaValue<FoodEvent | IdReference, "https://schema.org/foodEvent">;
    /** A sub property of instrument. The recipe/instructions used to perform the action. */
    "https://schema.org/recipe"?: SchemaValue<Recipe | IdReference, "https://schema.org/recipe">;
}
interface CookActionLeaf extends CookActionBase {
    "@type": "https://schema.org/CookAction";
}
/** The act of producing/preparing food. */
export declare type CookAction = CookActionLeaf;
interface CorporationBase extends OrganizationBase {
    /** The exchange traded instrument associated with a Corporation object. The tickerSymbol is expressed as an exchange and an instrument name separated by a space character. For the exchange component of the tickerSymbol attribute, we recommend using the controlled vocabulary of Market Identifier Codes (MIC) specified in ISO15022. */
    "https://schema.org/tickerSymbol"?: SchemaValue<Text, "https://schema.org/tickerSymbol">;
}
interface CorporationLeaf extends CorporationBase {
    "@type": "https://schema.org/Corporation";
}
/** Organization: A business corporation. */
export declare type Corporation = CorporationLeaf | string;
interface CorrectionCommentLeaf extends CommentBase {
    "@type": "https://schema.org/CorrectionComment";
}
/** A {@link https://schema.org/comment comment} that corrects {@link https://schema.org/CreativeWork CreativeWork}. */
export declare type CorrectionComment = CorrectionCommentLeaf;
interface CountryLeaf extends PlaceBase {
    "@type": "https://schema.org/Country";
}
/** A country. */
export declare type Country = CountryLeaf | string;
interface CourseBase extends LearningResourceBase, CreativeWorkBase {
    /** The identifier for the {@link https://schema.org/Course Course} used by the course {@link https://schema.org/provider provider} (e.g. CS101 or 6.001). */
    "https://schema.org/courseCode"?: SchemaValue<Text, "https://schema.org/courseCode">;
    /** Requirements for taking the Course. May be completion of another {@link https://schema.org/Course Course} or a textual description like "permission of instructor". Requirements may be a pre-requisite competency, referenced using {@link https://schema.org/AlignmentObject AlignmentObject}. */
    "https://schema.org/coursePrerequisites"?: SchemaValue<AlignmentObject | Course | Text | IdReference, "https://schema.org/coursePrerequisites">;
    /** A description of the qualification, award, certificate, diploma or other educational credential awarded as a consequence of successful completion of this course or program. */
    "https://schema.org/educationalCredentialAwarded"?: SchemaValue<EducationalOccupationalCredential | Text | URL | IdReference, "https://schema.org/educationalCredentialAwarded">;
    /** An offering of the course at a specific time and place or through specific media or mode of study or to a specific section of students. */
    "https://schema.org/hasCourseInstance"?: SchemaValue<CourseInstance | IdReference, "https://schema.org/hasCourseInstance">;
    /** The number of credits or units awarded by a Course or required to complete an EducationalOccupationalProgram. */
    "https://schema.org/numberOfCredits"?: SchemaValue<Integer | StructuredValue | IdReference, "https://schema.org/numberOfCredits">;
    /** A description of the qualification, award, certificate, diploma or other occupational credential awarded as a consequence of successful completion of this course or program. */
    "https://schema.org/occupationalCredentialAwarded"?: SchemaValue<EducationalOccupationalCredential | Text | URL | IdReference, "https://schema.org/occupationalCredentialAwarded">;
}
interface CourseLeaf extends CourseBase {
    "@type": "https://schema.org/Course";
}
/** A description of an educational course which may be offered as distinct instances at which take place at different times or take place at different locations, or be offered through different media or modes of study. An educational course is a sequence of one or more educational events and/or creative works which aims to build knowledge, competence or ability of learners. */
export declare type Course = CourseLeaf;
interface CourseInstanceBase extends EventBase {
    /** The medium or means of delivery of the course instance or the mode of study, either as a text label (e.g. "online", "onsite" or "blended"; "synchronous" or "asynchronous"; "full-time" or "part-time") or as a URL reference to a term from a controlled vocabulary (e.g. https://ceds.ed.gov/element/001311#Asynchronous ). */
    "https://schema.org/courseMode"?: SchemaValue<Text | URL, "https://schema.org/courseMode">;
    /** The amount of work expected of students taking the course, often provided as a figure per week or per month, and may be broken down by type. For example, "2 hours of lectures, 1 hour of lab work and 3 hours of independent study per week". */
    "https://schema.org/courseWorkload"?: SchemaValue<Text, "https://schema.org/courseWorkload">;
    /** A person assigned to instruct or provide instructional assistance for the {@link https://schema.org/CourseInstance CourseInstance}. */
    "https://schema.org/instructor"?: SchemaValue<Person | IdReference, "https://schema.org/instructor">;
}
interface CourseInstanceLeaf extends CourseInstanceBase {
    "@type": "https://schema.org/CourseInstance";
}
/** An instance of a {@link https://schema.org/Course Course} which is distinct from other instances because it is offered at a different time or location or through different media or modes of study or to a specific section of students. */
export declare type CourseInstance = CourseInstanceLeaf;
interface CourthouseLeaf extends CivicStructureBase {
    "@type": "https://schema.org/Courthouse";
}
/** A courthouse. */
export declare type Courthouse = CourthouseLeaf | string;
interface CoverArtLeaf extends VisualArtworkBase {
    "@type": "https://schema.org/CoverArt";
}
/** The artwork on the outer surface of a CreativeWork. */
export declare type CoverArt = CoverArtLeaf | ComicCoverArt;
interface CovidTestingFacilityLeaf extends MedicalClinicBase {
    "@type": "https://schema.org/CovidTestingFacility";
}
/** A CovidTestingFacility is a {@link https://schema.org/MedicalClinic MedicalClinic} where testing for the COVID-19 Coronavirus disease is available. If the facility is being made available from an established {@link https://schema.org/Pharmacy Pharmacy}, {@link https://schema.org/Hotel Hotel}, or other non-medical organization, multiple types can be listed. This makes it easier to re-use existing schema.org information about that place e.g. contact info, address, opening hours. Note that in an emergency, such information may not always be reliable. */
export declare type CovidTestingFacility = CovidTestingFacilityLeaf | string;
interface CreateActionLeaf extends ActionBase {
    "@type": "https://schema.org/CreateAction";
}
/** The act of deliberately creating/producing/generating/building a result out of the agent. */
export declare type CreateAction = CreateActionLeaf | CookAction | DrawAction | FilmAction | PaintAction | PhotographAction | WriteAction;
interface CreativeWorkBase extends ThingBase {
    /** The subject matter of the content. */
    "https://schema.org/about"?: SchemaValue<Thing | IdReference, "https://schema.org/about">;
    /** An abstract is a short description that summarizes a {@link https://schema.org/CreativeWork CreativeWork}. */
    "https://schema.org/abstract"?: SchemaValue<Text, "https://schema.org/abstract">;
    /** Indicates that the resource is compatible with the referenced accessibility API ({@link http://www.w3.org/wiki/WebSchemas/Accessibility WebSchemas wiki lists possible values}). */
    "https://schema.org/accessibilityAPI"?: SchemaValue<Text, "https://schema.org/accessibilityAPI">;
    /** Identifies input methods that are sufficient to fully control the described resource ({@link http://www.w3.org/wiki/WebSchemas/Accessibility WebSchemas wiki lists possible values}). */
    "https://schema.org/accessibilityControl"?: SchemaValue<Text, "https://schema.org/accessibilityControl">;
    /** Content features of the resource, such as accessible media, alternatives and supported enhancements for accessibility ({@link http://www.w3.org/wiki/WebSchemas/Accessibility WebSchemas wiki lists possible values}). */
    "https://schema.org/accessibilityFeature"?: SchemaValue<Text, "https://schema.org/accessibilityFeature">;
    /** A characteristic of the described resource that is physiologically dangerous to some users. Related to WCAG 2.0 guideline 2.3 ({@link http://www.w3.org/wiki/WebSchemas/Accessibility WebSchemas wiki lists possible values}). */
    "https://schema.org/accessibilityHazard"?: SchemaValue<Text, "https://schema.org/accessibilityHazard">;
    /** A human-readable summary of specific accessibility features or deficiencies, consistent with the other accessibility metadata but expressing subtleties such as "short descriptions are present but long descriptions will be needed for non-visual users" or "short descriptions are present and no long descriptions are needed." */
    "https://schema.org/accessibilitySummary"?: SchemaValue<Text, "https://schema.org/accessibilitySummary">;
    /** The human sensory perceptual system or cognitive faculty through which a person may process or perceive information. Expected values include: auditory, tactile, textual, visual, colorDependent, chartOnVisual, chemOnVisual, diagramOnVisual, mathOnVisual, musicOnVisual, textOnVisual. */
    "https://schema.org/accessMode"?: SchemaValue<Text, "https://schema.org/accessMode">;
    /** A list of single or combined accessModes that are sufficient to understand all the intellectual content of a resource. Expected values include: auditory, tactile, textual, visual. */
    "https://schema.org/accessModeSufficient"?: SchemaValue<ItemList | IdReference, "https://schema.org/accessModeSufficient">;
    /** Specifies the Person that is legally accountable for the CreativeWork. */
    "https://schema.org/accountablePerson"?: SchemaValue<Person | IdReference, "https://schema.org/accountablePerson">;
    /** Indicates a page documenting how licenses can be purchased or otherwise acquired, for the current item. */
    "https://schema.org/acquireLicensePage"?: SchemaValue<CreativeWork | URL | IdReference, "https://schema.org/acquireLicensePage">;
    /** The overall rating, based on a collection of reviews or ratings, of the item. */
    "https://schema.org/aggregateRating"?: SchemaValue<AggregateRating | IdReference, "https://schema.org/aggregateRating">;
    /** A secondary title of the CreativeWork. */
    "https://schema.org/alternativeHeadline"?: SchemaValue<Text, "https://schema.org/alternativeHeadline">;
    /** Indicates a page or other link involved in archival of a {@link https://schema.org/CreativeWork CreativeWork}. In the case of {@link https://schema.org/MediaReview MediaReview}, the items in a {@link https://schema.org/MediaReviewItem MediaReviewItem} may often become inaccessible, but be archived by archival, journalistic, activist, or law enforcement organizations. In such cases, the referenced page may not directly publish the content. */
    "https://schema.org/archivedAt"?: SchemaValue<URL | WebPage | IdReference, "https://schema.org/archivedAt">;
    /** The item being described is intended to assess the competency or learning outcome defined by the referenced term. */
    "https://schema.org/assesses"?: SchemaValue<DefinedTerm | Text | IdReference, "https://schema.org/assesses">;
    /** A media object that encodes this CreativeWork. This property is a synonym for encoding. */
    "https://schema.org/associatedMedia"?: SchemaValue<MediaObject | IdReference, "https://schema.org/associatedMedia">;
    /** An intended audience, i.e. a group for whom something was created. */
    "https://schema.org/audience"?: SchemaValue<Audience | IdReference, "https://schema.org/audience">;
    /** An embedded audio object. */
    "https://schema.org/audio"?: SchemaValue<AudioObject | Clip | MusicRecording | IdReference, "https://schema.org/audio">;
    /** The author of this content or rating. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably. */
    "https://schema.org/author"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/author">;
    /** An award won by or for this item. */
    "https://schema.org/award"?: SchemaValue<Text, "https://schema.org/award">;
    /**
     * Awards won by or for this item.
     *
     * @deprecated Consider using https://schema.org/award instead.
     */
    "https://schema.org/awards"?: SchemaValue<Text, "https://schema.org/awards">;
    /** Fictional person connected with a creative work. */
    "https://schema.org/character"?: SchemaValue<Person | IdReference, "https://schema.org/character">;
    /** A citation or reference to another creative work, such as another publication, web page, scholarly article, etc. */
    "https://schema.org/citation"?: SchemaValue<CreativeWork | Text | IdReference, "https://schema.org/citation">;
    /** Comments, typically from users. */
    "https://schema.org/comment"?: SchemaValue<Comment | IdReference, "https://schema.org/comment">;
    /** The number of comments this CreativeWork (e.g. Article, Question or Answer) has received. This is most applicable to works published in Web sites with commenting system; additional comments may exist elsewhere. */
    "https://schema.org/commentCount"?: SchemaValue<Integer, "https://schema.org/commentCount">;
    /**
     * Conditions that affect the availability of, or method(s) of access to, an item. Typically used for real world items such as an {@link https://schema.org/ArchiveComponent ArchiveComponent} held by an {@link https://schema.org/ArchiveOrganization ArchiveOrganization}. This property is not suitable for use as a general Web access control mechanism. It is expressed only in natural language.
     *
     * For example "Available by appointment from the Reading Room" or "Accessible only from logged-in accounts ".
     */
    "https://schema.org/conditionsOfAccess"?: SchemaValue<Text, "https://schema.org/conditionsOfAccess">;
    /** The location depicted or described in the content. For example, the location in a photograph or painting. */
    "https://schema.org/contentLocation"?: SchemaValue<Place | IdReference, "https://schema.org/contentLocation">;
    /** Official rating of a piece of content—for example,'MPAA PG-13'. */
    "https://schema.org/contentRating"?: SchemaValue<Rating | Text | IdReference, "https://schema.org/contentRating">;
    /** The specific time described by a creative work, for works (e.g. articles, video objects etc.) that emphasise a particular moment within an Event. */
    "https://schema.org/contentReferenceTime"?: SchemaValue<DateTime, "https://schema.org/contentReferenceTime">;
    /** A secondary contributor to the CreativeWork or Event. */
    "https://schema.org/contributor"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/contributor">;
    /** The party holding the legal copyright to the CreativeWork. */
    "https://schema.org/copyrightHolder"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/copyrightHolder">;
    /** Text of a notice appropriate for describing the copyright aspects of this Creative Work, ideally indicating the owner of the copyright for the Work. */
    "https://schema.org/copyrightNotice"?: SchemaValue<Text, "https://schema.org/copyrightNotice">;
    /** The year during which the claimed copyright for the CreativeWork was first asserted. */
    "https://schema.org/copyrightYear"?: SchemaValue<Number, "https://schema.org/copyrightYear">;
    /** Indicates a correction to a {@link https://schema.org/CreativeWork CreativeWork}, either via a {@link https://schema.org/CorrectionComment CorrectionComment}, textually or in another document. */
    "https://schema.org/correction"?: SchemaValue<CorrectionComment | Text | URL | IdReference, "https://schema.org/correction">;
    /**
     * The country of origin of something, including products as well as creative works such as movie and TV content.
     *
     * In the case of TV and movie, this would be the country of the principle offices of the production company or individual responsible for the movie. For other kinds of {@link https://schema.org/CreativeWork CreativeWork} it is difficult to provide fully general guidance, and properties such as {@link https://schema.org/contentLocation contentLocation} and {@link https://schema.org/locationCreated locationCreated} may be more applicable.
     *
     * In the case of products, the country of origin of the product. The exact interpretation of this may vary by context and product type, and cannot be fully enumerated here.
     */
    "https://schema.org/countryOfOrigin"?: SchemaValue<Country | IdReference, "https://schema.org/countryOfOrigin">;
    /** The status of a creative work in terms of its stage in a lifecycle. Example terms include Incomplete, Draft, Published, Obsolete. Some organizations define a set of terms for the stages of their publication lifecycle. */
    "https://schema.org/creativeWorkStatus"?: SchemaValue<DefinedTerm | Text | IdReference, "https://schema.org/creativeWorkStatus">;
    /** The creator/author of this CreativeWork. This is the same as the Author property for CreativeWork. */
    "https://schema.org/creator"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/creator">;
    /** Text that can be used to credit person(s) and/or organization(s) associated with a published Creative Work. */
    "https://schema.org/creditText"?: SchemaValue<Text, "https://schema.org/creditText">;
    /** The date on which the CreativeWork was created or the item was added to a DataFeed. */
    "https://schema.org/dateCreated"?: SchemaValue<Date | DateTime, "https://schema.org/dateCreated">;
    /** The date on which the CreativeWork was most recently modified or when the item's entry was modified within a DataFeed. */
    "https://schema.org/dateModified"?: SchemaValue<Date | DateTime, "https://schema.org/dateModified">;
    /** Date of first broadcast/publication. */
    "https://schema.org/datePublished"?: SchemaValue<Date | DateTime, "https://schema.org/datePublished">;
    /** A link to the page containing the comments of the CreativeWork. */
    "https://schema.org/discussionUrl"?: SchemaValue<URL, "https://schema.org/discussionUrl">;
    /**
     * An {@link https://eidr.org/ EIDR} (Entertainment Identifier Registry) {@link https://schema.org/identifier identifier} representing a specific edit / edition for a work of film or television.
     *
     * For example, the motion picture known as "Ghostbusters" whose {@link https://schema.org/titleEIDR titleEIDR} is "10.5240/7EC7-228A-510A-053E-CBB8-J", has several edits e.g. "10.5240/1F2A-E1C5-680A-14C6-E76B-I" and "10.5240/8A35-3BEE-6497-5D12-9E4F-3".
     *
     * Since schema.org types like {@link https://schema.org/Movie Movie} and {@link https://schema.org/TVEpisode TVEpisode} can be used for both works and their multiple expressions, it is possible to use {@link https://schema.org/titleEIDR titleEIDR} alone (for a general description), or alongside {@link https://schema.org/editEIDR editEIDR} for a more edit-specific description.
     */
    "https://schema.org/editEIDR"?: SchemaValue<Text | URL, "https://schema.org/editEIDR">;
    /** Specifies the Person who edited the CreativeWork. */
    "https://schema.org/editor"?: SchemaValue<Person | IdReference, "https://schema.org/editor">;
    /**
     * An alignment to an established educational framework.
     *
     * This property should not be used where the nature of the alignment can be described using a simple property, for example to express that a resource {@link https://schema.org/teaches teaches} or {@link https://schema.org/assesses assesses} a competency.
     */
    "https://schema.org/educationalAlignment"?: SchemaValue<AlignmentObject | IdReference, "https://schema.org/educationalAlignment">;
    /** The level in terms of progression through an educational or training context. Examples of educational levels include 'beginner', 'intermediate' or 'advanced', and formal sets of level indicators. */
    "https://schema.org/educationalLevel"?: SchemaValue<DefinedTerm | Text | URL | IdReference, "https://schema.org/educationalLevel">;
    /** The purpose of a work in the context of education; for example, 'assignment', 'group work'. */
    "https://schema.org/educationalUse"?: SchemaValue<DefinedTerm | Text | IdReference, "https://schema.org/educationalUse">;
    /** A media object that encodes this CreativeWork. This property is a synonym for associatedMedia. */
    "https://schema.org/encoding"?: SchemaValue<MediaObject | IdReference, "https://schema.org/encoding">;
    /**
     * Media type typically expressed using a MIME format (see {@link http://www.iana.org/assignments/media-types/media-types.xhtml IANA site} and {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types MDN reference}) e.g. application/zip for a SoftwareApplication binary, audio/mpeg for .mp3 etc.).
     *
     * In cases where a {@link https://schema.org/CreativeWork CreativeWork} has several media type representations, {@link https://schema.org/encoding encoding} can be used to indicate each {@link https://schema.org/MediaObject MediaObject} alongside particular {@link https://schema.org/encodingFormat encodingFormat} information.
     *
     * Unregistered or niche encoding and file formats can be indicated instead via the most appropriate URL, e.g. defining Web page or a Wikipedia/Wikidata entry.
     */
    "https://schema.org/encodingFormat"?: SchemaValue<Text | URL, "https://schema.org/encodingFormat">;
    /**
     * A media object that encodes this CreativeWork.
     *
     * @deprecated Consider using https://schema.org/encoding instead.
     */
    "https://schema.org/encodings"?: SchemaValue<MediaObject | IdReference, "https://schema.org/encodings">;
    /** A creative work that this work is an example/instance/realization/derivation of. */
    "https://schema.org/exampleOfWork"?: SchemaValue<CreativeWork | IdReference, "https://schema.org/exampleOfWork">;
    /** Date the content expires and is no longer useful or available. For example a {@link https://schema.org/VideoObject VideoObject} or {@link https://schema.org/NewsArticle NewsArticle} whose availability or relevance is time-limited, or a {@link https://schema.org/ClaimReview ClaimReview} fact check whose publisher wants to indicate that it may no longer be relevant (or helpful to highlight) after some date. */
    "https://schema.org/expires"?: SchemaValue<Date, "https://schema.org/expires">;
    /**
     * Media type, typically MIME format (see {@link http://www.iana.org/assignments/media-types/media-types.xhtml IANA site}) of the content e.g. application/zip of a SoftwareApplication binary. In cases where a CreativeWork has several media type representations, 'encoding' can be used to indicate each MediaObject alongside particular fileFormat information. Unregistered or niche file formats can be indicated instead via the most appropriate URL, e.g. defining Web page or a Wikipedia entry.
     *
     * @deprecated Consider using https://schema.org/encodingFormat instead.
     */
    "https://schema.org/fileFormat"?: SchemaValue<Text | URL, "https://schema.org/fileFormat">;
    /** A person or organization that supports (sponsors) something through some kind of financial contribution. */
    "https://schema.org/funder"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/funder">;
    /** Genre of the creative work, broadcast channel or group. */
    "https://schema.org/genre"?: SchemaValue<Text | URL, "https://schema.org/genre">;
    /** Indicates an item or CreativeWork that is part of this item, or CreativeWork (in some sense). */
    "https://schema.org/hasPart"?: SchemaValue<CreativeWork | IdReference, "https://schema.org/hasPart">;
    /** Headline of the article. */
    "https://schema.org/headline"?: SchemaValue<Text, "https://schema.org/headline">;
    /** The language of the content or performance or used in an action. Please use one of the language codes from the {@link http://tools.ietf.org/html/bcp47 IETF BCP 47 standard}. See also {@link https://schema.org/availableLanguage availableLanguage}. */
    "https://schema.org/inLanguage"?: SchemaValue<Language | Text | IdReference, "https://schema.org/inLanguage">;
    /** The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used. */
    "https://schema.org/interactionStatistic"?: SchemaValue<InteractionCounter | IdReference, "https://schema.org/interactionStatistic">;
    /** The predominant mode of learning supported by the learning resource. Acceptable values are 'active', 'expositive', or 'mixed'. */
    "https://schema.org/interactivityType"?: SchemaValue<Text, "https://schema.org/interactivityType">;
    /** Used to indicate a specific claim contained, implied, translated or refined from the content of a {@link https://schema.org/MediaObject MediaObject} or other {@link https://schema.org/CreativeWork CreativeWork}. The interpreting party can be indicated using {@link https://schema.org/claimInterpreter claimInterpreter}. */
    "https://schema.org/interpretedAsClaim"?: SchemaValue<Claim | IdReference, "https://schema.org/interpretedAsClaim">;
    /** A flag to signal that the item, event, or place is accessible for free. */
    "https://schema.org/isAccessibleForFree"?: SchemaValue<Boolean, "https://schema.org/isAccessibleForFree">;
    /** A resource from which this work is derived or from which it is a modification or adaption. */
    "https://schema.org/isBasedOn"?: SchemaValue<CreativeWork | Product | URL | IdReference, "https://schema.org/isBasedOn">;
    /**
     * A resource that was used in the creation of this resource. This term can be repeated for multiple sources. For example, http://example.com/great-multiplication-intro.html.
     *
     * @deprecated Consider using https://schema.org/isBasedOn instead.
     */
    "https://schema.org/isBasedOnUrl"?: SchemaValue<CreativeWork | Product | URL | IdReference, "https://schema.org/isBasedOnUrl">;
    /** Indicates whether this content is family friendly. */
    "https://schema.org/isFamilyFriendly"?: SchemaValue<Boolean, "https://schema.org/isFamilyFriendly">;
    /** Indicates an item or CreativeWork that this item, or CreativeWork (in some sense), is part of. */
    "https://schema.org/isPartOf"?: SchemaValue<CreativeWork | URL | IdReference, "https://schema.org/isPartOf">;
    /** Keywords or tags used to describe this content. Multiple entries in a keywords list are typically delimited by commas. */
    "https://schema.org/keywords"?: SchemaValue<DefinedTerm | Text | URL | IdReference, "https://schema.org/keywords">;
    /** The predominant type or kind characterizing the learning resource. For example, 'presentation', 'handout'. */
    "https://schema.org/learningResourceType"?: SchemaValue<DefinedTerm | Text | IdReference, "https://schema.org/learningResourceType">;
    /** A license document that applies to this content, typically indicated by URL. */
    "https://schema.org/license"?: SchemaValue<CreativeWork | URL | IdReference, "https://schema.org/license">;
    /** The location where the CreativeWork was created, which may not be the same as the location depicted in the CreativeWork. */
    "https://schema.org/locationCreated"?: SchemaValue<Place | IdReference, "https://schema.org/locationCreated">;
    /** Indicates the primary entity described in some page or other CreativeWork. */
    "https://schema.org/mainEntity"?: SchemaValue<Thing | IdReference, "https://schema.org/mainEntity">;
    /** A maintainer of a {@link https://schema.org/Dataset Dataset}, software package ({@link https://schema.org/SoftwareApplication SoftwareApplication}), or other {@link https://schema.org/Project Project}. A maintainer is a {@link https://schema.org/Person Person} or {@link https://schema.org/Organization Organization} that manages contributions to, and/or publication of, some (typically complex) artifact. It is common for distributions of software and data to be based on "upstream" sources. When {@link https://schema.org/maintainer maintainer} is applied to a specific version of something e.g. a particular version or packaging of a {@link https://schema.org/Dataset Dataset}, it is always possible that the upstream source has a different maintainer. The {@link https://schema.org/isBasedOn isBasedOn} property can be used to indicate such relationships between datasets to make the different maintenance roles clear. Similarly in the case of software, a package may have dedicated maintainers working on integration into software distributions such as Ubuntu, as well as upstream maintainers of the underlying work. */
    "https://schema.org/maintainer"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/maintainer">;
    /** A material that something is made from, e.g. leather, wool, cotton, paper. */
    "https://schema.org/material"?: SchemaValue<Product | Text | URL | IdReference, "https://schema.org/material">;
    /** The quantity of the materials being described or an expression of the physical space they occupy. */
    "https://schema.org/materialExtent"?: SchemaValue<QuantitativeValue | Text | IdReference, "https://schema.org/materialExtent">;
    /** Indicates that the CreativeWork contains a reference to, but is not necessarily about a concept. */
    "https://schema.org/mentions"?: SchemaValue<Thing | IdReference, "https://schema.org/mentions">;
    /** An offer to provide this item—for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use {@link https://schema.org/businessFunction businessFunction} to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a {@link https://schema.org/Demand Demand}. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer. */
    "https://schema.org/offers"?: SchemaValue<Demand | Offer | IdReference, "https://schema.org/offers">;
    /** A pattern that something has, for example 'polka dot', 'striped', 'Canadian flag'. Values are typically expressed as text, although links to controlled value schemes are also supported. */
    "https://schema.org/pattern"?: SchemaValue<DefinedTerm | Text | IdReference, "https://schema.org/pattern">;
    /** The position of an item in a series or sequence of items. */
    "https://schema.org/position"?: SchemaValue<Integer | Text, "https://schema.org/position">;
    /** The person or organization who produced the work (e.g. music album, movie, tv/radio series etc.). */
    "https://schema.org/producer"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/producer">;
    /** The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller. */
    "https://schema.org/provider"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/provider">;
    /** A publication event associated with the item. */
    "https://schema.org/publication"?: SchemaValue<PublicationEvent | IdReference, "https://schema.org/publication">;
    /** The publisher of the creative work. */
    "https://schema.org/publisher"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/publisher">;
    /** The publishing division which published the comic. */
    "https://schema.org/publisherImprint"?: SchemaValue<Organization | IdReference, "https://schema.org/publisherImprint">;
    /**
     * The publishingPrinciples property indicates (typically via {@link https://schema.org/URL URL}) a document describing the editorial principles of an {@link https://schema.org/Organization Organization} (or individual e.g. a {@link https://schema.org/Person Person} writing a blog) that relate to their activities as a publisher, e.g. ethics or diversity policies. When applied to a {@link https://schema.org/CreativeWork CreativeWork} (e.g. {@link https://schema.org/NewsArticle NewsArticle}) the principles are those of the party primarily responsible for the creation of the {@link https://schema.org/CreativeWork CreativeWork}.
     *
     * While such policies are most typically expressed in natural language, sometimes related information (e.g. indicating a {@link https://schema.org/funder funder}) can be expressed using schema.org terminology.
     */
    "https://schema.org/publishingPrinciples"?: SchemaValue<CreativeWork | URL | IdReference, "https://schema.org/publishingPrinciples">;
    /** The Event where the CreativeWork was recorded. The CreativeWork may capture all or part of the event. */
    "https://schema.org/recordedAt"?: SchemaValue<Event | IdReference, "https://schema.org/recordedAt">;
    /** The place and time the release was issued, expressed as a PublicationEvent. */
    "https://schema.org/releasedEvent"?: SchemaValue<PublicationEvent | IdReference, "https://schema.org/releasedEvent">;
    /** A review of the item. */
    "https://schema.org/review"?: SchemaValue<Review | IdReference, "https://schema.org/review">;
    /**
     * Review of the item.
     *
     * @deprecated Consider using https://schema.org/review instead.
     */
    "https://schema.org/reviews"?: SchemaValue<Review | IdReference, "https://schema.org/reviews">;
    /** Indicates (by URL or string) a particular version of a schema used in some CreativeWork. This property was created primarily to indicate the use of a specific schema.org release, e.g. `10.0` as a simple string, or more explicitly via URL, `https://schema.org/docs/releases.html#v10.0`. There may be situations in which other schemas might usefully be referenced this way, e.g. `http://dublincore.org/specifications/dublin-core/dces/1999-07-02/` but this has not been carefully explored in the community. */
    "https://schema.org/schemaVersion"?: SchemaValue<Text | URL, "https://schema.org/schemaVersion">;
    /** Indicates the date on which the current structured data was generated / published. Typically used alongside {@link https://schema.org/sdPublisher sdPublisher} */
    "https://schema.org/sdDatePublished"?: SchemaValue<Date, "https://schema.org/sdDatePublished">;
    /** A license document that applies to this structured data, typically indicated by URL. */
    "https://schema.org/sdLicense"?: SchemaValue<CreativeWork | URL | IdReference, "https://schema.org/sdLicense">;
    /** Indicates the party responsible for generating and publishing the current structured data markup, typically in cases where the structured data is derived automatically from existing published content but published on a different site. For example, student projects and open data initiatives often re-publish existing content with more explicitly structured metadata. The {@link https://schema.org/sdPublisher sdPublisher} property helps make such practices more explicit. */
    "https://schema.org/sdPublisher"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/sdPublisher">;
    /** A standardized size of a product or creative work, specified either through a simple textual string (for example 'XL', '32Wx34L'), a QuantitativeValue with a unitCode, or a comprehensive and structured {@link https://schema.org/SizeSpecification SizeSpecification}; in other cases, the {@link https://schema.org/width width}, {@link https://schema.org/height height}, {@link https://schema.org/depth depth} and {@link https://schema.org/weight weight} properties may be more applicable. */
    "https://schema.org/size"?: SchemaValue<DefinedTerm | QuantitativeValue | SizeSpecification | Text | IdReference, "https://schema.org/size">;
    /** The Organization on whose behalf the creator was working. */
    "https://schema.org/sourceOrganization"?: SchemaValue<Organization | IdReference, "https://schema.org/sourceOrganization">;
    /** The "spatial" property can be used in cases when more specific properties (e.g. {@link https://schema.org/locationCreated locationCreated}, {@link https://schema.org/spatialCoverage spatialCoverage}, {@link https://schema.org/contentLocation contentLocation}) are not known to be appropriate. */
    "https://schema.org/spatial"?: SchemaValue<Place | IdReference, "https://schema.org/spatial">;
    /** The spatialCoverage of a CreativeWork indicates the place(s) which are the focus of the content. It is a subproperty of contentLocation intended primarily for more technical and detailed materials. For example with a Dataset, it indicates areas that the dataset describes: a dataset of New York weather would have spatialCoverage which was the place: the state of New York. */
    "https://schema.org/spatialCoverage"?: SchemaValue<Place | IdReference, "https://schema.org/spatialCoverage">;
    /** A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event. */
    "https://schema.org/sponsor"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/sponsor">;
    /** The item being described is intended to help a person learn the competency or learning outcome defined by the referenced term. */
    "https://schema.org/teaches"?: SchemaValue<DefinedTerm | Text | IdReference, "https://schema.org/teaches">;
    /** The "temporal" property can be used in cases where more specific properties (e.g. {@link https://schema.org/temporalCoverage temporalCoverage}, {@link https://schema.org/dateCreated dateCreated}, {@link https://schema.org/dateModified dateModified}, {@link https://schema.org/datePublished datePublished}) are not known to be appropriate. */
    "https://schema.org/temporal"?: SchemaValue<DateTime | Text, "https://schema.org/temporal">;
    /**
     * The temporalCoverage of a CreativeWork indicates the period that the content applies to, i.e. that it describes, either as a DateTime or as a textual string indicating a time period in {@link https://en.wikipedia.org/wiki/ISO_8601#Time_intervals ISO 8601 time interval format}. In the case of a Dataset it will typically indicate the relevant time period in a precise notation (e.g. for a 2011 census dataset, the year 2011 would be written "2011/2012"). Other forms of content e.g. ScholarlyArticle, Book, TVSeries or TVEpisode may indicate their temporalCoverage in broader terms - textually or via well-known URL. Written works such as books may sometimes have precise temporal coverage too, e.g. a work set in 1939 - 1945 can be indicated in ISO 8601 interval format format via "1939/1945".
     *
     * Open-ended date ranges can be written with ".." in place of the end date. For example, "2015-11/.." indicates a range beginning in November 2015 and with no specified final date. This is tentative and might be updated in future when ISO 8601 is officially updated.
     */
    "https://schema.org/temporalCoverage"?: SchemaValue<DateTime | Text | URL, "https://schema.org/temporalCoverage">;
    /** The textual content of this CreativeWork. */
    "https://schema.org/text"?: SchemaValue<Text, "https://schema.org/text">;
    /** A thumbnail image relevant to the Thing. */
    "https://schema.org/thumbnailUrl"?: SchemaValue<URL, "https://schema.org/thumbnailUrl">;
    /** Approximate or typical time it takes to work with or through this learning resource for the typical intended target audience, e.g. 'PT30M', 'PT1H25M'. */
    "https://schema.org/timeRequired"?: SchemaValue<Duration | IdReference, "https://schema.org/timeRequired">;
    /** The work that this work has been translated from. e.g. \u7269\u79CD\u8D77\u6E90 is a translationOf \u201COn the Origin of Species\u201D */
    "https://schema.org/translationOfWork"?: SchemaValue<CreativeWork | IdReference, "https://schema.org/translationOfWork">;
    /** Organization or person who adapts a creative work to different languages, regional differences and technical requirements of a target market, or that translates during some event. */
    "https://schema.org/translator"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/translator">;
    /** The typical expected age range, e.g. '7-9', '11-'. */
    "https://schema.org/typicalAgeRange"?: SchemaValue<Text, "https://schema.org/typicalAgeRange">;
    /**
     * The schema.org {@link https://schema.org/usageInfo usageInfo} property indicates further information about a {@link https://schema.org/CreativeWork CreativeWork}. This property is applicable both to works that are freely available and to those that require payment or other transactions. It can reference additional information e.g. community expectations on preferred linking and citation conventions, as well as purchasing details. For something that can be commercially licensed, usageInfo can provide detailed, resource-specific information about licensing options.
     *
     * This property can be used alongside the license property which indicates license(s) applicable to some piece of content. The usageInfo property can provide information about other licensing options, e.g. acquiring commercial usage rights for an image that is also available under non-commercial creative commons licenses.
     */
    "https://schema.org/usageInfo"?: SchemaValue<CreativeWork | URL | IdReference, "https://schema.org/usageInfo">;
    /** The version of the CreativeWork embodied by a specified resource. */
    "https://schema.org/version"?: SchemaValue<Number | Text, "https://schema.org/version">;
    /** An embedded video object. */
    "https://schema.org/video"?: SchemaValue<Clip | VideoObject | IdReference, "https://schema.org/video">;
    /** Example/instance/realization/derivation of the concept of this creative work. eg. The paperback edition, first edition, or eBook. */
    "https://schema.org/workExample"?: SchemaValue<CreativeWork | IdReference, "https://schema.org/workExample">;
    /** A work that is a translation of the content of this work. e.g. \u897F\u904A\u8A18 has an English workTranslation \u201CJourney to the West\u201D,a German workTranslation \u201CMonkeys Pilgerfahrt\u201D and a Vietnamese translation T\u00E2y du k\u00FD b\u00ECnh kh\u1EA3o. */
    "https://schema.org/workTranslation"?: SchemaValue<CreativeWork | IdReference, "https://schema.org/workTranslation">;
}
interface CreativeWorkLeaf extends CreativeWorkBase {
    "@type": "https://schema.org/CreativeWork";
}
/** The most generic kind of creative work, including books, movies, photographs, software programs, etc. */
export declare type CreativeWork = CreativeWorkLeaf | AmpStory | ArchiveComponent | Article | Atlas | Blog | Book | Chapter | Claim | Clip | Code | Collection | ComicStory | Comment | Conversation | Course | CreativeWorkSeason | CreativeWorkSeries | DataCatalog | Dataset | DefinedTermSet | Diet | DigitalDocument | Drawing | EducationalOccupationalCredential | Episode | ExercisePlan | Game | Guide | HowTo | HowToDirection | HowToSection | HowToStep | HowToTip | HyperToc | HyperTocEntry | LearningResource | Legislation | Manuscript | Map | MathSolver | MediaObject | MediaReviewItem | Menu | MenuSection | Message | Movie | MusicComposition | MusicPlaylist | MusicRecording | Painting | Photograph | Play | Poster | PublicationIssue | PublicationVolume | Quotation | Review | Sculpture | Season | SheetMusic | ShortStory | SoftwareApplication | SoftwareSourceCode | SpecialAnnouncement | Statement | Thesis | TVSeason | TVSeries | VisualArtwork | WebContent | WebPage | WebPageElement | WebSite;
interface CreativeWorkSeasonBase extends CreativeWorkBase {
    /** An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip. */
    "https://schema.org/actor"?: SchemaValue<Person | IdReference, "https://schema.org/actor">;
    /** A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip. */
    "https://schema.org/director"?: SchemaValue<Person | IdReference, "https://schema.org/director">;
    /** The end date and time of the item (in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}). */
    "https://schema.org/endDate"?: SchemaValue<Date | DateTime, "https://schema.org/endDate">;
    /** An episode of a tv, radio or game media within a series or season. */
    "https://schema.org/episode"?: SchemaValue<Episode | IdReference, "https://schema.org/episode">;
    /**
     * An episode of a TV/radio series or season.
     *
     * @deprecated Consider using https://schema.org/episode instead.
     */
    "https://schema.org/episodes"?: SchemaValue<Episode | IdReference, "https://schema.org/episodes">;
    /** The number of episodes in this season or series. */
    "https://schema.org/numberOfEpisodes"?: SchemaValue<Integer, "https://schema.org/numberOfEpisodes">;
    /** The series to which this episode or season belongs. */
    "https://schema.org/partOfSeries"?: SchemaValue<CreativeWorkSeries | IdReference, "https://schema.org/partOfSeries">;
    /** The production company or studio responsible for the item e.g. series, video game, episode etc. */
    "https://schema.org/productionCompany"?: SchemaValue<Organization | IdReference, "https://schema.org/productionCompany">;
    /** Position of the season within an ordered group of seasons. */
    "https://schema.org/seasonNumber"?: SchemaValue<Integer | Text, "https://schema.org/seasonNumber">;
    /** The start date and time of the item (in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}). */
    "https://schema.org/startDate"?: SchemaValue<Date | DateTime, "https://schema.org/startDate">;
    /** The trailer of a movie or tv/radio series, season, episode, etc. */
    "https://schema.org/trailer"?: SchemaValue<VideoObject | IdReference, "https://schema.org/trailer">;
}
interface CreativeWorkSeasonLeaf extends CreativeWorkSeasonBase {
    "@type": "https://schema.org/CreativeWorkSeason";
}
/** A media season e.g. tv, radio, video game etc. */
export declare type CreativeWorkSeason = CreativeWorkSeasonLeaf | PodcastSeason | RadioSeason | TVSeason;
interface CreativeWorkSeriesBase extends CreativeWorkBase, ThingBase {
    /** The end date and time of the item (in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}). */
    "https://schema.org/endDate"?: SchemaValue<Date | DateTime, "https://schema.org/endDate">;
    /** The International Standard Serial Number (ISSN) that identifies this serial publication. You can repeat this property to identify different formats of, or the linking ISSN (ISSN-L) for, this serial publication. */
    "https://schema.org/issn"?: SchemaValue<Text, "https://schema.org/issn">;
    /** The start date and time of the item (in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}). */
    "https://schema.org/startDate"?: SchemaValue<Date | DateTime, "https://schema.org/startDate">;
}
interface CreativeWorkSeriesLeaf extends CreativeWorkSeriesBase {
    "@type": "https://schema.org/CreativeWorkSeries";
}
/**
 * A CreativeWorkSeries in schema.org is a group of related items, typically but not necessarily of the same kind. CreativeWorkSeries are usually organized into some order, often chronological. Unlike {@link https://schema.org/ItemList ItemList} which is a general purpose data structure for lists of things, the emphasis with CreativeWorkSeries is on published materials (written e.g. books and periodicals, or media such as tv, radio and games).
 *
 * Specific subtypes are available for describing {@link https://schema.org/TVSeries TVSeries}, {@link https://schema.org/RadioSeries RadioSeries}, {@link https://schema.org/MovieSeries MovieSeries}, {@link https://schema.org/BookSeries BookSeries}, {@link https://schema.org/Periodical Periodical} and {@link https://schema.org/VideoGameSeries VideoGameSeries}. In each case, the {@link https://schema.org/hasPart hasPart} / {@link https://schema.org/isPartOf isPartOf} properties can be used to relate the CreativeWorkSeries to its parts. The general CreativeWorkSeries type serves largely just to organize these more specific and practical subtypes.
 *
 * It is common for properties applicable to an item from the series to be usefully applied to the containing group. Schema.org attempts to anticipate some of these cases, but publishers should be free to apply properties of the series parts to the series as a whole wherever they seem appropriate.
 */
export declare type CreativeWorkSeries = CreativeWorkSeriesLeaf | BookSeries | MovieSeries | Periodical | PodcastSeries | RadioSeries | TVSeries | VideoGameSeries;
interface CreditCardBase extends LoanOrCreditBase, PaymentCardBase {
}
interface CreditCardLeaf extends CreditCardBase {
    "@type": "https://schema.org/CreditCard";
}
/**
 * A card payment method of a particular brand or name. Used to mark up a particular payment method and/or the financial product/service that supplies the card account.
 *
 * Commonly used values:
 * - http://purl.org/goodrelations/v1#AmericanExpress
 * - http://purl.org/goodrelations/v1#DinersClub
 * - http://purl.org/goodrelations/v1#Discover
 * - http://purl.org/goodrelations/v1#JCB
 * - http://purl.org/goodrelations/v1#MasterCard
 * - http://purl.org/goodrelations/v1#VISA
 */
export declare type CreditCard = CreditCardLeaf;
interface CrematoriumLeaf extends CivicStructureBase {
    "@type": "https://schema.org/Crematorium";
}
/** A crematorium. */
export declare type Crematorium = CrematoriumLeaf | string;
interface CriticReviewLeaf extends ReviewBase {
    "@type": "https://schema.org/CriticReview";
}
/** A {@link https://schema.org/CriticReview CriticReview} is a more specialized form of Review written or published by a source that is recognized for its reviewing activities. These can include online columns, travel and food guides, TV and radio shows, blogs and other independent Web sites. {@link https://schema.org/CriticReview CriticReview}s are typically more in-depth and professionally written. For simpler, casually written user/visitor/viewer/customer reviews, it is more appropriate to use the {@link https://schema.org/UserReview UserReview} type. Review aggregator sites such as Metacritic already separate out the site's user reviews from selected critic reviews that originate from third-party sources. */
export declare type CriticReview = CriticReviewLeaf | ReviewNewsArticle;
/** Text representing a CSS selector. */
export declare type CssSelectorType = string;
interface CurrencyConversionServiceLeaf extends FinancialProductBase {
    "@type": "https://schema.org/CurrencyConversionService";
}
/** A service to convert funds from one currency to another currency. */
export declare type CurrencyConversionService = CurrencyConversionServiceLeaf;
interface DanceEventLeaf extends EventBase {
    "@type": "https://schema.org/DanceEvent";
}
/** Event type: A social dance. */
export declare type DanceEvent = DanceEventLeaf;
interface DanceGroupLeaf extends OrganizationBase {
    "@type": "https://schema.org/DanceGroup";
}
/** A dance group—for example, the Alvin Ailey Dance Theater or Riverdance. */
export declare type DanceGroup = DanceGroupLeaf | string;
interface DataCatalogBase extends CreativeWorkBase {
    /** A dataset contained in this catalog. */
    "https://schema.org/dataset"?: SchemaValue<Dataset | IdReference, "https://schema.org/dataset">;
    /**
     * A technique or technology used in a {@link https://schema.org/Dataset Dataset} (or {@link https://schema.org/DataDownload DataDownload}, {@link https://schema.org/DataCatalog DataCatalog}), corresponding to the method used for measuring the corresponding variable(s) (described using {@link https://schema.org/variableMeasured variableMeasured}). This is oriented towards scientific and scholarly dataset publication but may have broader applicability; it is not intended as a full representation of measurement, but rather as a high level summary for dataset discovery.
     *
     * For example, if {@link https://schema.org/variableMeasured variableMeasured} is: molecule concentration, {@link https://schema.org/measurementTechnique measurementTechnique} could be: "mass spectrometry" or "nmr spectroscopy" or "colorimetry" or "immunofluorescence".
     *
     * If the {@link https://schema.org/variableMeasured variableMeasured} is "depression rating", the {@link https://schema.org/measurementTechnique measurementTechnique} could be "Zung Scale" or "HAM-D" or "Beck Depression Inventory".
     *
     * If there are several {@link https://schema.org/variableMeasured variableMeasured} properties recorded for some given data object, use a {@link https://schema.org/PropertyValue PropertyValue} for each {@link https://schema.org/variableMeasured variableMeasured} and attach the corresponding {@link https://schema.org/measurementTechnique measurementTechnique}.
     */
    "https://schema.org/measurementTechnique"?: SchemaValue<Text | URL, "https://schema.org/measurementTechnique">;
}
interface DataCatalogLeaf extends DataCatalogBase {
    "@type": "https://schema.org/DataCatalog";
}
/** A collection of datasets. */
export declare type DataCatalog = DataCatalogLeaf;
interface DataDownloadBase extends MediaObjectBase {
    /**
     * A technique or technology used in a {@link https://schema.org/Dataset Dataset} (or {@link https://schema.org/DataDownload DataDownload}, {@link https://schema.org/DataCatalog DataCatalog}), corresponding to the method used for measuring the corresponding variable(s) (described using {@link https://schema.org/variableMeasured variableMeasured}). This is oriented towards scientific and scholarly dataset publication but may have broader applicability; it is not intended as a full representation of measurement, but rather as a high level summary for dataset discovery.
     *
     * For example, if {@link https://schema.org/variableMeasured variableMeasured} is: molecule concentration, {@link https://schema.org/measurementTechnique measurementTechnique} could be: "mass spectrometry" or "nmr spectroscopy" or "colorimetry" or "immunofluorescence".
     *
     * If the {@link https://schema.org/variableMeasured variableMeasured} is "depression rating", the {@link https://schema.org/measurementTechnique measurementTechnique} could be "Zung Scale" or "HAM-D" or "Beck Depression Inventory".
     *
     * If there are several {@link https://schema.org/variableMeasured variableMeasured} properties recorded for some given data object, use a {@link https://schema.org/PropertyValue PropertyValue} for each {@link https://schema.org/variableMeasured variableMeasured} and attach the corresponding {@link https://schema.org/measurementTechnique measurementTechnique}.
     */
    "https://schema.org/measurementTechnique"?: SchemaValue<Text | URL, "https://schema.org/measurementTechnique">;
}
interface DataDownloadLeaf extends DataDownloadBase {
    "@type": "https://schema.org/DataDownload";
}
/** A dataset in downloadable form. */
export declare type DataDownload = DataDownloadLeaf;
interface DataFeedBase extends DatasetBase {
    /** An item within in a data feed. Data feeds may have many elements. */
    "https://schema.org/dataFeedElement"?: SchemaValue<DataFeedItem | Text | Thing | IdReference, "https://schema.org/dataFeedElement">;
}
interface DataFeedLeaf extends DataFeedBase {
    "@type": "https://schema.org/DataFeed";
}
/** A single feed providing structured information about one or more entities or topics. */
export declare type DataFeed = DataFeedLeaf | CompleteDataFeed;
interface DataFeedItemBase extends ThingBase {
    /** The date on which the CreativeWork was created or the item was added to a DataFeed. */
    "https://schema.org/dateCreated"?: SchemaValue<Date | DateTime, "https://schema.org/dateCreated">;
    /** The datetime the item was removed from the DataFeed. */
    "https://schema.org/dateDeleted"?: SchemaValue<Date | DateTime, "https://schema.org/dateDeleted">;
    /** The date on which the CreativeWork was most recently modified or when the item's entry was modified within a DataFeed. */
    "https://schema.org/dateModified"?: SchemaValue<Date | DateTime, "https://schema.org/dateModified">;
    /** An entity represented by an entry in a list or data feed (e.g. an 'artist' in a list of 'artists')’. */
    "https://schema.org/item"?: SchemaValue<Thing | IdReference, "https://schema.org/item">;
}
interface DataFeedItemLeaf extends DataFeedItemBase {
    "@type": "https://schema.org/DataFeedItem";
}
/** A single item within a larger data feed. */
export declare type DataFeedItem = DataFeedItemLeaf;
interface DatasetBase extends CreativeWorkBase {
    /**
     * A data catalog which contains this dataset.
     *
     * @deprecated Consider using https://schema.org/includedInDataCatalog instead.
     */
    "https://schema.org/catalog"?: SchemaValue<DataCatalog | IdReference, "https://schema.org/catalog">;
    /**
     * The range of temporal applicability of a dataset, e.g. for a 2011 census dataset, the year 2011 (in ISO 8601 time interval format).
     *
     * @deprecated Consider using https://schema.org/temporalCoverage instead.
     */
    "https://schema.org/datasetTimeInterval"?: SchemaValue<DateTime, "https://schema.org/datasetTimeInterval">;
    /** A downloadable form of this dataset, at a specific location, in a specific format. */
    "https://schema.org/distribution"?: SchemaValue<DataDownload | IdReference, "https://schema.org/distribution">;
    /**
     * A data catalog which contains this dataset (this property was previously 'catalog', preferred name is now 'includedInDataCatalog').
     *
     * @deprecated Consider using https://schema.org/includedInDataCatalog instead.
     */
    "https://schema.org/includedDataCatalog"?: SchemaValue<DataCatalog | IdReference, "https://schema.org/includedDataCatalog">;
    /** A data catalog which contains this dataset. */
    "https://schema.org/includedInDataCatalog"?: SchemaValue<DataCatalog | IdReference, "https://schema.org/includedInDataCatalog">;
    /** The International Standard Serial Number (ISSN) that identifies this serial publication. You can repeat this property to identify different formats of, or the linking ISSN (ISSN-L) for, this serial publication. */
    "https://schema.org/issn"?: SchemaValue<Text, "https://schema.org/issn">;
    /**
     * A technique or technology used in a {@link https://schema.org/Dataset Dataset} (or {@link https://schema.org/DataDownload DataDownload}, {@link https://schema.org/DataCatalog DataCatalog}), corresponding to the method used for measuring the corresponding variable(s) (described using {@link https://schema.org/variableMeasured variableMeasured}). This is oriented towards scientific and scholarly dataset publication but may have broader applicability; it is not intended as a full representation of measurement, but rather as a high level summary for dataset discovery.
     *
     * For example, if {@link https://schema.org/variableMeasured variableMeasured} is: molecule concentration, {@link https://schema.org/measurementTechnique measurementTechnique} could be: "mass spectrometry" or "nmr spectroscopy" or "colorimetry" or "immunofluorescence".
     *
     * If the {@link https://schema.org/variableMeasured variableMeasured} is "depression rating", the {@link https://schema.org/measurementTechnique measurementTechnique} could be "Zung Scale" or "HAM-D" or "Beck Depression Inventory".
     *
     * If there are several {@link https://schema.org/variableMeasured variableMeasured} properties recorded for some given data object, use a {@link https://schema.org/PropertyValue PropertyValue} for each {@link https://schema.org/variableMeasured variableMeasured} and attach the corresponding {@link https://schema.org/measurementTechnique measurementTechnique}.
     */
    "https://schema.org/measurementTechnique"?: SchemaValue<Text | URL, "https://schema.org/measurementTechnique">;
    /** The variableMeasured property can indicate (repeated as necessary) the variables that are measured in some dataset, either described as text or as pairs of identifier and description using PropertyValue. */
    "https://schema.org/variableMeasured"?: SchemaValue<PropertyValue | Text | IdReference, "https://schema.org/variableMeasured">;
    /** Originally named {@link https://schema.org/variablesMeasured variablesMeasured}, The {@link https://schema.org/variableMeasured variableMeasured} property can indicate (repeated as necessary) the variables that are measured in some dataset, either described as text or as pairs of identifier and description using PropertyValue. */
    "https://schema.org/variablesMeasured"?: SchemaValue<PropertyValue | Text | IdReference, "https://schema.org/variablesMeasured">;
}
interface DatasetLeaf extends DatasetBase {
    "@type": "https://schema.org/Dataset";
}
/** A body of structured information describing some topic(s) of interest. */
export declare type Dataset = DatasetLeaf | DataFeed;
interface DatedMoneySpecificationBase extends ThingBase {
    /** The amount of money. */
    "https://schema.org/amount"?: SchemaValue<MonetaryAmount | Number | IdReference, "https://schema.org/amount">;
    /**
     * The currency in which the monetary amount is expressed.
     *
     * Use standard formats: {@link http://en.wikipedia.org/wiki/ISO_4217 ISO 4217 currency format} e.g. "USD"; {@link https://en.wikipedia.org/wiki/List_of_cryptocurrencies Ticker symbol} for cryptocurrencies e.g. "BTC"; well known names for {@link https://en.wikipedia.org/wiki/Local_exchange_trading_system Local Exchange Tradings Systems} (LETS) and other currency types e.g. "Ithaca HOUR".
     */
    "https://schema.org/currency"?: SchemaValue<Text, "https://schema.org/currency">;
    /** The end date and time of the item (in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}). */
    "https://schema.org/endDate"?: SchemaValue<Date | DateTime, "https://schema.org/endDate">;
    /** The start date and time of the item (in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}). */
    "https://schema.org/startDate"?: SchemaValue<Date | DateTime, "https://schema.org/startDate">;
}
interface DatedMoneySpecificationLeaf extends DatedMoneySpecificationBase {
    "@type": "https://schema.org/DatedMoneySpecification";
}
/**
 * A DatedMoneySpecification represents monetary values with optional start and end dates. For example, this could represent an employee's salary over a specific period of time. __Note:__ This type has been superseded by {@link https://schema.org/MonetaryAmount MonetaryAmount} use of that type is recommended
 *
 * @deprecated Use MonetaryAmount instead.
 */
export declare type DatedMoneySpecification = DatedMoneySpecificationLeaf;
interface DayOfWeekLeaf extends EnumerationBase {
    "@type": "https://schema.org/DayOfWeek";
}
/**
 * The day of the week, e.g. used to specify to which day the opening hours of an OpeningHoursSpecification refer.
 *
 * Originally, URLs from {@link http://purl.org/goodrelations/v1 GoodRelations} were used (for {@link https://schema.org/Monday Monday}, {@link https://schema.org/Tuesday Tuesday}, {@link https://schema.org/Wednesday Wednesday}, {@link https://schema.org/Thursday Thursday}, {@link https://schema.org/Friday Friday}, {@link https://schema.org/Saturday Saturday}, {@link https://schema.org/Sunday Sunday} plus a special entry for {@link https://schema.org/PublicHolidays PublicHolidays}); these have now been integrated directly into schema.org.
 */
export declare type DayOfWeek = "https://schema.org/Friday" | "https://schema.org/Monday" | "https://schema.org/PublicHolidays" | "https://schema.org/Saturday" | "https://schema.org/Sunday" | "https://schema.org/Thursday" | "https://schema.org/Tuesday" | "https://schema.org/Wednesday" | DayOfWeekLeaf;
interface DaySpaLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/DaySpa";
}
/** A day spa. */
export declare type DaySpa = DaySpaLeaf | string;
interface DDxElementBase extends MedicalEntityBase {
    /** One or more alternative conditions considered in the differential diagnosis process as output of a diagnosis process. */
    "https://schema.org/diagnosis"?: SchemaValue<MedicalCondition | IdReference, "https://schema.org/diagnosis">;
    /** One of a set of signs and symptoms that can be used to distinguish this diagnosis from others in the differential diagnosis. */
    "https://schema.org/distinguishingSign"?: SchemaValue<MedicalSignOrSymptom | IdReference, "https://schema.org/distinguishingSign">;
}
interface DDxElementLeaf extends DDxElementBase {
    "@type": "https://schema.org/DDxElement";
}
/** An alternative, closely-related condition typically considered later in the differential diagnosis process along with the signs that are used to distinguish it. */
export declare type DDxElement = DDxElementLeaf;
interface DeactivateActionLeaf extends ActionBase {
    "@type": "https://schema.org/DeactivateAction";
}
/** The act of stopping or deactivating a device or application (e.g. stopping a timer or turning off a flashlight). */
export declare type DeactivateAction = DeactivateActionLeaf;
interface DefenceEstablishmentLeaf extends CivicStructureBase {
    "@type": "https://schema.org/DefenceEstablishment";
}
/** A defence establishment, such as an army or navy base. */
export declare type DefenceEstablishment = DefenceEstablishmentLeaf | string;
interface DefinedRegionBase extends ThingBase {
    /** The country. For example, USA. You can also provide the two-letter {@link http://en.wikipedia.org/wiki/ISO_3166-1 ISO 3166-1 alpha-2 country code}. */
    "https://schema.org/addressCountry"?: SchemaValue<Country | Text | IdReference, "https://schema.org/addressCountry">;
    /** The region in which the locality is, and which is in the country. For example, California or another appropriate first-level {@link https://en.wikipedia.org/wiki/List_of_administrative_divisions_by_country Administrative division} */
    "https://schema.org/addressRegion"?: SchemaValue<Text, "https://schema.org/addressRegion">;
    /** The postal code. For example, 94043. */
    "https://schema.org/postalCode"?: SchemaValue<Text, "https://schema.org/postalCode">;
    /** A defined range of postal codes indicated by a common textual prefix. Used for non-numeric systems such as UK. */
    "https://schema.org/postalCodePrefix"?: SchemaValue<Text, "https://schema.org/postalCodePrefix">;
    /** A defined range of postal codes. */
    "https://schema.org/postalCodeRange"?: SchemaValue<PostalCodeRangeSpecification | IdReference, "https://schema.org/postalCodeRange">;
}
interface DefinedRegionLeaf extends DefinedRegionBase {
    "@type": "https://schema.org/DefinedRegion";
}
/**
 * A DefinedRegion is a geographic area defined by potentially arbitrary (rather than political, administrative or natural geographical) criteria. Properties are provided for defining a region by reference to sets of postal codes.
 *
 * Examples: a delivery destination when shopping. Region where regional pricing is configured.
 *
 * Requirement 1: Country: US States: "NY", "CA"
 *
 * Requirement 2: Country: US PostalCode Set: { [94000-94585], [97000, 97999], [13000, 13599]} { [12345, 12345], [78945, 78945], } Region = state, canton, prefecture, autonomous community...
 */
export declare type DefinedRegion = DefinedRegionLeaf;
interface DefinedTermBase extends ThingBase {
    /** A {@link https://schema.org/DefinedTermSet DefinedTermSet} that contains this term. */
    "https://schema.org/inDefinedTermSet"?: SchemaValue<DefinedTermSet | URL | IdReference, "https://schema.org/inDefinedTermSet">;
    /** A code that identifies this {@link https://schema.org/DefinedTerm DefinedTerm} within a {@link https://schema.org/DefinedTermSet DefinedTermSet} */
    "https://schema.org/termCode"?: SchemaValue<Text, "https://schema.org/termCode">;
}
interface DefinedTermLeaf extends DefinedTermBase {
    "@type": "https://schema.org/DefinedTerm";
}
/** A word, name, acronym, phrase, etc. with a formal definition. Often used in the context of category or subject classification, glossaries or dictionaries, product or creative work types, etc. Use the name property for the term being defined, use termCode if the term has an alpha-numeric code allocated, use description to provide the definition of the term. */
export declare type DefinedTerm = DefinedTermLeaf | CategoryCode;
interface DefinedTermSetBase extends CreativeWorkBase {
    /** A Defined Term contained in this term set. */
    "https://schema.org/hasDefinedTerm"?: SchemaValue<DefinedTerm | IdReference, "https://schema.org/hasDefinedTerm">;
}
interface DefinedTermSetLeaf extends DefinedTermSetBase {
    "@type": "https://schema.org/DefinedTermSet";
}
/** A set of defined terms for example a set of categories or a classification scheme, a glossary, dictionary or enumeration. */
export declare type DefinedTermSet = DefinedTermSetLeaf | CategoryCodeSet;
interface DeleteActionLeaf extends UpdateActionBase {
    "@type": "https://schema.org/DeleteAction";
}
/** The act of editing a recipient by removing one of its objects. */
export declare type DeleteAction = DeleteActionLeaf;
interface DeliveryChargeSpecificationBase extends PriceSpecificationBase {
    /** The delivery method(s) to which the delivery charge or payment charge specification applies. */
    "https://schema.org/appliesToDeliveryMethod"?: SchemaValue<DeliveryMethod | IdReference, "https://schema.org/appliesToDeliveryMethod">;
    /** The geographic area where a service or offered item is provided. */
    "https://schema.org/areaServed"?: SchemaValue<AdministrativeArea | GeoShape | Place | Text | IdReference, "https://schema.org/areaServed">;
    /**
     * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is valid.
     *
     * See also {@link https://schema.org/ineligibleRegion ineligibleRegion}.
     */
    "https://schema.org/eligibleRegion"?: SchemaValue<GeoShape | Place | Text | IdReference, "https://schema.org/eligibleRegion">;
    /**
     * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is not valid, e.g. a region where the transaction is not allowed.
     *
     * See also {@link https://schema.org/eligibleRegion eligibleRegion}.
     */
    "https://schema.org/ineligibleRegion"?: SchemaValue<GeoShape | Place | Text | IdReference, "https://schema.org/ineligibleRegion">;
}
interface DeliveryChargeSpecificationLeaf extends DeliveryChargeSpecificationBase {
    "@type": "https://schema.org/DeliveryChargeSpecification";
}
/** The price for the delivery of an offer using a particular delivery method. */
export declare type DeliveryChargeSpecification = DeliveryChargeSpecificationLeaf;
interface DeliveryEventBase extends EventBase {
    /** Password, PIN, or access code needed for delivery (e.g. from a locker). */
    "https://schema.org/accessCode"?: SchemaValue<Text, "https://schema.org/accessCode">;
    /** When the item is available for pickup from the store, locker, etc. */
    "https://schema.org/availableFrom"?: SchemaValue<DateTime, "https://schema.org/availableFrom">;
    /** After this date, the item will no longer be available for pickup. */
    "https://schema.org/availableThrough"?: SchemaValue<DateTime, "https://schema.org/availableThrough">;
    /** Method used for delivery or shipping. */
    "https://schema.org/hasDeliveryMethod"?: SchemaValue<DeliveryMethod | IdReference, "https://schema.org/hasDeliveryMethod">;
}
interface DeliveryEventLeaf extends DeliveryEventBase {
    "@type": "https://schema.org/DeliveryEvent";
}
/** An event involving the delivery of an item. */
export declare type DeliveryEvent = DeliveryEventLeaf;
interface DeliveryMethodLeaf extends EnumerationBase {
    "@type": "https://schema.org/DeliveryMethod";
}
/**
 * A delivery method is a standardized procedure for transferring the product or service to the destination of fulfillment chosen by the customer. Delivery methods are characterized by the means of transportation used, and by the organization or group that is the contracting party for the sending organization or person.
 *
 * Commonly used values:
 * - http://purl.org/goodrelations/v1#DeliveryModeDirectDownload
 * - http://purl.org/goodrelations/v1#DeliveryModeFreight
 * - http://purl.org/goodrelations/v1#DeliveryModeMail
 * - http://purl.org/goodrelations/v1#DeliveryModeOwnFleet
 * - http://purl.org/goodrelations/v1#DeliveryModePickUp
 * - http://purl.org/goodrelations/v1#DHL
 * - http://purl.org/goodrelations/v1#FederalExpress
 * - http://purl.org/goodrelations/v1#UPS
 */
export declare type DeliveryMethod = "https://schema.org/LockerDelivery" | "https://schema.org/OnSitePickup" | "https://schema.org/ParcelService" | DeliveryMethodLeaf;
interface DeliveryTimeSettingsBase extends ThingBase {
    /** The total delay between the receipt of the order and the goods reaching the final customer. */
    "https://schema.org/deliveryTime"?: SchemaValue<ShippingDeliveryTime | IdReference, "https://schema.org/deliveryTime">;
    /** This can be marked 'true' to indicate that some published {@link https://schema.org/DeliveryTimeSettings DeliveryTimeSettings} or {@link https://schema.org/ShippingRateSettings ShippingRateSettings} are intended to apply to all {@link https://schema.org/OfferShippingDetails OfferShippingDetails} published by the same merchant, when referenced by a {@link https://schema.org/shippingSettingsLink shippingSettingsLink} in those settings. It is not meaningful to use a 'true' value for this property alongside a transitTimeLabel (for {@link https://schema.org/DeliveryTimeSettings DeliveryTimeSettings}) or shippingLabel (for {@link https://schema.org/ShippingRateSettings ShippingRateSettings}), since this property is for use with unlabelled settings. */
    "https://schema.org/isUnlabelledFallback"?: SchemaValue<Boolean, "https://schema.org/isUnlabelledFallback">;
    /** indicates (possibly multiple) shipping destinations. These can be defined in several ways e.g. postalCode ranges. */
    "https://schema.org/shippingDestination"?: SchemaValue<DefinedRegion | IdReference, "https://schema.org/shippingDestination">;
    /** Label to match an {@link https://schema.org/OfferShippingDetails OfferShippingDetails} with a {@link https://schema.org/DeliveryTimeSettings DeliveryTimeSettings} (within the context of a {@link https://schema.org/shippingSettingsLink shippingSettingsLink} cross-reference). */
    "https://schema.org/transitTimeLabel"?: SchemaValue<Text, "https://schema.org/transitTimeLabel">;
}
interface DeliveryTimeSettingsLeaf extends DeliveryTimeSettingsBase {
    "@type": "https://schema.org/DeliveryTimeSettings";
}
/** A DeliveryTimeSettings represents re-usable pieces of shipping information, relating to timing. It is designed for publication on an URL that may be referenced via the {@link https://schema.org/shippingSettingsLink shippingSettingsLink} property of a {@link https://schema.org/OfferShippingDetails OfferShippingDetails}. Several occurrences can be published, distinguished (and identified/referenced) by their different values for {@link https://schema.org/transitTimeLabel transitTimeLabel}. */
export declare type DeliveryTimeSettings = DeliveryTimeSettingsLeaf;
interface DemandBase extends ThingBase {
    /** The payment method(s) accepted by seller for this offer. */
    "https://schema.org/acceptedPaymentMethod"?: SchemaValue<LoanOrCredit | PaymentMethod | IdReference, "https://schema.org/acceptedPaymentMethod">;
    /** The amount of time that is required between accepting the offer and the actual usage of the resource or service. */
    "https://schema.org/advanceBookingRequirement"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/advanceBookingRequirement">;
    /** The geographic area where a service or offered item is provided. */
    "https://schema.org/areaServed"?: SchemaValue<AdministrativeArea | GeoShape | Place | Text | IdReference, "https://schema.org/areaServed">;
    /** The availability of this item—for example In stock, Out of stock, Pre-order, etc. */
    "https://schema.org/availability"?: SchemaValue<ItemAvailability | IdReference, "https://schema.org/availability">;
    /** The end of the availability of the product or service included in the offer. */
    "https://schema.org/availabilityEnds"?: SchemaValue<Date | DateTime | Time, "https://schema.org/availabilityEnds">;
    /** The beginning of the availability of the product or service included in the offer. */
    "https://schema.org/availabilityStarts"?: SchemaValue<Date | DateTime | Time, "https://schema.org/availabilityStarts">;
    /** The place(s) from which the offer can be obtained (e.g. store locations). */
    "https://schema.org/availableAtOrFrom"?: SchemaValue<Place | IdReference, "https://schema.org/availableAtOrFrom">;
    /** The delivery method(s) available for this offer. */
    "https://schema.org/availableDeliveryMethod"?: SchemaValue<DeliveryMethod | IdReference, "https://schema.org/availableDeliveryMethod">;
    /** The business function (e.g. sell, lease, repair, dispose) of the offer or component of a bundle (TypeAndQuantityNode). The default is http://purl.org/goodrelations/v1#Sell. */
    "https://schema.org/businessFunction"?: SchemaValue<BusinessFunction | IdReference, "https://schema.org/businessFunction">;
    /** The typical delay between the receipt of the order and the goods either leaving the warehouse or being prepared for pickup, in case the delivery method is on site pickup. */
    "https://schema.org/deliveryLeadTime"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/deliveryLeadTime">;
    /** The type(s) of customers for which the given offer is valid. */
    "https://schema.org/eligibleCustomerType"?: SchemaValue<BusinessEntityType | IdReference, "https://schema.org/eligibleCustomerType">;
    /** The duration for which the given offer is valid. */
    "https://schema.org/eligibleDuration"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/eligibleDuration">;
    /** The interval and unit of measurement of ordering quantities for which the offer or price specification is valid. This allows e.g. specifying that a certain freight charge is valid only for a certain quantity. */
    "https://schema.org/eligibleQuantity"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/eligibleQuantity">;
    /**
     * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is valid.
     *
     * See also {@link https://schema.org/ineligibleRegion ineligibleRegion}.
     */
    "https://schema.org/eligibleRegion"?: SchemaValue<GeoShape | Place | Text | IdReference, "https://schema.org/eligibleRegion">;
    /** The transaction volume, in a monetary unit, for which the offer or price specification is valid, e.g. for indicating a minimal purchasing volume, to express free shipping above a certain order volume, or to limit the acceptance of credit cards to purchases to a certain minimal amount. */
    "https://schema.org/eligibleTransactionVolume"?: SchemaValue<PriceSpecification | IdReference, "https://schema.org/eligibleTransactionVolume">;
    /** A Global Trade Item Number ({@link https://www.gs1.org/standards/id-keys/gtin GTIN}). GTINs identify trade items, including products and services, using numeric identification codes. The {@link https://schema.org/gtin gtin} property generalizes the earlier {@link https://schema.org/gtin8 gtin8}, {@link https://schema.org/gtin12 gtin12}, {@link https://schema.org/gtin13 gtin13}, and {@link https://schema.org/gtin14 gtin14} properties. The GS1 {@link https://www.gs1.org/standards/Digital-Link/ digital link specifications} express GTINs as URLs. A correct {@link https://schema.org/gtin gtin} value should be a valid GTIN, which means that it should be an all-numeric string of either 8, 12, 13 or 14 digits, or a "GS1 Digital Link" URL based on such a string. The numeric component should also have a {@link https://www.gs1.org/services/check-digit-calculator valid GS1 check digit} and meet the other rules for valid GTINs. See also {@link http://www.gs1.org/barcodes/technical/idkeys/gtin GS1's GTIN Summary} and {@link https://en.wikipedia.org/wiki/Global_Trade_Item_Number Wikipedia} for more details. Left-padding of the gtin values is not required or encouraged. */
    "https://schema.org/gtin"?: SchemaValue<Text, "https://schema.org/gtin">;
    /** The GTIN-12 code of the product, or the product to which the offer refers. The GTIN-12 is the 12-digit GS1 Identification Key composed of a U.P.C. Company Prefix, Item Reference, and Check Digit used to identify trade items. See {@link http://www.gs1.org/barcodes/technical/idkeys/gtin GS1 GTIN Summary} for more details. */
    "https://schema.org/gtin12"?: SchemaValue<Text, "https://schema.org/gtin12">;
    /** The GTIN-13 code of the product, or the product to which the offer refers. This is equivalent to 13-digit ISBN codes and EAN UCC-13. Former 12-digit UPC codes can be converted into a GTIN-13 code by simply adding a preceding zero. See {@link http://www.gs1.org/barcodes/technical/idkeys/gtin GS1 GTIN Summary} for more details. */
    "https://schema.org/gtin13"?: SchemaValue<Text, "https://schema.org/gtin13">;
    /** The GTIN-14 code of the product, or the product to which the offer refers. See {@link http://www.gs1.org/barcodes/technical/idkeys/gtin GS1 GTIN Summary} for more details. */
    "https://schema.org/gtin14"?: SchemaValue<Text, "https://schema.org/gtin14">;
    /** The GTIN-8 code of the product, or the product to which the offer refers. This code is also known as EAN/UCC-8 or 8-digit EAN. See {@link http://www.gs1.org/barcodes/technical/idkeys/gtin GS1 GTIN Summary} for more details. */
    "https://schema.org/gtin8"?: SchemaValue<Text, "https://schema.org/gtin8">;
    /** This links to a node or nodes indicating the exact quantity of the products included in an {@link https://schema.org/Offer Offer} or {@link https://schema.org/ProductCollection ProductCollection}. */
    "https://schema.org/includesObject"?: SchemaValue<TypeAndQuantityNode | IdReference, "https://schema.org/includesObject">;
    /**
     * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is not valid, e.g. a region where the transaction is not allowed.
     *
     * See also {@link https://schema.org/eligibleRegion eligibleRegion}.
     */
    "https://schema.org/ineligibleRegion"?: SchemaValue<GeoShape | Place | Text | IdReference, "https://schema.org/ineligibleRegion">;
    /** The current approximate inventory level for the item or items. */
    "https://schema.org/inventoryLevel"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/inventoryLevel">;
    /** A predefined value from OfferItemCondition specifying the condition of the product or service, or the products or services included in the offer. Also used for product return policies to specify the condition of products accepted for returns. */
    "https://schema.org/itemCondition"?: SchemaValue<OfferItemCondition | IdReference, "https://schema.org/itemCondition">;
    /** An item being offered (or demanded). The transactional nature of the offer or demand is documented using {@link https://schema.org/businessFunction businessFunction}, e.g. sell, lease etc. While several common expected types are listed explicitly in this definition, others can be used. Using a second type, such as Product or a subtype of Product, can clarify the nature of the offer. */
    "https://schema.org/itemOffered"?: SchemaValue<AggregateOffer | CreativeWork | Event | MenuItem | Product | Service | Trip | IdReference, "https://schema.org/itemOffered">;
    /** The Manufacturer Part Number (MPN) of the product, or the product to which the offer refers. */
    "https://schema.org/mpn"?: SchemaValue<Text, "https://schema.org/mpn">;
    /** One or more detailed price specifications, indicating the unit price and delivery or payment charges. */
    "https://schema.org/priceSpecification"?: SchemaValue<PriceSpecification | IdReference, "https://schema.org/priceSpecification">;
    /** An entity which offers (sells / leases / lends / loans) the services / goods. A seller may also be a provider. */
    "https://schema.org/seller"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/seller">;
    /** The serial number or any alphanumeric identifier of a particular product. When attached to an offer, it is a shortcut for the serial number of the product included in the offer. */
    "https://schema.org/serialNumber"?: SchemaValue<Text, "https://schema.org/serialNumber">;
    /** The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers. */
    "https://schema.org/sku"?: SchemaValue<Text, "https://schema.org/sku">;
    /** The date when the item becomes valid. */
    "https://schema.org/validFrom"?: SchemaValue<Date | DateTime, "https://schema.org/validFrom">;
    /** The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours. */
    "https://schema.org/validThrough"?: SchemaValue<Date | DateTime, "https://schema.org/validThrough">;
    /** The warranty promise(s) included in the offer. */
    "https://schema.org/warranty"?: SchemaValue<WarrantyPromise | IdReference, "https://schema.org/warranty">;
}
interface DemandLeaf extends DemandBase {
    "@type": "https://schema.org/Demand";
}
/** A demand entity represents the public, not necessarily binding, not necessarily exclusive, announcement by an organization or person to seek a certain type of goods or services. For describing demand using this type, the very same properties used for Offer apply. */
export declare type Demand = DemandLeaf;
interface DentistBase extends MedicalOrganizationBase, LocalBusinessBase, LocalBusinessBase {
}
interface DentistLeaf extends DentistBase {
    "@type": "https://schema.org/Dentist";
}
/** A dentist. */
export declare type Dentist = DentistLeaf | string;
interface DepartActionLeaf extends MoveActionBase {
    "@type": "https://schema.org/DepartAction";
}
/** The act of departing from a place. An agent departs from an fromLocation for a destination, optionally with participants. */
export declare type DepartAction = DepartActionLeaf;
interface DepartmentStoreLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/DepartmentStore";
}
/** A department store. */
export declare type DepartmentStore = DepartmentStoreLeaf | string;
interface DepositAccountBase extends InvestmentOrDepositBase, BankAccountBase {
}
interface DepositAccountLeaf extends DepositAccountBase {
    "@type": "https://schema.org/DepositAccount";
}
/** A type of Bank Account with a main purpose of depositing funds to gain interest or other benefits. */
export declare type DepositAccount = DepositAccountLeaf;
interface DiagnosticLabBase extends MedicalOrganizationBase {
    /** A diagnostic test or procedure offered by this lab. */
    "https://schema.org/availableTest"?: SchemaValue<MedicalTest | IdReference, "https://schema.org/availableTest">;
}
interface DiagnosticLabLeaf extends DiagnosticLabBase {
    "@type": "https://schema.org/DiagnosticLab";
}
/** A medical laboratory that offers on-site or off-site diagnostic services. */
export declare type DiagnosticLab = DiagnosticLabLeaf | string;
interface DiagnosticProcedureLeaf extends MedicalProcedureBase {
    "@type": "https://schema.org/DiagnosticProcedure";
}
/** A medical procedure intended primarily for diagnostic, as opposed to therapeutic, purposes. */
export declare type DiagnosticProcedure = DiagnosticProcedureLeaf;
interface DietBase extends CreativeWorkBase, MedicalEntityBase {
    /** Nutritional information specific to the dietary plan. May include dietary recommendations on what foods to avoid, what foods to consume, and specific alterations/deviations from the USDA or other regulatory body's approved dietary guidelines. */
    "https://schema.org/dietFeatures"?: SchemaValue<Text, "https://schema.org/dietFeatures">;
    /** People or organizations that endorse the plan. */
    "https://schema.org/endorsers"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/endorsers">;
    /** Medical expert advice related to the plan. */
    "https://schema.org/expertConsiderations"?: SchemaValue<Text, "https://schema.org/expertConsiderations">;
    /** Specific physiologic benefits associated to the plan. */
    "https://schema.org/physiologicalBenefits"?: SchemaValue<Text, "https://schema.org/physiologicalBenefits">;
    /** Specific physiologic risks associated to the diet plan. */
    "https://schema.org/risks"?: SchemaValue<Text, "https://schema.org/risks">;
}
interface DietLeaf extends DietBase {
    "@type": "https://schema.org/Diet";
}
/** A strategy of regulating the intake of food to achieve or maintain a specific health-related goal. */
export declare type Diet = DietLeaf;
interface DietarySupplementBase extends SubstanceBase {
    /** An active ingredient, typically chemical compounds and/or biologic substances. */
    "https://schema.org/activeIngredient"?: SchemaValue<Text, "https://schema.org/activeIngredient">;
    /** True if this item's name is a proprietary/brand name (vs. generic name). */
    "https://schema.org/isProprietary"?: SchemaValue<Boolean, "https://schema.org/isProprietary">;
    /** The drug or supplement's legal status, including any controlled substance schedules that apply. */
    "https://schema.org/legalStatus"?: SchemaValue<DrugLegalStatus | MedicalEnumeration | Text | IdReference, "https://schema.org/legalStatus">;
    /** The manufacturer of the product. */
    "https://schema.org/manufacturer"?: SchemaValue<Organization | IdReference, "https://schema.org/manufacturer">;
    /** Recommended intake of this supplement for a given population as defined by a specific recommending authority. */
    "https://schema.org/maximumIntake"?: SchemaValue<MaximumDoseSchedule | IdReference, "https://schema.org/maximumIntake">;
    /** The specific biochemical interaction through which this drug or supplement produces its pharmacological effect. */
    "https://schema.org/mechanismOfAction"?: SchemaValue<Text, "https://schema.org/mechanismOfAction">;
    /** The generic name of this drug or supplement. */
    "https://schema.org/nonProprietaryName"?: SchemaValue<Text, "https://schema.org/nonProprietaryName">;
    /** Proprietary name given to the diet plan, typically by its originator or creator. */
    "https://schema.org/proprietaryName"?: SchemaValue<Text, "https://schema.org/proprietaryName">;
    /** Recommended intake of this supplement for a given population as defined by a specific recommending authority. */
    "https://schema.org/recommendedIntake"?: SchemaValue<RecommendedDoseSchedule | IdReference, "https://schema.org/recommendedIntake">;
    /** Any potential safety concern associated with the supplement. May include interactions with other drugs and foods, pregnancy, breastfeeding, known adverse reactions, and documented efficacy of the supplement. */
    "https://schema.org/safetyConsideration"?: SchemaValue<Text, "https://schema.org/safetyConsideration">;
    /** Characteristics of the population for which this is intended, or which typically uses it, e.g. 'adults'. */
    "https://schema.org/targetPopulation"?: SchemaValue<Text, "https://schema.org/targetPopulation">;
}
interface DietarySupplementLeaf extends DietarySupplementBase {
    "@type": "https://schema.org/DietarySupplement";
}
/** A product taken by mouth that contains a dietary ingredient intended to supplement the diet. Dietary ingredients may include vitamins, minerals, herbs or other botanicals, amino acids, and substances such as enzymes, organ tissues, glandulars and metabolites. */
export declare type DietarySupplement = DietarySupplementLeaf;
interface DigitalDocumentBase extends CreativeWorkBase {
    /** A permission related to the access to this document (e.g. permission to read or write an electronic document). For a public document, specify a grantee with an Audience with audienceType equal to "public". */
    "https://schema.org/hasDigitalDocumentPermission"?: SchemaValue<DigitalDocumentPermission | IdReference, "https://schema.org/hasDigitalDocumentPermission">;
}
interface DigitalDocumentLeaf extends DigitalDocumentBase {
    "@type": "https://schema.org/DigitalDocument";
}
/** An electronic file or document. */
export declare type DigitalDocument = DigitalDocumentLeaf | NoteDigitalDocument | PresentationDigitalDocument | SpreadsheetDigitalDocument | TextDigitalDocument;
interface DigitalDocumentPermissionBase extends ThingBase {
    /** The person, organization, contact point, or audience that has been granted this permission. */
    "https://schema.org/grantee"?: SchemaValue<Audience | ContactPoint | Organization | Person | IdReference, "https://schema.org/grantee">;
    /** The type of permission granted the person, organization, or audience. */
    "https://schema.org/permissionType"?: SchemaValue<DigitalDocumentPermissionType | IdReference, "https://schema.org/permissionType">;
}
interface DigitalDocumentPermissionLeaf extends DigitalDocumentPermissionBase {
    "@type": "https://schema.org/DigitalDocumentPermission";
}
/** A permission for a particular person or group to access a particular file. */
export declare type DigitalDocumentPermission = DigitalDocumentPermissionLeaf;
interface DigitalDocumentPermissionTypeLeaf extends EnumerationBase {
    "@type": "https://schema.org/DigitalDocumentPermissionType";
}
/** A type of permission which can be granted for accessing a digital document. */
export declare type DigitalDocumentPermissionType = "https://schema.org/CommentPermission" | "https://schema.org/ReadPermission" | "https://schema.org/WritePermission" | DigitalDocumentPermissionTypeLeaf;
interface DisagreeActionLeaf extends ActionBase {
    "@type": "https://schema.org/DisagreeAction";
}
/** The act of expressing a difference of opinion with the object. An agent disagrees to/about an object (a proposition, topic or theme) with participants. */
export declare type DisagreeAction = DisagreeActionLeaf;
interface DiscoverActionLeaf extends ActionBase {
    "@type": "https://schema.org/DiscoverAction";
}
/** The act of discovering/finding an object. */
export declare type DiscoverAction = DiscoverActionLeaf;
interface DiscussionForumPostingLeaf extends SocialMediaPostingBase {
    "@type": "https://schema.org/DiscussionForumPosting";
}
/** A posting to a discussion forum. */
export declare type DiscussionForumPosting = DiscussionForumPostingLeaf;
interface DislikeActionLeaf extends ActionBase {
    "@type": "https://schema.org/DislikeAction";
}
/** The act of expressing a negative sentiment about the object. An agent dislikes an object (a proposition, topic or theme) with participants. */
export declare type DislikeAction = DislikeActionLeaf;
interface DistanceLeaf extends ThingBase {
    "@type": "https://schema.org/Distance";
}
/** Properties that take Distances as values are of the form '<Number> <Length unit of measure>'. E.g., '7 ft'. */
export declare type Distance = DistanceLeaf | string;
interface DistilleryLeaf extends FoodEstablishmentBase {
    "@type": "https://schema.org/Distillery";
}
/** A distillery. */
export declare type Distillery = DistilleryLeaf | string;
interface DonateActionBase extends TradeActionBase {
    /** A sub property of participant. The participant who is at the receiving end of the action. */
    "https://schema.org/recipient"?: SchemaValue<Audience | ContactPoint | Organization | Person | IdReference, "https://schema.org/recipient">;
}
interface DonateActionLeaf extends DonateActionBase {
    "@type": "https://schema.org/DonateAction";
}
/** The act of providing goods, services, or money without compensation, often for philanthropic reasons. */
export declare type DonateAction = DonateActionLeaf;
interface DoseScheduleBase extends MedicalEntityBase {
    /** The unit of the dose, e.g. 'mg'. */
    "https://schema.org/doseUnit"?: SchemaValue<Text, "https://schema.org/doseUnit">;
    /** The value of the dose, e.g. 500. */
    "https://schema.org/doseValue"?: SchemaValue<Number | QualitativeValue | IdReference, "https://schema.org/doseValue">;
    /** How often the dose is taken, e.g. 'daily'. */
    "https://schema.org/frequency"?: SchemaValue<Text, "https://schema.org/frequency">;
    /** Characteristics of the population for which this is intended, or which typically uses it, e.g. 'adults'. */
    "https://schema.org/targetPopulation"?: SchemaValue<Text, "https://schema.org/targetPopulation">;
}
interface DoseScheduleLeaf extends DoseScheduleBase {
    "@type": "https://schema.org/DoseSchedule";
}
/** A specific dosing schedule for a drug or supplement. */
export declare type DoseSchedule = DoseScheduleLeaf | MaximumDoseSchedule | RecommendedDoseSchedule | ReportedDoseSchedule;
interface DownloadActionLeaf extends TransferActionBase {
    "@type": "https://schema.org/DownloadAction";
}
/** The act of downloading an object. */
export declare type DownloadAction = DownloadActionLeaf;
interface DrawActionLeaf extends ActionBase {
    "@type": "https://schema.org/DrawAction";
}
/** The act of producing a visual/graphical representation of an object, typically with a pen/pencil and paper as instruments. */
export declare type DrawAction = DrawActionLeaf;
interface DrawingLeaf extends CreativeWorkBase {
    "@type": "https://schema.org/Drawing";
}
/** A picture or diagram made with a pencil, pen, or crayon rather than paint. */
export declare type Drawing = DrawingLeaf;
interface DrinkActionLeaf extends ConsumeActionBase {
    "@type": "https://schema.org/DrinkAction";
}
/** The act of swallowing liquids. */
export declare type DrinkAction = DrinkActionLeaf;
interface DriveWheelConfigurationValueLeaf extends QualitativeValueBase {
    "@type": "https://schema.org/DriveWheelConfigurationValue";
}
/** A value indicating which roadwheels will receive torque. */
export declare type DriveWheelConfigurationValue = "https://schema.org/AllWheelDriveConfiguration" | "https://schema.org/FourWheelDriveConfiguration" | "https://schema.org/FrontWheelDriveConfiguration" | "https://schema.org/RearWheelDriveConfiguration" | DriveWheelConfigurationValueLeaf;
interface DrugBase extends SubstanceBase {
    /** An active ingredient, typically chemical compounds and/or biologic substances. */
    "https://schema.org/activeIngredient"?: SchemaValue<Text, "https://schema.org/activeIngredient">;
    /** A route by which this drug may be administered, e.g. 'oral'. */
    "https://schema.org/administrationRoute"?: SchemaValue<Text, "https://schema.org/administrationRoute">;
    /** Any precaution, guidance, contraindication, etc. related to consumption of alcohol while taking this drug. */
    "https://schema.org/alcoholWarning"?: SchemaValue<Text, "https://schema.org/alcoholWarning">;
    /** An available dosage strength for the drug. */
    "https://schema.org/availableStrength"?: SchemaValue<DrugStrength | IdReference, "https://schema.org/availableStrength">;
    /** Any precaution, guidance, contraindication, etc. related to this drug's use by breastfeeding mothers. */
    "https://schema.org/breastfeedingWarning"?: SchemaValue<Text, "https://schema.org/breastfeedingWarning">;
    /**
     * Description of the absorption and elimination of drugs, including their concentration (pharmacokinetics, pK) and biological effects (pharmacodynamics, pD).
     *
     * @deprecated Consider using https://schema.org/clinicalPharmacology instead.
     */
    "https://schema.org/clincalPharmacology"?: SchemaValue<Text, "https://schema.org/clincalPharmacology">;
    /** Description of the absorption and elimination of drugs, including their concentration (pharmacokinetics, pK) and biological effects (pharmacodynamics, pD). */
    "https://schema.org/clinicalPharmacology"?: SchemaValue<Text, "https://schema.org/clinicalPharmacology">;
    /** A dosage form in which this drug/supplement is available, e.g. 'tablet', 'suspension', 'injection'. */
    "https://schema.org/dosageForm"?: SchemaValue<Text, "https://schema.org/dosageForm">;
    /** A dosing schedule for the drug for a given population, either observed, recommended, or maximum dose based on the type used. */
    "https://schema.org/doseSchedule"?: SchemaValue<DoseSchedule | IdReference, "https://schema.org/doseSchedule">;
    /** The class of drug this belongs to (e.g., statins). */
    "https://schema.org/drugClass"?: SchemaValue<DrugClass | IdReference, "https://schema.org/drugClass">;
    /** The unit in which the drug is measured, e.g. '5 mg tablet'. */
    "https://schema.org/drugUnit"?: SchemaValue<Text, "https://schema.org/drugUnit">;
    /** Any precaution, guidance, contraindication, etc. related to consumption of specific foods while taking this drug. */
    "https://schema.org/foodWarning"?: SchemaValue<Text, "https://schema.org/foodWarning">;
    /** The insurance plans that cover this drug. */
    "https://schema.org/includedInHealthInsurancePlan"?: SchemaValue<HealthInsurancePlan | IdReference, "https://schema.org/includedInHealthInsurancePlan">;
    /** Another drug that is known to interact with this drug in a way that impacts the effect of this drug or causes a risk to the patient. Note: disease interactions are typically captured as contraindications. */
    "https://schema.org/interactingDrug"?: SchemaValue<Drug | IdReference, "https://schema.org/interactingDrug">;
    /** True if the drug is available in a generic form (regardless of name). */
    "https://schema.org/isAvailableGenerically"?: SchemaValue<Boolean, "https://schema.org/isAvailableGenerically">;
    /** True if this item's name is a proprietary/brand name (vs. generic name). */
    "https://schema.org/isProprietary"?: SchemaValue<Boolean, "https://schema.org/isProprietary">;
    /** Link to the drug's label details. */
    "https://schema.org/labelDetails"?: SchemaValue<URL, "https://schema.org/labelDetails">;
    /** The drug or supplement's legal status, including any controlled substance schedules that apply. */
    "https://schema.org/legalStatus"?: SchemaValue<DrugLegalStatus | MedicalEnumeration | Text | IdReference, "https://schema.org/legalStatus">;
    /** The manufacturer of the product. */
    "https://schema.org/manufacturer"?: SchemaValue<Organization | IdReference, "https://schema.org/manufacturer">;
    /** Recommended intake of this supplement for a given population as defined by a specific recommending authority. */
    "https://schema.org/maximumIntake"?: SchemaValue<MaximumDoseSchedule | IdReference, "https://schema.org/maximumIntake">;
    /** The specific biochemical interaction through which this drug or supplement produces its pharmacological effect. */
    "https://schema.org/mechanismOfAction"?: SchemaValue<Text, "https://schema.org/mechanismOfAction">;
    /** The generic name of this drug or supplement. */
    "https://schema.org/nonProprietaryName"?: SchemaValue<Text, "https://schema.org/nonProprietaryName">;
    /** Any information related to overdose on a drug, including signs or symptoms, treatments, contact information for emergency response. */
    "https://schema.org/overdosage"?: SchemaValue<Text, "https://schema.org/overdosage">;
    /** Pregnancy category of this drug. */
    "https://schema.org/pregnancyCategory"?: SchemaValue<DrugPregnancyCategory | IdReference, "https://schema.org/pregnancyCategory">;
    /** Any precaution, guidance, contraindication, etc. related to this drug's use during pregnancy. */
    "https://schema.org/pregnancyWarning"?: SchemaValue<Text, "https://schema.org/pregnancyWarning">;
    /** Link to prescribing information for the drug. */
    "https://schema.org/prescribingInfo"?: SchemaValue<URL, "https://schema.org/prescribingInfo">;
    /** Indicates the status of drug prescription eg. local catalogs classifications or whether the drug is available by prescription or over-the-counter, etc. */
    "https://schema.org/prescriptionStatus"?: SchemaValue<DrugPrescriptionStatus | Text | IdReference, "https://schema.org/prescriptionStatus">;
    /** Proprietary name given to the diet plan, typically by its originator or creator. */
    "https://schema.org/proprietaryName"?: SchemaValue<Text, "https://schema.org/proprietaryName">;
    /** Any other drug related to this one, for example commonly-prescribed alternatives. */
    "https://schema.org/relatedDrug"?: SchemaValue<Drug | IdReference, "https://schema.org/relatedDrug">;
    /** The RxCUI drug identifier from RXNORM. */
    "https://schema.org/rxcui"?: SchemaValue<Text, "https://schema.org/rxcui">;
    /** Any FDA or other warnings about the drug (text or URL). */
    "https://schema.org/warning"?: SchemaValue<Text | URL, "https://schema.org/warning">;
}
interface DrugLeaf extends DrugBase {
    "@type": "https://schema.org/Drug";
}
/** A chemical or biologic substance, used as a medical therapy, that has a physiological effect on an organism. Here the term drug is used interchangeably with the term medicine although clinical knowledge make a clear difference between them. */
export declare type Drug = DrugLeaf;
interface DrugClassBase extends MedicalEntityBase {
    /** Specifying a drug or medicine used in a medication procedure. */
    "https://schema.org/drug"?: SchemaValue<Drug | IdReference, "https://schema.org/drug">;
}
interface DrugClassLeaf extends DrugClassBase {
    "@type": "https://schema.org/DrugClass";
}
/** A class of medical drugs, e.g., statins. Classes can represent general pharmacological class, common mechanisms of action, common physiological effects, etc. */
export declare type DrugClass = DrugClassLeaf;
interface DrugCostBase extends MedicalEntityBase {
    /** The location in which the status applies. */
    "https://schema.org/applicableLocation"?: SchemaValue<AdministrativeArea | IdReference, "https://schema.org/applicableLocation">;
    /** The category of cost, such as wholesale, retail, reimbursement cap, etc. */
    "https://schema.org/costCategory"?: SchemaValue<DrugCostCategory | IdReference, "https://schema.org/costCategory">;
    /** The currency (in 3-letter of the drug cost. See: http://en.wikipedia.org/wiki/ISO_4217. */
    "https://schema.org/costCurrency"?: SchemaValue<Text, "https://schema.org/costCurrency">;
    /** Additional details to capture the origin of the cost data. For example, 'Medicare Part B'. */
    "https://schema.org/costOrigin"?: SchemaValue<Text, "https://schema.org/costOrigin">;
    /** The cost per unit of the drug. */
    "https://schema.org/costPerUnit"?: SchemaValue<Number | QualitativeValue | Text | IdReference, "https://schema.org/costPerUnit">;
    /** The unit in which the drug is measured, e.g. '5 mg tablet'. */
    "https://schema.org/drugUnit"?: SchemaValue<Text, "https://schema.org/drugUnit">;
}
interface DrugCostLeaf extends DrugCostBase {
    "@type": "https://schema.org/DrugCost";
}
/** The cost per unit of a medical drug. Note that this type is not meant to represent the price in an offer of a drug for sale; see the Offer type for that. This type will typically be used to tag wholesale or average retail cost of a drug, or maximum reimbursable cost. Costs of medical drugs vary widely depending on how and where they are paid for, so while this type captures some of the variables, costs should be used with caution by consumers of this schema's markup. */
export declare type DrugCost = DrugCostLeaf;
interface DrugCostCategoryLeaf extends EnumerationBase {
    "@type": "https://schema.org/DrugCostCategory";
}
/** Enumerated categories of medical drug costs. */
export declare type DrugCostCategory = "https://schema.org/ReimbursementCap" | "https://schema.org/Retail" | "https://schema.org/Wholesale" | DrugCostCategoryLeaf;
interface DrugLegalStatusBase extends MedicalEntityBase {
    /** The location in which the status applies. */
    "https://schema.org/applicableLocation"?: SchemaValue<AdministrativeArea | IdReference, "https://schema.org/applicableLocation">;
}
interface DrugLegalStatusLeaf extends DrugLegalStatusBase {
    "@type": "https://schema.org/DrugLegalStatus";
}
/** The legal availability status of a medical drug. */
export declare type DrugLegalStatus = DrugLegalStatusLeaf;
interface DrugPregnancyCategoryLeaf extends EnumerationBase {
    "@type": "https://schema.org/DrugPregnancyCategory";
}
/** Categories that represent an assessment of the risk of fetal injury due to a drug or pharmaceutical used as directed by the mother during pregnancy. */
export declare type DrugPregnancyCategory = "https://schema.org/FDAcategoryA" | "https://schema.org/FDAcategoryB" | "https://schema.org/FDAcategoryC" | "https://schema.org/FDAcategoryD" | "https://schema.org/FDAcategoryX" | "https://schema.org/FDAnotEvaluated" | DrugPregnancyCategoryLeaf;
interface DrugPrescriptionStatusLeaf extends EnumerationBase {
    "@type": "https://schema.org/DrugPrescriptionStatus";
}
/** Indicates whether this drug is available by prescription or over-the-counter. */
export declare type DrugPrescriptionStatus = "https://schema.org/OTC" | "https://schema.org/PrescriptionOnly" | DrugPrescriptionStatusLeaf;
interface DrugStrengthBase extends MedicalEntityBase {
    /** An active ingredient, typically chemical compounds and/or biologic substances. */
    "https://schema.org/activeIngredient"?: SchemaValue<Text, "https://schema.org/activeIngredient">;
    /** The location in which the strength is available. */
    "https://schema.org/availableIn"?: SchemaValue<AdministrativeArea | IdReference, "https://schema.org/availableIn">;
    /** Recommended intake of this supplement for a given population as defined by a specific recommending authority. */
    "https://schema.org/maximumIntake"?: SchemaValue<MaximumDoseSchedule | IdReference, "https://schema.org/maximumIntake">;
    /** The units of an active ingredient's strength, e.g. mg. */
    "https://schema.org/strengthUnit"?: SchemaValue<Text, "https://schema.org/strengthUnit">;
    /** The value of an active ingredient's strength, e.g. 325. */
    "https://schema.org/strengthValue"?: SchemaValue<Number, "https://schema.org/strengthValue">;
}
interface DrugStrengthLeaf extends DrugStrengthBase {
    "@type": "https://schema.org/DrugStrength";
}
/** A specific strength in which a medical drug is available in a specific country. */
export declare type DrugStrength = DrugStrengthLeaf;
interface DryCleaningOrLaundryLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/DryCleaningOrLaundry";
}
/** A dry-cleaning business. */
export declare type DryCleaningOrLaundry = DryCleaningOrLaundryLeaf | string;
interface DurationLeaf extends ThingBase {
    "@type": "https://schema.org/Duration";
}
/** Quantity: Duration (use {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 duration format}). */
export declare type Duration = DurationLeaf | string;
interface EatActionLeaf extends ConsumeActionBase {
    "@type": "https://schema.org/EatAction";
}
/** The act of swallowing solid objects. */
export declare type EatAction = EatActionLeaf;
interface EducationalAudienceBase extends AudienceBase {
    /** An educationalRole of an EducationalAudience. */
    "https://schema.org/educationalRole"?: SchemaValue<Text, "https://schema.org/educationalRole">;
}
interface EducationalAudienceLeaf extends EducationalAudienceBase {
    "@type": "https://schema.org/EducationalAudience";
}
/** An EducationalAudience. */
export declare type EducationalAudience = EducationalAudienceLeaf;
interface EducationalOccupationalCredentialBase extends CreativeWorkBase {
    /** Knowledge, skill, ability or personal attribute that must be demonstrated by a person or other entity in order to do something such as earn an Educational Occupational Credential or understand a LearningResource. */
    "https://schema.org/competencyRequired"?: SchemaValue<DefinedTerm | Text | URL | IdReference, "https://schema.org/competencyRequired">;
    /** The category or type of credential being described, for example "degree\u201D, \u201Ccertificate\u201D, \u201Cbadge\u201D, or more specific term. */
    "https://schema.org/credentialCategory"?: SchemaValue<DefinedTerm | Text | URL | IdReference, "https://schema.org/credentialCategory">;
    /** The level in terms of progression through an educational or training context. Examples of educational levels include 'beginner', 'intermediate' or 'advanced', and formal sets of level indicators. */
    "https://schema.org/educationalLevel"?: SchemaValue<DefinedTerm | Text | URL | IdReference, "https://schema.org/educationalLevel">;
    /** An organization that acknowledges the validity, value or utility of a credential. Note: recognition may include a process of quality assurance or accreditation. */
    "https://schema.org/recognizedBy"?: SchemaValue<Organization | IdReference, "https://schema.org/recognizedBy">;
    /** The duration of validity of a permit or similar thing. */
    "https://schema.org/validFor"?: SchemaValue<Duration | IdReference, "https://schema.org/validFor">;
    /** The geographic area where a permit or similar thing is valid. */
    "https://schema.org/validIn"?: SchemaValue<AdministrativeArea | IdReference, "https://schema.org/validIn">;
}
interface EducationalOccupationalCredentialLeaf extends EducationalOccupationalCredentialBase {
    "@type": "https://schema.org/EducationalOccupationalCredential";
}
/** An educational or occupational credential. A diploma, academic degree, certification, qualification, badge, etc., that may be awarded to a person or other entity that meets the requirements defined by the credentialer. */
export declare type EducationalOccupationalCredential = EducationalOccupationalCredentialLeaf;
interface EducationalOccupationalProgramBase extends ThingBase {
    /** The date at which the program stops collecting applications for the next enrollment cycle. */
    "https://schema.org/applicationDeadline"?: SchemaValue<Date, "https://schema.org/applicationDeadline">;
    /** The date at which the program begins collecting applications for the next enrollment cycle. */
    "https://schema.org/applicationStartDate"?: SchemaValue<Date, "https://schema.org/applicationStartDate">;
    /** The day of the week for which these opening hours are valid. */
    "https://schema.org/dayOfWeek"?: SchemaValue<DayOfWeek | IdReference, "https://schema.org/dayOfWeek">;
    /** A description of the qualification, award, certificate, diploma or other educational credential awarded as a consequence of successful completion of this course or program. */
    "https://schema.org/educationalCredentialAwarded"?: SchemaValue<EducationalOccupationalCredential | Text | URL | IdReference, "https://schema.org/educationalCredentialAwarded">;
    /** Similar to courseMode, The medium or means of delivery of the program as a whole. The value may either be a text label (e.g. "online", "onsite" or "blended"; "synchronous" or "asynchronous"; "full-time" or "part-time") or a URL reference to a term from a controlled vocabulary (e.g. https://ceds.ed.gov/element/001311#Asynchronous ). */
    "https://schema.org/educationalProgramMode"?: SchemaValue<Text | URL, "https://schema.org/educationalProgramMode">;
    /** The end date and time of the item (in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}). */
    "https://schema.org/endDate"?: SchemaValue<Date | DateTime, "https://schema.org/endDate">;
    /** A financial aid type or program which students may use to pay for tuition or fees associated with the program. */
    "https://schema.org/financialAidEligible"?: SchemaValue<DefinedTerm | Text | IdReference, "https://schema.org/financialAidEligible">;
    /** A course or class that is one of the learning opportunities that constitute an educational / occupational program. No information is implied about whether the course is mandatory or optional; no guarantee is implied about whether the course will be available to everyone on the program. */
    "https://schema.org/hasCourse"?: SchemaValue<Course | IdReference, "https://schema.org/hasCourse">;
    /** The maximum number of students who may be enrolled in the program. */
    "https://schema.org/maximumEnrollment"?: SchemaValue<Integer, "https://schema.org/maximumEnrollment">;
    /** The number of credits or units awarded by a Course or required to complete an EducationalOccupationalProgram. */
    "https://schema.org/numberOfCredits"?: SchemaValue<Integer | StructuredValue | IdReference, "https://schema.org/numberOfCredits">;
    /**
     * A category describing the job, preferably using a term from a taxonomy such as {@link http://www.onetcenter.org/taxonomy.html BLS O*NET-SOC}, {@link https://www.ilo.org/public/english/bureau/stat/isco/isco08/ ISCO-08} or similar, with the property repeated for each applicable value. Ideally the taxonomy should be identified, and both the textual label and formal code for the category should be provided.
     *
     * Note: for historical reasons, any textual label and formal code provided as a literal may be assumed to be from O*NET-SOC.
     */
    "https://schema.org/occupationalCategory"?: SchemaValue<CategoryCode | Text | IdReference, "https://schema.org/occupationalCategory">;
    /** A description of the qualification, award, certificate, diploma or other occupational credential awarded as a consequence of successful completion of this course or program. */
    "https://schema.org/occupationalCredentialAwarded"?: SchemaValue<EducationalOccupationalCredential | Text | URL | IdReference, "https://schema.org/occupationalCredentialAwarded">;
    /** An offer to provide this item—for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use {@link https://schema.org/businessFunction businessFunction} to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a {@link https://schema.org/Demand Demand}. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer. */
    "https://schema.org/offers"?: SchemaValue<Demand | Offer | IdReference, "https://schema.org/offers">;
    /** Prerequisites for enrolling in the program. */
    "https://schema.org/programPrerequisites"?: SchemaValue<AlignmentObject | Course | EducationalOccupationalCredential | Text | IdReference, "https://schema.org/programPrerequisites">;
    /** The type of educational or occupational program. For example, classroom, internship, alternance, etc.. */
    "https://schema.org/programType"?: SchemaValue<DefinedTerm | Text | IdReference, "https://schema.org/programType">;
    /** The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller. */
    "https://schema.org/provider"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/provider">;
    /** The expected salary upon completing the training. */
    "https://schema.org/salaryUponCompletion"?: SchemaValue<MonetaryAmountDistribution | IdReference, "https://schema.org/salaryUponCompletion">;
    /** The start date and time of the item (in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}). */
    "https://schema.org/startDate"?: SchemaValue<Date | DateTime, "https://schema.org/startDate">;
    /** The amount of time in a term as defined by the institution. A term is a length of time where students take one or more classes. Semesters and quarters are common units for term. */
    "https://schema.org/termDuration"?: SchemaValue<Duration | IdReference, "https://schema.org/termDuration">;
    /** The number of times terms of study are offered per year. Semesters and quarters are common units for term. For example, if the student can only take 2 semesters for the program in one year, then termsPerYear should be 2. */
    "https://schema.org/termsPerYear"?: SchemaValue<Number, "https://schema.org/termsPerYear">;
    /** The time of day the program normally runs. For example, "evenings". */
    "https://schema.org/timeOfDay"?: SchemaValue<Text, "https://schema.org/timeOfDay">;
    /** The expected length of time to complete the program if attending full-time. */
    "https://schema.org/timeToComplete"?: SchemaValue<Duration | IdReference, "https://schema.org/timeToComplete">;
    /** The estimated salary earned while in the program. */
    "https://schema.org/trainingSalary"?: SchemaValue<MonetaryAmountDistribution | IdReference, "https://schema.org/trainingSalary">;
    /** The number of credits or units a full-time student would be expected to take in 1 term however 'term' is defined by the institution. */
    "https://schema.org/typicalCreditsPerTerm"?: SchemaValue<Integer | StructuredValue | IdReference, "https://schema.org/typicalCreditsPerTerm">;
}
interface EducationalOccupationalProgramLeaf extends EducationalOccupationalProgramBase {
    "@type": "https://schema.org/EducationalOccupationalProgram";
}
/** A program offered by an institution which determines the learning progress to achieve an outcome, usually a credential like a degree or certificate. This would define a discrete set of opportunities (e.g., job, courses) that together constitute a program with a clear start, end, set of requirements, and transition to a new occupational opportunity (e.g., a job), or sometimes a higher educational opportunity (e.g., an advanced degree). */
export declare type EducationalOccupationalProgram = EducationalOccupationalProgramLeaf | WorkBasedProgram;
interface EducationalOrganizationBase extends CivicStructureBase, OrganizationBase {
    /** Alumni of an organization. */
    "https://schema.org/alumni"?: SchemaValue<Person | IdReference, "https://schema.org/alumni">;
}
interface EducationalOrganizationLeaf extends EducationalOrganizationBase {
    "@type": "https://schema.org/EducationalOrganization";
}
/** An educational organization. */
export declare type EducationalOrganization = EducationalOrganizationLeaf | CollegeOrUniversity | ElementarySchool | HighSchool | MiddleSchool | Preschool | School | string;
interface EducationEventBase extends EventBase {
    /** The item being described is intended to assess the competency or learning outcome defined by the referenced term. */
    "https://schema.org/assesses"?: SchemaValue<DefinedTerm | Text | IdReference, "https://schema.org/assesses">;
    /** The level in terms of progression through an educational or training context. Examples of educational levels include 'beginner', 'intermediate' or 'advanced', and formal sets of level indicators. */
    "https://schema.org/educationalLevel"?: SchemaValue<DefinedTerm | Text | URL | IdReference, "https://schema.org/educationalLevel">;
    /** The item being described is intended to help a person learn the competency or learning outcome defined by the referenced term. */
    "https://schema.org/teaches"?: SchemaValue<DefinedTerm | Text | IdReference, "https://schema.org/teaches">;
}
interface EducationEventLeaf extends EducationEventBase {
    "@type": "https://schema.org/EducationEvent";
}
/** Event type: Education event. */
export declare type EducationEvent = EducationEventLeaf;
interface ElectricianLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/Electrician";
}
/** An electrician. */
export declare type Electrician = ElectricianLeaf | string;
interface ElectronicsStoreLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/ElectronicsStore";
}
/** An electronics store. */
export declare type ElectronicsStore = ElectronicsStoreLeaf | string;
interface ElementarySchoolLeaf extends EducationalOrganizationBase {
    "@type": "https://schema.org/ElementarySchool";
}
/** An elementary school. */
export declare type ElementarySchool = ElementarySchoolLeaf | string;
interface EmailMessageLeaf extends MessageBase {
    "@type": "https://schema.org/EmailMessage";
}
/** An email message. */
export declare type EmailMessage = EmailMessageLeaf;
interface EmbassyLeaf extends CivicStructureBase {
    "@type": "https://schema.org/Embassy";
}
/** An embassy. */
export declare type Embassy = EmbassyLeaf | string;
interface EmergencyServiceLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/EmergencyService";
}
/** An emergency service, such as a fire station or ER. */
export declare type EmergencyService = EmergencyServiceLeaf | FireStation | Hospital | PoliceStation | string;
interface EmployerAggregateRatingLeaf extends AggregateRatingBase {
    "@type": "https://schema.org/EmployerAggregateRating";
}
/** An aggregate rating of an Organization related to its role as an employer. */
export declare type EmployerAggregateRating = EmployerAggregateRatingLeaf;
interface EmployerReviewLeaf extends ReviewBase {
    "@type": "https://schema.org/EmployerReview";
}
/** An {@link https://schema.org/EmployerReview EmployerReview} is a review of an {@link https://schema.org/Organization Organization} regarding its role as an employer, written by a current or former employee of that organization. */
export declare type EmployerReview = EmployerReviewLeaf;
interface EmploymentAgencyLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/EmploymentAgency";
}
/** An employment agency. */
export declare type EmploymentAgency = EmploymentAgencyLeaf | string;
interface EndorseActionBase extends ActionBase {
    /** A sub property of participant. The person/organization being supported. */
    "https://schema.org/endorsee"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/endorsee">;
}
interface EndorseActionLeaf extends EndorseActionBase {
    "@type": "https://schema.org/EndorseAction";
}
/** An agent approves/certifies/likes/supports/sanction an object. */
export declare type EndorseAction = EndorseActionLeaf;
interface EndorsementRatingLeaf extends RatingBase {
    "@type": "https://schema.org/EndorsementRating";
}
/**
 * An EndorsementRating is a rating that expresses some level of endorsement, for example inclusion in a "critic's pick" blog, a "Like" or "+1" on a social network. It can be considered the {@link https://schema.org/result result} of an {@link https://schema.org/EndorseAction EndorseAction} in which the {@link https://schema.org/object object} of the action is rated positively by some {@link https://schema.org/agent agent}. As is common elsewhere in schema.org, it is sometimes more useful to describe the results of such an action without explicitly describing the {@link https://schema.org/Action Action}.
 *
 * An {@link https://schema.org/EndorsementRating EndorsementRating} may be part of a numeric scale or organized system, but this is not required: having an explicit type for indicating a positive, endorsement rating is particularly useful in the absence of numeric scales as it helps consumers understand that the rating is broadly positive.
 */
export declare type EndorsementRating = EndorsementRatingLeaf;
interface EnergyLeaf extends ThingBase {
    "@type": "https://schema.org/Energy";
}
/** Properties that take Energy as values are of the form '<Number> <Energy unit of measure>'. */
export declare type Energy = EnergyLeaf | string;
interface EnergyConsumptionDetailsBase extends ThingBase {
    /** Specifies the most energy efficient class on the regulated EU energy consumption scale for the product category a product belongs to. For example, energy consumption for televisions placed on the market after January 1, 2020 is scaled from D to A+++. */
    "https://schema.org/energyEfficiencyScaleMax"?: SchemaValue<EUEnergyEfficiencyEnumeration | IdReference, "https://schema.org/energyEfficiencyScaleMax">;
    /** Specifies the least energy efficient class on the regulated EU energy consumption scale for the product category a product belongs to. For example, energy consumption for televisions placed on the market after January 1, 2020 is scaled from D to A+++. */
    "https://schema.org/energyEfficiencyScaleMin"?: SchemaValue<EUEnergyEfficiencyEnumeration | IdReference, "https://schema.org/energyEfficiencyScaleMin">;
    /** Defines the energy efficiency Category (which could be either a rating out of range of values or a yes/no certification) for a product according to an international energy efficiency standard. */
    "https://schema.org/hasEnergyEfficiencyCategory"?: SchemaValue<EnergyEfficiencyEnumeration | IdReference, "https://schema.org/hasEnergyEfficiencyCategory">;
}
interface EnergyConsumptionDetailsLeaf extends EnergyConsumptionDetailsBase {
    "@type": "https://schema.org/EnergyConsumptionDetails";
}
/** EnergyConsumptionDetails represents information related to the energy efficiency of a product that consumes energy. The information that can be provided is based on international regulations such as for example {@link https://eur-lex.europa.eu/eli/reg/2017/1369/oj EU directive 2017/1369} for energy labeling and the {@link https://www.ftc.gov/enforcement/rules/rulemaking-regulatory-reform-proceedings/energy-water-use-labeling-consumer Energy labeling rule} under the Energy Policy and Conservation Act (EPCA) in the US. */
export declare type EnergyConsumptionDetails = EnergyConsumptionDetailsLeaf;
interface EnergyEfficiencyEnumerationLeaf extends EnumerationBase {
    "@type": "https://schema.org/EnergyEfficiencyEnumeration";
}
/** Enumerates energy efficiency levels (also known as "classes" or "ratings") and certifications that are part of several international energy efficiency standards. */
export declare type EnergyEfficiencyEnumeration = EnergyEfficiencyEnumerationLeaf | EnergyStarEnergyEfficiencyEnumeration | EUEnergyEfficiencyEnumeration;
interface EnergyStarEnergyEfficiencyEnumerationLeaf extends EnumerationBase {
    "@type": "https://schema.org/EnergyStarEnergyEfficiencyEnumeration";
}
/** Used to indicate whether a product is EnergyStar certified. */
export declare type EnergyStarEnergyEfficiencyEnumeration = "https://schema.org/EnergyStarCertified" | EnergyStarEnergyEfficiencyEnumerationLeaf;
interface EngineSpecificationBase extends ThingBase {
    /**
     * The volume swept by all of the pistons inside the cylinders of an internal combustion engine in a single movement.
     *
     * Typical unit code(s): CMQ for cubic centimeter, LTR for liters, INQ for cubic inches
     * - Note 1: You can link to information about how the given value has been determined using the {@link https://schema.org/valueReference valueReference} property.
     * - Note 2: You can use {@link https://schema.org/minValue minValue} and {@link https://schema.org/maxValue maxValue} to indicate ranges.
     */
    "https://schema.org/engineDisplacement"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/engineDisplacement">;
    /**
     * The power of the vehicle's engine. Typical unit code(s): KWT for kilowatt, BHP for brake horsepower, N12 for metric horsepower (PS, with 1 PS = 735,49875 W)
     * - Note 1: There are many different ways of measuring an engine's power. For an overview, see {@link http://en.wikipedia.org/wiki/Horsepower#Engine_power_test_codes http://en.wikipedia.org/wiki/Horsepower#Engine_power_test_codes}.
     * - Note 2: You can link to information about how the given value has been determined using the {@link https://schema.org/valueReference valueReference} property.
     * - Note 3: You can use {@link https://schema.org/minValue minValue} and {@link https://schema.org/maxValue maxValue} to indicate ranges.
     */
    "https://schema.org/enginePower"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/enginePower">;
    /** The type of engine or engines powering the vehicle. */
    "https://schema.org/engineType"?: SchemaValue<QualitativeValue | Text | URL | IdReference, "https://schema.org/engineType">;
    /** The type of fuel suitable for the engine or engines of the vehicle. If the vehicle has only one engine, this property can be attached directly to the vehicle. */
    "https://schema.org/fuelType"?: SchemaValue<QualitativeValue | Text | URL | IdReference, "https://schema.org/fuelType">;
    /**
     * The torque (turning force) of the vehicle's engine.
     *
     * Typical unit code(s): NU for newton metre (N m), F17 for pound-force per foot, or F48 for pound-force per inch
     * - Note 1: You can link to information about how the given value has been determined (e.g. reference RPM) using the {@link https://schema.org/valueReference valueReference} property.
     * - Note 2: You can use {@link https://schema.org/minValue minValue} and {@link https://schema.org/maxValue maxValue} to indicate ranges.
     */
    "https://schema.org/torque"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/torque">;
}
interface EngineSpecificationLeaf extends EngineSpecificationBase {
    "@type": "https://schema.org/EngineSpecification";
}
/** Information about the engine of the vehicle. A vehicle can have multiple engines represented by multiple engine specification entities. */
export declare type EngineSpecification = EngineSpecificationLeaf;
interface EntertainmentBusinessLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/EntertainmentBusiness";
}
/** A business providing entertainment. */
export declare type EntertainmentBusiness = EntertainmentBusinessLeaf | AdultEntertainment | AmusementPark | ArtGallery | Casino | ComedyClub | MovieTheater | NightClub | string;
interface EntryPointBase extends ThingBase {
    /** An application that can complete the request. */
    "https://schema.org/actionApplication"?: SchemaValue<SoftwareApplication | IdReference, "https://schema.org/actionApplication">;
    /** The high level platform(s) where the Action can be performed for the given URL. To specify a specific application or operating system instance, use actionApplication. */
    "https://schema.org/actionPlatform"?: SchemaValue<Text | URL, "https://schema.org/actionPlatform">;
    /**
     * An application that can complete the request.
     *
     * @deprecated Consider using https://schema.org/actionApplication instead.
     */
    "https://schema.org/application"?: SchemaValue<SoftwareApplication | IdReference, "https://schema.org/application">;
    /** The supported content type(s) for an EntryPoint response. */
    "https://schema.org/contentType"?: SchemaValue<Text, "https://schema.org/contentType">;
    /** The supported encoding type(s) for an EntryPoint request. */
    "https://schema.org/encodingType"?: SchemaValue<Text, "https://schema.org/encodingType">;
    /** An HTTP method that specifies the appropriate HTTP method for a request to an HTTP EntryPoint. Values are capitalized strings as used in HTTP. */
    "https://schema.org/httpMethod"?: SchemaValue<Text, "https://schema.org/httpMethod">;
    /** An url template (RFC6570) that will be used to construct the target of the execution of the action. */
    "https://schema.org/urlTemplate"?: SchemaValue<Text, "https://schema.org/urlTemplate">;
}
interface EntryPointLeaf extends EntryPointBase {
    "@type": "https://schema.org/EntryPoint";
}
/** An entry point, within some Web-based protocol. */
export declare type EntryPoint = EntryPointLeaf | string;
interface EnumerationBase extends ThingBase {
    /** Relates a term (i.e. a property, class or enumeration) to one that supersedes it. */
    "https://schema.org/supersededBy"?: SchemaValue<Class | Enumeration | Property | IdReference, "https://schema.org/supersededBy">;
}
interface EnumerationLeaf extends EnumerationBase {
    "@type": "https://schema.org/Enumeration";
}
/** Lists or enumerations—for example, a list of cuisines or music genres, etc. */
export declare type Enumeration = EnumerationLeaf | BoardingPolicyType | BookFormatType | BusinessEntityType | BusinessFunction | CarUsageType | ContactPointOption | DayOfWeek | DeliveryMethod | DigitalDocumentPermissionType | EnergyEfficiencyEnumeration | EventAttendanceModeEnumeration | GamePlayMode | GenderType | GovernmentBenefitsType | HealthAspectEnumeration | ItemAvailability | ItemListOrderType | LegalValueLevel | MapCategoryType | MeasurementTypeEnumeration | MediaManipulationRatingEnumeration | MedicalEnumeration | MerchantReturnEnumeration | MusicAlbumProductionType | MusicAlbumReleaseType | MusicReleaseFormatType | NonprofitType | OfferItemCondition | PaymentMethod | PhysicalActivityCategory | PriceComponentTypeEnumeration | PriceTypeEnumeration | ProductReturnEnumeration | QualitativeValue | RefundTypeEnumeration | RestrictedDiet | ReturnFeesEnumeration | ReturnLabelSourceEnumeration | ReturnMethodEnumeration | RsvpResponseType | SizeGroupEnumeration | SizeSystemEnumeration | Specialty | StatusEnumeration | WarrantyScope;
interface EpisodeBase extends CreativeWorkBase {
    /** An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip. */
    "https://schema.org/actor"?: SchemaValue<Person | IdReference, "https://schema.org/actor">;
    /**
     * An actor, e.g. in tv, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip.
     *
     * @deprecated Consider using https://schema.org/actor instead.
     */
    "https://schema.org/actors"?: SchemaValue<Person | IdReference, "https://schema.org/actors">;
    /** A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip. */
    "https://schema.org/director"?: SchemaValue<Person | IdReference, "https://schema.org/director">;
    /**
     * A director of e.g. tv, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip.
     *
     * @deprecated Consider using https://schema.org/director instead.
     */
    "https://schema.org/directors"?: SchemaValue<Person | IdReference, "https://schema.org/directors">;
    /** The duration of the item (movie, audio recording, event, etc.) in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}. */
    "https://schema.org/duration"?: SchemaValue<Duration | IdReference, "https://schema.org/duration">;
    /** Position of the episode within an ordered group of episodes. */
    "https://schema.org/episodeNumber"?: SchemaValue<Integer | Text, "https://schema.org/episodeNumber">;
    /** The composer of the soundtrack. */
    "https://schema.org/musicBy"?: SchemaValue<MusicGroup | Person | IdReference, "https://schema.org/musicBy">;
    /** The season to which this episode belongs. */
    "https://schema.org/partOfSeason"?: SchemaValue<CreativeWorkSeason | IdReference, "https://schema.org/partOfSeason">;
    /** The series to which this episode or season belongs. */
    "https://schema.org/partOfSeries"?: SchemaValue<CreativeWorkSeries | IdReference, "https://schema.org/partOfSeries">;
    /** The production company or studio responsible for the item e.g. series, video game, episode etc. */
    "https://schema.org/productionCompany"?: SchemaValue<Organization | IdReference, "https://schema.org/productionCompany">;
    /** The trailer of a movie or tv/radio series, season, episode, etc. */
    "https://schema.org/trailer"?: SchemaValue<VideoObject | IdReference, "https://schema.org/trailer">;
}
interface EpisodeLeaf extends EpisodeBase {
    "@type": "https://schema.org/Episode";
}
/** A media episode (e.g. TV, radio, video game) which can be part of a series or season. */
export declare type Episode = EpisodeLeaf | PodcastEpisode | RadioEpisode | TVEpisode;
interface EUEnergyEfficiencyEnumerationLeaf extends EnumerationBase {
    "@type": "https://schema.org/EUEnergyEfficiencyEnumeration";
}
/** Enumerates the EU energy efficiency classes A-G as well as A+, A++, and A+++ as defined in EU directive 2017/1369. */
export declare type EUEnergyEfficiencyEnumeration = "https://schema.org/EUEnergyEfficiencyCategoryA" | "https://schema.org/EUEnergyEfficiencyCategoryA1Plus" | "https://schema.org/EUEnergyEfficiencyCategoryA2Plus" | "https://schema.org/EUEnergyEfficiencyCategoryA3Plus" | "https://schema.org/EUEnergyEfficiencyCategoryB" | "https://schema.org/EUEnergyEfficiencyCategoryC" | "https://schema.org/EUEnergyEfficiencyCategoryD" | "https://schema.org/EUEnergyEfficiencyCategoryE" | "https://schema.org/EUEnergyEfficiencyCategoryF" | "https://schema.org/EUEnergyEfficiencyCategoryG" | EUEnergyEfficiencyEnumerationLeaf;
interface EventBase extends ThingBase {
    /** The subject matter of the content. */
    "https://schema.org/about"?: SchemaValue<Thing | IdReference, "https://schema.org/about">;
    /** An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip. */
    "https://schema.org/actor"?: SchemaValue<Person | IdReference, "https://schema.org/actor">;
    /** The overall rating, based on a collection of reviews or ratings, of the item. */
    "https://schema.org/aggregateRating"?: SchemaValue<AggregateRating | IdReference, "https://schema.org/aggregateRating">;
    /** A person or organization attending the event. */
    "https://schema.org/attendee"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/attendee">;
    /**
     * A person attending the event.
     *
     * @deprecated Consider using https://schema.org/attendee instead.
     */
    "https://schema.org/attendees"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/attendees">;
    /** An intended audience, i.e. a group for whom something was created. */
    "https://schema.org/audience"?: SchemaValue<Audience | IdReference, "https://schema.org/audience">;
    /** The person or organization who wrote a composition, or who is the composer of a work performed at some event. */
    "https://schema.org/composer"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/composer">;
    /** A secondary contributor to the CreativeWork or Event. */
    "https://schema.org/contributor"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/contributor">;
    /** A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip. */
    "https://schema.org/director"?: SchemaValue<Person | IdReference, "https://schema.org/director">;
    /** The time admission will commence. */
    "https://schema.org/doorTime"?: SchemaValue<DateTime | Time, "https://schema.org/doorTime">;
    /** The duration of the item (movie, audio recording, event, etc.) in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}. */
    "https://schema.org/duration"?: SchemaValue<Duration | IdReference, "https://schema.org/duration">;
    /** The end date and time of the item (in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}). */
    "https://schema.org/endDate"?: SchemaValue<Date | DateTime, "https://schema.org/endDate">;
    /** The eventAttendanceMode of an event indicates whether it occurs online, offline, or a mix. */
    "https://schema.org/eventAttendanceMode"?: SchemaValue<EventAttendanceModeEnumeration | IdReference, "https://schema.org/eventAttendanceMode">;
    /** Associates an {@link https://schema.org/Event Event} with a {@link https://schema.org/Schedule Schedule}. There are circumstances where it is preferable to share a schedule for a series of repeating events rather than data on the individual events themselves. For example, a website or application might prefer to publish a schedule for a weekly gym class rather than provide data on every event. A schedule could be processed by applications to add forthcoming events to a calendar. An {@link https://schema.org/Event Event} that is associated with a {@link https://schema.org/Schedule Schedule} using this property should not have {@link https://schema.org/startDate startDate} or {@link https://schema.org/endDate endDate} properties. These are instead defined within the associated {@link https://schema.org/Schedule Schedule}, this avoids any ambiguity for clients using the data. The property might have repeated values to specify different schedules, e.g. for different months or seasons. */
    "https://schema.org/eventSchedule"?: SchemaValue<Schedule | IdReference, "https://schema.org/eventSchedule">;
    /** An eventStatus of an event represents its status; particularly useful when an event is cancelled or rescheduled. */
    "https://schema.org/eventStatus"?: SchemaValue<EventStatusType | IdReference, "https://schema.org/eventStatus">;
    /** A person or organization that supports (sponsors) something through some kind of financial contribution. */
    "https://schema.org/funder"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/funder">;
    /** The language of the content or performance or used in an action. Please use one of the language codes from the {@link http://tools.ietf.org/html/bcp47 IETF BCP 47 standard}. See also {@link https://schema.org/availableLanguage availableLanguage}. */
    "https://schema.org/inLanguage"?: SchemaValue<Language | Text | IdReference, "https://schema.org/inLanguage">;
    /** A flag to signal that the item, event, or place is accessible for free. */
    "https://schema.org/isAccessibleForFree"?: SchemaValue<Boolean, "https://schema.org/isAccessibleForFree">;
    /** The location of, for example, where an event is happening, where an organization is located, or where an action takes place. */
    "https://schema.org/location"?: SchemaValue<Place | PostalAddress | Text | VirtualLocation | IdReference, "https://schema.org/location">;
    /** The total number of individuals that may attend an event or venue. */
    "https://schema.org/maximumAttendeeCapacity"?: SchemaValue<Integer, "https://schema.org/maximumAttendeeCapacity">;
    /** The maximum physical attendee capacity of an {@link https://schema.org/Event Event} whose {@link https://schema.org/eventAttendanceMode eventAttendanceMode} is {@link https://schema.org/OfflineEventAttendanceMode OfflineEventAttendanceMode} (or the offline aspects, in the case of a {@link https://schema.org/MixedEventAttendanceMode MixedEventAttendanceMode}). */
    "https://schema.org/maximumPhysicalAttendeeCapacity"?: SchemaValue<Integer, "https://schema.org/maximumPhysicalAttendeeCapacity">;
    /** The maximum physical attendee capacity of an {@link https://schema.org/Event Event} whose {@link https://schema.org/eventAttendanceMode eventAttendanceMode} is {@link https://schema.org/OnlineEventAttendanceMode OnlineEventAttendanceMode} (or the online aspects, in the case of a {@link https://schema.org/MixedEventAttendanceMode MixedEventAttendanceMode}). */
    "https://schema.org/maximumVirtualAttendeeCapacity"?: SchemaValue<Integer, "https://schema.org/maximumVirtualAttendeeCapacity">;
    /** An offer to provide this item—for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use {@link https://schema.org/businessFunction businessFunction} to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a {@link https://schema.org/Demand Demand}. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer. */
    "https://schema.org/offers"?: SchemaValue<Demand | Offer | IdReference, "https://schema.org/offers">;
    /** An organizer of an Event. */
    "https://schema.org/organizer"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/organizer">;
    /** A performer at the event—for example, a presenter, musician, musical group or actor. */
    "https://schema.org/performer"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/performer">;
    /**
     * The main performer or performers of the event—for example, a presenter, musician, or actor.
     *
     * @deprecated Consider using https://schema.org/performer instead.
     */
    "https://schema.org/performers"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/performers">;
    /** Used in conjunction with eventStatus for rescheduled or cancelled events. This property contains the previously scheduled start date. For rescheduled events, the startDate property should be used for the newly scheduled start date. In the (rare) case of an event that has been postponed and rescheduled multiple times, this field may be repeated. */
    "https://schema.org/previousStartDate"?: SchemaValue<Date, "https://schema.org/previousStartDate">;
    /** The CreativeWork that captured all or part of this Event. */
    "https://schema.org/recordedIn"?: SchemaValue<CreativeWork | IdReference, "https://schema.org/recordedIn">;
    /** The number of attendee places for an event that remain unallocated. */
    "https://schema.org/remainingAttendeeCapacity"?: SchemaValue<Integer, "https://schema.org/remainingAttendeeCapacity">;
    /** A review of the item. */
    "https://schema.org/review"?: SchemaValue<Review | IdReference, "https://schema.org/review">;
    /** A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event. */
    "https://schema.org/sponsor"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/sponsor">;
    /** The start date and time of the item (in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}). */
    "https://schema.org/startDate"?: SchemaValue<Date | DateTime, "https://schema.org/startDate">;
    /** An Event that is part of this event. For example, a conference event includes many presentations, each of which is a subEvent of the conference. */
    "https://schema.org/subEvent"?: SchemaValue<Event | IdReference, "https://schema.org/subEvent">;
    /**
     * Events that are a part of this event. For example, a conference event includes many presentations, each subEvents of the conference.
     *
     * @deprecated Consider using https://schema.org/subEvent instead.
     */
    "https://schema.org/subEvents"?: SchemaValue<Event | IdReference, "https://schema.org/subEvents">;
    /** An event that this event is a part of. For example, a collection of individual music performances might each have a music festival as their superEvent. */
    "https://schema.org/superEvent"?: SchemaValue<Event | IdReference, "https://schema.org/superEvent">;
    /** Organization or person who adapts a creative work to different languages, regional differences and technical requirements of a target market, or that translates during some event. */
    "https://schema.org/translator"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/translator">;
    /** The typical expected age range, e.g. '7-9', '11-'. */
    "https://schema.org/typicalAgeRange"?: SchemaValue<Text, "https://schema.org/typicalAgeRange">;
    /** A work featured in some event, e.g. exhibited in an ExhibitionEvent. Specific subproperties are available for workPerformed (e.g. a play), or a workPresented (a Movie at a ScreeningEvent). */
    "https://schema.org/workFeatured"?: SchemaValue<CreativeWork | IdReference, "https://schema.org/workFeatured">;
    /** A work performed in some event, for example a play performed in a TheaterEvent. */
    "https://schema.org/workPerformed"?: SchemaValue<CreativeWork | IdReference, "https://schema.org/workPerformed">;
}
interface EventLeaf extends EventBase {
    "@type": "https://schema.org/Event";
}
/** An event happening at a certain time and location, such as a concert, lecture, or festival. Ticketing information may be added via the {@link https://schema.org/offers offers} property. Repeated events may be structured as separate Event objects. */
export declare type Event = EventLeaf | BusinessEvent | ChildrensEvent | ComedyEvent | CourseInstance | DanceEvent | DeliveryEvent | EducationEvent | EventSeries | ExhibitionEvent | Festival | FoodEvent | Hackathon | LiteraryEvent | MusicEvent | PublicationEvent | SaleEvent | ScreeningEvent | SocialEvent | SportsEvent | TheaterEvent | UserInteraction | VisualArtsEvent;
interface EventAttendanceModeEnumerationLeaf extends EnumerationBase {
    "@type": "https://schema.org/EventAttendanceModeEnumeration";
}
/** An EventAttendanceModeEnumeration value is one of potentially several modes of organising an event, relating to whether it is online or offline. */
export declare type EventAttendanceModeEnumeration = "https://schema.org/MixedEventAttendanceMode" | "https://schema.org/OfflineEventAttendanceMode" | "https://schema.org/OnlineEventAttendanceMode" | EventAttendanceModeEnumerationLeaf;
interface EventReservationLeaf extends ReservationBase {
    "@type": "https://schema.org/EventReservation";
}
/**
 * A reservation for an event like a concert, sporting event, or lecture.
 *
 * Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use {@link https://schema.org/Offer Offer}.
 */
export declare type EventReservation = EventReservationLeaf;
interface EventSeriesBase extends ThingBase, EventBase {
}
interface EventSeriesLeaf extends EventSeriesBase {
    "@type": "https://schema.org/EventSeries";
}
/**
 * A series of {@link https://schema.org/Event Event}s. Included events can relate with the series using the {@link https://schema.org/superEvent superEvent} property.
 *
 * An EventSeries is a collection of events that share some unifying characteristic. For example, "The Olympic Games" is a series, which is repeated regularly. The "2012 London Olympics" can be presented both as an {@link https://schema.org/Event Event} in the series "Olympic Games", and as an {@link https://schema.org/EventSeries EventSeries} that included a number of sporting competitions as Events.
 *
 * The nature of the association between the events in an {@link https://schema.org/EventSeries EventSeries} can vary, but typical examples could include a thematic event series (e.g. topical meetups or classes), or a series of regular events that share a location, attendee group and/or organizers.
 *
 * EventSeries has been defined as a kind of Event to make it easy for publishers to use it in an Event context without worrying about which kinds of series are really event-like enough to call an Event. In general an EventSeries may seem more Event-like when the period of time is compact and when aspects such as location are fixed, but it may also sometimes prove useful to describe a longer-term series as an Event.
 */
export declare type EventSeries = EventSeriesLeaf;
interface EventStatusTypeLeaf extends EnumerationBase {
    "@type": "https://schema.org/EventStatusType";
}
/** EventStatusType is an enumeration type whose instances represent several states that an Event may be in. */
export declare type EventStatusType = "https://schema.org/EventCancelled" | "https://schema.org/EventMovedOnline" | "https://schema.org/EventPostponed" | "https://schema.org/EventRescheduled" | "https://schema.org/EventScheduled" | EventStatusTypeLeaf;
interface EventVenueLeaf extends CivicStructureBase {
    "@type": "https://schema.org/EventVenue";
}
/** An event venue. */
export declare type EventVenue = EventVenueLeaf | string;
interface ExchangeRateSpecificationBase extends ThingBase {
    /**
     * The currency in which the monetary amount is expressed.
     *
     * Use standard formats: {@link http://en.wikipedia.org/wiki/ISO_4217 ISO 4217 currency format} e.g. "USD"; {@link https://en.wikipedia.org/wiki/List_of_cryptocurrencies Ticker symbol} for cryptocurrencies e.g. "BTC"; well known names for {@link https://en.wikipedia.org/wiki/Local_exchange_trading_system Local Exchange Tradings Systems} (LETS) and other currency types e.g. "Ithaca HOUR".
     */
    "https://schema.org/currency"?: SchemaValue<Text, "https://schema.org/currency">;
    /** The current price of a currency. */
    "https://schema.org/currentExchangeRate"?: SchemaValue<UnitPriceSpecification | IdReference, "https://schema.org/currentExchangeRate">;
    /** The difference between the price at which a broker or other intermediary buys and sells foreign currency. */
    "https://schema.org/exchangeRateSpread"?: SchemaValue<MonetaryAmount | Number | IdReference, "https://schema.org/exchangeRateSpread">;
}
interface ExchangeRateSpecificationLeaf extends ExchangeRateSpecificationBase {
    "@type": "https://schema.org/ExchangeRateSpecification";
}
/** A structured value representing exchange rate. */
export declare type ExchangeRateSpecification = ExchangeRateSpecificationLeaf;
interface ExerciseActionBase extends PlayActionBase {
    /**
     * A sub property of location. The course where this action was taken.
     *
     * @deprecated Consider using https://schema.org/exerciseCourse instead.
     */
    "https://schema.org/course"?: SchemaValue<Place | IdReference, "https://schema.org/course">;
    /** A sub property of instrument. The diet used in this action. */
    "https://schema.org/diet"?: SchemaValue<Diet | IdReference, "https://schema.org/diet">;
    /** The distance travelled, e.g. exercising or travelling. */
    "https://schema.org/distance"?: SchemaValue<Distance | IdReference, "https://schema.org/distance">;
    /** A sub property of location. The course where this action was taken. */
    "https://schema.org/exerciseCourse"?: SchemaValue<Place | IdReference, "https://schema.org/exerciseCourse">;
    /** A sub property of instrument. The exercise plan used on this action. */
    "https://schema.org/exercisePlan"?: SchemaValue<ExercisePlan | IdReference, "https://schema.org/exercisePlan">;
    /** A sub property of instrument. The diet used in this action. */
    "https://schema.org/exerciseRelatedDiet"?: SchemaValue<Diet | IdReference, "https://schema.org/exerciseRelatedDiet">;
    /** Type(s) of exercise or activity, such as strength training, flexibility training, aerobics, cardiac rehabilitation, etc. */
    "https://schema.org/exerciseType"?: SchemaValue<Text, "https://schema.org/exerciseType">;
    /** A sub property of location. The original location of the object or the agent before the action. */
    "https://schema.org/fromLocation"?: SchemaValue<Place | IdReference, "https://schema.org/fromLocation">;
    /** A sub property of participant. The opponent on this action. */
    "https://schema.org/opponent"?: SchemaValue<Person | IdReference, "https://schema.org/opponent">;
    /** A sub property of location. The sports activity location where this action occurred. */
    "https://schema.org/sportsActivityLocation"?: SchemaValue<SportsActivityLocation | IdReference, "https://schema.org/sportsActivityLocation">;
    /** A sub property of location. The sports event where this action occurred. */
    "https://schema.org/sportsEvent"?: SchemaValue<SportsEvent | IdReference, "https://schema.org/sportsEvent">;
    /** A sub property of participant. The sports team that participated on this action. */
    "https://schema.org/sportsTeam"?: SchemaValue<SportsTeam | IdReference, "https://schema.org/sportsTeam">;
    /** A sub property of location. The final location of the object or the agent after the action. */
    "https://schema.org/toLocation"?: SchemaValue<Place | IdReference, "https://schema.org/toLocation">;
}
interface ExerciseActionLeaf extends ExerciseActionBase {
    "@type": "https://schema.org/ExerciseAction";
}
/** The act of participating in exertive activity for the purposes of improving health and fitness. */
export declare type ExerciseAction = ExerciseActionLeaf;
interface ExerciseGymLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/ExerciseGym";
}
/** A gym. */
export declare type ExerciseGym = ExerciseGymLeaf | string;
interface ExercisePlanBase extends PhysicalActivityBase, CreativeWorkBase {
    /** Length of time to engage in the activity. */
    "https://schema.org/activityDuration"?: SchemaValue<Duration | QuantitativeValue | IdReference, "https://schema.org/activityDuration">;
    /** How often one should engage in the activity. */
    "https://schema.org/activityFrequency"?: SchemaValue<QuantitativeValue | Text | IdReference, "https://schema.org/activityFrequency">;
    /** Any additional component of the exercise prescription that may need to be articulated to the patient. This may include the order of exercises, the number of repetitions of movement, quantitative distance, progressions over time, etc. */
    "https://schema.org/additionalVariable"?: SchemaValue<Text, "https://schema.org/additionalVariable">;
    /** Type(s) of exercise or activity, such as strength training, flexibility training, aerobics, cardiac rehabilitation, etc. */
    "https://schema.org/exerciseType"?: SchemaValue<Text, "https://schema.org/exerciseType">;
    /** Quantitative measure gauging the degree of force involved in the exercise, for example, heartbeats per minute. May include the velocity of the movement. */
    "https://schema.org/intensity"?: SchemaValue<QuantitativeValue | Text | IdReference, "https://schema.org/intensity">;
    /** Number of times one should repeat the activity. */
    "https://schema.org/repetitions"?: SchemaValue<Number | QuantitativeValue | IdReference, "https://schema.org/repetitions">;
    /** How often one should break from the activity. */
    "https://schema.org/restPeriods"?: SchemaValue<QuantitativeValue | Text | IdReference, "https://schema.org/restPeriods">;
    /** Quantitative measure of the physiologic output of the exercise; also referred to as energy expenditure. */
    "https://schema.org/workload"?: SchemaValue<Energy | QuantitativeValue | IdReference, "https://schema.org/workload">;
}
interface ExercisePlanLeaf extends ExercisePlanBase {
    "@type": "https://schema.org/ExercisePlan";
}
/** Fitness-related activity designed for a specific health-related purpose, including defined exercise routines as well as activity prescribed by a clinician. */
export declare type ExercisePlan = ExercisePlanLeaf;
interface ExhibitionEventLeaf extends EventBase {
    "@type": "https://schema.org/ExhibitionEvent";
}
/** Event type: Exhibition event, e.g. at a museum, library, archive, tradeshow, ... */
export declare type ExhibitionEvent = ExhibitionEventLeaf;
interface FAQPageLeaf extends WebPageBase {
    "@type": "https://schema.org/FAQPage";
}
/** A {@link https://schema.org/FAQPage FAQPage} is a {@link https://schema.org/WebPage WebPage} presenting one or more "{@link https://en.wikipedia.org/wiki/FAQ Frequently asked questions}" (see also {@link https://schema.org/QAPage QAPage}). */
export declare type FAQPage = FAQPageLeaf;
interface FastFoodRestaurantLeaf extends FoodEstablishmentBase {
    "@type": "https://schema.org/FastFoodRestaurant";
}
/** A fast-food restaurant. */
export declare type FastFoodRestaurant = FastFoodRestaurantLeaf | string;
interface FestivalLeaf extends EventBase {
    "@type": "https://schema.org/Festival";
}
/** Event type: Festival. */
export declare type Festival = FestivalLeaf;
interface FilmActionLeaf extends ActionBase {
    "@type": "https://schema.org/FilmAction";
}
/** The act of capturing sound and moving images on film, video, or digitally. */
export declare type FilmAction = FilmActionLeaf;
interface FinancialProductBase extends ServiceBase {
    /** The annual rate that is charged for borrowing (or made by investing), expressed as a single percentage number that represents the actual yearly cost of funds over the term of a loan. This includes any fees or additional costs associated with the transaction. */
    "https://schema.org/annualPercentageRate"?: SchemaValue<Number | QuantitativeValue | IdReference, "https://schema.org/annualPercentageRate">;
    /** Description of fees, commissions, and other terms applied either to a class of financial product, or by a financial service organization. */
    "https://schema.org/feesAndCommissionsSpecification"?: SchemaValue<Text | URL, "https://schema.org/feesAndCommissionsSpecification">;
    /** The interest rate, charged or paid, applicable to the financial product. Note: This is different from the calculated annualPercentageRate. */
    "https://schema.org/interestRate"?: SchemaValue<Number | QuantitativeValue | IdReference, "https://schema.org/interestRate">;
}
interface FinancialProductLeaf extends FinancialProductBase {
    "@type": "https://schema.org/FinancialProduct";
}
/** A product provided to consumers and businesses by financial institutions such as banks, insurance companies, brokerage firms, consumer finance companies, and investment companies which comprise the financial services industry. */
export declare type FinancialProduct = FinancialProductLeaf | BankAccount | CurrencyConversionService | InvestmentOrDeposit | LoanOrCredit | PaymentCard | PaymentService;
interface FinancialServiceBase extends LocalBusinessBase {
    /** Description of fees, commissions, and other terms applied either to a class of financial product, or by a financial service organization. */
    "https://schema.org/feesAndCommissionsSpecification"?: SchemaValue<Text | URL, "https://schema.org/feesAndCommissionsSpecification">;
}
interface FinancialServiceLeaf extends FinancialServiceBase {
    "@type": "https://schema.org/FinancialService";
}
/** Financial services business. */
export declare type FinancialService = FinancialServiceLeaf | AccountingService | AutomatedTeller | BankOrCreditUnion | InsuranceAgency | string;
interface FindActionLeaf extends ActionBase {
    "@type": "https://schema.org/FindAction";
}
/**
 * The act of finding an object.
 *
 * Related actions:
 * - {@link https://schema.org/SearchAction SearchAction}: FindAction is generally lead by a SearchAction, but not necessarily.
 */
export declare type FindAction = FindActionLeaf | CheckAction | DiscoverAction | TrackAction;
interface FireStationBase extends CivicStructureBase, LocalBusinessBase {
}
interface FireStationLeaf extends FireStationBase {
    "@type": "https://schema.org/FireStation";
}
/** A fire station. With firemen. */
export declare type FireStation = FireStationLeaf | string;
interface FlightBase extends TripBase {
    /** The kind of aircraft (e.g., "Boeing 747"). */
    "https://schema.org/aircraft"?: SchemaValue<Text | Vehicle | IdReference, "https://schema.org/aircraft">;
    /** The airport where the flight terminates. */
    "https://schema.org/arrivalAirport"?: SchemaValue<Airport | IdReference, "https://schema.org/arrivalAirport">;
    /** Identifier of the flight's arrival gate. */
    "https://schema.org/arrivalGate"?: SchemaValue<Text, "https://schema.org/arrivalGate">;
    /** Identifier of the flight's arrival terminal. */
    "https://schema.org/arrivalTerminal"?: SchemaValue<Text, "https://schema.org/arrivalTerminal">;
    /** The type of boarding policy used by the airline (e.g. zone-based or group-based). */
    "https://schema.org/boardingPolicy"?: SchemaValue<BoardingPolicyType | IdReference, "https://schema.org/boardingPolicy">;
    /**
     * 'carrier' is an out-dated term indicating the 'provider' for parcel delivery and flights.
     *
     * @deprecated Consider using https://schema.org/provider instead.
     */
    "https://schema.org/carrier"?: SchemaValue<Organization | IdReference, "https://schema.org/carrier">;
    /** The airport where the flight originates. */
    "https://schema.org/departureAirport"?: SchemaValue<Airport | IdReference, "https://schema.org/departureAirport">;
    /** Identifier of the flight's departure gate. */
    "https://schema.org/departureGate"?: SchemaValue<Text, "https://schema.org/departureGate">;
    /** Identifier of the flight's departure terminal. */
    "https://schema.org/departureTerminal"?: SchemaValue<Text, "https://schema.org/departureTerminal">;
    /** The estimated time the flight will take. */
    "https://schema.org/estimatedFlightDuration"?: SchemaValue<Duration | Text | IdReference, "https://schema.org/estimatedFlightDuration">;
    /** The distance of the flight. */
    "https://schema.org/flightDistance"?: SchemaValue<Distance | Text | IdReference, "https://schema.org/flightDistance">;
    /** The unique identifier for a flight including the airline IATA code. For example, if describing United flight 110, where the IATA code for United is 'UA', the flightNumber is 'UA110'. */
    "https://schema.org/flightNumber"?: SchemaValue<Text, "https://schema.org/flightNumber">;
    /** Description of the meals that will be provided or available for purchase. */
    "https://schema.org/mealService"?: SchemaValue<Text, "https://schema.org/mealService">;
    /** An entity which offers (sells / leases / lends / loans) the services / goods. A seller may also be a provider. */
    "https://schema.org/seller"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/seller">;
    /** The time when a passenger can check into the flight online. */
    "https://schema.org/webCheckinTime"?: SchemaValue<DateTime, "https://schema.org/webCheckinTime">;
}
interface FlightLeaf extends FlightBase {
    "@type": "https://schema.org/Flight";
}
/** An airline flight. */
export declare type Flight = FlightLeaf;
interface FlightReservationBase extends ReservationBase {
    /** The airline-specific indicator of boarding order / preference. */
    "https://schema.org/boardingGroup"?: SchemaValue<Text, "https://schema.org/boardingGroup">;
    /** The priority status assigned to a passenger for security or boarding (e.g. FastTrack or Priority). */
    "https://schema.org/passengerPriorityStatus"?: SchemaValue<QualitativeValue | Text | IdReference, "https://schema.org/passengerPriorityStatus">;
    /** The passenger's sequence number as assigned by the airline. */
    "https://schema.org/passengerSequenceNumber"?: SchemaValue<Text, "https://schema.org/passengerSequenceNumber">;
    /** The type of security screening the passenger is subject to. */
    "https://schema.org/securityScreening"?: SchemaValue<Text, "https://schema.org/securityScreening">;
}
interface FlightReservationLeaf extends FlightReservationBase {
    "@type": "https://schema.org/FlightReservation";
}
/**
 * A reservation for air travel.
 *
 * Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use {@link https://schema.org/Offer Offer}.
 */
export declare type FlightReservation = FlightReservationLeaf;
/** Data type: Floating number. */
export declare type Float = number | `${number}`;
interface FloorPlanBase extends ThingBase {
    /** An amenity feature (e.g. a characteristic or service) of the Accommodation. This generic property does not make a statement about whether the feature is included in an offer for the main accommodation or available at extra costs. */
    "https://schema.org/amenityFeature"?: SchemaValue<LocationFeatureSpecification | IdReference, "https://schema.org/amenityFeature">;
    /** The size of the accommodation, e.g. in square meter or squarefoot. Typical unit code(s): MTK for square meter, FTK for square foot, or YDK for square yard */
    "https://schema.org/floorSize"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/floorSize">;
    /** Indicates some accommodation that this floor plan describes. */
    "https://schema.org/isPlanForApartment"?: SchemaValue<Accommodation | IdReference, "https://schema.org/isPlanForApartment">;
    /** A schematic image showing the floorplan layout. */
    "https://schema.org/layoutImage"?: SchemaValue<ImageObject | URL | IdReference, "https://schema.org/layoutImage">;
    /** Indicates the total (available plus unavailable) number of accommodation units in an {@link https://schema.org/ApartmentComplex ApartmentComplex}, or the number of accommodation units for a specific {@link https://schema.org/FloorPlan FloorPlan} (within its specific {@link https://schema.org/ApartmentComplex ApartmentComplex}). See also {@link https://schema.org/numberOfAvailableAccommodationUnits numberOfAvailableAccommodationUnits}. */
    "https://schema.org/numberOfAccommodationUnits"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/numberOfAccommodationUnits">;
    /** Indicates the number of available accommodation units in an {@link https://schema.org/ApartmentComplex ApartmentComplex}, or the number of accommodation units for a specific {@link https://schema.org/FloorPlan FloorPlan} (within its specific {@link https://schema.org/ApartmentComplex ApartmentComplex}). See also {@link https://schema.org/numberOfAccommodationUnits numberOfAccommodationUnits}. */
    "https://schema.org/numberOfAvailableAccommodationUnits"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/numberOfAvailableAccommodationUnits">;
    /** The total integer number of bathrooms in a some {@link https://schema.org/Accommodation Accommodation}, following real estate conventions as {@link https://ddwiki.reso.org/display/DDW17/BathroomsTotalInteger+Field documented in RESO}: "The simple sum of the number of bathrooms. For example for a property with two Full Bathrooms and one Half Bathroom, the Bathrooms Total Integer will be 3.". See also {@link https://schema.org/numberOfRooms numberOfRooms}. */
    "https://schema.org/numberOfBathroomsTotal"?: SchemaValue<Integer, "https://schema.org/numberOfBathroomsTotal">;
    /** The total integer number of bedrooms in a some {@link https://schema.org/Accommodation Accommodation}, {@link https://schema.org/ApartmentComplex ApartmentComplex} or {@link https://schema.org/FloorPlan FloorPlan}. */
    "https://schema.org/numberOfBedrooms"?: SchemaValue<Number | QuantitativeValue | IdReference, "https://schema.org/numberOfBedrooms">;
    /** Number of full bathrooms - The total number of full and \u00BE bathrooms in an {@link https://schema.org/Accommodation Accommodation}. This corresponds to the {@link https://ddwiki.reso.org/display/DDW17/BathroomsFull+Field BathroomsFull field in RESO}. */
    "https://schema.org/numberOfFullBathrooms"?: SchemaValue<Number, "https://schema.org/numberOfFullBathrooms">;
    /** Number of partial bathrooms - The total number of half and \u00BC bathrooms in an {@link https://schema.org/Accommodation Accommodation}. This corresponds to the {@link https://ddwiki.reso.org/display/DDW17/BathroomsPartial+Field BathroomsPartial field in RESO}. */
    "https://schema.org/numberOfPartialBathrooms"?: SchemaValue<Number, "https://schema.org/numberOfPartialBathrooms">;
    /** The number of rooms (excluding bathrooms and closets) of the accommodation or lodging business. Typical unit code(s): ROM for room or C62 for no unit. The type of room can be put in the unitText property of the QuantitativeValue. */
    "https://schema.org/numberOfRooms"?: SchemaValue<Number | QuantitativeValue | IdReference, "https://schema.org/numberOfRooms">;
    /** Indicates whether pets are allowed to enter the accommodation or lodging business. More detailed information can be put in a text value. */
    "https://schema.org/petsAllowed"?: SchemaValue<Boolean | Text, "https://schema.org/petsAllowed">;
}
interface FloorPlanLeaf extends FloorPlanBase {
    "@type": "https://schema.org/FloorPlan";
}
/** A FloorPlan is an explicit representation of a collection of similar accommodations, allowing the provision of common information (room counts, sizes, layout diagrams) and offers for rental or sale. In typical use, some {@link https://schema.org/ApartmentComplex ApartmentComplex} has an {@link https://schema.org/accommodationFloorPlan accommodationFloorPlan} which is a {@link https://schema.org/FloorPlan FloorPlan}. A FloorPlan is always in the context of a particular place, either a larger {@link https://schema.org/ApartmentComplex ApartmentComplex} or a single {@link https://schema.org/Apartment Apartment}. The visual/spatial aspects of a floor plan (i.e. room layout, {@link https://en.wikipedia.org/wiki/Floor_plan see wikipedia}) can be indicated using {@link https://schema.org/image image}. */
export declare type FloorPlan = FloorPlanLeaf;
interface FloristLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/Florist";
}
/** A florist. */
export declare type Florist = FloristLeaf | string;
interface FMRadioChannelLeaf extends BroadcastChannelBase {
    "@type": "https://schema.org/FMRadioChannel";
}
/** A radio channel that uses FM. */
export declare type FMRadioChannel = FMRadioChannelLeaf;
interface FollowActionBase extends ActionBase {
    /** A sub property of object. The person or organization being followed. */
    "https://schema.org/followee"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/followee">;
}
interface FollowActionLeaf extends FollowActionBase {
    "@type": "https://schema.org/FollowAction";
}
/**
 * The act of forming a personal connection with someone/something (object) unidirectionally/asymmetrically to get updates polled from.
 *
 * Related actions:
 * - {@link https://schema.org/BefriendAction BefriendAction}: Unlike BefriendAction, FollowAction implies that the connection is _not_ necessarily reciprocal.
 * - {@link https://schema.org/SubscribeAction SubscribeAction}: Unlike SubscribeAction, FollowAction implies that the follower acts as an active agent constantly/actively polling for updates.
 * - {@link https://schema.org/RegisterAction RegisterAction}: Unlike RegisterAction, FollowAction implies that the agent is interested in continuing receiving updates from the object.
 * - {@link https://schema.org/JoinAction JoinAction}: Unlike JoinAction, FollowAction implies that the agent is interested in getting updates from the object.
 * - {@link https://schema.org/TrackAction TrackAction}: Unlike TrackAction, FollowAction refers to the polling of updates of all aspects of animate objects rather than the location of inanimate objects (e.g. you track a package, but you don't follow it).
 */
export declare type FollowAction = FollowActionLeaf;
interface FoodEstablishmentBase extends LocalBusinessBase {
    /** Indicates whether a FoodEstablishment accepts reservations. Values can be Boolean, an URL at which reservations can be made or (for backwards compatibility) the strings `Yes` or `No`. */
    "https://schema.org/acceptsReservations"?: SchemaValue<Boolean | Text | URL, "https://schema.org/acceptsReservations">;
    /** Either the actual menu as a structured representation, as text, or a URL of the menu. */
    "https://schema.org/hasMenu"?: SchemaValue<Menu | Text | URL | IdReference, "https://schema.org/hasMenu">;
    /**
     * Either the actual menu as a structured representation, as text, or a URL of the menu.
     *
     * @deprecated Consider using https://schema.org/hasMenu instead.
     */
    "https://schema.org/menu"?: SchemaValue<Menu | Text | URL | IdReference, "https://schema.org/menu">;
    /** The cuisine of the restaurant. */
    "https://schema.org/servesCuisine"?: SchemaValue<Text, "https://schema.org/servesCuisine">;
    /** An official rating for a lodging business or food establishment, e.g. from national associations or standards bodies. Use the author property to indicate the rating organization, e.g. as an Organization with name such as (e.g. HOTREC, DEHOGA, WHR, or Hotelstars). */
    "https://schema.org/starRating"?: SchemaValue<Rating | IdReference, "https://schema.org/starRating">;
}
interface FoodEstablishmentLeaf extends FoodEstablishmentBase {
    "@type": "https://schema.org/FoodEstablishment";
}
/** A food-related business. */
export declare type FoodEstablishment = FoodEstablishmentLeaf | Bakery | BarOrPub | Brewery | CafeOrCoffeeShop | Distillery | FastFoodRestaurant | IceCreamShop | Restaurant | Winery | string;
interface FoodEstablishmentReservationBase extends ReservationBase {
    /**
     * The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. e.g. John wrote a book from January to _December_. For media, including audio and video, it's the time offset of the end of a clip within a larger file.
     *
     * Note that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
     */
    "https://schema.org/endTime"?: SchemaValue<DateTime | Time, "https://schema.org/endTime">;
    /** Number of people the reservation should accommodate. */
    "https://schema.org/partySize"?: SchemaValue<Integer | QuantitativeValue | IdReference, "https://schema.org/partySize">;
    /**
     * The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. e.g. John wrote a book from _January_ to December. For media, including audio and video, it's the time offset of the start of a clip within a larger file.
     *
     * Note that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
     */
    "https://schema.org/startTime"?: SchemaValue<DateTime | Time, "https://schema.org/startTime">;
}
interface FoodEstablishmentReservationLeaf extends FoodEstablishmentReservationBase {
    "@type": "https://schema.org/FoodEstablishmentReservation";
}
/**
 * A reservation to dine at a food-related business.
 *
 * Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations.
 */
export declare type FoodEstablishmentReservation = FoodEstablishmentReservationLeaf;
interface FoodEventLeaf extends EventBase {
    "@type": "https://schema.org/FoodEvent";
}
/** Event type: Food event. */
export declare type FoodEvent = FoodEventLeaf;
interface FoodServiceLeaf extends ServiceBase {
    "@type": "https://schema.org/FoodService";
}
/** A food service, like breakfast, lunch, or dinner. */
export declare type FoodService = FoodServiceLeaf;
interface FundingAgencyLeaf extends OrganizationBase {
    "@type": "https://schema.org/FundingAgency";
}
/**
 * A FundingAgency is an organization that implements one or more {@link https://schema.org/FundingScheme FundingScheme}s and manages the granting process (via {@link https://schema.org/Grant Grant}s, typically {@link https://schema.org/MonetaryGrant MonetaryGrant}s). A funding agency is not always required for grant funding, e.g. philanthropic giving, corporate sponsorship etc.
 *
 * Examples of funding agencies include ERC, REA, NIH, Bill and Melinda Gates Foundation...
 */
export declare type FundingAgency = FundingAgencyLeaf | string;
interface FundingSchemeLeaf extends OrganizationBase {
    "@type": "https://schema.org/FundingScheme";
}
/** A FundingScheme combines organizational, project and policy aspects of grant-based funding that sets guidelines, principles and mechanisms to support other kinds of projects and activities. Funding is typically organized via {@link https://schema.org/Grant Grant} funding. Examples of funding schemes: Swiss Priority Programmes (SPPs); EU Framework 7 (FP7); Horizon 2020; the NIH-R01 Grant Program; Wellcome institutional strategic support fund. For large scale public sector funding, the management and administration of grant awards is often handled by other, dedicated, organizations - {@link https://schema.org/FundingAgency FundingAgency}s such as ERC, REA, ... */
export declare type FundingScheme = FundingSchemeLeaf | string;
interface FurnitureStoreLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/FurnitureStore";
}
/** A furniture store. */
export declare type FurnitureStore = FurnitureStoreLeaf | string;
interface GameBase extends CreativeWorkBase {
    /** A piece of data that represents a particular aspect of a fictional character (skill, power, character points, advantage, disadvantage). */
    "https://schema.org/characterAttribute"?: SchemaValue<Thing | IdReference, "https://schema.org/characterAttribute">;
    /** An item is an object within the game world that can be collected by a player or, occasionally, a non-player character. */
    "https://schema.org/gameItem"?: SchemaValue<Thing | IdReference, "https://schema.org/gameItem">;
    /** Real or fictional location of the game (or part of game). */
    "https://schema.org/gameLocation"?: SchemaValue<Place | PostalAddress | URL | IdReference, "https://schema.org/gameLocation">;
    /** Indicate how many people can play this game (minimum, maximum, or range). */
    "https://schema.org/numberOfPlayers"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/numberOfPlayers">;
    /** The task that a player-controlled character, or group of characters may complete in order to gain a reward. */
    "https://schema.org/quest"?: SchemaValue<Thing | IdReference, "https://schema.org/quest">;
}
interface GameLeaf extends GameBase {
    "@type": "https://schema.org/Game";
}
/** The Game type represents things which are games. These are typically rule-governed recreational activities, e.g. role-playing games in which players assume the role of characters in a fictional setting. */
export declare type Game = GameLeaf | VideoGame;
interface GamePlayModeLeaf extends EnumerationBase {
    "@type": "https://schema.org/GamePlayMode";
}
/** Indicates whether this game is multi-player, co-op or single-player. */
export declare type GamePlayMode = "https://schema.org/CoOp" | "https://schema.org/MultiPlayer" | "https://schema.org/SinglePlayer" | GamePlayModeLeaf;
interface GameServerBase extends ThingBase {
    /** Video game which is played on this server. */
    "https://schema.org/game"?: SchemaValue<VideoGame | IdReference, "https://schema.org/game">;
    /** Number of players on the server. */
    "https://schema.org/playersOnline"?: SchemaValue<Integer, "https://schema.org/playersOnline">;
    /** Status of a game server. */
    "https://schema.org/serverStatus"?: SchemaValue<GameServerStatus | IdReference, "https://schema.org/serverStatus">;
}
interface GameServerLeaf extends GameServerBase {
    "@type": "https://schema.org/GameServer";
}
/** Server that provides game interaction in a multiplayer game. */
export declare type GameServer = GameServerLeaf;
interface GameServerStatusLeaf extends EnumerationBase {
    "@type": "https://schema.org/GameServerStatus";
}
/** Status of a game server. */
export declare type GameServerStatus = "https://schema.org/OfflinePermanently" | "https://schema.org/OfflineTemporarily" | "https://schema.org/Online" | "https://schema.org/OnlineFull" | GameServerStatusLeaf;
interface GardenStoreLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/GardenStore";
}
/** A garden store. */
export declare type GardenStore = GardenStoreLeaf | string;
interface GasStationLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/GasStation";
}
/** A gas station. */
export declare type GasStation = GasStationLeaf | string;
interface GatedResidenceCommunityLeaf extends ResidenceBase {
    "@type": "https://schema.org/GatedResidenceCommunity";
}
/** Residence type: Gated community. */
export declare type GatedResidenceCommunity = GatedResidenceCommunityLeaf | string;
interface GenderTypeLeaf extends EnumerationBase {
    "@type": "https://schema.org/GenderType";
}
/** An enumeration of genders. */
export declare type GenderType = "https://schema.org/Female" | "https://schema.org/Male" | GenderTypeLeaf;
interface GeneBase extends BioChemEntityBase {
    /** Another gene which is a variation of this one. */
    "https://schema.org/alternativeOf"?: SchemaValue<Gene | IdReference, "https://schema.org/alternativeOf">;
    /** Another BioChemEntity encoded by this one. */
    "https://schema.org/encodesBioChemEntity"?: SchemaValue<BioChemEntity | IdReference, "https://schema.org/encodesBioChemEntity">;
    /** Tissue, organ, biological sample, etc in which activity of this gene has been observed experimentally. For example brain, digestive system. */
    "https://schema.org/expressedIn"?: SchemaValue<AnatomicalStructure | AnatomicalSystem | BioChemEntity | DefinedTerm | IdReference, "https://schema.org/expressedIn">;
    /** A symbolic representation of a BioChemEnity. For example, a nucleotide sequence of a Gene or an amino acid sequence of a Protein. */
    "https://schema.org/hasBioPolymerSequence"?: SchemaValue<Text, "https://schema.org/hasBioPolymerSequence">;
}
interface GeneLeaf extends GeneBase {
    "@type": "https://schema.org/Gene";
}
/** A discrete unit of inheritance which affects one or more biological traits (Source: {@link https://en.wikipedia.org/wiki/Gene https://en.wikipedia.org/wiki/Gene}). Examples include FOXP2 (Forkhead box protein P2), SCARNA21 (small Cajal body-specific RNA 21), A- (agouti genotype). */
export declare type Gene = GeneLeaf;
interface GeneralContractorLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/GeneralContractor";
}
/** A general contractor. */
export declare type GeneralContractor = GeneralContractorLeaf | string;
interface GeoCircleBase extends GeoShapeBase {
    /** Indicates the GeoCoordinates at the centre of a GeoShape e.g. GeoCircle. */
    "https://schema.org/geoMidpoint"?: SchemaValue<GeoCoordinates | IdReference, "https://schema.org/geoMidpoint">;
    /** Indicates the approximate radius of a GeoCircle (metres unless indicated otherwise via Distance notation). */
    "https://schema.org/geoRadius"?: SchemaValue<Distance | Number | Text | IdReference, "https://schema.org/geoRadius">;
}
interface GeoCircleLeaf extends GeoCircleBase {
    "@type": "https://schema.org/GeoCircle";
}
/** A GeoCircle is a GeoShape representing a circular geographic area. As it is a GeoShape it provides the simple textual property 'circle', but also allows the combination of postalCode alongside geoRadius. The center of the circle can be indicated via the 'geoMidpoint' property, or more approximately using 'address', 'postalCode'. */
export declare type GeoCircle = GeoCircleLeaf;
interface GeoCoordinatesBase extends ThingBase {
    /** Physical address of the item. */
    "https://schema.org/address"?: SchemaValue<PostalAddress | Text | IdReference, "https://schema.org/address">;
    /** The country. For example, USA. You can also provide the two-letter {@link http://en.wikipedia.org/wiki/ISO_3166-1 ISO 3166-1 alpha-2 country code}. */
    "https://schema.org/addressCountry"?: SchemaValue<Country | Text | IdReference, "https://schema.org/addressCountry">;
    /** The elevation of a location ({@link https://en.wikipedia.org/wiki/World_Geodetic_System WGS 84}). Values may be of the form 'NUMBER UNIT_OF_MEASUREMENT' (e.g., '1,000 m', '3,200 ft') while numbers alone should be assumed to be a value in meters. */
    "https://schema.org/elevation"?: SchemaValue<Number | Text, "https://schema.org/elevation">;
    /** The latitude of a location. For example `37.42242` ({@link https://en.wikipedia.org/wiki/World_Geodetic_System WGS 84}). */
    "https://schema.org/latitude"?: SchemaValue<Number | Text, "https://schema.org/latitude">;
    /** The longitude of a location. For example `-122.08585` ({@link https://en.wikipedia.org/wiki/World_Geodetic_System WGS 84}). */
    "https://schema.org/longitude"?: SchemaValue<Number | Text, "https://schema.org/longitude">;
    /** The postal code. For example, 94043. */
    "https://schema.org/postalCode"?: SchemaValue<Text, "https://schema.org/postalCode">;
}
interface GeoCoordinatesLeaf extends GeoCoordinatesBase {
    "@type": "https://schema.org/GeoCoordinates";
}
/** The geographic coordinates of a place or event. */
export declare type GeoCoordinates = GeoCoordinatesLeaf;
interface GeoShapeBase extends ThingBase {
    /** Physical address of the item. */
    "https://schema.org/address"?: SchemaValue<PostalAddress | Text | IdReference, "https://schema.org/address">;
    /** The country. For example, USA. You can also provide the two-letter {@link http://en.wikipedia.org/wiki/ISO_3166-1 ISO 3166-1 alpha-2 country code}. */
    "https://schema.org/addressCountry"?: SchemaValue<Country | Text | IdReference, "https://schema.org/addressCountry">;
    /** A box is the area enclosed by the rectangle formed by two points. The first point is the lower corner, the second point is the upper corner. A box is expressed as two points separated by a space character. */
    "https://schema.org/box"?: SchemaValue<Text, "https://schema.org/box">;
    /** A circle is the circular region of a specified radius centered at a specified latitude and longitude. A circle is expressed as a pair followed by a radius in meters. */
    "https://schema.org/circle"?: SchemaValue<Text, "https://schema.org/circle">;
    /** The elevation of a location ({@link https://en.wikipedia.org/wiki/World_Geodetic_System WGS 84}). Values may be of the form 'NUMBER UNIT_OF_MEASUREMENT' (e.g., '1,000 m', '3,200 ft') while numbers alone should be assumed to be a value in meters. */
    "https://schema.org/elevation"?: SchemaValue<Number | Text, "https://schema.org/elevation">;
    /** A line is a point-to-point path consisting of two or more points. A line is expressed as a series of two or more point objects separated by space. */
    "https://schema.org/line"?: SchemaValue<Text, "https://schema.org/line">;
    /** A polygon is the area enclosed by a point-to-point path for which the starting and ending points are the same. A polygon is expressed as a series of four or more space delimited points where the first and final points are identical. */
    "https://schema.org/polygon"?: SchemaValue<Text, "https://schema.org/polygon">;
    /** The postal code. For example, 94043. */
    "https://schema.org/postalCode"?: SchemaValue<Text, "https://schema.org/postalCode">;
}
interface GeoShapeLeaf extends GeoShapeBase {
    "@type": "https://schema.org/GeoShape";
}
/** The geographic shape of a place. A GeoShape can be described using several properties whose values are based on latitude/longitude pairs. Either whitespace or commas can be used to separate latitude and longitude; whitespace should be used when writing a list of several such points. */
export declare type GeoShape = GeoShapeLeaf | GeoCircle;
interface GeospatialGeometryBase extends ThingBase {
    /** Represents a relationship between two geometries (or the places they represent), relating a containing geometry to a contained geometry. "a contains b iff no points of b lie in the exterior of a, and at least one point of the interior of b lies in the interior of a". As defined in {@link https://en.wikipedia.org/wiki/DE-9IM DE-9IM}. */
    "https://schema.org/geoContains"?: SchemaValue<GeospatialGeometry | Place | IdReference, "https://schema.org/geoContains">;
    /** Represents a relationship between two geometries (or the places they represent), relating a geometry to another that covers it. As defined in {@link https://en.wikipedia.org/wiki/DE-9IM DE-9IM}. */
    "https://schema.org/geoCoveredBy"?: SchemaValue<GeospatialGeometry | Place | IdReference, "https://schema.org/geoCoveredBy">;
    /** Represents a relationship between two geometries (or the places they represent), relating a covering geometry to a covered geometry. "Every point of b is a point of (the interior or boundary of) a". As defined in {@link https://en.wikipedia.org/wiki/DE-9IM DE-9IM}. */
    "https://schema.org/geoCovers"?: SchemaValue<GeospatialGeometry | Place | IdReference, "https://schema.org/geoCovers">;
    /** Represents a relationship between two geometries (or the places they represent), relating a geometry to another that crosses it: "a crosses b: they have some but not all interior points in common, and the dimension of the intersection is less than that of at least one of them". As defined in {@link https://en.wikipedia.org/wiki/DE-9IM DE-9IM}. */
    "https://schema.org/geoCrosses"?: SchemaValue<GeospatialGeometry | Place | IdReference, "https://schema.org/geoCrosses">;
    /** Represents spatial relations in which two geometries (or the places they represent) are topologically disjoint: they have no point in common. They form a set of disconnected geometries." (a symmetric relationship, as defined in {@link https://en.wikipedia.org/wiki/DE-9IM DE-9IM}) */
    "https://schema.org/geoDisjoint"?: SchemaValue<GeospatialGeometry | Place | IdReference, "https://schema.org/geoDisjoint">;
    /** Represents spatial relations in which two geometries (or the places they represent) are topologically equal, as defined in {@link https://en.wikipedia.org/wiki/DE-9IM DE-9IM}. "Two geometries are topologically equal if their interiors intersect and no part of the interior or boundary of one geometry intersects the exterior of the other" (a symmetric relationship) */
    "https://schema.org/geoEquals"?: SchemaValue<GeospatialGeometry | Place | IdReference, "https://schema.org/geoEquals">;
    /** Represents spatial relations in which two geometries (or the places they represent) have at least one point in common. As defined in {@link https://en.wikipedia.org/wiki/DE-9IM DE-9IM}. */
    "https://schema.org/geoIntersects"?: SchemaValue<GeospatialGeometry | Place | IdReference, "https://schema.org/geoIntersects">;
    /** Represents a relationship between two geometries (or the places they represent), relating a geometry to another that geospatially overlaps it, i.e. they have some but not all points in common. As defined in {@link https://en.wikipedia.org/wiki/DE-9IM DE-9IM}. */
    "https://schema.org/geoOverlaps"?: SchemaValue<GeospatialGeometry | Place | IdReference, "https://schema.org/geoOverlaps">;
    /** Represents spatial relations in which two geometries (or the places they represent) touch: they have at least one boundary point in common, but no interior points." (a symmetric relationship, as defined in {@link https://en.wikipedia.org/wiki/DE-9IM DE-9IM} ) */
    "https://schema.org/geoTouches"?: SchemaValue<GeospatialGeometry | Place | IdReference, "https://schema.org/geoTouches">;
    /** Represents a relationship between two geometries (or the places they represent), relating a geometry to one that contains it, i.e. it is inside (i.e. within) its interior. As defined in {@link https://en.wikipedia.org/wiki/DE-9IM DE-9IM}. */
    "https://schema.org/geoWithin"?: SchemaValue<GeospatialGeometry | Place | IdReference, "https://schema.org/geoWithin">;
}
interface GeospatialGeometryLeaf extends GeospatialGeometryBase {
    "@type": "https://schema.org/GeospatialGeometry";
}
/** (Eventually to be defined as) a supertype of GeoShape designed to accommodate definitions from Geo-Spatial best practices. */
export declare type GeospatialGeometry = GeospatialGeometryLeaf;
interface GiveActionBase extends TransferActionBase {
    /** A sub property of participant. The participant who is at the receiving end of the action. */
    "https://schema.org/recipient"?: SchemaValue<Audience | ContactPoint | Organization | Person | IdReference, "https://schema.org/recipient">;
}
interface GiveActionLeaf extends GiveActionBase {
    "@type": "https://schema.org/GiveAction";
}
/**
 * The act of transferring ownership of an object to a destination. Reciprocal of TakeAction.
 *
 * Related actions:
 * - {@link https://schema.org/TakeAction TakeAction}: Reciprocal of GiveAction.
 * - {@link https://schema.org/SendAction SendAction}: Unlike SendAction, GiveAction implies that ownership is being transferred (e.g. I may send my laptop to you, but that doesn't mean I'm giving it to you).
 */
export declare type GiveAction = GiveActionLeaf;
interface GolfCourseLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/GolfCourse";
}
/** A golf course. */
export declare type GolfCourse = GolfCourseLeaf | string;
interface GovernmentBenefitsTypeLeaf extends EnumerationBase {
    "@type": "https://schema.org/GovernmentBenefitsType";
}
/** GovernmentBenefitsType enumerates several kinds of government benefits to support the COVID-19 situation. Note that this structure may not capture all benefits offered. */
export declare type GovernmentBenefitsType = "https://schema.org/BasicIncome" | "https://schema.org/BusinessSupport" | "https://schema.org/DisabilitySupport" | "https://schema.org/HealthCare" | "https://schema.org/OneTimePayments" | "https://schema.org/PaidLeave" | "https://schema.org/ParentalSupport" | "https://schema.org/UnemploymentSupport" | GovernmentBenefitsTypeLeaf;
interface GovernmentBuildingLeaf extends CivicStructureBase {
    "@type": "https://schema.org/GovernmentBuilding";
}
/** A government building. */
export declare type GovernmentBuilding = GovernmentBuildingLeaf | CityHall | Courthouse | DefenceEstablishment | Embassy | LegislativeBuilding | string;
interface GovernmentOfficeLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/GovernmentOffice";
}
/** A government office—for example, an IRS or DMV office. */
export declare type GovernmentOffice = GovernmentOfficeLeaf | PostOffice | string;
interface GovernmentOrganizationLeaf extends OrganizationBase {
    "@type": "https://schema.org/GovernmentOrganization";
}
/** A governmental organization or agency. */
export declare type GovernmentOrganization = GovernmentOrganizationLeaf | string;
interface GovernmentPermitLeaf extends PermitBase {
    "@type": "https://schema.org/GovernmentPermit";
}
/** A permit issued by a government agency. */
export declare type GovernmentPermit = GovernmentPermitLeaf;
interface GovernmentServiceBase extends ServiceBase {
    /** Indicates a legal jurisdiction, e.g. of some legislation, or where some government service is based. */
    "https://schema.org/jurisdiction"?: SchemaValue<AdministrativeArea | Text | IdReference, "https://schema.org/jurisdiction">;
    /** The operating organization, if different from the provider. This enables the representation of services that are provided by an organization, but operated by another organization like a subcontractor. */
    "https://schema.org/serviceOperator"?: SchemaValue<Organization | IdReference, "https://schema.org/serviceOperator">;
}
interface GovernmentServiceLeaf extends GovernmentServiceBase {
    "@type": "https://schema.org/GovernmentService";
}
/** A service provided by a government organization, e.g. food stamps, veterans benefits, etc. */
export declare type GovernmentService = GovernmentServiceLeaf;
interface GrantBase extends ThingBase {
    /** Indicates an item funded or sponsored through a {@link https://schema.org/Grant Grant}. */
    "https://schema.org/fundedItem"?: SchemaValue<Thing | IdReference, "https://schema.org/fundedItem">;
    /** A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event. */
    "https://schema.org/sponsor"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/sponsor">;
}
interface GrantLeaf extends GrantBase {
    "@type": "https://schema.org/Grant";
}
/**
 * A grant, typically financial or otherwise quantifiable, of resources. Typically a {@link https://schema.org/funder funder} sponsors some {@link https://schema.org/MonetaryAmount MonetaryAmount} to an {@link https://schema.org/Organization Organization} or {@link https://schema.org/Person Person}, sometimes not necessarily via a dedicated or long-lived {@link https://schema.org/Project Project}, resulting in one or more outputs, or {@link https://schema.org/fundedItem fundedItem}s. For financial sponsorship, indicate the {@link https://schema.org/funder funder} of a {@link https://schema.org/MonetaryGrant MonetaryGrant}. For non-financial support, indicate {@link https://schema.org/sponsor sponsor} of {@link https://schema.org/Grant Grant}s of resources (e.g. office space).
 *
 * Grants support activities directed towards some agreed collective goals, often but not always organized as {@link https://schema.org/Project Project}s. Long-lived projects are sometimes sponsored by a variety of grants over time, but it is also common for a project to be associated with a single grant.
 *
 * The amount of a {@link https://schema.org/Grant Grant} is represented using {@link https://schema.org/amount amount} as a {@link https://schema.org/MonetaryAmount MonetaryAmount}.
 */
export declare type Grant = GrantLeaf | MonetaryGrant;
interface GroceryStoreLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/GroceryStore";
}
/** A grocery store. */
export declare type GroceryStore = GroceryStoreLeaf | string;
interface GuideBase extends CreativeWorkBase {
    /** This Review or Rating is relevant to this part or facet of the itemReviewed. */
    "https://schema.org/reviewAspect"?: SchemaValue<Text, "https://schema.org/reviewAspect">;
}
interface GuideLeaf extends GuideBase {
    "@type": "https://schema.org/Guide";
}
/** {@link https://schema.org/Guide Guide} is a page or article that recommend specific products or services, or aspects of a thing for a user to consider. A {@link https://schema.org/Guide Guide} may represent a Buying Guide and detail aspects of products or services for a user to consider. A {@link https://schema.org/Guide Guide} may represent a Product Guide and recommend specific products or services. A {@link https://schema.org/Guide Guide} may represent a Ranked List and recommend specific products or services with ranking. */
export declare type Guide = GuideLeaf;
interface HackathonLeaf extends EventBase {
    "@type": "https://schema.org/Hackathon";
}
/** A {@link https://en.wikipedia.org/wiki/Hackathon hackathon} event. */
export declare type Hackathon = HackathonLeaf;
interface HairSalonLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/HairSalon";
}
/** A hair salon. */
export declare type HairSalon = HairSalonLeaf | string;
interface HardwareStoreLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/HardwareStore";
}
/** A hardware store. */
export declare type HardwareStore = HardwareStoreLeaf | string;
interface HealthAndBeautyBusinessLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/HealthAndBeautyBusiness";
}
/** Health and beauty. */
export declare type HealthAndBeautyBusiness = HealthAndBeautyBusinessLeaf | BeautySalon | DaySpa | HairSalon | HealthClub | NailSalon | TattooParlor | string;
interface HealthAspectEnumerationLeaf extends EnumerationBase {
    "@type": "https://schema.org/HealthAspectEnumeration";
}
/** HealthAspectEnumeration enumerates several aspects of health content online, each of which might be described using {@link https://schema.org/hasHealthAspect hasHealthAspect} and {@link https://schema.org/HealthTopicContent HealthTopicContent}. */
export declare type HealthAspectEnumeration = "https://schema.org/AllergiesHealthAspect" | "https://schema.org/BenefitsHealthAspect" | "https://schema.org/CausesHealthAspect" | "https://schema.org/ContagiousnessHealthAspect" | "https://schema.org/EffectivenessHealthAspect" | "https://schema.org/GettingAccessHealthAspect" | "https://schema.org/HowItWorksHealthAspect" | "https://schema.org/HowOrWhereHealthAspect" | "https://schema.org/IngredientsHealthAspect" | "https://schema.org/LivingWithHealthAspect" | "https://schema.org/MayTreatHealthAspect" | "https://schema.org/MisconceptionsHealthAspect" | "https://schema.org/OverviewHealthAspect" | "https://schema.org/PatientExperienceHealthAspect" | "https://schema.org/PregnancyHealthAspect" | "https://schema.org/PreventionHealthAspect" | "https://schema.org/PrognosisHealthAspect" | "https://schema.org/RelatedTopicsHealthAspect" | "https://schema.org/RisksOrComplicationsHealthAspect" | "https://schema.org/SafetyHealthAspect" | "https://schema.org/ScreeningHealthAspect" | "https://schema.org/SeeDoctorHealthAspect" | "https://schema.org/SelfCareHealthAspect" | "https://schema.org/SideEffectsHealthAspect" | "https://schema.org/StagesHealthAspect" | "https://schema.org/SymptomsHealthAspect" | "https://schema.org/TreatmentsHealthAspect" | "https://schema.org/TypesHealthAspect" | "https://schema.org/UsageOrScheduleHealthAspect" | HealthAspectEnumerationLeaf;
interface HealthClubBase extends LocalBusinessBase, LocalBusinessBase {
}
interface HealthClubLeaf extends HealthClubBase {
    "@type": "https://schema.org/HealthClub";
}
/** A health club. */
export declare type HealthClub = HealthClubLeaf | string;
interface HealthInsurancePlanBase extends ThingBase {
    /** The URL that goes directly to the summary of benefits and coverage for the specific standard plan or plan variation. */
    "https://schema.org/benefitsSummaryUrl"?: SchemaValue<URL, "https://schema.org/benefitsSummaryUrl">;
    /** A contact point for a person or organization. */
    "https://schema.org/contactPoint"?: SchemaValue<ContactPoint | IdReference, "https://schema.org/contactPoint">;
    /** TODO. */
    "https://schema.org/healthPlanDrugOption"?: SchemaValue<Text, "https://schema.org/healthPlanDrugOption">;
    /** The tier(s) of drugs offered by this formulary or insurance plan. */
    "https://schema.org/healthPlanDrugTier"?: SchemaValue<Text, "https://schema.org/healthPlanDrugTier">;
    /** The 14-character, HIOS-generated Plan ID number. (Plan IDs must be unique, even across different markets.) */
    "https://schema.org/healthPlanId"?: SchemaValue<Text, "https://schema.org/healthPlanId">;
    /** The URL that goes directly to the plan brochure for the specific standard plan or plan variation. */
    "https://schema.org/healthPlanMarketingUrl"?: SchemaValue<URL, "https://schema.org/healthPlanMarketingUrl">;
    /** Formularies covered by this plan. */
    "https://schema.org/includesHealthPlanFormulary"?: SchemaValue<HealthPlanFormulary | IdReference, "https://schema.org/includesHealthPlanFormulary">;
    /** Networks covered by this plan. */
    "https://schema.org/includesHealthPlanNetwork"?: SchemaValue<HealthPlanNetwork | IdReference, "https://schema.org/includesHealthPlanNetwork">;
    /** The standard for interpreting thePlan ID. The preferred is "HIOS". See the Centers for Medicare & Medicaid Services for more details. */
    "https://schema.org/usesHealthPlanIdStandard"?: SchemaValue<Text | URL, "https://schema.org/usesHealthPlanIdStandard">;
}
interface HealthInsurancePlanLeaf extends HealthInsurancePlanBase {
    "@type": "https://schema.org/HealthInsurancePlan";
}
/** A US-style health insurance plan, including PPOs, EPOs, and HMOs. */
export declare type HealthInsurancePlan = HealthInsurancePlanLeaf;
interface HealthPlanCostSharingSpecificationBase extends ThingBase {
    /** Whether the coinsurance applies before or after deductible, etc. TODO: Is this a closed set? */
    "https://schema.org/healthPlanCoinsuranceOption"?: SchemaValue<Text, "https://schema.org/healthPlanCoinsuranceOption">;
    /** Whether The rate of coinsurance expressed as a number between 0.0 and 1.0. */
    "https://schema.org/healthPlanCoinsuranceRate"?: SchemaValue<Number, "https://schema.org/healthPlanCoinsuranceRate">;
    /** Whether The copay amount. */
    "https://schema.org/healthPlanCopay"?: SchemaValue<PriceSpecification | IdReference, "https://schema.org/healthPlanCopay">;
    /** Whether the copay is before or after deductible, etc. TODO: Is this a closed set? */
    "https://schema.org/healthPlanCopayOption"?: SchemaValue<Text, "https://schema.org/healthPlanCopayOption">;
    /** The category or type of pharmacy associated with this cost sharing. */
    "https://schema.org/healthPlanPharmacyCategory"?: SchemaValue<Text, "https://schema.org/healthPlanPharmacyCategory">;
}
interface HealthPlanCostSharingSpecificationLeaf extends HealthPlanCostSharingSpecificationBase {
    "@type": "https://schema.org/HealthPlanCostSharingSpecification";
}
/** A description of costs to the patient under a given network or formulary. */
export declare type HealthPlanCostSharingSpecification = HealthPlanCostSharingSpecificationLeaf;
interface HealthPlanFormularyBase extends ThingBase {
    /** Whether The costs to the patient for services under this network or formulary. */
    "https://schema.org/healthPlanCostSharing"?: SchemaValue<Boolean, "https://schema.org/healthPlanCostSharing">;
    /** The tier(s) of drugs offered by this formulary or insurance plan. */
    "https://schema.org/healthPlanDrugTier"?: SchemaValue<Text, "https://schema.org/healthPlanDrugTier">;
    /** Whether prescriptions can be delivered by mail. */
    "https://schema.org/offersPrescriptionByMail"?: SchemaValue<Boolean, "https://schema.org/offersPrescriptionByMail">;
}
interface HealthPlanFormularyLeaf extends HealthPlanFormularyBase {
    "@type": "https://schema.org/HealthPlanFormulary";
}
/** For a given health insurance plan, the specification for costs and coverage of prescription drugs. */
export declare type HealthPlanFormulary = HealthPlanFormularyLeaf;
interface HealthPlanNetworkBase extends ThingBase {
    /** Whether The costs to the patient for services under this network or formulary. */
    "https://schema.org/healthPlanCostSharing"?: SchemaValue<Boolean, "https://schema.org/healthPlanCostSharing">;
    /** Name or unique ID of network. (Networks are often reused across different insurance plans). */
    "https://schema.org/healthPlanNetworkId"?: SchemaValue<Text, "https://schema.org/healthPlanNetworkId">;
    /** The tier(s) for this network. */
    "https://schema.org/healthPlanNetworkTier"?: SchemaValue<Text, "https://schema.org/healthPlanNetworkTier">;
}
interface HealthPlanNetworkLeaf extends HealthPlanNetworkBase {
    "@type": "https://schema.org/HealthPlanNetwork";
}
/** A US-style health insurance plan network. */
export declare type HealthPlanNetwork = HealthPlanNetworkLeaf;
interface HealthTopicContentBase extends CreativeWorkBase {
    /** Indicates the aspect or aspects specifically addressed in some {@link https://schema.org/HealthTopicContent HealthTopicContent}. For example, that the content is an overview, or that it talks about treatment, self-care, treatments or their side-effects. */
    "https://schema.org/hasHealthAspect"?: SchemaValue<HealthAspectEnumeration | IdReference, "https://schema.org/hasHealthAspect">;
}
interface HealthTopicContentLeaf extends HealthTopicContentBase {
    "@type": "https://schema.org/HealthTopicContent";
}
/** {@link https://schema.org/HealthTopicContent HealthTopicContent} is {@link https://schema.org/WebContent WebContent} that is about some aspect of a health topic, e.g. a condition, its symptoms or treatments. Such content may be comprised of several parts or sections and use different types of media. Multiple instances of {@link https://schema.org/WebContent WebContent} (and hence {@link https://schema.org/HealthTopicContent HealthTopicContent}) can be related using {@link https://schema.org/hasPart hasPart} / {@link https://schema.org/isPartOf isPartOf} where there is some kind of content hierarchy, and their content described with {@link https://schema.org/about about} and {@link https://schema.org/mentions mentions} e.g. building upon the existing {@link https://schema.org/MedicalCondition MedicalCondition} vocabulary. */
export declare type HealthTopicContent = HealthTopicContentLeaf;
interface HighSchoolLeaf extends EducationalOrganizationBase {
    "@type": "https://schema.org/HighSchool";
}
/** A high school. */
export declare type HighSchool = HighSchoolLeaf | string;
interface HinduTempleLeaf extends CivicStructureBase {
    "@type": "https://schema.org/HinduTemple";
}
/** A Hindu temple. */
export declare type HinduTemple = HinduTempleLeaf | string;
interface HobbyShopLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/HobbyShop";
}
/** A store that sells materials useful or necessary for various hobbies. */
export declare type HobbyShop = HobbyShopLeaf | string;
interface HomeAndConstructionBusinessLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/HomeAndConstructionBusiness";
}
/**
 * A construction business.
 *
 * A HomeAndConstructionBusiness is a {@link https://schema.org/LocalBusiness LocalBusiness} that provides services around homes and buildings.
 *
 * As a {@link https://schema.org/LocalBusiness LocalBusiness} it can be described as a {@link https://schema.org/provider provider} of one or more {@link https://schema.org/Service Service}\(s).
 */
export declare type HomeAndConstructionBusiness = HomeAndConstructionBusinessLeaf | Electrician | GeneralContractor | HousePainter | HVACBusiness | Locksmith | MovingCompany | Plumber | RoofingContractor | string;
interface HomeGoodsStoreLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/HomeGoodsStore";
}
/** A home goods store. */
export declare type HomeGoodsStore = HomeGoodsStoreLeaf | string;
interface HospitalBase extends MedicalOrganizationBase, CivicStructureBase, LocalBusinessBase {
    /** A medical service available from this provider. */
    "https://schema.org/availableService"?: SchemaValue<MedicalProcedure | MedicalTest | MedicalTherapy | IdReference, "https://schema.org/availableService">;
    /** Indicates data describing a hospital, e.g. a CDC {@link https://schema.org/CDCPMDRecord CDCPMDRecord} or as some kind of {@link https://schema.org/Dataset Dataset}. */
    "https://schema.org/healthcareReportingData"?: SchemaValue<CDCPMDRecord | Dataset | IdReference, "https://schema.org/healthcareReportingData">;
    /** A medical specialty of the provider. */
    "https://schema.org/medicalSpecialty"?: SchemaValue<MedicalSpecialty | IdReference, "https://schema.org/medicalSpecialty">;
}
interface HospitalLeaf extends HospitalBase {
    "@type": "https://schema.org/Hospital";
}
/** A hospital. */
export declare type Hospital = HospitalLeaf | string;
interface HostelLeaf extends LodgingBusinessBase {
    "@type": "https://schema.org/Hostel";
}
/**
 * A hostel - cheap accommodation, often in shared dormitories.
 *
 * See also the {@link /docs/hotels.html dedicated document on the use of schema.org for marking up hotels and other forms of accommodations}.
 */
export declare type Hostel = HostelLeaf | string;
interface HotelLeaf extends LodgingBusinessBase {
    "@type": "https://schema.org/Hotel";
}
/**
 * A hotel is an establishment that provides lodging paid on a short-term basis (Source: Wikipedia, the free encyclopedia, see http://en.wikipedia.org/wiki/Hotel).
 *
 * See also the {@link /docs/hotels.html dedicated document on the use of schema.org for marking up hotels and other forms of accommodations}.
 */
export declare type Hotel = HotelLeaf | string;
interface HotelRoomBase extends AccommodationBase {
    /** The type of bed or beds included in the accommodation. For the single case of just one bed of a certain type, you use bed directly with a text. If you want to indicate the quantity of a certain kind of bed, use an instance of BedDetails. For more detailed information, use the amenityFeature property. */
    "https://schema.org/bed"?: SchemaValue<BedDetails | BedType | Text | IdReference, "https://schema.org/bed">;
    /** The allowed total occupancy for the accommodation in persons (including infants etc). For individual accommodations, this is not necessarily the legal maximum but defines the permitted usage as per the contractual agreement (e.g. a double room used by a single person). Typical unit code(s): C62 for person */
    "https://schema.org/occupancy"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/occupancy">;
}
interface HotelRoomLeaf extends HotelRoomBase {
    "@type": "https://schema.org/HotelRoom";
}
/**
 * A hotel room is a single room in a hotel.
 *
 * See also the {@link /docs/hotels.html dedicated document on the use of schema.org for marking up hotels and other forms of accommodations}.
 */
export declare type HotelRoom = HotelRoomLeaf | string;
interface HouseBase extends AccommodationBase {
    /** The number of rooms (excluding bathrooms and closets) of the accommodation or lodging business. Typical unit code(s): ROM for room or C62 for no unit. The type of room can be put in the unitText property of the QuantitativeValue. */
    "https://schema.org/numberOfRooms"?: SchemaValue<Number | QuantitativeValue | IdReference, "https://schema.org/numberOfRooms">;
}
interface HouseLeaf extends HouseBase {
    "@type": "https://schema.org/House";
}
/** A house is a building or structure that has the ability to be occupied for habitation by humans or other creatures (Source: Wikipedia, the free encyclopedia, see {@link http://en.wikipedia.org/wiki/House http://en.wikipedia.org/wiki/House}). */
export declare type House = HouseLeaf | SingleFamilyResidence | string;
interface HousePainterLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/HousePainter";
}
/** A house painting service. */
export declare type HousePainter = HousePainterLeaf | string;
interface HowToBase extends CreativeWorkBase {
    /** The estimated cost of the supply or supplies consumed when performing instructions. */
    "https://schema.org/estimatedCost"?: SchemaValue<MonetaryAmount | Text | IdReference, "https://schema.org/estimatedCost">;
    /** The length of time it takes to perform instructions or a direction (not including time to prepare the supplies), in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 duration format}. */
    "https://schema.org/performTime"?: SchemaValue<Duration | IdReference, "https://schema.org/performTime">;
    /** The length of time it takes to prepare the items to be used in instructions or a direction, in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 duration format}. */
    "https://schema.org/prepTime"?: SchemaValue<Duration | IdReference, "https://schema.org/prepTime">;
    /** A single step item (as HowToStep, text, document, video, etc.) or a HowToSection. */
    "https://schema.org/step"?: SchemaValue<CreativeWork | HowToSection | HowToStep | Text | IdReference, "https://schema.org/step">;
    /**
     * A single step item (as HowToStep, text, document, video, etc.) or a HowToSection (originally misnamed 'steps'; 'step' is preferred).
     *
     * @deprecated Consider using https://schema.org/step instead.
     */
    "https://schema.org/steps"?: SchemaValue<CreativeWork | ItemList | Text | IdReference, "https://schema.org/steps">;
    /** A sub-property of instrument. A supply consumed when performing instructions or a direction. */
    "https://schema.org/supply"?: SchemaValue<HowToSupply | Text | IdReference, "https://schema.org/supply">;
    /** A sub property of instrument. An object used (but not consumed) when performing instructions or a direction. */
    "https://schema.org/tool"?: SchemaValue<HowToTool | Text | IdReference, "https://schema.org/tool">;
    /** The total time required to perform instructions or a direction (including time to prepare the supplies), in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 duration format}. */
    "https://schema.org/totalTime"?: SchemaValue<Duration | IdReference, "https://schema.org/totalTime">;
    /** The quantity that results by performing instructions. For example, a paper airplane, 10 personalized candles. */
    "https://schema.org/yield"?: SchemaValue<QuantitativeValue | Text | IdReference, "https://schema.org/yield">;
}
interface HowToLeaf extends HowToBase {
    "@type": "https://schema.org/HowTo";
}
/** Instructions that explain how to achieve a result by performing a sequence of steps. */
export declare type HowTo = HowToLeaf | Recipe;
interface HowToDirectionBase extends ListItemBase, CreativeWorkBase {
    /** A media object representing the circumstances after performing this direction. */
    "https://schema.org/afterMedia"?: SchemaValue<MediaObject | URL | IdReference, "https://schema.org/afterMedia">;
    /** A media object representing the circumstances before performing this direction. */
    "https://schema.org/beforeMedia"?: SchemaValue<MediaObject | URL | IdReference, "https://schema.org/beforeMedia">;
    /** A media object representing the circumstances while performing this direction. */
    "https://schema.org/duringMedia"?: SchemaValue<MediaObject | URL | IdReference, "https://schema.org/duringMedia">;
    /** The length of time it takes to perform instructions or a direction (not including time to prepare the supplies), in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 duration format}. */
    "https://schema.org/performTime"?: SchemaValue<Duration | IdReference, "https://schema.org/performTime">;
    /** The length of time it takes to prepare the items to be used in instructions or a direction, in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 duration format}. */
    "https://schema.org/prepTime"?: SchemaValue<Duration | IdReference, "https://schema.org/prepTime">;
    /** A sub-property of instrument. A supply consumed when performing instructions or a direction. */
    "https://schema.org/supply"?: SchemaValue<HowToSupply | Text | IdReference, "https://schema.org/supply">;
    /** A sub property of instrument. An object used (but not consumed) when performing instructions or a direction. */
    "https://schema.org/tool"?: SchemaValue<HowToTool | Text | IdReference, "https://schema.org/tool">;
    /** The total time required to perform instructions or a direction (including time to prepare the supplies), in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 duration format}. */
    "https://schema.org/totalTime"?: SchemaValue<Duration | IdReference, "https://schema.org/totalTime">;
}
interface HowToDirectionLeaf extends HowToDirectionBase {
    "@type": "https://schema.org/HowToDirection";
}
/** A direction indicating a single action to do in the instructions for how to achieve a result. */
export declare type HowToDirection = HowToDirectionLeaf;
interface HowToItemBase extends ListItemBase {
    /** The required quantity of the item(s). */
    "https://schema.org/requiredQuantity"?: SchemaValue<Number | QuantitativeValue | Text | IdReference, "https://schema.org/requiredQuantity">;
}
interface HowToItemLeaf extends HowToItemBase {
    "@type": "https://schema.org/HowToItem";
}
/** An item used as either a tool or supply when performing the instructions for how to to achieve a result. */
export declare type HowToItem = HowToItemLeaf | HowToSupply | HowToTool;
interface HowToSectionBase extends ItemListBase, ListItemBase, CreativeWorkBase {
    /**
     * A single step item (as HowToStep, text, document, video, etc.) or a HowToSection (originally misnamed 'steps'; 'step' is preferred).
     *
     * @deprecated Consider using https://schema.org/step instead.
     */
    "https://schema.org/steps"?: SchemaValue<CreativeWork | ItemList | Text | IdReference, "https://schema.org/steps">;
}
interface HowToSectionLeaf extends HowToSectionBase {
    "@type": "https://schema.org/HowToSection";
}
/** A sub-grouping of steps in the instructions for how to achieve a result (e.g. steps for making a pie crust within a pie recipe). */
export declare type HowToSection = HowToSectionLeaf;
interface HowToStepBase extends ListItemBase, CreativeWorkBase, ItemListBase {
}
interface HowToStepLeaf extends HowToStepBase {
    "@type": "https://schema.org/HowToStep";
}
/** A step in the instructions for how to achieve a result. It is an ordered list with HowToDirection and/or HowToTip items. */
export declare type HowToStep = HowToStepLeaf;
interface HowToSupplyBase extends HowToItemBase {
    /** The estimated cost of the supply or supplies consumed when performing instructions. */
    "https://schema.org/estimatedCost"?: SchemaValue<MonetaryAmount | Text | IdReference, "https://schema.org/estimatedCost">;
}
interface HowToSupplyLeaf extends HowToSupplyBase {
    "@type": "https://schema.org/HowToSupply";
}
/** A supply consumed when performing the instructions for how to achieve a result. */
export declare type HowToSupply = HowToSupplyLeaf;
interface HowToTipBase extends CreativeWorkBase, ListItemBase {
}
interface HowToTipLeaf extends HowToTipBase {
    "@type": "https://schema.org/HowToTip";
}
/** An explanation in the instructions for how to achieve a result. It provides supplementary information about a technique, supply, author's preference, etc. It can explain what could be done, or what should not be done, but doesn't specify what should be done (see HowToDirection). */
export declare type HowToTip = HowToTipLeaf;
interface HowToToolLeaf extends HowToItemBase {
    "@type": "https://schema.org/HowToTool";
}
/** A tool used (but not consumed) when performing instructions for how to achieve a result. */
export declare type HowToTool = HowToToolLeaf;
interface HVACBusinessLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/HVACBusiness";
}
/** A business that provide Heating, Ventilation and Air Conditioning services. */
export declare type HVACBusiness = HVACBusinessLeaf | string;
interface HyperTocBase extends CreativeWorkBase {
    /** A media object that encodes this CreativeWork. This property is a synonym for encoding. */
    "https://schema.org/associatedMedia"?: SchemaValue<MediaObject | IdReference, "https://schema.org/associatedMedia">;
    /** Indicates a {@link https://schema.org/HyperTocEntry HyperTocEntry} in a {@link https://schema.org/HyperToc HyperToc}. */
    "https://schema.org/tocEntry"?: SchemaValue<HyperTocEntry | IdReference, "https://schema.org/tocEntry">;
}
interface HyperTocLeaf extends HyperTocBase {
    "@type": "https://schema.org/HyperToc";
}
/** A HyperToc represents a hypertext table of contents for complex media objects, such as {@link https://schema.org/VideoObject VideoObject}, {@link https://schema.org/AudioObject AudioObject}. Items in the table of contents are indicated using the {@link https://schema.org/tocEntry tocEntry} property, and typed {@link https://schema.org/HyperTocEntry HyperTocEntry}. For cases where the same larger work is split into multiple files, {@link https://schema.org/associatedMedia associatedMedia} can be used on individual {@link https://schema.org/HyperTocEntry HyperTocEntry} items. */
export declare type HyperToc = HyperTocLeaf;
interface HyperTocEntryBase extends CreativeWorkBase {
    /** A media object that encodes this CreativeWork. This property is a synonym for encoding. */
    "https://schema.org/associatedMedia"?: SchemaValue<MediaObject | IdReference, "https://schema.org/associatedMedia">;
    /** A {@link https://schema.org/HyperTocEntry HyperTocEntry} can have a {@link https://schema.org/tocContinuation tocContinuation} indicated, which is another {@link https://schema.org/HyperTocEntry HyperTocEntry} that would be the default next item to play or render. */
    "https://schema.org/tocContinuation"?: SchemaValue<HyperTocEntry | IdReference, "https://schema.org/tocContinuation">;
    /** Text of an utterances (spoken words, lyrics etc.) that occurs at a certain section of a media object, represented as a {@link https://schema.org/HyperTocEntry HyperTocEntry}. */
    "https://schema.org/utterances"?: SchemaValue<Text, "https://schema.org/utterances">;
}
interface HyperTocEntryLeaf extends HyperTocEntryBase {
    "@type": "https://schema.org/HyperTocEntry";
}
/** A HyperToEntry is an item within a {@link https://schema.org/HyperToc HyperToc}, which represents a hypertext table of contents for complex media objects, such as {@link https://schema.org/VideoObject VideoObject}, {@link https://schema.org/AudioObject AudioObject}. The media object itself is indicated using {@link https://schema.org/associatedMedia associatedMedia}. Each section of interest within that content can be described with a {@link https://schema.org/HyperTocEntry HyperTocEntry}, with associated {@link https://schema.org/startOffset startOffset} and {@link https://schema.org/endOffset endOffset}. When several entries are all from the same file, {@link https://schema.org/associatedMedia associatedMedia} is used on the overarching {@link https://schema.org/HyperTocEntry HyperTocEntry}; if the content has been split into multiple files, they can be referenced using {@link https://schema.org/associatedMedia associatedMedia} on each {@link https://schema.org/HyperTocEntry HyperTocEntry}. */
export declare type HyperTocEntry = HyperTocEntryLeaf;
interface IceCreamShopLeaf extends FoodEstablishmentBase {
    "@type": "https://schema.org/IceCreamShop";
}
/** An ice cream shop. */
export declare type IceCreamShop = IceCreamShopLeaf | string;
interface IgnoreActionLeaf extends ActionBase {
    "@type": "https://schema.org/IgnoreAction";
}
/** The act of intentionally disregarding the object. An agent ignores an object. */
export declare type IgnoreAction = IgnoreActionLeaf;
interface ImageGalleryLeaf extends WebPageBase {
    "@type": "https://schema.org/ImageGallery";
}
/** Web page type: Image gallery page. */
export declare type ImageGallery = ImageGalleryLeaf;
interface ImageObjectBase extends MediaObjectBase {
    /** The caption for this object. For downloadable machine formats (closed caption, subtitles etc.) use MediaObject and indicate the {@link https://schema.org/encodingFormat encodingFormat}. */
    "https://schema.org/caption"?: SchemaValue<MediaObject | Text | IdReference, "https://schema.org/caption">;
    /** Represents textual captioning from a {@link https://schema.org/MediaObject MediaObject}, e.g. text of a 'meme'. */
    "https://schema.org/embeddedTextCaption"?: SchemaValue<Text, "https://schema.org/embeddedTextCaption">;
    /** exif data for this object. */
    "https://schema.org/exifData"?: SchemaValue<PropertyValue | Text | IdReference, "https://schema.org/exifData">;
    /** Indicates whether this image is representative of the content of the page. */
    "https://schema.org/representativeOfPage"?: SchemaValue<Boolean, "https://schema.org/representativeOfPage">;
    /** Thumbnail image for an image or video. */
    "https://schema.org/thumbnail"?: SchemaValue<ImageObject | IdReference, "https://schema.org/thumbnail">;
}
interface ImageObjectLeaf extends ImageObjectBase {
    "@type": "https://schema.org/ImageObject";
}
/** An image file. */
export declare type ImageObject = ImageObjectLeaf | Barcode | ImageObjectSnapshot;
interface ImageObjectSnapshotLeaf extends ImageObjectBase {
    "@type": "https://schema.org/ImageObjectSnapshot";
}
/** A specific and exact (byte-for-byte) version of an {@link https://schema.org/ImageObject ImageObject}. Two byte-for-byte identical files, for the purposes of this type, considered identical. If they have different embedded metadata (e.g. XMP, EXIF) the files will differ. Different external facts about the files, e.g. creator or dateCreated that aren't represented in their actual content, do not affect this notion of identity. */
export declare type ImageObjectSnapshot = ImageObjectSnapshotLeaf;
interface ImagingTestBase extends MedicalTestBase {
    /** Imaging technique used. */
    "https://schema.org/imagingTechnique"?: SchemaValue<MedicalImagingTechnique | IdReference, "https://schema.org/imagingTechnique">;
}
interface ImagingTestLeaf extends ImagingTestBase {
    "@type": "https://schema.org/ImagingTest";
}
/** Any medical imaging modality typically used for diagnostic purposes. */
export declare type ImagingTest = ImagingTestLeaf;
interface IndividualProductBase extends ProductBase {
    /** The serial number or any alphanumeric identifier of a particular product. When attached to an offer, it is a shortcut for the serial number of the product included in the offer. */
    "https://schema.org/serialNumber"?: SchemaValue<Text, "https://schema.org/serialNumber">;
}
interface IndividualProductLeaf extends IndividualProductBase {
    "@type": "https://schema.org/IndividualProduct";
}
/** A single, identifiable product instance (e.g. a laptop with a particular serial number). */
export declare type IndividualProduct = IndividualProductLeaf;
interface InfectiousAgentClassLeaf extends EnumerationBase {
    "@type": "https://schema.org/InfectiousAgentClass";
}
/** Classes of agents or pathogens that transmit infectious diseases. Enumerated type. */
export declare type InfectiousAgentClass = "https://schema.org/Bacteria" | "https://schema.org/Fungus" | "https://schema.org/MulticellularParasite" | "https://schema.org/Prion" | "https://schema.org/Protozoa" | "https://schema.org/Virus" | InfectiousAgentClassLeaf;
interface InfectiousDiseaseBase extends MedicalConditionBase {
    /** The actual infectious agent, such as a specific bacterium. */
    "https://schema.org/infectiousAgent"?: SchemaValue<Text, "https://schema.org/infectiousAgent">;
    /** The class of infectious agent (bacteria, prion, etc.) that causes the disease. */
    "https://schema.org/infectiousAgentClass"?: SchemaValue<InfectiousAgentClass | IdReference, "https://schema.org/infectiousAgentClass">;
    /** How the disease spreads, either as a route or vector, for example 'direct contact', 'Aedes aegypti', etc. */
    "https://schema.org/transmissionMethod"?: SchemaValue<Text, "https://schema.org/transmissionMethod">;
}
interface InfectiousDiseaseLeaf extends InfectiousDiseaseBase {
    "@type": "https://schema.org/InfectiousDisease";
}
/** An infectious disease is a clinically evident human disease resulting from the presence of pathogenic microbial agents, like pathogenic viruses, pathogenic bacteria, fungi, protozoa, multicellular parasites, and prions. To be considered an infectious disease, such pathogens are known to be able to cause this disease. */
export declare type InfectiousDisease = InfectiousDiseaseLeaf;
interface InformActionBase extends CommunicateActionBase {
    /** Upcoming or past event associated with this place, organization, or action. */
    "https://schema.org/event"?: SchemaValue<Event | IdReference, "https://schema.org/event">;
}
interface InformActionLeaf extends InformActionBase {
    "@type": "https://schema.org/InformAction";
}
/** The act of notifying someone of information pertinent to them, with no expectation of a response. */
export declare type InformAction = InformActionLeaf | ConfirmAction | RsvpAction;
interface InsertActionBase extends UpdateActionBase {
    /** A sub property of location. The final location of the object or the agent after the action. */
    "https://schema.org/toLocation"?: SchemaValue<Place | IdReference, "https://schema.org/toLocation">;
}
interface InsertActionLeaf extends InsertActionBase {
    "@type": "https://schema.org/InsertAction";
}
/** The act of adding at a specific location in an ordered collection. */
export declare type InsertAction = InsertActionLeaf | AppendAction | PrependAction;
interface InstallActionLeaf extends ConsumeActionBase {
    "@type": "https://schema.org/InstallAction";
}
/** The act of installing an application. */
export declare type InstallAction = InstallActionLeaf;
interface InsuranceAgencyLeaf extends FinancialServiceBase {
    "@type": "https://schema.org/InsuranceAgency";
}
/** An Insurance agency. */
export declare type InsuranceAgency = InsuranceAgencyLeaf | string;
interface IntangibleLeaf extends ThingBase {
    "@type": "https://schema.org/Intangible";
}
/** A utility class that serves as the umbrella for a number of 'intangible' things such as quantities, structured values, etc. */
export declare type Intangible = IntangibleLeaf | ActionAccessSpecification | AlignmentObject | Audience | BedDetails | Brand | BroadcastChannel | BroadcastFrequencySpecification | Class | ComputerLanguage | DataFeedItem | DefinedTerm | Demand | DigitalDocumentPermission | EducationalOccupationalProgram | EnergyConsumptionDetails | EntryPoint | Enumeration | FloorPlan | GameServer | GeospatialGeometry | Grant | HealthInsurancePlan | HealthPlanCostSharingSpecification | HealthPlanFormulary | HealthPlanNetwork | Invoice | ItemList | JobPosting | Language | ListItem | MediaSubscription | MenuItem | MerchantReturnPolicy | MerchantReturnPolicySeasonalOverride | Observation | Occupation | OccupationalExperienceRequirements | Offer | Order | OrderItem | ParcelDelivery | Permit | ProductReturnPolicy | ProgramMembership | Property | PropertyValueSpecification | Quantity | Rating | Reservation | Role | Schedule | Seat | Series | Service | ServiceChannel | SpeakableSpecification | StatisticalPopulation | StructuredValue | Ticket | Trip | VirtualLocation;
/** Data type: Integer. */
export declare type Integer = number | `${number}`;
interface InteractActionLeaf extends ActionBase {
    "@type": "https://schema.org/InteractAction";
}
/** The act of interacting with another person or organization. */
export declare type InteractAction = InteractActionLeaf | BefriendAction | CommunicateAction | FollowAction | JoinAction | LeaveAction | MarryAction | RegisterAction | SubscribeAction | UnRegisterAction;
interface InteractionCounterBase extends ThingBase {
    /**
     * The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. e.g. John wrote a book from January to _December_. For media, including audio and video, it's the time offset of the end of a clip within a larger file.
     *
     * Note that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
     */
    "https://schema.org/endTime"?: SchemaValue<DateTime | Time, "https://schema.org/endTime">;
    /** The WebSite or SoftwareApplication where the interactions took place. */
    "https://schema.org/interactionService"?: SchemaValue<SoftwareApplication | WebSite | IdReference, "https://schema.org/interactionService">;
    /** The Action representing the type of interaction. For up votes, +1s, etc. use {@link https://schema.org/LikeAction LikeAction}. For down votes use {@link https://schema.org/DislikeAction DislikeAction}. Otherwise, use the most specific Action. */
    "https://schema.org/interactionType"?: SchemaValue<Action | IdReference, "https://schema.org/interactionType">;
    /** The location of, for example, where an event is happening, where an organization is located, or where an action takes place. */
    "https://schema.org/location"?: SchemaValue<Place | PostalAddress | Text | VirtualLocation | IdReference, "https://schema.org/location">;
    /**
     * The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. e.g. John wrote a book from _January_ to December. For media, including audio and video, it's the time offset of the start of a clip within a larger file.
     *
     * Note that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
     */
    "https://schema.org/startTime"?: SchemaValue<DateTime | Time, "https://schema.org/startTime">;
    /** The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. */
    "https://schema.org/userInteractionCount"?: SchemaValue<Integer, "https://schema.org/userInteractionCount">;
}
interface InteractionCounterLeaf extends InteractionCounterBase {
    "@type": "https://schema.org/InteractionCounter";
}
/** A summary of how users have interacted with this CreativeWork. In most cases, authors will use a subtype to specify the specific type of interaction. */
export declare type InteractionCounter = InteractionCounterLeaf;
interface InternetCafeLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/InternetCafe";
}
/** An internet cafe. */
export declare type InternetCafe = InternetCafeLeaf | string;
interface InvestmentFundLeaf extends InvestmentOrDepositBase {
    "@type": "https://schema.org/InvestmentFund";
}
/** A company or fund that gathers capital from a number of investors to create a pool of money that is then re-invested into stocks, bonds and other assets. */
export declare type InvestmentFund = InvestmentFundLeaf;
interface InvestmentOrDepositBase extends FinancialProductBase {
    /** The amount of money. */
    "https://schema.org/amount"?: SchemaValue<MonetaryAmount | Number | IdReference, "https://schema.org/amount">;
}
interface InvestmentOrDepositLeaf extends InvestmentOrDepositBase {
    "@type": "https://schema.org/InvestmentOrDeposit";
}
/** A type of financial product that typically requires the client to transfer funds to a financial service in return for potential beneficial financial return. */
export declare type InvestmentOrDeposit = InvestmentOrDepositLeaf | BrokerageAccount | DepositAccount | InvestmentFund;
interface InviteActionBase extends CommunicateActionBase {
    /** Upcoming or past event associated with this place, organization, or action. */
    "https://schema.org/event"?: SchemaValue<Event | IdReference, "https://schema.org/event">;
}
interface InviteActionLeaf extends InviteActionBase {
    "@type": "https://schema.org/InviteAction";
}
/** The act of asking someone to attend an event. Reciprocal of RsvpAction. */
export declare type InviteAction = InviteActionLeaf;
interface InvoiceBase extends ThingBase {
    /** The identifier for the account the payment will be applied to. */
    "https://schema.org/accountId"?: SchemaValue<Text, "https://schema.org/accountId">;
    /** The time interval used to compute the invoice. */
    "https://schema.org/billingPeriod"?: SchemaValue<Duration | IdReference, "https://schema.org/billingPeriod">;
    /** An entity that arranges for an exchange between a buyer and a seller. In most cases a broker never acquires or releases ownership of a product or service involved in an exchange. If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred. */
    "https://schema.org/broker"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/broker">;
    /** A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy. */
    "https://schema.org/category"?: SchemaValue<PhysicalActivityCategory | Text | Thing | URL | IdReference, "https://schema.org/category">;
    /** A number that confirms the given order or payment has been received. */
    "https://schema.org/confirmationNumber"?: SchemaValue<Text, "https://schema.org/confirmationNumber">;
    /** Party placing the order or paying the invoice. */
    "https://schema.org/customer"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/customer">;
    /** The minimum payment required at this time. */
    "https://schema.org/minimumPaymentDue"?: SchemaValue<MonetaryAmount | PriceSpecification | IdReference, "https://schema.org/minimumPaymentDue">;
    /**
     * The date that payment is due.
     *
     * @deprecated Consider using https://schema.org/paymentDueDate instead.
     */
    "https://schema.org/paymentDue"?: SchemaValue<DateTime, "https://schema.org/paymentDue">;
    /** The date that payment is due. */
    "https://schema.org/paymentDueDate"?: SchemaValue<Date | DateTime, "https://schema.org/paymentDueDate">;
    /** The name of the credit card or other method of payment for the order. */
    "https://schema.org/paymentMethod"?: SchemaValue<PaymentMethod | IdReference, "https://schema.org/paymentMethod">;
    /** An identifier for the method of payment used (e.g. the last 4 digits of the credit card). */
    "https://schema.org/paymentMethodId"?: SchemaValue<Text, "https://schema.org/paymentMethodId">;
    /** The status of payment; whether the invoice has been paid or not. */
    "https://schema.org/paymentStatus"?: SchemaValue<PaymentStatusType | Text | IdReference, "https://schema.org/paymentStatus">;
    /** The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller. */
    "https://schema.org/provider"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/provider">;
    /** The Order(s) related to this Invoice. One or more Orders may be combined into a single Invoice. */
    "https://schema.org/referencesOrder"?: SchemaValue<Order | IdReference, "https://schema.org/referencesOrder">;
    /** The date the invoice is scheduled to be paid. */
    "https://schema.org/scheduledPaymentDate"?: SchemaValue<Date, "https://schema.org/scheduledPaymentDate">;
    /** The total amount due. */
    "https://schema.org/totalPaymentDue"?: SchemaValue<MonetaryAmount | PriceSpecification | IdReference, "https://schema.org/totalPaymentDue">;
}
interface InvoiceLeaf extends InvoiceBase {
    "@type": "https://schema.org/Invoice";
}
/** A statement of the money due for goods or services; a bill. */
export declare type Invoice = InvoiceLeaf;
interface ItemAvailabilityLeaf extends EnumerationBase {
    "@type": "https://schema.org/ItemAvailability";
}
/** A list of possible product availability options. */
export declare type ItemAvailability = "https://schema.org/BackOrder" | "https://schema.org/Discontinued" | "https://schema.org/InStock" | "https://schema.org/InStoreOnly" | "https://schema.org/LimitedAvailability" | "https://schema.org/OnlineOnly" | "https://schema.org/OutOfStock" | "https://schema.org/PreOrder" | "https://schema.org/PreSale" | "https://schema.org/SoldOut" | ItemAvailabilityLeaf;
interface ItemListBase extends ThingBase {
    /**
     * For itemListElement values, you can use simple strings (e.g. "Peter", "Paul", "Mary"), existing entities, or use ListItem.
     *
     * Text values are best if the elements in the list are plain strings. Existing entities are best for a simple, unordered list of existing things in your data. ListItem is used with ordered lists when you want to provide additional context about the element in that list or when the same item might be in different places in different lists.
     *
     * Note: The order of elements in your mark-up is not sufficient for indicating the order or elements. Use ListItem with a 'position' property in such cases.
     */
    "https://schema.org/itemListElement"?: SchemaValue<ListItem | Text | Thing | IdReference, "https://schema.org/itemListElement">;
    /** Type of ordering (e.g. Ascending, Descending, Unordered). */
    "https://schema.org/itemListOrder"?: SchemaValue<ItemListOrderType | Text | IdReference, "https://schema.org/itemListOrder">;
    /** The number of items in an ItemList. Note that some descriptions might not fully describe all items in a list (e.g., multi-page pagination); in such cases, the numberOfItems would be for the entire list. */
    "https://schema.org/numberOfItems"?: SchemaValue<Integer, "https://schema.org/numberOfItems">;
}
interface ItemListLeaf extends ItemListBase {
    "@type": "https://schema.org/ItemList";
}
/** A list of items of any sort—for example, Top 10 Movies About Weathermen, or Top 100 Party Songs. Not to be confused with HTML lists, which are often used only for formatting. */
export declare type ItemList = ItemListLeaf | BreadcrumbList | HowToSection | HowToStep | OfferCatalog;
interface ItemListOrderTypeLeaf extends EnumerationBase {
    "@type": "https://schema.org/ItemListOrderType";
}
/** Enumerated for values for itemListOrder for indicating how an ordered ItemList is organized. */
export declare type ItemListOrderType = "https://schema.org/ItemListOrderAscending" | "https://schema.org/ItemListOrderDescending" | "https://schema.org/ItemListUnordered" | ItemListOrderTypeLeaf;
interface ItemPageLeaf extends WebPageBase {
    "@type": "https://schema.org/ItemPage";
}
/** A page devoted to a single item, such as a particular product or hotel. */
export declare type ItemPage = ItemPageLeaf;
interface JewelryStoreLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/JewelryStore";
}
/** A jewelry store. */
export declare type JewelryStore = JewelryStoreLeaf | string;
interface JobPostingBase extends ThingBase {
    /** The location(s) applicants can apply from. This is usually used for telecommuting jobs where the applicant does not need to be in a physical office. Note: This should not be used for citizenship or work visa requirements. */
    "https://schema.org/applicantLocationRequirements"?: SchemaValue<AdministrativeArea | IdReference, "https://schema.org/applicantLocationRequirements">;
    /** Contact details for further information relevant to this job posting. */
    "https://schema.org/applicationContact"?: SchemaValue<ContactPoint | IdReference, "https://schema.org/applicationContact">;
    /** The base salary of the job or of an employee in an EmployeeRole. */
    "https://schema.org/baseSalary"?: SchemaValue<MonetaryAmount | Number | PriceSpecification | IdReference, "https://schema.org/baseSalary">;
    /**
     * Description of benefits associated with the job.
     *
     * @deprecated Consider using https://schema.org/jobBenefits instead.
     */
    "https://schema.org/benefits"?: SchemaValue<Text, "https://schema.org/benefits">;
    /** Publication date of an online listing. */
    "https://schema.org/datePosted"?: SchemaValue<Date | DateTime, "https://schema.org/datePosted">;
    /** Indicates whether an {@link https://schema.org/url url} that is associated with a {@link https://schema.org/JobPosting JobPosting} enables direct application for the job, via the posting website. A job posting is considered to have directApply of {@link https://schema.org/True True} if an application process for the specified job can be directly initiated via the url(s) given (noting that e.g. multiple internet domains might nevertheless be involved at an implementation level). A value of {@link https://schema.org/False False} is appropriate if there is no clear path to applying directly online for the specified job, navigating directly from the JobPosting url(s) supplied. */
    "https://schema.org/directApply"?: SchemaValue<Boolean, "https://schema.org/directApply">;
    /** Educational background needed for the position or Occupation. */
    "https://schema.org/educationRequirements"?: SchemaValue<EducationalOccupationalCredential | Text | IdReference, "https://schema.org/educationRequirements">;
    /** The legal requirements such as citizenship, visa and other documentation required for an applicant to this job. */
    "https://schema.org/eligibilityToWorkRequirement"?: SchemaValue<Text, "https://schema.org/eligibilityToWorkRequirement">;
    /** A description of the employer, career opportunities and work environment for this position. */
    "https://schema.org/employerOverview"?: SchemaValue<Text, "https://schema.org/employerOverview">;
    /** Type of employment (e.g. full-time, part-time, contract, temporary, seasonal, internship). */
    "https://schema.org/employmentType"?: SchemaValue<Text, "https://schema.org/employmentType">;
    /** Indicates the department, unit and/or facility where the employee reports and/or in which the job is to be performed. */
    "https://schema.org/employmentUnit"?: SchemaValue<Organization | IdReference, "https://schema.org/employmentUnit">;
    /** An estimated salary for a job posting or occupation, based on a variety of variables including, but not limited to industry, job title, and location. Estimated salaries are often computed by outside organizations rather than the hiring organization, who may not have committed to the estimated value. */
    "https://schema.org/estimatedSalary"?: SchemaValue<MonetaryAmount | MonetaryAmountDistribution | Number | IdReference, "https://schema.org/estimatedSalary">;
    /** Indicates whether a {@link https://schema.org/JobPosting JobPosting} will accept experience (as indicated by {@link https://schema.org/OccupationalExperienceRequirements OccupationalExperienceRequirements}) in place of its formal educational qualifications (as indicated by {@link https://schema.org/educationRequirements educationRequirements}). If true, indicates that satisfying one of these requirements is sufficient. */
    "https://schema.org/experienceInPlaceOfEducation"?: SchemaValue<Boolean, "https://schema.org/experienceInPlaceOfEducation">;
    /** Description of skills and experience needed for the position or Occupation. */
    "https://schema.org/experienceRequirements"?: SchemaValue<OccupationalExperienceRequirements | Text | IdReference, "https://schema.org/experienceRequirements">;
    /** Organization offering the job position. */
    "https://schema.org/hiringOrganization"?: SchemaValue<Organization | IdReference, "https://schema.org/hiringOrganization">;
    /** Description of bonus and commission compensation aspects of the job. */
    "https://schema.org/incentiveCompensation"?: SchemaValue<Text, "https://schema.org/incentiveCompensation">;
    /**
     * Description of bonus and commission compensation aspects of the job.
     *
     * @deprecated Consider using https://schema.org/incentiveCompensation instead.
     */
    "https://schema.org/incentives"?: SchemaValue<Text, "https://schema.org/incentives">;
    /** The industry associated with the job position. */
    "https://schema.org/industry"?: SchemaValue<DefinedTerm | Text | IdReference, "https://schema.org/industry">;
    /** Description of benefits associated with the job. */
    "https://schema.org/jobBenefits"?: SchemaValue<Text, "https://schema.org/jobBenefits">;
    /** An indicator as to whether a position is available for an immediate start. */
    "https://schema.org/jobImmediateStart"?: SchemaValue<Boolean, "https://schema.org/jobImmediateStart">;
    /** A (typically single) geographic location associated with the job position. */
    "https://schema.org/jobLocation"?: SchemaValue<Place | IdReference, "https://schema.org/jobLocation">;
    /** A description of the job location (e.g TELECOMMUTE for telecommute jobs). */
    "https://schema.org/jobLocationType"?: SchemaValue<Text, "https://schema.org/jobLocationType">;
    /** The date on which a successful applicant for this job would be expected to start work. Choose a specific date in the future or use the jobImmediateStart property to indicate the position is to be filled as soon as possible. */
    "https://schema.org/jobStartDate"?: SchemaValue<Date | Text, "https://schema.org/jobStartDate">;
    /**
     * A category describing the job, preferably using a term from a taxonomy such as {@link http://www.onetcenter.org/taxonomy.html BLS O*NET-SOC}, {@link https://www.ilo.org/public/english/bureau/stat/isco/isco08/ ISCO-08} or similar, with the property repeated for each applicable value. Ideally the taxonomy should be identified, and both the textual label and formal code for the category should be provided.
     *
     * Note: for historical reasons, any textual label and formal code provided as a literal may be assumed to be from O*NET-SOC.
     */
    "https://schema.org/occupationalCategory"?: SchemaValue<CategoryCode | Text | IdReference, "https://schema.org/occupationalCategory">;
    /** A description of the types of physical activity associated with the job. Defined terms such as those in O*net may be used, but note that there is no way to specify the level of ability as well as its nature when using a defined term. */
    "https://schema.org/physicalRequirement"?: SchemaValue<DefinedTerm | Text | URL | IdReference, "https://schema.org/physicalRequirement">;
    /** Specific qualifications required for this role or Occupation. */
    "https://schema.org/qualifications"?: SchemaValue<EducationalOccupationalCredential | Text | IdReference, "https://schema.org/qualifications">;
    /** The Occupation for the JobPosting. */
    "https://schema.org/relevantOccupation"?: SchemaValue<Occupation | IdReference, "https://schema.org/relevantOccupation">;
    /** Responsibilities associated with this role or Occupation. */
    "https://schema.org/responsibilities"?: SchemaValue<Text, "https://schema.org/responsibilities">;
    /** The currency (coded using {@link http://en.wikipedia.org/wiki/ISO_4217 ISO 4217} ) used for the main salary information in this job posting or for this employee. */
    "https://schema.org/salaryCurrency"?: SchemaValue<Text, "https://schema.org/salaryCurrency">;
    /** A description of any security clearance requirements of the job. */
    "https://schema.org/securityClearanceRequirement"?: SchemaValue<Text | URL, "https://schema.org/securityClearanceRequirement">;
    /** A description of any sensory requirements and levels necessary to function on the job, including hearing and vision. Defined terms such as those in O*net may be used, but note that there is no way to specify the level of ability as well as its nature when using a defined term. */
    "https://schema.org/sensoryRequirement"?: SchemaValue<DefinedTerm | Text | URL | IdReference, "https://schema.org/sensoryRequirement">;
    /** A statement of knowledge, skill, ability, task or any other assertion expressing a competency that is desired or required to fulfill this role or to work in this occupation. */
    "https://schema.org/skills"?: SchemaValue<DefinedTerm | Text | IdReference, "https://schema.org/skills">;
    /** Any special commitments associated with this job posting. Valid entries include VeteranCommit, MilitarySpouseCommit, etc. */
    "https://schema.org/specialCommitments"?: SchemaValue<Text, "https://schema.org/specialCommitments">;
    /** The title of the job. */
    "https://schema.org/title"?: SchemaValue<Text, "https://schema.org/title">;
    /** The number of positions open for this job posting. Use a positive integer. Do not use if the number of positions is unclear or not known. */
    "https://schema.org/totalJobOpenings"?: SchemaValue<Integer, "https://schema.org/totalJobOpenings">;
    /** The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours. */
    "https://schema.org/validThrough"?: SchemaValue<Date | DateTime, "https://schema.org/validThrough">;
    /** The typical working hours for this job (e.g. 1st shift, night shift, 8am-5pm). */
    "https://schema.org/workHours"?: SchemaValue<Text, "https://schema.org/workHours">;
}
interface JobPostingLeaf extends JobPostingBase {
    "@type": "https://schema.org/JobPosting";
}
/** A listing that describes a job opening in a certain organization. */
export declare type JobPosting = JobPostingLeaf;
interface JoinActionBase extends ActionBase {
    /** Upcoming or past event associated with this place, organization, or action. */
    "https://schema.org/event"?: SchemaValue<Event | IdReference, "https://schema.org/event">;
}
interface JoinActionLeaf extends JoinActionBase {
    "@type": "https://schema.org/JoinAction";
}
/**
 * An agent joins an event/group with participants/friends at a location.
 *
 * Related actions:
 * - {@link https://schema.org/RegisterAction RegisterAction}: Unlike RegisterAction, JoinAction refers to joining a group/team of people.
 * - {@link https://schema.org/SubscribeAction SubscribeAction}: Unlike SubscribeAction, JoinAction does not imply that you'll be receiving updates.
 * - {@link https://schema.org/FollowAction FollowAction}: Unlike FollowAction, JoinAction does not imply that you'll be polling for updates.
 */
export declare type JoinAction = JoinActionLeaf;
interface JointBase extends AnatomicalStructureBase {
    /** The biomechanical properties of the bone. */
    "https://schema.org/biomechnicalClass"?: SchemaValue<Text, "https://schema.org/biomechnicalClass">;
    /** The degree of mobility the joint allows. */
    "https://schema.org/functionalClass"?: SchemaValue<MedicalEntity | Text | IdReference, "https://schema.org/functionalClass">;
    /** The name given to how bone physically connects to each other. */
    "https://schema.org/structuralClass"?: SchemaValue<Text, "https://schema.org/structuralClass">;
}
interface JointLeaf extends JointBase {
    "@type": "https://schema.org/Joint";
}
/** The anatomical location at which two or more bones make contact. */
export declare type Joint = JointLeaf;
interface LakeBodyOfWaterLeaf extends PlaceBase {
    "@type": "https://schema.org/LakeBodyOfWater";
}
/** A lake (for example, Lake Pontrachain). */
export declare type LakeBodyOfWater = LakeBodyOfWaterLeaf | string;
interface LandformLeaf extends PlaceBase {
    "@type": "https://schema.org/Landform";
}
/** A landform or physical feature. Landform elements include mountains, plains, lakes, rivers, seascape and oceanic waterbody interface features such as bays, peninsulas, seas and so forth, including sub-aqueous terrain features such as submersed mountain ranges, volcanoes, and the great ocean basins. */
export declare type Landform = LandformLeaf | BodyOfWater | Continent | Mountain | Volcano | string;
interface LandmarksOrHistoricalBuildingsLeaf extends PlaceBase {
    "@type": "https://schema.org/LandmarksOrHistoricalBuildings";
}
/** An historical landmark or building. */
export declare type LandmarksOrHistoricalBuildings = LandmarksOrHistoricalBuildingsLeaf | string;
interface LanguageLeaf extends ThingBase {
    "@type": "https://schema.org/Language";
}
/** Natural languages such as Spanish, Tamil, Hindi, English, etc. Formal language code tags expressed in {@link https://en.wikipedia.org/wiki/IETF_language_tag BCP 47} can be used via the {@link https://schema.org/alternateName alternateName} property. The Language type previously also covered programming languages such as Scheme and Lisp, which are now best represented using {@link https://schema.org/ComputerLanguage ComputerLanguage}. */
export declare type Language = LanguageLeaf;
interface LearningResourceBase extends CreativeWorkBase {
    /** The item being described is intended to assess the competency or learning outcome defined by the referenced term. */
    "https://schema.org/assesses"?: SchemaValue<DefinedTerm | Text | IdReference, "https://schema.org/assesses">;
    /** Knowledge, skill, ability or personal attribute that must be demonstrated by a person or other entity in order to do something such as earn an Educational Occupational Credential or understand a LearningResource. */
    "https://schema.org/competencyRequired"?: SchemaValue<DefinedTerm | Text | URL | IdReference, "https://schema.org/competencyRequired">;
    /**
     * An alignment to an established educational framework.
     *
     * This property should not be used where the nature of the alignment can be described using a simple property, for example to express that a resource {@link https://schema.org/teaches teaches} or {@link https://schema.org/assesses assesses} a competency.
     */
    "https://schema.org/educationalAlignment"?: SchemaValue<AlignmentObject | IdReference, "https://schema.org/educationalAlignment">;
    /** The level in terms of progression through an educational or training context. Examples of educational levels include 'beginner', 'intermediate' or 'advanced', and formal sets of level indicators. */
    "https://schema.org/educationalLevel"?: SchemaValue<DefinedTerm | Text | URL | IdReference, "https://schema.org/educationalLevel">;
    /** The purpose of a work in the context of education; for example, 'assignment', 'group work'. */
    "https://schema.org/educationalUse"?: SchemaValue<DefinedTerm | Text | IdReference, "https://schema.org/educationalUse">;
    /** The predominant type or kind characterizing the learning resource. For example, 'presentation', 'handout'. */
    "https://schema.org/learningResourceType"?: SchemaValue<DefinedTerm | Text | IdReference, "https://schema.org/learningResourceType">;
    /** The item being described is intended to help a person learn the competency or learning outcome defined by the referenced term. */
    "https://schema.org/teaches"?: SchemaValue<DefinedTerm | Text | IdReference, "https://schema.org/teaches">;
}
interface LearningResourceLeaf extends LearningResourceBase {
    "@type": "https://schema.org/LearningResource";
}
/**
 * The LearningResource type can be used to indicate {@link https://schema.org/CreativeWork CreativeWork}s (whether physical or digital) that have a particular and explicit orientation towards learning, education, skill acquisition, and other educational purposes.
 *
 * {@link https://schema.org/LearningResource LearningResource} is expected to be used as an addition to a primary type such as {@link https://schema.org/Book Book}, {@link https://schema.org/VideoObject VideoObject}, {@link https://schema.org/Product Product} etc.
 *
 * {@link https://schema.org/EducationEvent EducationEvent} serves a similar purpose for event-like things (e.g. a {@link https://schema.org/Trip Trip}). A {@link https://schema.org/LearningResource LearningResource} may be created as a result of an {@link https://schema.org/EducationEvent EducationEvent}, for example by recording one.
 */
export declare type LearningResource = LearningResourceLeaf | Course | Quiz;
interface LeaveActionBase extends ActionBase {
    /** Upcoming or past event associated with this place, organization, or action. */
    "https://schema.org/event"?: SchemaValue<Event | IdReference, "https://schema.org/event">;
}
interface LeaveActionLeaf extends LeaveActionBase {
    "@type": "https://schema.org/LeaveAction";
}
/**
 * An agent leaves an event / group with participants/friends at a location.
 *
 * Related actions:
 * - {@link https://schema.org/JoinAction JoinAction}: The antonym of LeaveAction.
 * - {@link https://schema.org/UnRegisterAction UnRegisterAction}: Unlike UnRegisterAction, LeaveAction implies leaving a group/team of people rather than a service.
 */
export declare type LeaveAction = LeaveActionLeaf;
interface LegalForceStatusLeaf extends EnumerationBase {
    "@type": "https://schema.org/LegalForceStatus";
}
/** A list of possible statuses for the legal force of a legislation. */
export declare type LegalForceStatus = "https://schema.org/InForce" | "https://schema.org/NotInForce" | "https://schema.org/PartiallyInForce" | LegalForceStatusLeaf;
interface LegalServiceLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/LegalService";
}
/**
 * A LegalService is a business that provides legally-oriented services, advice and representation, e.g. law firms.
 *
 * As a {@link https://schema.org/LocalBusiness LocalBusiness} it can be described as a {@link https://schema.org/provider provider} of one or more {@link https://schema.org/Service Service}\(s).
 */
export declare type LegalService = LegalServiceLeaf | Attorney | Notary | string;
interface LegalValueLevelLeaf extends EnumerationBase {
    "@type": "https://schema.org/LegalValueLevel";
}
/** A list of possible levels for the legal validity of a legislation. */
export declare type LegalValueLevel = "https://schema.org/AuthoritativeLegalValue" | "https://schema.org/DefinitiveLegalValue" | "https://schema.org/OfficialLegalValue" | "https://schema.org/UnofficialLegalValue" | LegalValueLevelLeaf;
interface LegislationBase extends CreativeWorkBase {
    /** Indicates a legal jurisdiction, e.g. of some legislation, or where some government service is based. */
    "https://schema.org/jurisdiction"?: SchemaValue<AdministrativeArea | Text | IdReference, "https://schema.org/jurisdiction">;
    /** Indicates that this legislation (or part of a legislation) somehow transfers another legislation in a different legislative context. This is an informative link, and it has no legal value. For legally-binding links of transposition, use the {@link /legislationTransposes legislationTransposes} property. For example an informative consolidated law of a European Union's member state "applies" the consolidated version of the European Directive implemented in it. */
    "https://schema.org/legislationApplies"?: SchemaValue<Legislation | IdReference, "https://schema.org/legislationApplies">;
    /** Another legislation that this legislation changes. This encompasses the notions of amendment, replacement, correction, repeal, or other types of change. This may be a direct change (textual or non-textual amendment) or a consequential or indirect change. The property is to be used to express the existence of a change relationship between two acts rather than the existence of a consolidated version of the text that shows the result of the change. For consolidation relationships, use the {@link /legislationConsolidates legislationConsolidates} property. */
    "https://schema.org/legislationChanges"?: SchemaValue<Legislation | IdReference, "https://schema.org/legislationChanges">;
    /** Indicates another legislation taken into account in this consolidated legislation (which is usually the product of an editorial process that revises the legislation). This property should be used multiple times to refer to both the original version or the previous consolidated version, and to the legislations making the change. */
    "https://schema.org/legislationConsolidates"?: SchemaValue<Legislation | IdReference, "https://schema.org/legislationConsolidates">;
    /** The date of adoption or signature of the legislation. This is the date at which the text is officially aknowledged to be a legislation, even though it might not even be published or in force. */
    "https://schema.org/legislationDate"?: SchemaValue<Date, "https://schema.org/legislationDate">;
    /** The point-in-time at which the provided description of the legislation is valid (e.g. : when looking at the law on the 2016-04-07 (= dateVersion), I get the consolidation of 2015-04-12 of the "National Insurance Contributions Act 2015") */
    "https://schema.org/legislationDateVersion"?: SchemaValue<Date, "https://schema.org/legislationDateVersion">;
    /** An identifier for the legislation. This can be either a string-based identifier, like the CELEX at EU level or the NOR in France, or a web-based, URL/URI identifier, like an ELI (European Legislation Identifier) or an URN-Lex. */
    "https://schema.org/legislationIdentifier"?: SchemaValue<Text | URL, "https://schema.org/legislationIdentifier">;
    /** The jurisdiction from which the legislation originates. */
    "https://schema.org/legislationJurisdiction"?: SchemaValue<AdministrativeArea | Text | IdReference, "https://schema.org/legislationJurisdiction">;
    /** Whether the legislation is currently in force, not in force, or partially in force. */
    "https://schema.org/legislationLegalForce"?: SchemaValue<LegalForceStatus | IdReference, "https://schema.org/legislationLegalForce">;
    /** The person or organization that originally passed or made the law : typically parliament (for primary legislation) or government (for secondary legislation). This indicates the "legal author" of the law, as opposed to its physical author. */
    "https://schema.org/legislationPassedBy"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/legislationPassedBy">;
    /** An individual or organization that has some kind of responsibility for the legislation. Typically the ministry who is/was in charge of elaborating the legislation, or the adressee for potential questions about the legislation once it is published. */
    "https://schema.org/legislationResponsible"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/legislationResponsible">;
    /** Indicates that this legislation (or part of legislation) fulfills the objectives set by another legislation, by passing appropriate implementation measures. Typically, some legislations of European Union's member states or regions transpose European Directives. This indicates a legally binding link between the 2 legislations. */
    "https://schema.org/legislationTransposes"?: SchemaValue<Legislation | IdReference, "https://schema.org/legislationTransposes">;
    /** The type of the legislation. Examples of values are "law", "act", "directive", "decree", "regulation", "statutory instrument", "loi organique", "r\u00E8glement grand-ducal", etc., depending on the country. */
    "https://schema.org/legislationType"?: SchemaValue<CategoryCode | Text | IdReference, "https://schema.org/legislationType">;
}
interface LegislationLeaf extends LegislationBase {
    "@type": "https://schema.org/Legislation";
}
/** A legal document such as an act, decree, bill, etc. (enforceable or not) or a component of a legal act (like an article). */
export declare type Legislation = LegislationLeaf | LegislationObject;
interface LegislationObjectBase extends LegislationBase, MediaObjectBase {
    /** The legal value of this legislation file. The same legislation can be written in multiple files with different legal values. Typically a digitally signed PDF have a "stronger" legal value than the HTML file of the same act. */
    "https://schema.org/legislationLegalValue"?: SchemaValue<LegalValueLevel | IdReference, "https://schema.org/legislationLegalValue">;
}
interface LegislationObjectLeaf extends LegislationObjectBase {
    "@type": "https://schema.org/LegislationObject";
}
/** A specific object or file containing a Legislation. Note that the same Legislation can be published in multiple files. For example, a digitally signed PDF, a plain PDF and an HTML version. */
export declare type LegislationObject = LegislationObjectLeaf;
interface LegislativeBuildingLeaf extends CivicStructureBase {
    "@type": "https://schema.org/LegislativeBuilding";
}
/** A legislative building—for example, the state capitol. */
export declare type LegislativeBuilding = LegislativeBuildingLeaf | string;
interface LendActionBase extends TransferActionBase {
    /** A sub property of participant. The person that borrows the object being lent. */
    "https://schema.org/borrower"?: SchemaValue<Person | IdReference, "https://schema.org/borrower">;
}
interface LendActionLeaf extends LendActionBase {
    "@type": "https://schema.org/LendAction";
}
/**
 * The act of providing an object under an agreement that it will be returned at a later date. Reciprocal of BorrowAction.
 *
 * Related actions:
 * - {@link https://schema.org/BorrowAction BorrowAction}: Reciprocal of LendAction.
 */
export declare type LendAction = LendActionLeaf;
interface LibraryLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/Library";
}
/** A library. */
export declare type Library = LibraryLeaf | string;
interface LibrarySystemLeaf extends OrganizationBase {
    "@type": "https://schema.org/LibrarySystem";
}
/** A {@link https://schema.org/LibrarySystem LibrarySystem} is a collaborative system amongst several libraries. */
export declare type LibrarySystem = LibrarySystemLeaf | string;
interface LifestyleModificationLeaf extends MedicalEntityBase {
    "@type": "https://schema.org/LifestyleModification";
}
/** A process of care involving exercise, changes to diet, fitness routines, and other lifestyle changes aimed at improving a health condition. */
export declare type LifestyleModification = LifestyleModificationLeaf | Diet | PhysicalActivity;
interface LigamentLeaf extends AnatomicalStructureBase {
    "@type": "https://schema.org/Ligament";
}
/** A short band of tough, flexible, fibrous connective tissue that functions to connect multiple bones, cartilages, and structurally support joints. */
export declare type Ligament = LigamentLeaf;
interface LikeActionLeaf extends ActionBase {
    "@type": "https://schema.org/LikeAction";
}
/** The act of expressing a positive sentiment about the object. An agent likes an object (a proposition, topic or theme) with participants. */
export declare type LikeAction = LikeActionLeaf;
interface LiquorStoreLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/LiquorStore";
}
/** A shop that sells alcoholic drinks such as wine, beer, whisky and other spirits. */
export declare type LiquorStore = LiquorStoreLeaf | string;
interface ListenActionLeaf extends ConsumeActionBase {
    "@type": "https://schema.org/ListenAction";
}
/** The act of consuming audio content. */
export declare type ListenAction = ListenActionLeaf;
interface ListItemBase extends ThingBase {
    /** An entity represented by an entry in a list or data feed (e.g. an 'artist' in a list of 'artists')’. */
    "https://schema.org/item"?: SchemaValue<Thing | IdReference, "https://schema.org/item">;
    /** A link to the ListItem that follows the current one. */
    "https://schema.org/nextItem"?: SchemaValue<ListItem | IdReference, "https://schema.org/nextItem">;
    /** The position of an item in a series or sequence of items. */
    "https://schema.org/position"?: SchemaValue<Integer | Text, "https://schema.org/position">;
    /** A link to the ListItem that preceeds the current one. */
    "https://schema.org/previousItem"?: SchemaValue<ListItem | IdReference, "https://schema.org/previousItem">;
}
interface ListItemLeaf extends ListItemBase {
    "@type": "https://schema.org/ListItem";
}
/** An list item, e.g. a step in a checklist or how-to description. */
export declare type ListItem = ListItemLeaf | HowToDirection | HowToItem | HowToSection | HowToStep | HowToTip;
interface LiteraryEventLeaf extends EventBase {
    "@type": "https://schema.org/LiteraryEvent";
}
/** Event type: Literary event. */
export declare type LiteraryEvent = LiteraryEventLeaf;
interface LiveBlogPostingBase extends SocialMediaPostingBase {
    /** The time when the live blog will stop covering the Event. Note that coverage may continue after the Event concludes. */
    "https://schema.org/coverageEndTime"?: SchemaValue<DateTime, "https://schema.org/coverageEndTime">;
    /** The time when the live blog will begin covering the Event. Note that coverage may begin before the Event's start time. The LiveBlogPosting may also be created before coverage begins. */
    "https://schema.org/coverageStartTime"?: SchemaValue<DateTime, "https://schema.org/coverageStartTime">;
    /** An update to the LiveBlog. */
    "https://schema.org/liveBlogUpdate"?: SchemaValue<BlogPosting | IdReference, "https://schema.org/liveBlogUpdate">;
}
interface LiveBlogPostingLeaf extends LiveBlogPostingBase {
    "@type": "https://schema.org/LiveBlogPosting";
}
/** A {@link https://schema.org/LiveBlogPosting LiveBlogPosting} is a {@link https://schema.org/BlogPosting BlogPosting} intended to provide a rolling textual coverage of an ongoing event through continuous updates. */
export declare type LiveBlogPosting = LiveBlogPostingLeaf;
interface LoanOrCreditBase extends FinancialProductBase {
    /** The amount of money. */
    "https://schema.org/amount"?: SchemaValue<MonetaryAmount | Number | IdReference, "https://schema.org/amount">;
    /**
     * The currency in which the monetary amount is expressed.
     *
     * Use standard formats: {@link http://en.wikipedia.org/wiki/ISO_4217 ISO 4217 currency format} e.g. "USD"; {@link https://en.wikipedia.org/wiki/List_of_cryptocurrencies Ticker symbol} for cryptocurrencies e.g. "BTC"; well known names for {@link https://en.wikipedia.org/wiki/Local_exchange_trading_system Local Exchange Tradings Systems} (LETS) and other currency types e.g. "Ithaca HOUR".
     */
    "https://schema.org/currency"?: SchemaValue<Text, "https://schema.org/currency">;
    /** The period of time after any due date that the borrower has to fulfil its obligations before a default (failure to pay) is deemed to have occurred. */
    "https://schema.org/gracePeriod"?: SchemaValue<Duration | IdReference, "https://schema.org/gracePeriod">;
    /** A form of paying back money previously borrowed from a lender. Repayment usually takes the form of periodic payments that normally include part principal plus interest in each payment. */
    "https://schema.org/loanRepaymentForm"?: SchemaValue<RepaymentSpecification | IdReference, "https://schema.org/loanRepaymentForm">;
    /** The duration of the loan or credit agreement. */
    "https://schema.org/loanTerm"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/loanTerm">;
    /** The type of a loan or credit. */
    "https://schema.org/loanType"?: SchemaValue<Text | URL, "https://schema.org/loanType">;
    /** The only way you get the money back in the event of default is the security. Recourse is where you still have the opportunity to go back to the borrower for the rest of the money. */
    "https://schema.org/recourseLoan"?: SchemaValue<Boolean, "https://schema.org/recourseLoan">;
    /** Whether the terms for payment of interest can be renegotiated during the life of the loan. */
    "https://schema.org/renegotiableLoan"?: SchemaValue<Boolean, "https://schema.org/renegotiableLoan">;
    /** Assets required to secure loan or credit repayments. It may take form of third party pledge, goods, financial instruments (cash, securities, etc.) */
    "https://schema.org/requiredCollateral"?: SchemaValue<Text | Thing | IdReference, "https://schema.org/requiredCollateral">;
}
interface LoanOrCreditLeaf extends LoanOrCreditBase {
    "@type": "https://schema.org/LoanOrCredit";
}
/** A financial product for the loaning of an amount of money, or line of credit, under agreed terms and charges. */
export declare type LoanOrCredit = LoanOrCreditLeaf | CreditCard | MortgageLoan;
interface LocalBusinessBase extends OrganizationBase, PlaceBase {
    /**
     * The larger organization that this local business is a branch of, if any. Not to be confused with (anatomical){@link https://schema.org/branch branch}.
     *
     * @deprecated Consider using https://schema.org/parentOrganization instead.
     */
    "https://schema.org/branchOf"?: SchemaValue<Organization | IdReference, "https://schema.org/branchOf">;
    /**
     * The currency accepted.
     *
     * Use standard formats: {@link http://en.wikipedia.org/wiki/ISO_4217 ISO 4217 currency format} e.g. "USD"; {@link https://en.wikipedia.org/wiki/List_of_cryptocurrencies Ticker symbol} for cryptocurrencies e.g. "BTC"; well known names for {@link https://en.wikipedia.org/wiki/Local_exchange_trading_system Local Exchange Tradings Systems} (LETS) and other currency types e.g. "Ithaca HOUR".
     */
    "https://schema.org/currenciesAccepted"?: SchemaValue<Text, "https://schema.org/currenciesAccepted">;
    /**
     * The general opening hours for a business. Opening hours can be specified as a weekly time range, starting with days, then times per day. Multiple days can be listed with commas ',' separating each day. Day or time ranges are specified using a hyphen '-'.
     * - Days are specified using the following two-letter combinations: `Mo`, `Tu`, `We`, `Th`, `Fr`, `Sa`, `Su`.
     * - Times are specified using 24:00 format. For example, 3pm is specified as `15:00`, 10am as `10:00`.
     * - Here is an example: `<time itemprop="openingHours" datetime="Tu,Th 16:00-20:00">Tuesdays and Thursdays 4-8pm</time>`.
     * - If a business is open 7 days a week, then it can be specified as `<time itemprop="openingHours" datetime="Mo-Su">Monday through Sunday, all day</time>`.
     */
    "https://schema.org/openingHours"?: SchemaValue<Text, "https://schema.org/openingHours">;
    /** Cash, Credit Card, Cryptocurrency, Local Exchange Tradings System, etc. */
    "https://schema.org/paymentAccepted"?: SchemaValue<Text, "https://schema.org/paymentAccepted">;
    /** The price range of the business, for example `$$$`. */
    "https://schema.org/priceRange"?: SchemaValue<Text, "https://schema.org/priceRange">;
}
interface LocalBusinessLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/LocalBusiness";
}
/** A particular physical business or branch of an organization. Examples of LocalBusiness include a restaurant, a particular branch of a restaurant chain, a branch of a bank, a medical practice, a club, a bowling alley, etc. */
export declare type LocalBusiness = LocalBusinessLeaf | AnimalShelter | ArchiveOrganization | AutomotiveBusiness | ChildCare | Dentist | DryCleaningOrLaundry | EmergencyService | EmploymentAgency | EntertainmentBusiness | FinancialService | FoodEstablishment | GovernmentOffice | HealthAndBeautyBusiness | HomeAndConstructionBusiness | InternetCafe | LegalService | Library | LodgingBusiness | MedicalBusiness | ProfessionalService | RadioStation | RealEstateAgent | RecyclingCenter | SelfStorage | ShoppingCenter | SportsActivityLocation | Store | TelevisionStation | TouristInformationCenter | TravelAgency | string;
interface LocationFeatureSpecificationBase extends PropertyValueBase {
    /** The hours during which this service or contact is available. */
    "https://schema.org/hoursAvailable"?: SchemaValue<OpeningHoursSpecification | IdReference, "https://schema.org/hoursAvailable">;
    /** The date when the item becomes valid. */
    "https://schema.org/validFrom"?: SchemaValue<Date | DateTime, "https://schema.org/validFrom">;
    /** The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours. */
    "https://schema.org/validThrough"?: SchemaValue<Date | DateTime, "https://schema.org/validThrough">;
}
interface LocationFeatureSpecificationLeaf extends LocationFeatureSpecificationBase {
    "@type": "https://schema.org/LocationFeatureSpecification";
}
/** Specifies a location feature by providing a structured value representing a feature of an accommodation as a property-value pair of varying degrees of formality. */
export declare type LocationFeatureSpecification = LocationFeatureSpecificationLeaf;
interface LocksmithLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/Locksmith";
}
/** A locksmith. */
export declare type Locksmith = LocksmithLeaf | string;
interface LodgingBusinessBase extends LocalBusinessBase {
    /** An amenity feature (e.g. a characteristic or service) of the Accommodation. This generic property does not make a statement about whether the feature is included in an offer for the main accommodation or available at extra costs. */
    "https://schema.org/amenityFeature"?: SchemaValue<LocationFeatureSpecification | IdReference, "https://schema.org/amenityFeature">;
    /** An intended audience, i.e. a group for whom something was created. */
    "https://schema.org/audience"?: SchemaValue<Audience | IdReference, "https://schema.org/audience">;
    /** A language someone may use with or at the item, service or place. Please use one of the language codes from the {@link http://tools.ietf.org/html/bcp47 IETF BCP 47 standard}. See also {@link https://schema.org/inLanguage inLanguage} */
    "https://schema.org/availableLanguage"?: SchemaValue<Language | Text | IdReference, "https://schema.org/availableLanguage">;
    /** The earliest someone may check into a lodging establishment. */
    "https://schema.org/checkinTime"?: SchemaValue<DateTime | Time, "https://schema.org/checkinTime">;
    /** The latest someone may check out of a lodging establishment. */
    "https://schema.org/checkoutTime"?: SchemaValue<DateTime | Time, "https://schema.org/checkoutTime">;
    /** The number of rooms (excluding bathrooms and closets) of the accommodation or lodging business. Typical unit code(s): ROM for room or C62 for no unit. The type of room can be put in the unitText property of the QuantitativeValue. */
    "https://schema.org/numberOfRooms"?: SchemaValue<Number | QuantitativeValue | IdReference, "https://schema.org/numberOfRooms">;
    /** Indicates whether pets are allowed to enter the accommodation or lodging business. More detailed information can be put in a text value. */
    "https://schema.org/petsAllowed"?: SchemaValue<Boolean | Text, "https://schema.org/petsAllowed">;
    /** An official rating for a lodging business or food establishment, e.g. from national associations or standards bodies. Use the author property to indicate the rating organization, e.g. as an Organization with name such as (e.g. HOTREC, DEHOGA, WHR, or Hotelstars). */
    "https://schema.org/starRating"?: SchemaValue<Rating | IdReference, "https://schema.org/starRating">;
}
interface LodgingBusinessLeaf extends LodgingBusinessBase {
    "@type": "https://schema.org/LodgingBusiness";
}
/** A lodging business, such as a motel, hotel, or inn. */
export declare type LodgingBusiness = LodgingBusinessLeaf | BedAndBreakfast | Campground | Hostel | Hotel | Motel | Resort | string;
interface LodgingReservationBase extends ReservationBase {
    /** The earliest someone may check into a lodging establishment. */
    "https://schema.org/checkinTime"?: SchemaValue<DateTime | Time, "https://schema.org/checkinTime">;
    /** The latest someone may check out of a lodging establishment. */
    "https://schema.org/checkoutTime"?: SchemaValue<DateTime | Time, "https://schema.org/checkoutTime">;
    /** A full description of the lodging unit. */
    "https://schema.org/lodgingUnitDescription"?: SchemaValue<Text, "https://schema.org/lodgingUnitDescription">;
    /** Textual description of the unit type (including suite vs. room, size of bed, etc.). */
    "https://schema.org/lodgingUnitType"?: SchemaValue<QualitativeValue | Text | IdReference, "https://schema.org/lodgingUnitType">;
    /** The number of adults staying in the unit. */
    "https://schema.org/numAdults"?: SchemaValue<Integer | QuantitativeValue | IdReference, "https://schema.org/numAdults">;
    /** The number of children staying in the unit. */
    "https://schema.org/numChildren"?: SchemaValue<Integer | QuantitativeValue | IdReference, "https://schema.org/numChildren">;
}
interface LodgingReservationLeaf extends LodgingReservationBase {
    "@type": "https://schema.org/LodgingReservation";
}
/**
 * A reservation for lodging at a hotel, motel, inn, etc.
 *
 * Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations.
 */
export declare type LodgingReservation = LodgingReservationLeaf;
interface LoseActionBase extends ActionBase {
    /** A sub property of participant. The winner of the action. */
    "https://schema.org/winner"?: SchemaValue<Person | IdReference, "https://schema.org/winner">;
}
interface LoseActionLeaf extends LoseActionBase {
    "@type": "https://schema.org/LoseAction";
}
/** The act of being defeated in a competitive activity. */
export declare type LoseAction = LoseActionLeaf;
interface LymphaticVesselBase extends AnatomicalStructureBase {
    /** The vasculature the lymphatic structure originates, or afferents, from. */
    "https://schema.org/originatesFrom"?: SchemaValue<Vessel | IdReference, "https://schema.org/originatesFrom">;
    /** The anatomical or organ system drained by this vessel; generally refers to a specific part of an organ. */
    "https://schema.org/regionDrained"?: SchemaValue<AnatomicalStructure | AnatomicalSystem | IdReference, "https://schema.org/regionDrained">;
    /** The vasculature the lymphatic structure runs, or efferents, to. */
    "https://schema.org/runsTo"?: SchemaValue<Vessel | IdReference, "https://schema.org/runsTo">;
}
interface LymphaticVesselLeaf extends LymphaticVesselBase {
    "@type": "https://schema.org/LymphaticVessel";
}
/** A type of blood vessel that specifically carries lymph fluid unidirectionally toward the heart. */
export declare type LymphaticVessel = LymphaticVesselLeaf;
interface ManuscriptLeaf extends CreativeWorkBase {
    "@type": "https://schema.org/Manuscript";
}
/** A book, document, or piece of music written by hand rather than typed or printed. */
export declare type Manuscript = ManuscriptLeaf;
interface MapBase extends CreativeWorkBase {
    /** Indicates the kind of Map, from the MapCategoryType Enumeration. */
    "https://schema.org/mapType"?: SchemaValue<MapCategoryType | IdReference, "https://schema.org/mapType">;
}
interface MapLeaf extends MapBase {
    "@type": "https://schema.org/Map";
}
/** A map. */
export declare type Map = MapLeaf;
interface MapCategoryTypeLeaf extends EnumerationBase {
    "@type": "https://schema.org/MapCategoryType";
}
/** An enumeration of several kinds of Map. */
export declare type MapCategoryType = "https://schema.org/ParkingMap" | "https://schema.org/SeatingMap" | "https://schema.org/TransitMap" | "https://schema.org/VenueMap" | MapCategoryTypeLeaf;
interface MarryActionLeaf extends ActionBase {
    "@type": "https://schema.org/MarryAction";
}
/** The act of marrying a person. */
export declare type MarryAction = MarryActionLeaf;
interface MassLeaf extends ThingBase {
    "@type": "https://schema.org/Mass";
}
/** Properties that take Mass as values are of the form '<Number> <Mass unit of measure>'. E.g., '7 kg'. */
export declare type Mass = MassLeaf | string;
interface MathSolverBase extends CreativeWorkBase {
    /** A mathematical expression (e.g. 'x^2-3x=0') that may be solved for a specific variable, simplified, or transformed. This can take many formats, e.g. LaTeX, Ascii-Math, or math as you would write with a keyboard. */
    "https://schema.org/mathExpression"?: SchemaValue<SolveMathAction | Text | IdReference, "https://schema.org/mathExpression">;
}
interface MathSolverLeaf extends MathSolverBase {
    "@type": "https://schema.org/MathSolver";
}
/** A math solver which is capable of solving a subset of mathematical problems. */
export declare type MathSolver = MathSolverLeaf;
interface MaximumDoseScheduleLeaf extends DoseScheduleBase {
    "@type": "https://schema.org/MaximumDoseSchedule";
}
/** The maximum dosing schedule considered safe for a drug or supplement as recommended by an authority or by the drug/supplement's manufacturer. Capture the recommending authority in the recognizingAuthority property of MedicalEntity. */
export declare type MaximumDoseSchedule = MaximumDoseScheduleLeaf;
interface MeasurementTypeEnumerationLeaf extends EnumerationBase {
    "@type": "https://schema.org/MeasurementTypeEnumeration";
}
/** Enumeration of common measurement types (or dimensions), for example "chest" for a person, "inseam" for pants, "gauge" for screws, or "wheel" for bicycles. */
export declare type MeasurementTypeEnumeration = MeasurementTypeEnumerationLeaf | BodyMeasurementTypeEnumeration | WearableMeasurementTypeEnumeration;
interface MediaGalleryLeaf extends WebPageBase {
    "@type": "https://schema.org/MediaGallery";
}
/** Web page type: Media gallery page. A mixed-media page that can contains media such as images, videos, and other multimedia. */
export declare type MediaGallery = MediaGalleryLeaf | ImageGallery | VideoGallery;
interface MediaManipulationRatingEnumerationLeaf extends EnumerationBase {
    "@type": "https://schema.org/MediaManipulationRatingEnumeration";
}
/** Codes for use with the {@link https://schema.org/mediaAuthenticityCategory mediaAuthenticityCategory} property, indicating the authenticity of a media object (in the context of how it was published or shared). In general these codes are not mutually exclusive, although some combinations (such as 'original' versus 'transformed', 'edited' and 'staged') would be contradictory if applied in the same {@link https://schema.org/MediaReview MediaReview}. Note that the application of these codes is with regard to a piece of media shared or published in a particular context. */
export declare type MediaManipulationRatingEnumeration = "https://schema.org/DecontextualizedContent" | "https://schema.org/EditedOrCroppedContent" | "https://schema.org/OriginalMediaContent" | "https://schema.org/SatireOrParodyContent" | "https://schema.org/StagedContent" | "https://schema.org/TransformedContent" | MediaManipulationRatingEnumerationLeaf;
interface MediaObjectBase extends CreativeWorkBase {
    /** A NewsArticle associated with the Media Object. */
    "https://schema.org/associatedArticle"?: SchemaValue<NewsArticle | IdReference, "https://schema.org/associatedArticle">;
    /** The bitrate of the media object. */
    "https://schema.org/bitrate"?: SchemaValue<Text, "https://schema.org/bitrate">;
    /** File size in (mega/kilo) bytes. */
    "https://schema.org/contentSize"?: SchemaValue<Text, "https://schema.org/contentSize">;
    /** Actual bytes of the media object, for example the image file or video file. */
    "https://schema.org/contentUrl"?: SchemaValue<URL, "https://schema.org/contentUrl">;
    /** The duration of the item (movie, audio recording, event, etc.) in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}. */
    "https://schema.org/duration"?: SchemaValue<Duration | IdReference, "https://schema.org/duration">;
    /** A URL pointing to a player for a specific video. In general, this is the information in the `src` element of an `embed` tag and should not be the same as the content of the `loc` tag. */
    "https://schema.org/embedUrl"?: SchemaValue<URL, "https://schema.org/embedUrl">;
    /** The CreativeWork encoded by this media object. */
    "https://schema.org/encodesCreativeWork"?: SchemaValue<CreativeWork | IdReference, "https://schema.org/encodesCreativeWork">;
    /**
     * Media type typically expressed using a MIME format (see {@link http://www.iana.org/assignments/media-types/media-types.xhtml IANA site} and {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types MDN reference}) e.g. application/zip for a SoftwareApplication binary, audio/mpeg for .mp3 etc.).
     *
     * In cases where a {@link https://schema.org/CreativeWork CreativeWork} has several media type representations, {@link https://schema.org/encoding encoding} can be used to indicate each {@link https://schema.org/MediaObject MediaObject} alongside particular {@link https://schema.org/encodingFormat encodingFormat} information.
     *
     * Unregistered or niche encoding and file formats can be indicated instead via the most appropriate URL, e.g. defining Web page or a Wikipedia/Wikidata entry.
     */
    "https://schema.org/encodingFormat"?: SchemaValue<Text | URL, "https://schema.org/encodingFormat">;
    /**
     * The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. e.g. John wrote a book from January to _December_. For media, including audio and video, it's the time offset of the end of a clip within a larger file.
     *
     * Note that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
     */
    "https://schema.org/endTime"?: SchemaValue<DateTime | Time, "https://schema.org/endTime">;
    /** The height of the item. */
    "https://schema.org/height"?: SchemaValue<Distance | QuantitativeValue | IdReference, "https://schema.org/height">;
    /**
     * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is not valid, e.g. a region where the transaction is not allowed.
     *
     * See also {@link https://schema.org/eligibleRegion eligibleRegion}.
     */
    "https://schema.org/ineligibleRegion"?: SchemaValue<GeoShape | Place | Text | IdReference, "https://schema.org/ineligibleRegion">;
    /** Used to indicate a specific claim contained, implied, translated or refined from the content of a {@link https://schema.org/MediaObject MediaObject} or other {@link https://schema.org/CreativeWork CreativeWork}. The interpreting party can be indicated using {@link https://schema.org/claimInterpreter claimInterpreter}. */
    "https://schema.org/interpretedAsClaim"?: SchemaValue<Claim | IdReference, "https://schema.org/interpretedAsClaim">;
    /** Player type required—for example, Flash or Silverlight. */
    "https://schema.org/playerType"?: SchemaValue<Text, "https://schema.org/playerType">;
    /** The production company or studio responsible for the item e.g. series, video game, episode etc. */
    "https://schema.org/productionCompany"?: SchemaValue<Organization | IdReference, "https://schema.org/productionCompany">;
    /** The regions where the media is allowed. If not specified, then it's assumed to be allowed everywhere. Specify the countries in {@link http://en.wikipedia.org/wiki/ISO_3166 ISO 3166 format}. */
    "https://schema.org/regionsAllowed"?: SchemaValue<Place | IdReference, "https://schema.org/regionsAllowed">;
    /** Indicates if use of the media require a subscription (either paid or free). Allowed values are `true` or `false` (note that an earlier version had 'yes', 'no'). */
    "https://schema.org/requiresSubscription"?: SchemaValue<Boolean | MediaSubscription | IdReference, "https://schema.org/requiresSubscription">;
    /** The {@link https://en.wikipedia.org/wiki/SHA-2 SHA-2} SHA256 hash of the content of the item. For example, a zero-length input has value 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855' */
    "https://schema.org/sha256"?: SchemaValue<Text, "https://schema.org/sha256">;
    /**
     * The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. e.g. John wrote a book from _January_ to December. For media, including audio and video, it's the time offset of the start of a clip within a larger file.
     *
     * Note that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
     */
    "https://schema.org/startTime"?: SchemaValue<DateTime | Time, "https://schema.org/startTime">;
    /** Date when this media object was uploaded to this site. */
    "https://schema.org/uploadDate"?: SchemaValue<Date, "https://schema.org/uploadDate">;
    /** The width of the item. */
    "https://schema.org/width"?: SchemaValue<Distance | QuantitativeValue | IdReference, "https://schema.org/width">;
}
interface MediaObjectLeaf extends MediaObjectBase {
    "@type": "https://schema.org/MediaObject";
}
/** A media object, such as an image, video, or audio object embedded in a web page or a downloadable dataset i.e. DataDownload. Note that a creative work may have many media objects associated with it on the same web page. For example, a page about a single song (MusicRecording) may have a music video (VideoObject), and a high and low bandwidth audio stream (2 AudioObject's). */
export declare type MediaObject = MediaObjectLeaf | _3DModel | AudioObject | DataDownload | ImageObject | LegislationObject | MusicVideoObject | VideoObject;
interface MediaReviewBase extends ReviewBase {
    /** Indicates a MediaManipulationRatingEnumeration classification of a media object (in the context of how it was published or shared). */
    "https://schema.org/mediaAuthenticityCategory"?: SchemaValue<MediaManipulationRatingEnumeration | IdReference, "https://schema.org/mediaAuthenticityCategory">;
    /** Describes, in a {@link https://schema.org/MediaReview MediaReview} when dealing with {@link https://schema.org/DecontextualizedContent DecontextualizedContent}, background information that can contribute to better interpretation of the {@link https://schema.org/MediaObject MediaObject}. */
    "https://schema.org/originalMediaContextDescription"?: SchemaValue<Text, "https://schema.org/originalMediaContextDescription">;
    /** Link to the page containing an original version of the content, or directly to an online copy of the original {@link https://schema.org/MediaObject MediaObject} content, e.g. video file. */
    "https://schema.org/originalMediaLink"?: SchemaValue<MediaObject | URL | WebPage | IdReference, "https://schema.org/originalMediaLink">;
}
interface MediaReviewLeaf extends MediaReviewBase {
    "@type": "https://schema.org/MediaReview";
}
/** A {@link https://schema.org/MediaReview MediaReview} is a more specialized form of Review dedicated to the evaluation of media content online, typically in the context of fact-checking and misinformation. For more general reviews of media in the broader sense, use {@link https://schema.org/UserReview UserReview}, {@link https://schema.org/CriticReview CriticReview} or other {@link https://schema.org/Review Review} types. This definition is a work in progress. While the {@link https://schema.org/MediaManipulationRatingEnumeration MediaManipulationRatingEnumeration} list reflects significant community review amongst fact-checkers and others working to combat misinformation, the specific structures for representing media objects, their versions and publication context, is still evolving. Similarly, best practices for the relationship between {@link https://schema.org/MediaReview MediaReview} and {@link https://schema.org/ClaimReview ClaimReview} markup has not yet been finalized. */
export declare type MediaReview = MediaReviewLeaf;
interface MediaReviewItemBase extends CreativeWorkBase {
    /** In the context of a {@link https://schema.org/MediaReview MediaReview}, indicates specific media item(s) that are grouped using a {@link https://schema.org/MediaReviewItem MediaReviewItem}. */
    "https://schema.org/mediaItemAppearance"?: SchemaValue<MediaObject | IdReference, "https://schema.org/mediaItemAppearance">;
}
interface MediaReviewItemLeaf extends MediaReviewItemBase {
    "@type": "https://schema.org/MediaReviewItem";
}
/** Represents an item or group of closely related items treated as a unit for the sake of evaluation in a {@link https://schema.org/MediaReview MediaReview}. Authorship etc. apply to the items rather than to the curation/grouping or reviewing party. */
export declare type MediaReviewItem = MediaReviewItemLeaf;
interface MediaSubscriptionBase extends ThingBase {
    /** The Organization responsible for authenticating the user's subscription. For example, many media apps require a cable/satellite provider to authenticate your subscription before playing media. */
    "https://schema.org/authenticator"?: SchemaValue<Organization | IdReference, "https://schema.org/authenticator">;
    /** An Offer which must be accepted before the user can perform the Action. For example, the user may need to buy a movie before being able to watch it. */
    "https://schema.org/expectsAcceptanceOf"?: SchemaValue<Offer | IdReference, "https://schema.org/expectsAcceptanceOf">;
}
interface MediaSubscriptionLeaf extends MediaSubscriptionBase {
    "@type": "https://schema.org/MediaSubscription";
}
/** A subscription which allows a user to access media including audio, video, books, etc. */
export declare type MediaSubscription = MediaSubscriptionLeaf;
interface MedicalAudienceBase extends AudienceBase, PeopleAudienceBase {
}
interface MedicalAudienceLeaf extends MedicalAudienceBase {
    "@type": "https://schema.org/MedicalAudience";
}
/** Target audiences for medical web pages. */
export declare type MedicalAudience = MedicalAudienceLeaf | Patient;
interface MedicalAudienceTypeLeaf extends EnumerationBase {
    "@type": "https://schema.org/MedicalAudienceType";
}
/** Target audiences types for medical web pages. Enumerated type. */
export declare type MedicalAudienceType = "https://schema.org/Clinician" | "https://schema.org/MedicalResearcher" | MedicalAudienceTypeLeaf;
interface MedicalBusinessLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/MedicalBusiness";
}
/** A particular physical or virtual business of an organization for medical purposes. Examples of MedicalBusiness include differents business run by health professionals. */
export declare type MedicalBusiness = MedicalBusinessLeaf | Dentist | MedicalClinic | Optician | Pharmacy | Physician | string;
interface MedicalCauseBase extends MedicalEntityBase {
    /** The condition, complication, symptom, sign, etc. caused. */
    "https://schema.org/causeOf"?: SchemaValue<MedicalEntity | IdReference, "https://schema.org/causeOf">;
}
interface MedicalCauseLeaf extends MedicalCauseBase {
    "@type": "https://schema.org/MedicalCause";
}
/** The causative agent(s) that are responsible for the pathophysiologic process that eventually results in a medical condition, symptom or sign. In this schema, unless otherwise specified this is meant to be the proximate cause of the medical condition, symptom or sign. The proximate cause is defined as the causative agent that most directly results in the medical condition, symptom or sign. For example, the HIV virus could be considered a cause of AIDS. Or in a diagnostic context, if a patient fell and sustained a hip fracture and two days later sustained a pulmonary embolism which eventuated in a cardiac arrest, the cause of the cardiac arrest (the proximate cause) would be the pulmonary embolism and not the fall. Medical causes can include cardiovascular, chemical, dermatologic, endocrine, environmental, gastroenterologic, genetic, hematologic, gynecologic, iatrogenic, infectious, musculoskeletal, neurologic, nutritional, obstetric, oncologic, otolaryngologic, pharmacologic, psychiatric, pulmonary, renal, rheumatologic, toxic, traumatic, or urologic causes; medical conditions can be causes as well. */
export declare type MedicalCause = MedicalCauseLeaf;
interface MedicalClinicBase extends LocalBusinessBase, MedicalOrganizationBase {
    /** A medical service available from this provider. */
    "https://schema.org/availableService"?: SchemaValue<MedicalProcedure | MedicalTest | MedicalTherapy | IdReference, "https://schema.org/availableService">;
    /** A medical specialty of the provider. */
    "https://schema.org/medicalSpecialty"?: SchemaValue<MedicalSpecialty | IdReference, "https://schema.org/medicalSpecialty">;
}
interface MedicalClinicLeaf extends MedicalClinicBase {
    "@type": "https://schema.org/MedicalClinic";
}
/** A facility, often associated with a hospital or medical school, that is devoted to the specific diagnosis and/or healthcare. Previously limited to outpatients but with evolution it may be open to inpatients as well. */
export declare type MedicalClinic = MedicalClinicLeaf | CovidTestingFacility | string;
interface MedicalCodeBase extends MedicalEntityBase, CategoryCodeBase {
    /** A short textual code that uniquely identifies the value. */
    "https://schema.org/codeValue"?: SchemaValue<Text, "https://schema.org/codeValue">;
    /** The coding system, e.g. 'ICD-10'. */
    "https://schema.org/codingSystem"?: SchemaValue<Text, "https://schema.org/codingSystem">;
}
interface MedicalCodeLeaf extends MedicalCodeBase {
    "@type": "https://schema.org/MedicalCode";
}
/** A code for a medical entity. */
export declare type MedicalCode = MedicalCodeLeaf;
interface MedicalConditionBase extends MedicalEntityBase {
    /** The anatomy of the underlying organ system or structures associated with this entity. */
    "https://schema.org/associatedAnatomy"?: SchemaValue<AnatomicalStructure | AnatomicalSystem | SuperficialAnatomy | IdReference, "https://schema.org/associatedAnatomy">;
    /** One of a set of differential diagnoses for the condition. Specifically, a closely-related or competing diagnosis typically considered later in the cognitive process whereby this medical condition is distinguished from others most likely responsible for a similar collection of signs and symptoms to reach the most parsimonious diagnosis or diagnoses in a patient. */
    "https://schema.org/differentialDiagnosis"?: SchemaValue<DDxElement | IdReference, "https://schema.org/differentialDiagnosis">;
    /** Specifying a drug or medicine used in a medication procedure. */
    "https://schema.org/drug"?: SchemaValue<Drug | IdReference, "https://schema.org/drug">;
    /** The characteristics of associated patients, such as age, gender, race etc. */
    "https://schema.org/epidemiology"?: SchemaValue<Text, "https://schema.org/epidemiology">;
    /** The likely outcome in either the short term or long term of the medical condition. */
    "https://schema.org/expectedPrognosis"?: SchemaValue<Text, "https://schema.org/expectedPrognosis">;
    /** The expected progression of the condition if it is not treated and allowed to progress naturally. */
    "https://schema.org/naturalProgression"?: SchemaValue<Text, "https://schema.org/naturalProgression">;
    /** Changes in the normal mechanical, physical, and biochemical functions that are associated with this activity or condition. */
    "https://schema.org/pathophysiology"?: SchemaValue<Text, "https://schema.org/pathophysiology">;
    /** A possible unexpected and unfavorable evolution of a medical condition. Complications may include worsening of the signs or symptoms of the disease, extension of the condition to other organ systems, etc. */
    "https://schema.org/possibleComplication"?: SchemaValue<Text, "https://schema.org/possibleComplication">;
    /** A possible treatment to address this condition, sign or symptom. */
    "https://schema.org/possibleTreatment"?: SchemaValue<MedicalTherapy | IdReference, "https://schema.org/possibleTreatment">;
    /** A preventative therapy used to prevent an initial occurrence of the medical condition, such as vaccination. */
    "https://schema.org/primaryPrevention"?: SchemaValue<MedicalTherapy | IdReference, "https://schema.org/primaryPrevention">;
    /** A modifiable or non-modifiable factor that increases the risk of a patient contracting this condition, e.g. age, coexisting condition. */
    "https://schema.org/riskFactor"?: SchemaValue<MedicalRiskFactor | IdReference, "https://schema.org/riskFactor">;
    /** A preventative therapy used to prevent reoccurrence of the medical condition after an initial episode of the condition. */
    "https://schema.org/secondaryPrevention"?: SchemaValue<MedicalTherapy | IdReference, "https://schema.org/secondaryPrevention">;
    /** A sign or symptom of this condition. Signs are objective or physically observable manifestations of the medical condition while symptoms are the subjective experience of the medical condition. */
    "https://schema.org/signOrSymptom"?: SchemaValue<MedicalSignOrSymptom | IdReference, "https://schema.org/signOrSymptom">;
    /** The stage of the condition, if applicable. */
    "https://schema.org/stage"?: SchemaValue<MedicalConditionStage | IdReference, "https://schema.org/stage">;
    /** The status of the study (enumerated). */
    "https://schema.org/status"?: SchemaValue<EventStatusType | MedicalStudyStatus | Text | IdReference, "https://schema.org/status">;
    /** A medical test typically performed given this condition. */
    "https://schema.org/typicalTest"?: SchemaValue<MedicalTest | IdReference, "https://schema.org/typicalTest">;
}
interface MedicalConditionLeaf extends MedicalConditionBase {
    "@type": "https://schema.org/MedicalCondition";
}
/** Any condition of the human body that affects the normal functioning of a person, whether physically or mentally. Includes diseases, injuries, disabilities, disorders, syndromes, etc. */
export declare type MedicalCondition = MedicalConditionLeaf | InfectiousDisease | MedicalSignOrSymptom;
interface MedicalConditionStageBase extends MedicalEntityBase {
    /** The stage represented as a number, e.g. 3. */
    "https://schema.org/stageAsNumber"?: SchemaValue<Number, "https://schema.org/stageAsNumber">;
    /** The substage, e.g. 'a' for Stage IIIa. */
    "https://schema.org/subStageSuffix"?: SchemaValue<Text, "https://schema.org/subStageSuffix">;
}
interface MedicalConditionStageLeaf extends MedicalConditionStageBase {
    "@type": "https://schema.org/MedicalConditionStage";
}
/** A stage of a medical condition, such as 'Stage IIIa'. */
export declare type MedicalConditionStage = MedicalConditionStageLeaf;
interface MedicalContraindicationLeaf extends MedicalEntityBase {
    "@type": "https://schema.org/MedicalContraindication";
}
/** A condition or factor that serves as a reason to withhold a certain medical therapy. Contraindications can be absolute (there are no reasonable circumstances for undertaking a course of action) or relative (the patient is at higher risk of complications, but that these risks may be outweighed by other considerations or mitigated by other measures). */
export declare type MedicalContraindication = MedicalContraindicationLeaf;
interface MedicalDeviceBase extends MedicalEntityBase {
    /** A possible complication and/or side effect of this therapy. If it is known that an adverse outcome is serious (resulting in death, disability, or permanent damage; requiring hospitalization; or is otherwise life-threatening or requires immediate medical attention), tag it as a seriouseAdverseOutcome instead. */
    "https://schema.org/adverseOutcome"?: SchemaValue<MedicalEntity | IdReference, "https://schema.org/adverseOutcome">;
    /** A contraindication for this therapy. */
    "https://schema.org/contraindication"?: SchemaValue<MedicalContraindication | Text | IdReference, "https://schema.org/contraindication">;
    /** A description of the postoperative procedures, care, and/or followups for this device. */
    "https://schema.org/postOp"?: SchemaValue<Text, "https://schema.org/postOp">;
    /** A description of the workup, testing, and other preparations required before implanting this device. */
    "https://schema.org/preOp"?: SchemaValue<Text, "https://schema.org/preOp">;
    /** A description of the procedure involved in setting up, using, and/or installing the device. */
    "https://schema.org/procedure"?: SchemaValue<Text, "https://schema.org/procedure">;
    /** A possible serious complication and/or serious side effect of this therapy. Serious adverse outcomes include those that are life-threatening; result in death, disability, or permanent damage; require hospitalization or prolong existing hospitalization; cause congenital anomalies or birth defects; or jeopardize the patient and may require medical or surgical intervention to prevent one of the outcomes in this definition. */
    "https://schema.org/seriousAdverseOutcome"?: SchemaValue<MedicalEntity | IdReference, "https://schema.org/seriousAdverseOutcome">;
}
interface MedicalDeviceLeaf extends MedicalDeviceBase {
    "@type": "https://schema.org/MedicalDevice";
}
/** Any object used in a medical capacity, such as to diagnose or treat a patient. */
export declare type MedicalDevice = MedicalDeviceLeaf;
interface MedicalDevicePurposeLeaf extends EnumerationBase {
    "@type": "https://schema.org/MedicalDevicePurpose";
}
/** Categories of medical devices, organized by the purpose or intended use of the device. */
export declare type MedicalDevicePurpose = "https://schema.org/Diagnostic" | "https://schema.org/Therapeutic" | MedicalDevicePurposeLeaf;
interface MedicalEntityBase extends ThingBase {
    /** A medical code for the entity, taken from a controlled vocabulary or ontology such as ICD-9, DiseasesDB, MeSH, SNOMED-CT, RxNorm, etc. */
    "https://schema.org/code"?: SchemaValue<MedicalCode | IdReference, "https://schema.org/code">;
    /** A medical guideline related to this entity. */
    "https://schema.org/guideline"?: SchemaValue<MedicalGuideline | IdReference, "https://schema.org/guideline">;
    /** The drug or supplement's legal status, including any controlled substance schedules that apply. */
    "https://schema.org/legalStatus"?: SchemaValue<DrugLegalStatus | MedicalEnumeration | Text | IdReference, "https://schema.org/legalStatus">;
    /** The system of medicine that includes this MedicalEntity, for example 'evidence-based', 'homeopathic', 'chiropractic', etc. */
    "https://schema.org/medicineSystem"?: SchemaValue<MedicineSystem | IdReference, "https://schema.org/medicineSystem">;
    /** If applicable, the organization that officially recognizes this entity as part of its endorsed system of medicine. */
    "https://schema.org/recognizingAuthority"?: SchemaValue<Organization | IdReference, "https://schema.org/recognizingAuthority">;
    /** If applicable, a medical specialty in which this entity is relevant. */
    "https://schema.org/relevantSpecialty"?: SchemaValue<MedicalSpecialty | IdReference, "https://schema.org/relevantSpecialty">;
    /** A medical study or trial related to this entity. */
    "https://schema.org/study"?: SchemaValue<MedicalStudy | IdReference, "https://schema.org/study">;
}
interface MedicalEntityLeaf extends MedicalEntityBase {
    "@type": "https://schema.org/MedicalEntity";
}
/** The most generic type of entity related to health and the practice of medicine. */
export declare type MedicalEntity = MedicalEntityLeaf | AnatomicalStructure | AnatomicalSystem | DrugClass | DrugCost | LifestyleModification | MedicalCause | MedicalCondition | MedicalContraindication | MedicalDevice | MedicalGuideline | MedicalIndication | MedicalIntangible | MedicalProcedure | MedicalRiskEstimator | MedicalRiskFactor | MedicalStudy | MedicalTest | Substance | SuperficialAnatomy;
interface MedicalEnumerationLeaf extends EnumerationBase {
    "@type": "https://schema.org/MedicalEnumeration";
}
/** Enumerations related to health and the practice of medicine: A concept that is used to attribute a quality to another concept, as a qualifier, a collection of items or a listing of all of the elements of a set in medicine practice. */
export declare type MedicalEnumeration = MedicalEnumerationLeaf | DrugCostCategory | DrugPregnancyCategory | DrugPrescriptionStatus | InfectiousAgentClass | MedicalAudienceType | MedicalDevicePurpose | MedicalEvidenceLevel | MedicalImagingTechnique | MedicalObservationalStudyDesign | MedicalProcedureType | MedicalSpecialty | MedicalStudyStatus | MedicalTrialDesign | MedicineSystem | PhysicalExam;
interface MedicalEvidenceLevelLeaf extends EnumerationBase {
    "@type": "https://schema.org/MedicalEvidenceLevel";
}
/** Level of evidence for a medical guideline. Enumerated type. */
export declare type MedicalEvidenceLevel = "https://schema.org/EvidenceLevelA" | "https://schema.org/EvidenceLevelB" | "https://schema.org/EvidenceLevelC" | MedicalEvidenceLevelLeaf;
interface MedicalGuidelineBase extends MedicalEntityBase {
    /** Strength of evidence of the data used to formulate the guideline (enumerated). */
    "https://schema.org/evidenceLevel"?: SchemaValue<MedicalEvidenceLevel | IdReference, "https://schema.org/evidenceLevel">;
    /** Source of the data used to formulate the guidance, e.g. RCT, consensus opinion, etc. */
    "https://schema.org/evidenceOrigin"?: SchemaValue<Text, "https://schema.org/evidenceOrigin">;
    /** Date on which this guideline's recommendation was made. */
    "https://schema.org/guidelineDate"?: SchemaValue<Date, "https://schema.org/guidelineDate">;
    /** The medical conditions, treatments, etc. that are the subject of the guideline. */
    "https://schema.org/guidelineSubject"?: SchemaValue<MedicalEntity | IdReference, "https://schema.org/guidelineSubject">;
}
interface MedicalGuidelineLeaf extends MedicalGuidelineBase {
    "@type": "https://schema.org/MedicalGuideline";
}
/** Any recommendation made by a standard society (e.g. ACC/AHA) or consensus statement that denotes how to diagnose and treat a particular condition. Note: this type should be used to tag the actual guideline recommendation; if the guideline recommendation occurs in a larger scholarly article, use MedicalScholarlyArticle to tag the overall article, not this type. Note also: the organization making the recommendation should be captured in the recognizingAuthority base property of MedicalEntity. */
export declare type MedicalGuideline = MedicalGuidelineLeaf | MedicalGuidelineContraindication | MedicalGuidelineRecommendation;
interface MedicalGuidelineContraindicationLeaf extends MedicalGuidelineBase {
    "@type": "https://schema.org/MedicalGuidelineContraindication";
}
/** A guideline contraindication that designates a process as harmful and where quality of the data supporting the contraindication is sound. */
export declare type MedicalGuidelineContraindication = MedicalGuidelineContraindicationLeaf;
interface MedicalGuidelineRecommendationBase extends MedicalGuidelineBase {
    /** Strength of the guideline's recommendation (e.g. 'class I'). */
    "https://schema.org/recommendationStrength"?: SchemaValue<Text, "https://schema.org/recommendationStrength">;
}
interface MedicalGuidelineRecommendationLeaf extends MedicalGuidelineRecommendationBase {
    "@type": "https://schema.org/MedicalGuidelineRecommendation";
}
/** A guideline recommendation that is regarded as efficacious and where quality of the data supporting the recommendation is sound. */
export declare type MedicalGuidelineRecommendation = MedicalGuidelineRecommendationLeaf;
interface MedicalImagingTechniqueLeaf extends EnumerationBase {
    "@type": "https://schema.org/MedicalImagingTechnique";
}
/** Any medical imaging modality typically used for diagnostic purposes. Enumerated type. */
export declare type MedicalImagingTechnique = "https://schema.org/CT" | "https://schema.org/MRI" | "https://schema.org/PET" | "https://schema.org/Radiography" | "https://schema.org/Ultrasound" | "https://schema.org/XRay" | MedicalImagingTechniqueLeaf;
interface MedicalIndicationLeaf extends MedicalEntityBase {
    "@type": "https://schema.org/MedicalIndication";
}
/** A condition or factor that indicates use of a medical therapy, including signs, symptoms, risk factors, anatomical states, etc. */
export declare type MedicalIndication = MedicalIndicationLeaf | ApprovedIndication | PreventionIndication | TreatmentIndication;
interface MedicalIntangibleLeaf extends MedicalEntityBase {
    "@type": "https://schema.org/MedicalIntangible";
}
/** A utility class that serves as the umbrella for a number of 'intangible' things in the medical space. */
export declare type MedicalIntangible = MedicalIntangibleLeaf | DDxElement | DoseSchedule | DrugLegalStatus | DrugStrength | MedicalCode | MedicalConditionStage;
interface MedicalObservationalStudyBase extends MedicalStudyBase {
    /** Specifics about the observational study design (enumerated). */
    "https://schema.org/studyDesign"?: SchemaValue<MedicalObservationalStudyDesign | IdReference, "https://schema.org/studyDesign">;
}
interface MedicalObservationalStudyLeaf extends MedicalObservationalStudyBase {
    "@type": "https://schema.org/MedicalObservationalStudy";
}
/** An observational study is a type of medical study that attempts to infer the possible effect of a treatment through observation of a cohort of subjects over a period of time. In an observational study, the assignment of subjects into treatment groups versus control groups is outside the control of the investigator. This is in contrast with controlled studies, such as the randomized controlled trials represented by MedicalTrial, where each subject is randomly assigned to a treatment group or a control group before the start of the treatment. */
export declare type MedicalObservationalStudy = MedicalObservationalStudyLeaf;
interface MedicalObservationalStudyDesignLeaf extends EnumerationBase {
    "@type": "https://schema.org/MedicalObservationalStudyDesign";
}
/** Design models for observational medical studies. Enumerated type. */
export declare type MedicalObservationalStudyDesign = "https://schema.org/CaseSeries" | "https://schema.org/CohortStudy" | "https://schema.org/CrossSectional" | "https://schema.org/Longitudinal" | "https://schema.org/Observational" | "https://schema.org/Registry" | MedicalObservationalStudyDesignLeaf;
interface MedicalOrganizationBase extends OrganizationBase {
    /** Name or unique ID of network. (Networks are often reused across different insurance plans). */
    "https://schema.org/healthPlanNetworkId"?: SchemaValue<Text, "https://schema.org/healthPlanNetworkId">;
    /** Whether the provider is accepting new patients. */
    "https://schema.org/isAcceptingNewPatients"?: SchemaValue<Boolean, "https://schema.org/isAcceptingNewPatients">;
    /** A medical specialty of the provider. */
    "https://schema.org/medicalSpecialty"?: SchemaValue<MedicalSpecialty | IdReference, "https://schema.org/medicalSpecialty">;
}
interface MedicalOrganizationLeaf extends MedicalOrganizationBase {
    "@type": "https://schema.org/MedicalOrganization";
}
/** A medical organization (physical or not), such as hospital, institution or clinic. */
export declare type MedicalOrganization = MedicalOrganizationLeaf | Dentist | DiagnosticLab | Hospital | MedicalClinic | Pharmacy | Physician | VeterinaryCare | string;
interface MedicalProcedureBase extends MedicalEntityBase {
    /** Location in the body of the anatomical structure. */
    "https://schema.org/bodyLocation"?: SchemaValue<Text, "https://schema.org/bodyLocation">;
    /** Typical or recommended followup care after the procedure is performed. */
    "https://schema.org/followup"?: SchemaValue<Text, "https://schema.org/followup">;
    /** How the procedure is performed. */
    "https://schema.org/howPerformed"?: SchemaValue<Text, "https://schema.org/howPerformed">;
    /** Typical preparation that a patient must undergo before having the procedure performed. */
    "https://schema.org/preparation"?: SchemaValue<MedicalEntity | Text | IdReference, "https://schema.org/preparation">;
    /** The type of procedure, for example Surgical, Noninvasive, or Percutaneous. */
    "https://schema.org/procedureType"?: SchemaValue<MedicalProcedureType | IdReference, "https://schema.org/procedureType">;
    /** The status of the study (enumerated). */
    "https://schema.org/status"?: SchemaValue<EventStatusType | MedicalStudyStatus | Text | IdReference, "https://schema.org/status">;
}
interface MedicalProcedureLeaf extends MedicalProcedureBase {
    "@type": "https://schema.org/MedicalProcedure";
}
/** A process of care used in either a diagnostic, therapeutic, preventive or palliative capacity that relies on invasive (surgical), non-invasive, or other techniques. */
export declare type MedicalProcedure = MedicalProcedureLeaf | DiagnosticProcedure | PalliativeProcedure | PhysicalExam | SurgicalProcedure | TherapeuticProcedure;
interface MedicalProcedureTypeLeaf extends EnumerationBase {
    "@type": "https://schema.org/MedicalProcedureType";
}
/** An enumeration that describes different types of medical procedures. */
export declare type MedicalProcedureType = "https://schema.org/NoninvasiveProcedure" | "https://schema.org/PercutaneousProcedure" | MedicalProcedureTypeLeaf;
interface MedicalRiskCalculatorLeaf extends MedicalRiskEstimatorBase {
    "@type": "https://schema.org/MedicalRiskCalculator";
}
/** A complex mathematical calculation requiring an online calculator, used to assess prognosis. Note: use the url property of Thing to record any URLs for online calculators. */
export declare type MedicalRiskCalculator = MedicalRiskCalculatorLeaf;
interface MedicalRiskEstimatorBase extends MedicalEntityBase {
    /** The condition, complication, or symptom whose risk is being estimated. */
    "https://schema.org/estimatesRiskOf"?: SchemaValue<MedicalEntity | IdReference, "https://schema.org/estimatesRiskOf">;
    /** A modifiable or non-modifiable risk factor included in the calculation, e.g. age, coexisting condition. */
    "https://schema.org/includedRiskFactor"?: SchemaValue<MedicalRiskFactor | IdReference, "https://schema.org/includedRiskFactor">;
}
interface MedicalRiskEstimatorLeaf extends MedicalRiskEstimatorBase {
    "@type": "https://schema.org/MedicalRiskEstimator";
}
/** Any rule set or interactive tool for estimating the risk of developing a complication or condition. */
export declare type MedicalRiskEstimator = MedicalRiskEstimatorLeaf | MedicalRiskCalculator | MedicalRiskScore;
interface MedicalRiskFactorBase extends MedicalEntityBase {
    /** The condition, complication, etc. influenced by this factor. */
    "https://schema.org/increasesRiskOf"?: SchemaValue<MedicalEntity | IdReference, "https://schema.org/increasesRiskOf">;
}
interface MedicalRiskFactorLeaf extends MedicalRiskFactorBase {
    "@type": "https://schema.org/MedicalRiskFactor";
}
/** A risk factor is anything that increases a person's likelihood of developing or contracting a disease, medical condition, or complication. */
export declare type MedicalRiskFactor = MedicalRiskFactorLeaf;
interface MedicalRiskScoreBase extends MedicalRiskEstimatorBase {
    /** The algorithm or rules to follow to compute the score. */
    "https://schema.org/algorithm"?: SchemaValue<Text, "https://schema.org/algorithm">;
}
interface MedicalRiskScoreLeaf extends MedicalRiskScoreBase {
    "@type": "https://schema.org/MedicalRiskScore";
}
/** A simple system that adds up the number of risk factors to yield a score that is associated with prognosis, e.g. CHAD score, TIMI risk score. */
export declare type MedicalRiskScore = MedicalRiskScoreLeaf;
interface MedicalScholarlyArticleBase extends ArticleBase {
    /** The type of the medical article, taken from the US NLM MeSH publication type catalog. See also {@link http://www.nlm.nih.gov/mesh/pubtypes.html MeSH documentation}. */
    "https://schema.org/publicationType"?: SchemaValue<Text, "https://schema.org/publicationType">;
}
interface MedicalScholarlyArticleLeaf extends MedicalScholarlyArticleBase {
    "@type": "https://schema.org/MedicalScholarlyArticle";
}
/** A scholarly article in the medical domain. */
export declare type MedicalScholarlyArticle = MedicalScholarlyArticleLeaf;
interface MedicalSignBase extends MedicalSignOrSymptomBase {
    /** A physical examination that can identify this sign. */
    "https://schema.org/identifyingExam"?: SchemaValue<PhysicalExam | IdReference, "https://schema.org/identifyingExam">;
    /** A diagnostic test that can identify this sign. */
    "https://schema.org/identifyingTest"?: SchemaValue<MedicalTest | IdReference, "https://schema.org/identifyingTest">;
}
interface MedicalSignLeaf extends MedicalSignBase {
    "@type": "https://schema.org/MedicalSign";
}
/** Any physical manifestation of a person's medical condition discoverable by objective diagnostic tests or physical examination. */
export declare type MedicalSign = MedicalSignLeaf | VitalSign;
interface MedicalSignOrSymptomBase extends MedicalConditionBase {
    /** A possible treatment to address this condition, sign or symptom. */
    "https://schema.org/possibleTreatment"?: SchemaValue<MedicalTherapy | IdReference, "https://schema.org/possibleTreatment">;
}
interface MedicalSignOrSymptomLeaf extends MedicalSignOrSymptomBase {
    "@type": "https://schema.org/MedicalSignOrSymptom";
}
/** Any feature associated or not with a medical condition. In medicine a symptom is generally subjective while a sign is objective. */
export declare type MedicalSignOrSymptom = MedicalSignOrSymptomLeaf | MedicalSign | MedicalSymptom;
interface MedicalSpecialtyBase extends EnumerationBase, EnumerationBase {
}
interface MedicalSpecialtyLeaf extends MedicalSpecialtyBase {
    "@type": "https://schema.org/MedicalSpecialty";
}
/** Any specific branch of medical science or practice. Medical specialities include clinical specialties that pertain to particular organ systems and their respective disease states, as well as allied health specialties. Enumerated type. */
export declare type MedicalSpecialty = "https://schema.org/Anesthesia" | "https://schema.org/Cardiovascular" | "https://schema.org/CommunityHealth" | "https://schema.org/Dentistry" | "https://schema.org/Dermatologic" | "https://schema.org/Dermatology" | "https://schema.org/DietNutrition" | "https://schema.org/Emergency" | "https://schema.org/Endocrine" | "https://schema.org/Gastroenterologic" | "https://schema.org/Genetic" | "https://schema.org/Geriatric" | "https://schema.org/Gynecologic" | "https://schema.org/Hematologic" | "https://schema.org/Infectious" | "https://schema.org/LaboratoryScience" | "https://schema.org/Midwifery" | "https://schema.org/Musculoskeletal" | "https://schema.org/Neurologic" | "https://schema.org/Nursing" | "https://schema.org/Obstetric" | "https://schema.org/Oncologic" | "https://schema.org/Optometric" | "https://schema.org/Otolaryngologic" | "https://schema.org/Pathology" | "https://schema.org/Pediatric" | "https://schema.org/PharmacySpecialty" | "https://schema.org/Physiotherapy" | "https://schema.org/PlasticSurgery" | "https://schema.org/Podiatric" | "https://schema.org/PrimaryCare" | "https://schema.org/Psychiatric" | "https://schema.org/PublicHealth" | "https://schema.org/Pulmonary" | "https://schema.org/Radiography" | "https://schema.org/Renal" | "https://schema.org/RespiratoryTherapy" | "https://schema.org/Rheumatologic" | "https://schema.org/SpeechPathology" | "https://schema.org/Surgical" | "https://schema.org/Toxicologic" | "https://schema.org/Urologic" | MedicalSpecialtyLeaf;
interface MedicalStudyBase extends MedicalEntityBase {
    /** Specifying the health condition(s) of a patient, medical study, or other target audience. */
    "https://schema.org/healthCondition"?: SchemaValue<MedicalCondition | IdReference, "https://schema.org/healthCondition">;
    /** A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event. */
    "https://schema.org/sponsor"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/sponsor">;
    /** The status of the study (enumerated). */
    "https://schema.org/status"?: SchemaValue<EventStatusType | MedicalStudyStatus | Text | IdReference, "https://schema.org/status">;
    /** The location in which the study is taking/took place. */
    "https://schema.org/studyLocation"?: SchemaValue<AdministrativeArea | IdReference, "https://schema.org/studyLocation">;
    /** A subject of the study, i.e. one of the medical conditions, therapies, devices, drugs, etc. investigated by the study. */
    "https://schema.org/studySubject"?: SchemaValue<MedicalEntity | IdReference, "https://schema.org/studySubject">;
}
interface MedicalStudyLeaf extends MedicalStudyBase {
    "@type": "https://schema.org/MedicalStudy";
}
/** A medical study is an umbrella type covering all kinds of research studies relating to human medicine or health, including observational studies and interventional trials and registries, randomized, controlled or not. When the specific type of study is known, use one of the extensions of this type, such as MedicalTrial or MedicalObservationalStudy. Also, note that this type should be used to mark up data that describes the study itself; to tag an article that publishes the results of a study, use MedicalScholarlyArticle. Note: use the code property of MedicalEntity to store study IDs, e.g. clinicaltrials.gov ID. */
export declare type MedicalStudy = MedicalStudyLeaf | MedicalObservationalStudy | MedicalTrial;
interface MedicalStudyStatusLeaf extends EnumerationBase {
    "@type": "https://schema.org/MedicalStudyStatus";
}
/** The status of a medical study. Enumerated type. */
export declare type MedicalStudyStatus = "https://schema.org/ActiveNotRecruiting" | "https://schema.org/Completed" | "https://schema.org/EnrollingByInvitation" | "https://schema.org/NotYetRecruiting" | "https://schema.org/Recruiting" | "https://schema.org/ResultsAvailable" | "https://schema.org/ResultsNotAvailable" | "https://schema.org/Suspended" | "https://schema.org/Terminated" | "https://schema.org/Withdrawn" | MedicalStudyStatusLeaf;
interface MedicalSymptomLeaf extends MedicalSignOrSymptomBase {
    "@type": "https://schema.org/MedicalSymptom";
}
/** Any complaint sensed and expressed by the patient (therefore defined as subjective) like stomachache, lower-back pain, or fatigue. */
export declare type MedicalSymptom = MedicalSymptomLeaf;
interface MedicalTestBase extends MedicalEntityBase {
    /** Drugs that affect the test's results. */
    "https://schema.org/affectedBy"?: SchemaValue<Drug | IdReference, "https://schema.org/affectedBy">;
    /** Range of acceptable values for a typical patient, when applicable. */
    "https://schema.org/normalRange"?: SchemaValue<MedicalEnumeration | Text | IdReference, "https://schema.org/normalRange">;
    /** A sign detected by the test. */
    "https://schema.org/signDetected"?: SchemaValue<MedicalSign | IdReference, "https://schema.org/signDetected">;
    /** A condition the test is used to diagnose. */
    "https://schema.org/usedToDiagnose"?: SchemaValue<MedicalCondition | IdReference, "https://schema.org/usedToDiagnose">;
    /** Device used to perform the test. */
    "https://schema.org/usesDevice"?: SchemaValue<MedicalDevice | IdReference, "https://schema.org/usesDevice">;
}
interface MedicalTestLeaf extends MedicalTestBase {
    "@type": "https://schema.org/MedicalTest";
}
/** Any medical test, typically performed for diagnostic purposes. */
export declare type MedicalTest = MedicalTestLeaf | BloodTest | ImagingTest | MedicalTestPanel | PathologyTest;
interface MedicalTestPanelBase extends MedicalTestBase {
    /** A component test of the panel. */
    "https://schema.org/subTest"?: SchemaValue<MedicalTest | IdReference, "https://schema.org/subTest">;
}
interface MedicalTestPanelLeaf extends MedicalTestPanelBase {
    "@type": "https://schema.org/MedicalTestPanel";
}
/** Any collection of tests commonly ordered together. */
export declare type MedicalTestPanel = MedicalTestPanelLeaf;
interface MedicalTherapyBase extends TherapeuticProcedureBase {
    /** A contraindication for this therapy. */
    "https://schema.org/contraindication"?: SchemaValue<MedicalContraindication | Text | IdReference, "https://schema.org/contraindication">;
    /** A therapy that duplicates or overlaps this one. */
    "https://schema.org/duplicateTherapy"?: SchemaValue<MedicalTherapy | IdReference, "https://schema.org/duplicateTherapy">;
    /** A possible serious complication and/or serious side effect of this therapy. Serious adverse outcomes include those that are life-threatening; result in death, disability, or permanent damage; require hospitalization or prolong existing hospitalization; cause congenital anomalies or birth defects; or jeopardize the patient and may require medical or surgical intervention to prevent one of the outcomes in this definition. */
    "https://schema.org/seriousAdverseOutcome"?: SchemaValue<MedicalEntity | IdReference, "https://schema.org/seriousAdverseOutcome">;
}
interface MedicalTherapyLeaf extends MedicalTherapyBase {
    "@type": "https://schema.org/MedicalTherapy";
}
/** Any medical intervention designed to prevent, treat, and cure human diseases and medical conditions, including both curative and palliative therapies. Medical therapies are typically processes of care relying upon pharmacotherapy, behavioral therapy, supportive therapy (with fluid or nutrition for example), or detoxification (e.g. hemodialysis) aimed at improving or preventing a health condition. */
export declare type MedicalTherapy = MedicalTherapyLeaf | OccupationalTherapy | PalliativeProcedure | PhysicalTherapy | RadiationTherapy;
interface MedicalTrialBase extends MedicalStudyBase {
    /** Specifics about the trial design (enumerated). */
    "https://schema.org/trialDesign"?: SchemaValue<MedicalTrialDesign | IdReference, "https://schema.org/trialDesign">;
}
interface MedicalTrialLeaf extends MedicalTrialBase {
    "@type": "https://schema.org/MedicalTrial";
}
/** A medical trial is a type of medical study that uses scientific process used to compare the safety and efficacy of medical therapies or medical procedures. In general, medical trials are controlled and subjects are allocated at random to the different treatment and/or control groups. */
export declare type MedicalTrial = MedicalTrialLeaf;
interface MedicalTrialDesignLeaf extends EnumerationBase {
    "@type": "https://schema.org/MedicalTrialDesign";
}
/** Design models for medical trials. Enumerated type. */
export declare type MedicalTrialDesign = "https://schema.org/DoubleBlindedTrial" | "https://schema.org/InternationalTrial" | "https://schema.org/MultiCenterTrial" | "https://schema.org/OpenTrial" | "https://schema.org/PlaceboControlledTrial" | "https://schema.org/RandomizedTrial" | "https://schema.org/SingleBlindedTrial" | "https://schema.org/SingleCenterTrial" | "https://schema.org/TripleBlindedTrial" | MedicalTrialDesignLeaf;
interface MedicalWebPageBase extends WebPageBase {
    /**
     * An aspect of medical practice that is considered on the page, such as 'diagnosis', 'treatment', 'causes', 'prognosis', 'etiology', 'epidemiology', etc.
     *
     * @deprecated Consider using https://schema.org/mainContentOfPage instead.
     */
    "https://schema.org/aspect"?: SchemaValue<Text, "https://schema.org/aspect">;
    /** Medical audience for page. */
    "https://schema.org/medicalAudience"?: SchemaValue<MedicalAudience | MedicalAudienceType | IdReference, "https://schema.org/medicalAudience">;
}
interface MedicalWebPageLeaf extends MedicalWebPageBase {
    "@type": "https://schema.org/MedicalWebPage";
}
/** A web page that provides medical information. */
export declare type MedicalWebPage = MedicalWebPageLeaf;
interface MedicineSystemLeaf extends EnumerationBase {
    "@type": "https://schema.org/MedicineSystem";
}
/** Systems of medical practice. */
export declare type MedicineSystem = "https://schema.org/Ayurvedic" | "https://schema.org/Chiropractic" | "https://schema.org/Homeopathic" | "https://schema.org/Osteopathic" | "https://schema.org/TraditionalChinese" | "https://schema.org/WesternConventional" | MedicineSystemLeaf;
interface MeetingRoomLeaf extends AccommodationBase {
    "@type": "https://schema.org/MeetingRoom";
}
/**
 * A meeting room, conference room, or conference hall is a room provided for singular events such as business conferences and meetings (Source: Wikipedia, the free encyclopedia, see {@link http://en.wikipedia.org/wiki/Conference_hall http://en.wikipedia.org/wiki/Conference_hall}).
 *
 * See also the {@link /docs/hotels.html dedicated document on the use of schema.org for marking up hotels and other forms of accommodations}.
 */
export declare type MeetingRoom = MeetingRoomLeaf | string;
interface MensClothingStoreLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/MensClothingStore";
}
/** A men's clothing store. */
export declare type MensClothingStore = MensClothingStoreLeaf | string;
interface MenuBase extends CreativeWorkBase {
    /** A food or drink item contained in a menu or menu section. */
    "https://schema.org/hasMenuItem"?: SchemaValue<MenuItem | IdReference, "https://schema.org/hasMenuItem">;
    /** A subgrouping of the menu (by dishes, course, serving time period, etc.). */
    "https://schema.org/hasMenuSection"?: SchemaValue<MenuSection | IdReference, "https://schema.org/hasMenuSection">;
}
interface MenuLeaf extends MenuBase {
    "@type": "https://schema.org/Menu";
}
/** A structured representation of food or drink items available from a FoodEstablishment. */
export declare type Menu = MenuLeaf;
interface MenuItemBase extends ThingBase {
    /** Additional menu item(s) such as a side dish of salad or side order of fries that can be added to this menu item. Additionally it can be a menu section containing allowed add-on menu items for this menu item. */
    "https://schema.org/menuAddOn"?: SchemaValue<MenuItem | MenuSection | IdReference, "https://schema.org/menuAddOn">;
    /** Nutrition information about the recipe or menu item. */
    "https://schema.org/nutrition"?: SchemaValue<NutritionInformation | IdReference, "https://schema.org/nutrition">;
    /** An offer to provide this item—for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use {@link https://schema.org/businessFunction businessFunction} to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a {@link https://schema.org/Demand Demand}. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer. */
    "https://schema.org/offers"?: SchemaValue<Demand | Offer | IdReference, "https://schema.org/offers">;
    /** Indicates a dietary restriction or guideline for which this recipe or menu item is suitable, e.g. diabetic, halal etc. */
    "https://schema.org/suitableForDiet"?: SchemaValue<RestrictedDiet | IdReference, "https://schema.org/suitableForDiet">;
}
interface MenuItemLeaf extends MenuItemBase {
    "@type": "https://schema.org/MenuItem";
}
/** A food or drink item listed in a menu or menu section. */
export declare type MenuItem = MenuItemLeaf;
interface MenuSectionBase extends CreativeWorkBase {
    /** A food or drink item contained in a menu or menu section. */
    "https://schema.org/hasMenuItem"?: SchemaValue<MenuItem | IdReference, "https://schema.org/hasMenuItem">;
    /** A subgrouping of the menu (by dishes, course, serving time period, etc.). */
    "https://schema.org/hasMenuSection"?: SchemaValue<MenuSection | IdReference, "https://schema.org/hasMenuSection">;
}
interface MenuSectionLeaf extends MenuSectionBase {
    "@type": "https://schema.org/MenuSection";
}
/** A sub-grouping of food or drink items in a menu. E.g. courses (such as 'Dinner', 'Breakfast', etc.), specific type of dishes (such as 'Meat', 'Vegan', 'Drinks', etc.), or some other classification made by the menu provider. */
export declare type MenuSection = MenuSectionLeaf;
interface MerchantReturnEnumerationLeaf extends EnumerationBase {
    "@type": "https://schema.org/MerchantReturnEnumeration";
}
/** Enumerates several kinds of product return policies. */
export declare type MerchantReturnEnumeration = "https://schema.org/MerchantReturnFiniteReturnWindow" | "https://schema.org/MerchantReturnNotPermitted" | "https://schema.org/MerchantReturnUnlimitedWindow" | "https://schema.org/MerchantReturnUnspecified" | MerchantReturnEnumerationLeaf;
interface MerchantReturnPolicyBase extends ThingBase {
    /**
     * A property-value pair representing an additional characteristics of the entitity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.
     *
     * Note: Publishers should be aware that applications designed to use specific schema.org properties (e.g. https://schema.org/width, https://schema.org/color, https://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.
     */
    "https://schema.org/additionalProperty"?: SchemaValue<PropertyValue | IdReference, "https://schema.org/additionalProperty">;
    /** The type of return fees if the product is returned due to customer remorse. */
    "https://schema.org/customerRemorseReturnFees"?: SchemaValue<ReturnFeesEnumeration | IdReference, "https://schema.org/customerRemorseReturnFees">;
    /** The method (from an enumeration) by which the customer obtains a return shipping label for a product returned due to customer remorse. */
    "https://schema.org/customerRemorseReturnLabelSource"?: SchemaValue<ReturnLabelSourceEnumeration | IdReference, "https://schema.org/customerRemorseReturnLabelSource">;
    /** The amount of shipping costs if a product is returned due to customer remorse. Applicable when property {@link https://schema.org/customerRemorseReturnFees customerRemorseReturnFees} equals {@link https://schema.org/ReturnShippingFees ReturnShippingFees}. */
    "https://schema.org/customerRemorseReturnShippingFeesAmount"?: SchemaValue<MonetaryAmount | IdReference, "https://schema.org/customerRemorseReturnShippingFeesAmount">;
    /** Are in-store returns offered? (for more advanced return methods use the {@link https://schema.org/returnMethod returnMethod} property) */
    "https://schema.org/inStoreReturnsOffered"?: SchemaValue<Boolean, "https://schema.org/inStoreReturnsOffered">;
    /** A predefined value from OfferItemCondition specifying the condition of the product or service, or the products or services included in the offer. Also used for product return policies to specify the condition of products accepted for returns. */
    "https://schema.org/itemCondition"?: SchemaValue<OfferItemCondition | IdReference, "https://schema.org/itemCondition">;
    /** The type of return fees for returns of defect products. */
    "https://schema.org/itemDefectReturnFees"?: SchemaValue<ReturnFeesEnumeration | IdReference, "https://schema.org/itemDefectReturnFees">;
    /** The method (from an enumeration) by which the customer obtains a return shipping label for a defect product. */
    "https://schema.org/itemDefectReturnLabelSource"?: SchemaValue<ReturnLabelSourceEnumeration | IdReference, "https://schema.org/itemDefectReturnLabelSource">;
    /** Amount of shipping costs for defect product returns. Applicable when property {@link https://schema.org/itemDefectReturnFees itemDefectReturnFees} equals {@link https://schema.org/ReturnShippingFees ReturnShippingFees}. */
    "https://schema.org/itemDefectReturnShippingFeesAmount"?: SchemaValue<MonetaryAmount | IdReference, "https://schema.org/itemDefectReturnShippingFeesAmount">;
    /** Specifies either a fixed return date or the number of days (from the delivery date) that a product can be returned. Used when the {@link https://schema.org/returnPolicyCategory returnPolicyCategory} property is specified as {@link https://schema.org/MerchantReturnFiniteReturnWindow MerchantReturnFiniteReturnWindow}. */
    "https://schema.org/merchantReturnDays"?: SchemaValue<Date | DateTime | Integer, "https://schema.org/merchantReturnDays">;
    /** Specifies a Web page or service by URL, for product returns. */
    "https://schema.org/merchantReturnLink"?: SchemaValue<URL, "https://schema.org/merchantReturnLink">;
    /** A refund type, from an enumerated list. */
    "https://schema.org/refundType"?: SchemaValue<RefundTypeEnumeration | IdReference, "https://schema.org/refundType">;
    /** Use {@link https://schema.org/MonetaryAmount MonetaryAmount} to specify a fixed restocking fee for product returns, or use {@link https://schema.org/Number Number} to specify a percentage of the product price paid by the customer. */
    "https://schema.org/restockingFee"?: SchemaValue<MonetaryAmount | Number | IdReference, "https://schema.org/restockingFee">;
    /** The type of return fees for purchased products (for any return reason) */
    "https://schema.org/returnFees"?: SchemaValue<ReturnFeesEnumeration | IdReference, "https://schema.org/returnFees">;
    /** The method (from an enumeration) by which the customer obtains a return shipping label for a product returned for any reason. */
    "https://schema.org/returnLabelSource"?: SchemaValue<ReturnLabelSourceEnumeration | IdReference, "https://schema.org/returnLabelSource">;
    /** The type of return method offered, specified from an enumeration. */
    "https://schema.org/returnMethod"?: SchemaValue<ReturnMethodEnumeration | IdReference, "https://schema.org/returnMethod">;
    /** Specifies an applicable return policy (from an enumeration). */
    "https://schema.org/returnPolicyCategory"?: SchemaValue<MerchantReturnEnumeration | IdReference, "https://schema.org/returnPolicyCategory">;
    /** The country where the product has to be sent to for returns, for example "Ireland" using the {@link https://schema.org/name name} property of {@link https://schema.org/Country Country}. You can also provide the two-letter {@link http://en.wikipedia.org/wiki/ISO_3166-1 ISO 3166-1 alpha-2 country code}. Note that this can be different from the country where the product was originally shipped from or sent too. */
    "https://schema.org/returnPolicyCountry"?: SchemaValue<Country | Text | IdReference, "https://schema.org/returnPolicyCountry">;
    /** Seasonal override of a return policy. */
    "https://schema.org/returnPolicySeasonalOverride"?: SchemaValue<MerchantReturnPolicySeasonalOverride | IdReference, "https://schema.org/returnPolicySeasonalOverride">;
    /** Amount of shipping costs for product returns (for any reason). Applicable when property {@link https://schema.org/returnFees returnFees} equals {@link https://schema.org/ReturnShippingFees ReturnShippingFees}. */
    "https://schema.org/returnShippingFeesAmount"?: SchemaValue<MonetaryAmount | IdReference, "https://schema.org/returnShippingFeesAmount">;
}
interface MerchantReturnPolicyLeaf extends MerchantReturnPolicyBase {
    "@type": "https://schema.org/MerchantReturnPolicy";
}
/** A MerchantReturnPolicy provides information about product return policies associated with an {@link https://schema.org/Organization Organization}, {@link https://schema.org/Product Product}, or {@link https://schema.org/Offer Offer}. */
export declare type MerchantReturnPolicy = MerchantReturnPolicyLeaf;
interface MerchantReturnPolicySeasonalOverrideBase extends ThingBase {
    /** The end date and time of the item (in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}). */
    "https://schema.org/endDate"?: SchemaValue<Date | DateTime, "https://schema.org/endDate">;
    /** Specifies either a fixed return date or the number of days (from the delivery date) that a product can be returned. Used when the {@link https://schema.org/returnPolicyCategory returnPolicyCategory} property is specified as {@link https://schema.org/MerchantReturnFiniteReturnWindow MerchantReturnFiniteReturnWindow}. */
    "https://schema.org/merchantReturnDays"?: SchemaValue<Date | DateTime | Integer, "https://schema.org/merchantReturnDays">;
    /** Specifies an applicable return policy (from an enumeration). */
    "https://schema.org/returnPolicyCategory"?: SchemaValue<MerchantReturnEnumeration | IdReference, "https://schema.org/returnPolicyCategory">;
    /** The start date and time of the item (in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}). */
    "https://schema.org/startDate"?: SchemaValue<Date | DateTime, "https://schema.org/startDate">;
}
interface MerchantReturnPolicySeasonalOverrideLeaf extends MerchantReturnPolicySeasonalOverrideBase {
    "@type": "https://schema.org/MerchantReturnPolicySeasonalOverride";
}
/** A seasonal override of a return policy, for example used for holidays. */
export declare type MerchantReturnPolicySeasonalOverride = MerchantReturnPolicySeasonalOverrideLeaf;
interface MessageBase extends CreativeWorkBase {
    /** A sub property of recipient. The recipient blind copied on a message. */
    "https://schema.org/bccRecipient"?: SchemaValue<ContactPoint | Organization | Person | IdReference, "https://schema.org/bccRecipient">;
    /** A sub property of recipient. The recipient copied on a message. */
    "https://schema.org/ccRecipient"?: SchemaValue<ContactPoint | Organization | Person | IdReference, "https://schema.org/ccRecipient">;
    /** The date/time at which the message has been read by the recipient if a single recipient exists. */
    "https://schema.org/dateRead"?: SchemaValue<Date | DateTime, "https://schema.org/dateRead">;
    /** The date/time the message was received if a single recipient exists. */
    "https://schema.org/dateReceived"?: SchemaValue<DateTime, "https://schema.org/dateReceived">;
    /** The date/time at which the message was sent. */
    "https://schema.org/dateSent"?: SchemaValue<DateTime, "https://schema.org/dateSent">;
    /** A CreativeWork attached to the message. */
    "https://schema.org/messageAttachment"?: SchemaValue<CreativeWork | IdReference, "https://schema.org/messageAttachment">;
    /** A sub property of participant. The participant who is at the receiving end of the action. */
    "https://schema.org/recipient"?: SchemaValue<Audience | ContactPoint | Organization | Person | IdReference, "https://schema.org/recipient">;
    /** A sub property of participant. The participant who is at the sending end of the action. */
    "https://schema.org/sender"?: SchemaValue<Audience | Organization | Person | IdReference, "https://schema.org/sender">;
    /** A sub property of recipient. The recipient who was directly sent the message. */
    "https://schema.org/toRecipient"?: SchemaValue<Audience | ContactPoint | Organization | Person | IdReference, "https://schema.org/toRecipient">;
}
interface MessageLeaf extends MessageBase {
    "@type": "https://schema.org/Message";
}
/** A single message from a sender to one or more organizations or people. */
export declare type Message = MessageLeaf | EmailMessage;
interface MiddleSchoolLeaf extends EducationalOrganizationBase {
    "@type": "https://schema.org/MiddleSchool";
}
/** A middle school (typically for children aged around 11-14, although this varies somewhat). */
export declare type MiddleSchool = MiddleSchoolLeaf | string;
interface MobileApplicationBase extends SoftwareApplicationBase {
    /** Specifies specific carrier(s) requirements for the application (e.g. an application may only work on a specific carrier network). */
    "https://schema.org/carrierRequirements"?: SchemaValue<Text, "https://schema.org/carrierRequirements">;
}
interface MobileApplicationLeaf extends MobileApplicationBase {
    "@type": "https://schema.org/MobileApplication";
}
/** A software application designed specifically to work well on a mobile device such as a telephone. */
export declare type MobileApplication = MobileApplicationLeaf;
interface MobilePhoneStoreLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/MobilePhoneStore";
}
/** A store that sells mobile phones and related accessories. */
export declare type MobilePhoneStore = MobilePhoneStoreLeaf | string;
interface MolecularEntityBase extends BioChemEntityBase {
    /** A role played by the BioChemEntity within a chemical context. */
    "https://schema.org/chemicalRole"?: SchemaValue<DefinedTerm | IdReference, "https://schema.org/chemicalRole">;
    /** Non-proprietary identifier for molecular entity that can be used in printed and electronic data sources thus enabling easier linking of diverse data compilations. */
    "https://schema.org/inChI"?: SchemaValue<Text, "https://schema.org/inChI">;
    /** InChIKey is a hashed version of the full InChI (using the SHA-256 algorithm). */
    "https://schema.org/inChIKey"?: SchemaValue<Text, "https://schema.org/inChIKey">;
    /** Systematic method of naming chemical compounds as recommended by the International Union of Pure and Applied Chemistry (IUPAC). */
    "https://schema.org/iupacName"?: SchemaValue<Text, "https://schema.org/iupacName">;
    /** The empirical formula is the simplest whole number ratio of all the atoms in a molecule. */
    "https://schema.org/molecularFormula"?: SchemaValue<Text, "https://schema.org/molecularFormula">;
    /** This is the molecular weight of the entity being described, not of the parent. Units should be included in the form '<Number> <unit>', for example '12 amu' or as '<QuantitativeValue>. */
    "https://schema.org/molecularWeight"?: SchemaValue<QuantitativeValue | Text | IdReference, "https://schema.org/molecularWeight">;
    /** The monoisotopic mass is the sum of the masses of the atoms in a molecule using the unbound, ground-state, rest mass of the principal (most abundant) isotope for each element instead of the isotopic average mass. Please include the units the form '<Number> <unit>', for example '770.230488 g/mol' or as '<QuantitativeValue>. */
    "https://schema.org/monoisotopicMolecularWeight"?: SchemaValue<QuantitativeValue | Text | IdReference, "https://schema.org/monoisotopicMolecularWeight">;
    /** Intended use of the BioChemEntity by humans. */
    "https://schema.org/potentialUse"?: SchemaValue<DefinedTerm | IdReference, "https://schema.org/potentialUse">;
    /** A specification in form of a line notation for describing the structure of chemical species using short ASCII strings. Double bond stereochemistry \ indicators may need to be escaped in the string in formats where the backslash is an escape character. */
    "https://schema.org/smiles"?: SchemaValue<Text, "https://schema.org/smiles">;
}
interface MolecularEntityLeaf extends MolecularEntityBase {
    "@type": "https://schema.org/MolecularEntity";
}
/** Any constitutionally or isotopically distinct atom, molecule, ion, ion pair, radical, radical ion, complex, conformer etc., identifiable as a separately distinguishable entity. */
export declare type MolecularEntity = MolecularEntityLeaf;
interface MonetaryAmountBase extends ThingBase {
    /**
     * The currency in which the monetary amount is expressed.
     *
     * Use standard formats: {@link http://en.wikipedia.org/wiki/ISO_4217 ISO 4217 currency format} e.g. "USD"; {@link https://en.wikipedia.org/wiki/List_of_cryptocurrencies Ticker symbol} for cryptocurrencies e.g. "BTC"; well known names for {@link https://en.wikipedia.org/wiki/Local_exchange_trading_system Local Exchange Tradings Systems} (LETS) and other currency types e.g. "Ithaca HOUR".
     */
    "https://schema.org/currency"?: SchemaValue<Text, "https://schema.org/currency">;
    /** The upper value of some characteristic or property. */
    "https://schema.org/maxValue"?: SchemaValue<Number, "https://schema.org/maxValue">;
    /** The lower value of some characteristic or property. */
    "https://schema.org/minValue"?: SchemaValue<Number, "https://schema.org/minValue">;
    /** The date when the item becomes valid. */
    "https://schema.org/validFrom"?: SchemaValue<Date | DateTime, "https://schema.org/validFrom">;
    /** The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours. */
    "https://schema.org/validThrough"?: SchemaValue<Date | DateTime, "https://schema.org/validThrough">;
    /**
     * The value of the quantitative value or property value node.
     * - For {@link https://schema.org/QuantitativeValue QuantitativeValue} and {@link https://schema.org/MonetaryAmount MonetaryAmount}, the recommended type for values is 'Number'.
     * - For {@link https://schema.org/PropertyValue PropertyValue}, it can be 'Text;', 'Number', 'Boolean', or 'StructuredValue'.
     * - Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.
     * - Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
     */
    "https://schema.org/value"?: SchemaValue<Boolean | Number | StructuredValue | Text | IdReference, "https://schema.org/value">;
}
interface MonetaryAmountLeaf extends MonetaryAmountBase {
    "@type": "https://schema.org/MonetaryAmount";
}
/** A monetary value or range. This type can be used to describe an amount of money such as $50 USD, or a range as in describing a bank account being suitable for a balance between £1,000 and £1,000,000 GBP, or the value of a salary, etc. It is recommended to use {@link https://schema.org/PriceSpecification PriceSpecification} Types to describe the price of an Offer, Invoice, etc. */
export declare type MonetaryAmount = MonetaryAmountLeaf;
interface MonetaryAmountDistributionBase extends QuantitativeValueDistributionBase {
    /**
     * The currency in which the monetary amount is expressed.
     *
     * Use standard formats: {@link http://en.wikipedia.org/wiki/ISO_4217 ISO 4217 currency format} e.g. "USD"; {@link https://en.wikipedia.org/wiki/List_of_cryptocurrencies Ticker symbol} for cryptocurrencies e.g. "BTC"; well known names for {@link https://en.wikipedia.org/wiki/Local_exchange_trading_system Local Exchange Tradings Systems} (LETS) and other currency types e.g. "Ithaca HOUR".
     */
    "https://schema.org/currency"?: SchemaValue<Text, "https://schema.org/currency">;
}
interface MonetaryAmountDistributionLeaf extends MonetaryAmountDistributionBase {
    "@type": "https://schema.org/MonetaryAmountDistribution";
}
/** A statistical distribution of monetary amounts. */
export declare type MonetaryAmountDistribution = MonetaryAmountDistributionLeaf;
interface MonetaryGrantBase extends GrantBase {
    /** The amount of money. */
    "https://schema.org/amount"?: SchemaValue<MonetaryAmount | Number | IdReference, "https://schema.org/amount">;
    /** A person or organization that supports (sponsors) something through some kind of financial contribution. */
    "https://schema.org/funder"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/funder">;
}
interface MonetaryGrantLeaf extends MonetaryGrantBase {
    "@type": "https://schema.org/MonetaryGrant";
}
/** A monetary grant. */
export declare type MonetaryGrant = MonetaryGrantLeaf;
interface MoneyTransferBase extends TransferActionBase {
    /** The amount of money. */
    "https://schema.org/amount"?: SchemaValue<MonetaryAmount | Number | IdReference, "https://schema.org/amount">;
    /** A bank or bank’s branch, financial institution or international financial institution operating the beneficiary’s bank account or releasing funds for the beneficiary. */
    "https://schema.org/beneficiaryBank"?: SchemaValue<BankOrCreditUnion | Text | IdReference, "https://schema.org/beneficiaryBank">;
}
interface MoneyTransferLeaf extends MoneyTransferBase {
    "@type": "https://schema.org/MoneyTransfer";
}
/** The act of transferring money from one place to another place. This may occur electronically or physically. */
export declare type MoneyTransfer = MoneyTransferLeaf;
interface MortgageLoanBase extends LoanOrCreditBase {
    /** Whether borrower is a resident of the jurisdiction where the property is located. */
    "https://schema.org/domiciledMortgage"?: SchemaValue<Boolean, "https://schema.org/domiciledMortgage">;
    /** Amount of mortgage mandate that can be converted into a proper mortgage at a later stage. */
    "https://schema.org/loanMortgageMandateAmount"?: SchemaValue<MonetaryAmount | IdReference, "https://schema.org/loanMortgageMandateAmount">;
}
interface MortgageLoanLeaf extends MortgageLoanBase {
    "@type": "https://schema.org/MortgageLoan";
}
/** A loan in which property or real estate is used as collateral. (A loan securitized against some real estate). */
export declare type MortgageLoan = MortgageLoanLeaf;
interface MosqueLeaf extends CivicStructureBase {
    "@type": "https://schema.org/Mosque";
}
/** A mosque. */
export declare type Mosque = MosqueLeaf | string;
interface MotelLeaf extends LodgingBusinessBase {
    "@type": "https://schema.org/Motel";
}
/**
 * A motel.
 *
 * See also the {@link /docs/hotels.html dedicated document on the use of schema.org for marking up hotels and other forms of accommodations}.
 */
export declare type Motel = MotelLeaf | string;
interface MotorcycleLeaf extends VehicleBase {
    "@type": "https://schema.org/Motorcycle";
}
/** A motorcycle or motorbike is a single-track, two-wheeled motor vehicle. */
export declare type Motorcycle = MotorcycleLeaf;
interface MotorcycleDealerLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/MotorcycleDealer";
}
/** A motorcycle dealer. */
export declare type MotorcycleDealer = MotorcycleDealerLeaf | string;
interface MotorcycleRepairLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/MotorcycleRepair";
}
/** A motorcycle repair shop. */
export declare type MotorcycleRepair = MotorcycleRepairLeaf | string;
interface MotorizedBicycleLeaf extends VehicleBase {
    "@type": "https://schema.org/MotorizedBicycle";
}
/** A motorized bicycle is a bicycle with an attached motor used to power the vehicle, or to assist with pedaling. */
export declare type MotorizedBicycle = MotorizedBicycleLeaf;
interface MountainLeaf extends PlaceBase {
    "@type": "https://schema.org/Mountain";
}
/** A mountain, like Mount Whitney or Mount Everest. */
export declare type Mountain = MountainLeaf | string;
interface MoveActionBase extends ActionBase {
    /** A sub property of location. The original location of the object or the agent before the action. */
    "https://schema.org/fromLocation"?: SchemaValue<Place | IdReference, "https://schema.org/fromLocation">;
    /** A sub property of location. The final location of the object or the agent after the action. */
    "https://schema.org/toLocation"?: SchemaValue<Place | IdReference, "https://schema.org/toLocation">;
}
interface MoveActionLeaf extends MoveActionBase {
    "@type": "https://schema.org/MoveAction";
}
/**
 * The act of an agent relocating to a place.
 *
 * Related actions:
 * - {@link https://schema.org/TransferAction TransferAction}: Unlike TransferAction, the subject of the move is a living Person or Organization rather than an inanimate object.
 */
export declare type MoveAction = MoveActionLeaf | ArriveAction | DepartAction | TravelAction;
interface MovieBase extends CreativeWorkBase {
    /** An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip. */
    "https://schema.org/actor"?: SchemaValue<Person | IdReference, "https://schema.org/actor">;
    /**
     * An actor, e.g. in tv, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip.
     *
     * @deprecated Consider using https://schema.org/actor instead.
     */
    "https://schema.org/actors"?: SchemaValue<Person | IdReference, "https://schema.org/actors">;
    /**
     * The country of origin of something, including products as well as creative works such as movie and TV content.
     *
     * In the case of TV and movie, this would be the country of the principle offices of the production company or individual responsible for the movie. For other kinds of {@link https://schema.org/CreativeWork CreativeWork} it is difficult to provide fully general guidance, and properties such as {@link https://schema.org/contentLocation contentLocation} and {@link https://schema.org/locationCreated locationCreated} may be more applicable.
     *
     * In the case of products, the country of origin of the product. The exact interpretation of this may vary by context and product type, and cannot be fully enumerated here.
     */
    "https://schema.org/countryOfOrigin"?: SchemaValue<Country | IdReference, "https://schema.org/countryOfOrigin">;
    /** A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip. */
    "https://schema.org/director"?: SchemaValue<Person | IdReference, "https://schema.org/director">;
    /**
     * A director of e.g. tv, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip.
     *
     * @deprecated Consider using https://schema.org/director instead.
     */
    "https://schema.org/directors"?: SchemaValue<Person | IdReference, "https://schema.org/directors">;
    /** The duration of the item (movie, audio recording, event, etc.) in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}. */
    "https://schema.org/duration"?: SchemaValue<Duration | IdReference, "https://schema.org/duration">;
    /** The composer of the soundtrack. */
    "https://schema.org/musicBy"?: SchemaValue<MusicGroup | Person | IdReference, "https://schema.org/musicBy">;
    /** The production company or studio responsible for the item e.g. series, video game, episode etc. */
    "https://schema.org/productionCompany"?: SchemaValue<Organization | IdReference, "https://schema.org/productionCompany">;
    /** Languages in which subtitles/captions are available, in {@link http://tools.ietf.org/html/bcp47 IETF BCP 47 standard format}. */
    "https://schema.org/subtitleLanguage"?: SchemaValue<Language | Text | IdReference, "https://schema.org/subtitleLanguage">;
    /**
     * An {@link https://eidr.org/ EIDR} (Entertainment Identifier Registry) {@link https://schema.org/identifier identifier} representing at the most general/abstract level, a work of film or television.
     *
     * For example, the motion picture known as "Ghostbusters" has a titleEIDR of "10.5240/7EC7-228A-510A-053E-CBB8-J". This title (or work) may have several variants, which EIDR calls "edits". See {@link https://schema.org/editEIDR editEIDR}.
     *
     * Since schema.org types like {@link https://schema.org/Movie Movie} and {@link https://schema.org/TVEpisode TVEpisode} can be used for both works and their multiple expressions, it is possible to use {@link https://schema.org/titleEIDR titleEIDR} alone (for a general description), or alongside {@link https://schema.org/editEIDR editEIDR} for a more edit-specific description.
     */
    "https://schema.org/titleEIDR"?: SchemaValue<Text | URL, "https://schema.org/titleEIDR">;
    /** The trailer of a movie or tv/radio series, season, episode, etc. */
    "https://schema.org/trailer"?: SchemaValue<VideoObject | IdReference, "https://schema.org/trailer">;
}
interface MovieLeaf extends MovieBase {
    "@type": "https://schema.org/Movie";
}
/** A movie. */
export declare type Movie = MovieLeaf;
interface MovieClipLeaf extends ClipBase {
    "@type": "https://schema.org/MovieClip";
}
/** A short segment/part of a movie. */
export declare type MovieClip = MovieClipLeaf;
interface MovieRentalStoreLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/MovieRentalStore";
}
/** A movie rental store. */
export declare type MovieRentalStore = MovieRentalStoreLeaf | string;
interface MovieSeriesBase extends CreativeWorkSeriesBase {
    /** An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip. */
    "https://schema.org/actor"?: SchemaValue<Person | IdReference, "https://schema.org/actor">;
    /**
     * An actor, e.g. in tv, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip.
     *
     * @deprecated Consider using https://schema.org/actor instead.
     */
    "https://schema.org/actors"?: SchemaValue<Person | IdReference, "https://schema.org/actors">;
    /** A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip. */
    "https://schema.org/director"?: SchemaValue<Person | IdReference, "https://schema.org/director">;
    /**
     * A director of e.g. tv, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip.
     *
     * @deprecated Consider using https://schema.org/director instead.
     */
    "https://schema.org/directors"?: SchemaValue<Person | IdReference, "https://schema.org/directors">;
    /** The composer of the soundtrack. */
    "https://schema.org/musicBy"?: SchemaValue<MusicGroup | Person | IdReference, "https://schema.org/musicBy">;
    /** The production company or studio responsible for the item e.g. series, video game, episode etc. */
    "https://schema.org/productionCompany"?: SchemaValue<Organization | IdReference, "https://schema.org/productionCompany">;
    /** The trailer of a movie or tv/radio series, season, episode, etc. */
    "https://schema.org/trailer"?: SchemaValue<VideoObject | IdReference, "https://schema.org/trailer">;
}
interface MovieSeriesLeaf extends MovieSeriesBase {
    "@type": "https://schema.org/MovieSeries";
}
/** A series of movies. Included movies can be indicated with the hasPart property. */
export declare type MovieSeries = MovieSeriesLeaf;
interface MovieTheaterBase extends CivicStructureBase, LocalBusinessBase {
    /** The number of screens in the movie theater. */
    "https://schema.org/screenCount"?: SchemaValue<Number, "https://schema.org/screenCount">;
}
interface MovieTheaterLeaf extends MovieTheaterBase {
    "@type": "https://schema.org/MovieTheater";
}
/** A movie theater. */
export declare type MovieTheater = MovieTheaterLeaf | string;
interface MovingCompanyLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/MovingCompany";
}
/** A moving company. */
export declare type MovingCompany = MovingCompanyLeaf | string;
interface MuscleBase extends AnatomicalStructureBase {
    /** The muscle whose action counteracts the specified muscle. */
    "https://schema.org/antagonist"?: SchemaValue<Muscle | IdReference, "https://schema.org/antagonist">;
    /** The blood vessel that carries blood from the heart to the muscle. */
    "https://schema.org/bloodSupply"?: SchemaValue<Vessel | IdReference, "https://schema.org/bloodSupply">;
    /** The place of attachment of a muscle, or what the muscle moves. */
    "https://schema.org/insertion"?: SchemaValue<AnatomicalStructure | IdReference, "https://schema.org/insertion">;
    /** The movement the muscle generates. */
    "https://schema.org/muscleAction"?: SchemaValue<Text, "https://schema.org/muscleAction">;
    /** The underlying innervation associated with the muscle. */
    "https://schema.org/nerve"?: SchemaValue<Nerve | IdReference, "https://schema.org/nerve">;
}
interface MuscleLeaf extends MuscleBase {
    "@type": "https://schema.org/Muscle";
}
/** A muscle is an anatomical structure consisting of a contractile form of tissue that animals use to effect movement. */
export declare type Muscle = MuscleLeaf;
interface MuseumLeaf extends CivicStructureBase {
    "@type": "https://schema.org/Museum";
}
/** A museum. */
export declare type Museum = MuseumLeaf | string;
interface MusicAlbumBase extends MusicPlaylistBase {
    /** Classification of the album by it's type of content: soundtrack, live album, studio album, etc. */
    "https://schema.org/albumProductionType"?: SchemaValue<MusicAlbumProductionType | IdReference, "https://schema.org/albumProductionType">;
    /** A release of this album. */
    "https://schema.org/albumRelease"?: SchemaValue<MusicRelease | IdReference, "https://schema.org/albumRelease">;
    /** The kind of release which this album is: single, EP or album. */
    "https://schema.org/albumReleaseType"?: SchemaValue<MusicAlbumReleaseType | IdReference, "https://schema.org/albumReleaseType">;
    /** The artist that performed this album or recording. */
    "https://schema.org/byArtist"?: SchemaValue<MusicGroup | Person | IdReference, "https://schema.org/byArtist">;
}
interface MusicAlbumLeaf extends MusicAlbumBase {
    "@type": "https://schema.org/MusicAlbum";
}
/** A collection of music tracks. */
export declare type MusicAlbum = MusicAlbumLeaf;
interface MusicAlbumProductionTypeLeaf extends EnumerationBase {
    "@type": "https://schema.org/MusicAlbumProductionType";
}
/** Classification of the album by it's type of content: soundtrack, live album, studio album, etc. */
export declare type MusicAlbumProductionType = "https://schema.org/CompilationAlbum" | "https://schema.org/DemoAlbum" | "https://schema.org/DJMixAlbum" | "https://schema.org/LiveAlbum" | "https://schema.org/MixtapeAlbum" | "https://schema.org/RemixAlbum" | "https://schema.org/SoundtrackAlbum" | "https://schema.org/SpokenWordAlbum" | "https://schema.org/StudioAlbum" | MusicAlbumProductionTypeLeaf;
interface MusicAlbumReleaseTypeLeaf extends EnumerationBase {
    "@type": "https://schema.org/MusicAlbumReleaseType";
}
/** The kind of release which this album is: single, EP or album. */
export declare type MusicAlbumReleaseType = "https://schema.org/AlbumRelease" | "https://schema.org/BroadcastRelease" | "https://schema.org/EPRelease" | "https://schema.org/SingleRelease" | MusicAlbumReleaseTypeLeaf;
interface MusicCompositionBase extends CreativeWorkBase {
    /** The person or organization who wrote a composition, or who is the composer of a work performed at some event. */
    "https://schema.org/composer"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/composer">;
    /** The date and place the work was first performed. */
    "https://schema.org/firstPerformance"?: SchemaValue<Event | IdReference, "https://schema.org/firstPerformance">;
    /** Smaller compositions included in this work (e.g. a movement in a symphony). */
    "https://schema.org/includedComposition"?: SchemaValue<MusicComposition | IdReference, "https://schema.org/includedComposition">;
    /** The International Standard Musical Work Code for the composition. */
    "https://schema.org/iswcCode"?: SchemaValue<Text, "https://schema.org/iswcCode">;
    /** The person who wrote the words. */
    "https://schema.org/lyricist"?: SchemaValue<Person | IdReference, "https://schema.org/lyricist">;
    /** The words in the song. */
    "https://schema.org/lyrics"?: SchemaValue<CreativeWork | IdReference, "https://schema.org/lyrics">;
    /** The key, mode, or scale this composition uses. */
    "https://schema.org/musicalKey"?: SchemaValue<Text, "https://schema.org/musicalKey">;
    /** An arrangement derived from the composition. */
    "https://schema.org/musicArrangement"?: SchemaValue<MusicComposition | IdReference, "https://schema.org/musicArrangement">;
    /** The type of composition (e.g. overture, sonata, symphony, etc.). */
    "https://schema.org/musicCompositionForm"?: SchemaValue<Text, "https://schema.org/musicCompositionForm">;
    /** An audio recording of the work. */
    "https://schema.org/recordedAs"?: SchemaValue<MusicRecording | IdReference, "https://schema.org/recordedAs">;
}
interface MusicCompositionLeaf extends MusicCompositionBase {
    "@type": "https://schema.org/MusicComposition";
}
/** A musical composition. */
export declare type MusicComposition = MusicCompositionLeaf;
interface MusicEventLeaf extends EventBase {
    "@type": "https://schema.org/MusicEvent";
}
/** Event type: Music event. */
export declare type MusicEvent = MusicEventLeaf;
interface MusicGroupBase extends OrganizationBase {
    /** A music album. */
    "https://schema.org/album"?: SchemaValue<MusicAlbum | IdReference, "https://schema.org/album">;
    /**
     * A collection of music albums.
     *
     * @deprecated Consider using https://schema.org/album instead.
     */
    "https://schema.org/albums"?: SchemaValue<MusicAlbum | IdReference, "https://schema.org/albums">;
    /** Genre of the creative work, broadcast channel or group. */
    "https://schema.org/genre"?: SchemaValue<Text | URL, "https://schema.org/genre">;
    /**
     * A member of a music group—for example, John, Paul, George, or Ringo.
     *
     * @deprecated Consider using https://schema.org/member instead.
     */
    "https://schema.org/musicGroupMember"?: SchemaValue<Person | IdReference, "https://schema.org/musicGroupMember">;
    /** A music recording (track)—usually a single song. If an ItemList is given, the list should contain items of type MusicRecording. */
    "https://schema.org/track"?: SchemaValue<ItemList | MusicRecording | IdReference, "https://schema.org/track">;
    /**
     * A music recording (track)—usually a single song.
     *
     * @deprecated Consider using https://schema.org/track instead.
     */
    "https://schema.org/tracks"?: SchemaValue<MusicRecording | IdReference, "https://schema.org/tracks">;
}
interface MusicGroupLeaf extends MusicGroupBase {
    "@type": "https://schema.org/MusicGroup";
}
/** A musical group, such as a band, an orchestra, or a choir. Can also be a solo musician. */
export declare type MusicGroup = MusicGroupLeaf | string;
interface MusicPlaylistBase extends CreativeWorkBase {
    /** The number of tracks in this album or playlist. */
    "https://schema.org/numTracks"?: SchemaValue<Integer, "https://schema.org/numTracks">;
    /** A music recording (track)—usually a single song. If an ItemList is given, the list should contain items of type MusicRecording. */
    "https://schema.org/track"?: SchemaValue<ItemList | MusicRecording | IdReference, "https://schema.org/track">;
    /**
     * A music recording (track)—usually a single song.
     *
     * @deprecated Consider using https://schema.org/track instead.
     */
    "https://schema.org/tracks"?: SchemaValue<MusicRecording | IdReference, "https://schema.org/tracks">;
}
interface MusicPlaylistLeaf extends MusicPlaylistBase {
    "@type": "https://schema.org/MusicPlaylist";
}
/** A collection of music tracks in playlist form. */
export declare type MusicPlaylist = MusicPlaylistLeaf | MusicAlbum | MusicRelease;
interface MusicRecordingBase extends CreativeWorkBase {
    /** The artist that performed this album or recording. */
    "https://schema.org/byArtist"?: SchemaValue<MusicGroup | Person | IdReference, "https://schema.org/byArtist">;
    /** The duration of the item (movie, audio recording, event, etc.) in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}. */
    "https://schema.org/duration"?: SchemaValue<Duration | IdReference, "https://schema.org/duration">;
    /** The album to which this recording belongs. */
    "https://schema.org/inAlbum"?: SchemaValue<MusicAlbum | IdReference, "https://schema.org/inAlbum">;
    /** The playlist to which this recording belongs. */
    "https://schema.org/inPlaylist"?: SchemaValue<MusicPlaylist | IdReference, "https://schema.org/inPlaylist">;
    /** The International Standard Recording Code for the recording. */
    "https://schema.org/isrcCode"?: SchemaValue<Text, "https://schema.org/isrcCode">;
    /** The composition this track is a recording of. */
    "https://schema.org/recordingOf"?: SchemaValue<MusicComposition | IdReference, "https://schema.org/recordingOf">;
}
interface MusicRecordingLeaf extends MusicRecordingBase {
    "@type": "https://schema.org/MusicRecording";
}
/** A music recording (track), usually a single song. */
export declare type MusicRecording = MusicRecordingLeaf;
interface MusicReleaseBase extends MusicPlaylistBase {
    /** The catalog number for the release. */
    "https://schema.org/catalogNumber"?: SchemaValue<Text, "https://schema.org/catalogNumber">;
    /** The group the release is credited to if different than the byArtist. For example, Red and Blue is credited to "Stefani Germanotta Band", but by Lady Gaga. */
    "https://schema.org/creditedTo"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/creditedTo">;
    /** The duration of the item (movie, audio recording, event, etc.) in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}. */
    "https://schema.org/duration"?: SchemaValue<Duration | IdReference, "https://schema.org/duration">;
    /** Format of this release (the type of recording media used, ie. compact disc, digital media, LP, etc.). */
    "https://schema.org/musicReleaseFormat"?: SchemaValue<MusicReleaseFormatType | IdReference, "https://schema.org/musicReleaseFormat">;
    /** The label that issued the release. */
    "https://schema.org/recordLabel"?: SchemaValue<Organization | IdReference, "https://schema.org/recordLabel">;
    /** The album this is a release of. */
    "https://schema.org/releaseOf"?: SchemaValue<MusicAlbum | IdReference, "https://schema.org/releaseOf">;
}
interface MusicReleaseLeaf extends MusicReleaseBase {
    "@type": "https://schema.org/MusicRelease";
}
/** A MusicRelease is a specific release of a music album. */
export declare type MusicRelease = MusicReleaseLeaf;
interface MusicReleaseFormatTypeLeaf extends EnumerationBase {
    "@type": "https://schema.org/MusicReleaseFormatType";
}
/** Format of this release (the type of recording media used, ie. compact disc, digital media, LP, etc.). */
export declare type MusicReleaseFormatType = "https://schema.org/CassetteFormat" | "https://schema.org/CDFormat" | "https://schema.org/DigitalAudioTapeFormat" | "https://schema.org/DigitalFormat" | "https://schema.org/DVDFormat" | "https://schema.org/LaserDiscFormat" | "https://schema.org/VinylFormat" | MusicReleaseFormatTypeLeaf;
interface MusicStoreLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/MusicStore";
}
/** A music store. */
export declare type MusicStore = MusicStoreLeaf | string;
interface MusicVenueLeaf extends CivicStructureBase {
    "@type": "https://schema.org/MusicVenue";
}
/** A music venue. */
export declare type MusicVenue = MusicVenueLeaf | string;
interface MusicVideoObjectLeaf extends MediaObjectBase {
    "@type": "https://schema.org/MusicVideoObject";
}
/** A music video file. */
export declare type MusicVideoObject = MusicVideoObjectLeaf;
interface NailSalonLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/NailSalon";
}
/** A nail salon. */
export declare type NailSalon = NailSalonLeaf | string;
interface NerveBase extends AnatomicalStructureBase {
    /**
     * The branches that delineate from the nerve bundle. Not to be confused with {@link https://schema.org/branchOf branchOf}.
     *
     * @deprecated Consider using https://schema.org/arterialBranch instead.
     */
    "https://schema.org/branch"?: SchemaValue<AnatomicalStructure | IdReference, "https://schema.org/branch">;
    /** The neurological pathway extension that involves muscle control. */
    "https://schema.org/nerveMotor"?: SchemaValue<Muscle | IdReference, "https://schema.org/nerveMotor">;
    /** The neurological pathway extension that inputs and sends information to the brain or spinal cord. */
    "https://schema.org/sensoryUnit"?: SchemaValue<AnatomicalStructure | SuperficialAnatomy | IdReference, "https://schema.org/sensoryUnit">;
    /** The neurological pathway that originates the neurons. */
    "https://schema.org/sourcedFrom"?: SchemaValue<BrainStructure | IdReference, "https://schema.org/sourcedFrom">;
}
interface NerveLeaf extends NerveBase {
    "@type": "https://schema.org/Nerve";
}
/** A common pathway for the electrochemical nerve impulses that are transmitted along each of the axons. */
export declare type Nerve = NerveLeaf;
interface NewsArticleBase extends ArticleBase {
    /**
     * A {@link https://en.wikipedia.org/wiki/Dateline dateline} is a brief piece of text included in news articles that describes where and when the story was written or filed though the date is often omitted. Sometimes only a placename is provided.
     *
     * Structured representations of dateline-related information can also be expressed more explicitly using {@link https://schema.org/locationCreated locationCreated} (which represents where a work was created e.g. where a news report was written). For location depicted or described in the content, use {@link https://schema.org/contentLocation contentLocation}.
     *
     * Dateline summaries are oriented more towards human readers than towards automated processing, and can vary substantially. Some examples: "BEIRUT, Lebanon, June 2.", "Paris, France", "December 19, 2017 11:43AM Reporting from Washington", "Beijing/Moscow", "QUEZON CITY, Philippines".
     */
    "https://schema.org/dateline"?: SchemaValue<Text, "https://schema.org/dateline">;
    /** The number of the column in which the NewsArticle appears in the print edition. */
    "https://schema.org/printColumn"?: SchemaValue<Text, "https://schema.org/printColumn">;
    /** The edition of the print product in which the NewsArticle appears. */
    "https://schema.org/printEdition"?: SchemaValue<Text, "https://schema.org/printEdition">;
    /** If this NewsArticle appears in print, this field indicates the name of the page on which the article is found. Please note that this field is intended for the exact page name (e.g. A5, B18). */
    "https://schema.org/printPage"?: SchemaValue<Text, "https://schema.org/printPage">;
    /** If this NewsArticle appears in print, this field indicates the print section in which the article appeared. */
    "https://schema.org/printSection"?: SchemaValue<Text, "https://schema.org/printSection">;
}
interface NewsArticleLeaf extends NewsArticleBase {
    "@type": "https://schema.org/NewsArticle";
}
/**
 * A NewsArticle is an article whose content reports news, or provides background context and supporting materials for understanding the news.
 *
 * A more detailed overview of {@link /docs/news.html schema.org News markup} is also available.
 */
export declare type NewsArticle = NewsArticleLeaf | AnalysisNewsArticle | AskPublicNewsArticle | BackgroundNewsArticle | OpinionNewsArticle | ReportageNewsArticle | ReviewNewsArticle;
interface NewsMediaOrganizationBase extends OrganizationBase {
    /** For a {@link https://schema.org/NewsMediaOrganization NewsMediaOrganization} or other news-related {@link https://schema.org/Organization Organization}, a statement about public engagement activities (for news media, the newsroom’s), including involving the public - digitally or otherwise -- in coverage decisions, reporting and activities after publication. */
    "https://schema.org/actionableFeedbackPolicy"?: SchemaValue<CreativeWork | URL | IdReference, "https://schema.org/actionableFeedbackPolicy">;
    /** For an {@link https://schema.org/Organization Organization} (e.g. {@link https://schema.org/NewsMediaOrganization NewsMediaOrganization}), a statement describing (in news media, the newsroom’s) disclosure and correction policy for errors. */
    "https://schema.org/correctionsPolicy"?: SchemaValue<CreativeWork | URL | IdReference, "https://schema.org/correctionsPolicy">;
    /** Statement on diversity policy by an {@link https://schema.org/Organization Organization} e.g. a {@link https://schema.org/NewsMediaOrganization NewsMediaOrganization}. For a {@link https://schema.org/NewsMediaOrganization NewsMediaOrganization}, a statement describing the newsroom’s diversity policy on both staffing and sources, typically providing staffing data. */
    "https://schema.org/diversityPolicy"?: SchemaValue<CreativeWork | URL | IdReference, "https://schema.org/diversityPolicy">;
    /** For an {@link https://schema.org/Organization Organization} (often but not necessarily a {@link https://schema.org/NewsMediaOrganization NewsMediaOrganization}), a report on staffing diversity issues. In a news context this might be for example ASNE or RTDNA (US) reports, or self-reported. */
    "https://schema.org/diversityStaffingReport"?: SchemaValue<Article | URL | IdReference, "https://schema.org/diversityStaffingReport">;
    /** Statement about ethics policy, e.g. of a {@link https://schema.org/NewsMediaOrganization NewsMediaOrganization} regarding journalistic and publishing practices, or of a {@link https://schema.org/Restaurant Restaurant}, a page describing food source policies. In the case of a {@link https://schema.org/NewsMediaOrganization NewsMediaOrganization}, an ethicsPolicy is typically a statement describing the personal, organizational, and corporate standards of behavior expected by the organization. */
    "https://schema.org/ethicsPolicy"?: SchemaValue<CreativeWork | URL | IdReference, "https://schema.org/ethicsPolicy">;
    /** For a {@link https://schema.org/NewsMediaOrganization NewsMediaOrganization}, a link to the masthead page or a page listing top editorial management. */
    "https://schema.org/masthead"?: SchemaValue<CreativeWork | URL | IdReference, "https://schema.org/masthead">;
    /** For a {@link https://schema.org/NewsMediaOrganization NewsMediaOrganization}, a statement on coverage priorities, including any public agenda or stance on issues. */
    "https://schema.org/missionCoveragePrioritiesPolicy"?: SchemaValue<CreativeWork | URL | IdReference, "https://schema.org/missionCoveragePrioritiesPolicy">;
    /** For a {@link https://schema.org/NewsMediaOrganization NewsMediaOrganization} or other news-related {@link https://schema.org/Organization Organization}, a statement explaining when authors of articles are not named in bylines. */
    "https://schema.org/noBylinesPolicy"?: SchemaValue<CreativeWork | URL | IdReference, "https://schema.org/noBylinesPolicy">;
    /** For an {@link https://schema.org/Organization Organization} (often but not necessarily a {@link https://schema.org/NewsMediaOrganization NewsMediaOrganization}), a description of organizational ownership structure; funding and grants. In a news/media setting, this is with particular reference to editorial independence. Note that the {@link https://schema.org/funder funder} is also available and can be used to make basic funder information machine-readable. */
    "https://schema.org/ownershipFundingInfo"?: SchemaValue<AboutPage | CreativeWork | Text | URL | IdReference, "https://schema.org/ownershipFundingInfo">;
    /** For an {@link https://schema.org/Organization Organization} (typically a {@link https://schema.org/NewsMediaOrganization NewsMediaOrganization}), a statement about policy on use of unnamed sources and the decision process required. */
    "https://schema.org/unnamedSourcesPolicy"?: SchemaValue<CreativeWork | URL | IdReference, "https://schema.org/unnamedSourcesPolicy">;
    /** Disclosure about verification and fact-checking processes for a {@link https://schema.org/NewsMediaOrganization NewsMediaOrganization} or other fact-checking {@link https://schema.org/Organization Organization}. */
    "https://schema.org/verificationFactCheckingPolicy"?: SchemaValue<CreativeWork | URL | IdReference, "https://schema.org/verificationFactCheckingPolicy">;
}
interface NewsMediaOrganizationLeaf extends NewsMediaOrganizationBase {
    "@type": "https://schema.org/NewsMediaOrganization";
}
/** A News/Media organization such as a newspaper or TV station. */
export declare type NewsMediaOrganization = NewsMediaOrganizationLeaf | string;
interface NewspaperLeaf extends CreativeWorkSeriesBase {
    "@type": "https://schema.org/Newspaper";
}
/** A publication containing information about varied topics that are pertinent to general information, a geographic area, or a specific subject matter (i.e. business, culture, education). Often published daily. */
export declare type Newspaper = NewspaperLeaf;
interface NGOLeaf extends OrganizationBase {
    "@type": "https://schema.org/NGO";
}
/** Organization: Non-governmental Organization. */
export declare type NGO = NGOLeaf | string;
interface NightClubLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/NightClub";
}
/** A nightclub or discotheque. */
export declare type NightClub = NightClubLeaf | string;
interface NLNonprofitTypeLeaf extends EnumerationBase {
    "@type": "https://schema.org/NLNonprofitType";
}
/** NLNonprofitType: Non-profit organization type originating from the Netherlands. */
export declare type NLNonprofitType = "https://schema.org/NonprofitANBI" | "https://schema.org/NonprofitSBBI" | NLNonprofitTypeLeaf;
interface NonprofitTypeLeaf extends EnumerationBase {
    "@type": "https://schema.org/NonprofitType";
}
/** NonprofitType enumerates several kinds of official non-profit types of which a non-profit organization can be. */
export declare type NonprofitType = NonprofitTypeLeaf | NLNonprofitType | UKNonprofitType | USNonprofitType;
interface NotaryLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/Notary";
}
/** A notary. */
export declare type Notary = NotaryLeaf | string;
interface NoteDigitalDocumentLeaf extends DigitalDocumentBase {
    "@type": "https://schema.org/NoteDigitalDocument";
}
/** A file containing a note, primarily for the author. */
export declare type NoteDigitalDocument = NoteDigitalDocumentLeaf;
interface NutritionInformationBase extends ThingBase {
    /** The number of calories. */
    "https://schema.org/calories"?: SchemaValue<Energy | IdReference, "https://schema.org/calories">;
    /** The number of grams of carbohydrates. */
    "https://schema.org/carbohydrateContent"?: SchemaValue<Mass | IdReference, "https://schema.org/carbohydrateContent">;
    /** The number of milligrams of cholesterol. */
    "https://schema.org/cholesterolContent"?: SchemaValue<Mass | IdReference, "https://schema.org/cholesterolContent">;
    /** The number of grams of fat. */
    "https://schema.org/fatContent"?: SchemaValue<Mass | IdReference, "https://schema.org/fatContent">;
    /** The number of grams of fiber. */
    "https://schema.org/fiberContent"?: SchemaValue<Mass | IdReference, "https://schema.org/fiberContent">;
    /** The number of grams of protein. */
    "https://schema.org/proteinContent"?: SchemaValue<Mass | IdReference, "https://schema.org/proteinContent">;
    /** The number of grams of saturated fat. */
    "https://schema.org/saturatedFatContent"?: SchemaValue<Mass | IdReference, "https://schema.org/saturatedFatContent">;
    /** The serving size, in terms of the number of volume or mass. */
    "https://schema.org/servingSize"?: SchemaValue<Text, "https://schema.org/servingSize">;
    /** The number of milligrams of sodium. */
    "https://schema.org/sodiumContent"?: SchemaValue<Mass | IdReference, "https://schema.org/sodiumContent">;
    /** The number of grams of sugar. */
    "https://schema.org/sugarContent"?: SchemaValue<Mass | IdReference, "https://schema.org/sugarContent">;
    /** The number of grams of trans fat. */
    "https://schema.org/transFatContent"?: SchemaValue<Mass | IdReference, "https://schema.org/transFatContent">;
    /** The number of grams of unsaturated fat. */
    "https://schema.org/unsaturatedFatContent"?: SchemaValue<Mass | IdReference, "https://schema.org/unsaturatedFatContent">;
}
interface NutritionInformationLeaf extends NutritionInformationBase {
    "@type": "https://schema.org/NutritionInformation";
}
/** Nutritional information about the recipe. */
export declare type NutritionInformation = NutritionInformationLeaf;
interface ObservationBase extends ThingBase {
    /** A marginOfError for an {@link https://schema.org/Observation Observation}. */
    "https://schema.org/marginOfError"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/marginOfError">;
    /** The measuredProperty of an {@link https://schema.org/Observation Observation}, either a schema.org property, a property from other RDF-compatible systems e.g. W3C RDF Data Cube, or schema.org extensions such as {@link https://www.gs1.org/voc/?show=properties GS1's}. */
    "https://schema.org/measuredProperty"?: SchemaValue<Property | IdReference, "https://schema.org/measuredProperty">;
    /** The measuredValue of an {@link https://schema.org/Observation Observation}. */
    "https://schema.org/measuredValue"?: SchemaValue<DataType | IdReference, "https://schema.org/measuredValue">;
    /** The observationDate of an {@link https://schema.org/Observation Observation}. */
    "https://schema.org/observationDate"?: SchemaValue<DateTime, "https://schema.org/observationDate">;
    /** The observedNode of an {@link https://schema.org/Observation Observation}, often a {@link https://schema.org/StatisticalPopulation StatisticalPopulation}. */
    "https://schema.org/observedNode"?: SchemaValue<StatisticalPopulation | IdReference, "https://schema.org/observedNode">;
}
interface ObservationLeaf extends ObservationBase {
    "@type": "https://schema.org/Observation";
}
/** Instances of the class {@link https://schema.org/Observation Observation} are used to specify observations about an entity (which may or may not be an instance of a {@link https://schema.org/StatisticalPopulation StatisticalPopulation}), at a particular time. The principal properties of an {@link https://schema.org/Observation Observation} are {@link https://schema.org/observedNode observedNode}, {@link https://schema.org/measuredProperty measuredProperty}, {@link https://schema.org/measuredValue measuredValue} (or {@link https://schema.org/median median}, etc.) and {@link https://schema.org/observationDate observationDate} ({@link https://schema.org/measuredProperty measuredProperty} properties can, but need not always, be W3C RDF Data Cube "measure properties", as in the {@link https://www.w3.org/TR/vocab-data-cube/#dsd-example lifeExpectancy example}). See also {@link https://schema.org/StatisticalPopulation StatisticalPopulation}, and the {@link /docs/data-and-datasets.html data and datasets} overview for more details. */
export declare type Observation = ObservationLeaf;
interface OccupationBase extends ThingBase {
    /** Educational background needed for the position or Occupation. */
    "https://schema.org/educationRequirements"?: SchemaValue<EducationalOccupationalCredential | Text | IdReference, "https://schema.org/educationRequirements">;
    /** An estimated salary for a job posting or occupation, based on a variety of variables including, but not limited to industry, job title, and location. Estimated salaries are often computed by outside organizations rather than the hiring organization, who may not have committed to the estimated value. */
    "https://schema.org/estimatedSalary"?: SchemaValue<MonetaryAmount | MonetaryAmountDistribution | Number | IdReference, "https://schema.org/estimatedSalary">;
    /** Description of skills and experience needed for the position or Occupation. */
    "https://schema.org/experienceRequirements"?: SchemaValue<OccupationalExperienceRequirements | Text | IdReference, "https://schema.org/experienceRequirements">;
    /**
     * A category describing the job, preferably using a term from a taxonomy such as {@link http://www.onetcenter.org/taxonomy.html BLS O*NET-SOC}, {@link https://www.ilo.org/public/english/bureau/stat/isco/isco08/ ISCO-08} or similar, with the property repeated for each applicable value. Ideally the taxonomy should be identified, and both the textual label and formal code for the category should be provided.
     *
     * Note: for historical reasons, any textual label and formal code provided as a literal may be assumed to be from O*NET-SOC.
     */
    "https://schema.org/occupationalCategory"?: SchemaValue<CategoryCode | Text | IdReference, "https://schema.org/occupationalCategory">;
    /** The region/country for which this occupational description is appropriate. Note that educational requirements and qualifications can vary between jurisdictions. */
    "https://schema.org/occupationLocation"?: SchemaValue<AdministrativeArea | IdReference, "https://schema.org/occupationLocation">;
    /** Specific qualifications required for this role or Occupation. */
    "https://schema.org/qualifications"?: SchemaValue<EducationalOccupationalCredential | Text | IdReference, "https://schema.org/qualifications">;
    /** Responsibilities associated with this role or Occupation. */
    "https://schema.org/responsibilities"?: SchemaValue<Text, "https://schema.org/responsibilities">;
    /** A statement of knowledge, skill, ability, task or any other assertion expressing a competency that is desired or required to fulfill this role or to work in this occupation. */
    "https://schema.org/skills"?: SchemaValue<DefinedTerm | Text | IdReference, "https://schema.org/skills">;
}
interface OccupationLeaf extends OccupationBase {
    "@type": "https://schema.org/Occupation";
}
/** A profession, may involve prolonged training and/or a formal qualification. */
export declare type Occupation = OccupationLeaf;
interface OccupationalExperienceRequirementsBase extends ThingBase {
    /** Indicates the minimal number of months of experience required for a position. */
    "https://schema.org/monthsOfExperience"?: SchemaValue<Number, "https://schema.org/monthsOfExperience">;
}
interface OccupationalExperienceRequirementsLeaf extends OccupationalExperienceRequirementsBase {
    "@type": "https://schema.org/OccupationalExperienceRequirements";
}
/** Indicates employment-related experience requirements, e.g. {@link https://schema.org/monthsOfExperience monthsOfExperience}. */
export declare type OccupationalExperienceRequirements = OccupationalExperienceRequirementsLeaf;
interface OccupationalTherapyLeaf extends MedicalTherapyBase {
    "@type": "https://schema.org/OccupationalTherapy";
}
/** A treatment of people with physical, emotional, or social problems, using purposeful activity to help them overcome or learn to deal with their problems. */
export declare type OccupationalTherapy = OccupationalTherapyLeaf;
interface OceanBodyOfWaterLeaf extends PlaceBase {
    "@type": "https://schema.org/OceanBodyOfWater";
}
/** An ocean (for example, the Pacific). */
export declare type OceanBodyOfWater = OceanBodyOfWaterLeaf | string;
interface OfferBase extends ThingBase {
    /** The payment method(s) accepted by seller for this offer. */
    "https://schema.org/acceptedPaymentMethod"?: SchemaValue<LoanOrCredit | PaymentMethod | IdReference, "https://schema.org/acceptedPaymentMethod">;
    /** An additional offer that can only be obtained in combination with the first base offer (e.g. supplements and extensions that are available for a surcharge). */
    "https://schema.org/addOn"?: SchemaValue<Offer | IdReference, "https://schema.org/addOn">;
    /** The amount of time that is required between accepting the offer and the actual usage of the resource or service. */
    "https://schema.org/advanceBookingRequirement"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/advanceBookingRequirement">;
    /** The overall rating, based on a collection of reviews or ratings, of the item. */
    "https://schema.org/aggregateRating"?: SchemaValue<AggregateRating | IdReference, "https://schema.org/aggregateRating">;
    /** The geographic area where a service or offered item is provided. */
    "https://schema.org/areaServed"?: SchemaValue<AdministrativeArea | GeoShape | Place | Text | IdReference, "https://schema.org/areaServed">;
    /** The availability of this item—for example In stock, Out of stock, Pre-order, etc. */
    "https://schema.org/availability"?: SchemaValue<ItemAvailability | IdReference, "https://schema.org/availability">;
    /** The end of the availability of the product or service included in the offer. */
    "https://schema.org/availabilityEnds"?: SchemaValue<Date | DateTime | Time, "https://schema.org/availabilityEnds">;
    /** The beginning of the availability of the product or service included in the offer. */
    "https://schema.org/availabilityStarts"?: SchemaValue<Date | DateTime | Time, "https://schema.org/availabilityStarts">;
    /** The place(s) from which the offer can be obtained (e.g. store locations). */
    "https://schema.org/availableAtOrFrom"?: SchemaValue<Place | IdReference, "https://schema.org/availableAtOrFrom">;
    /** The delivery method(s) available for this offer. */
    "https://schema.org/availableDeliveryMethod"?: SchemaValue<DeliveryMethod | IdReference, "https://schema.org/availableDeliveryMethod">;
    /** The business function (e.g. sell, lease, repair, dispose) of the offer or component of a bundle (TypeAndQuantityNode). The default is http://purl.org/goodrelations/v1#Sell. */
    "https://schema.org/businessFunction"?: SchemaValue<BusinessFunction | IdReference, "https://schema.org/businessFunction">;
    /** A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy. */
    "https://schema.org/category"?: SchemaValue<PhysicalActivityCategory | Text | Thing | URL | IdReference, "https://schema.org/category">;
    /** The typical delay between the receipt of the order and the goods either leaving the warehouse or being prepared for pickup, in case the delivery method is on site pickup. */
    "https://schema.org/deliveryLeadTime"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/deliveryLeadTime">;
    /** The type(s) of customers for which the given offer is valid. */
    "https://schema.org/eligibleCustomerType"?: SchemaValue<BusinessEntityType | IdReference, "https://schema.org/eligibleCustomerType">;
    /** The duration for which the given offer is valid. */
    "https://schema.org/eligibleDuration"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/eligibleDuration">;
    /** The interval and unit of measurement of ordering quantities for which the offer or price specification is valid. This allows e.g. specifying that a certain freight charge is valid only for a certain quantity. */
    "https://schema.org/eligibleQuantity"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/eligibleQuantity">;
    /**
     * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is valid.
     *
     * See also {@link https://schema.org/ineligibleRegion ineligibleRegion}.
     */
    "https://schema.org/eligibleRegion"?: SchemaValue<GeoShape | Place | Text | IdReference, "https://schema.org/eligibleRegion">;
    /** The transaction volume, in a monetary unit, for which the offer or price specification is valid, e.g. for indicating a minimal purchasing volume, to express free shipping above a certain order volume, or to limit the acceptance of credit cards to purchases to a certain minimal amount. */
    "https://schema.org/eligibleTransactionVolume"?: SchemaValue<PriceSpecification | IdReference, "https://schema.org/eligibleTransactionVolume">;
    /** A Global Trade Item Number ({@link https://www.gs1.org/standards/id-keys/gtin GTIN}). GTINs identify trade items, including products and services, using numeric identification codes. The {@link https://schema.org/gtin gtin} property generalizes the earlier {@link https://schema.org/gtin8 gtin8}, {@link https://schema.org/gtin12 gtin12}, {@link https://schema.org/gtin13 gtin13}, and {@link https://schema.org/gtin14 gtin14} properties. The GS1 {@link https://www.gs1.org/standards/Digital-Link/ digital link specifications} express GTINs as URLs. A correct {@link https://schema.org/gtin gtin} value should be a valid GTIN, which means that it should be an all-numeric string of either 8, 12, 13 or 14 digits, or a "GS1 Digital Link" URL based on such a string. The numeric component should also have a {@link https://www.gs1.org/services/check-digit-calculator valid GS1 check digit} and meet the other rules for valid GTINs. See also {@link http://www.gs1.org/barcodes/technical/idkeys/gtin GS1's GTIN Summary} and {@link https://en.wikipedia.org/wiki/Global_Trade_Item_Number Wikipedia} for more details. Left-padding of the gtin values is not required or encouraged. */
    "https://schema.org/gtin"?: SchemaValue<Text, "https://schema.org/gtin">;
    /** The GTIN-12 code of the product, or the product to which the offer refers. The GTIN-12 is the 12-digit GS1 Identification Key composed of a U.P.C. Company Prefix, Item Reference, and Check Digit used to identify trade items. See {@link http://www.gs1.org/barcodes/technical/idkeys/gtin GS1 GTIN Summary} for more details. */
    "https://schema.org/gtin12"?: SchemaValue<Text, "https://schema.org/gtin12">;
    /** The GTIN-13 code of the product, or the product to which the offer refers. This is equivalent to 13-digit ISBN codes and EAN UCC-13. Former 12-digit UPC codes can be converted into a GTIN-13 code by simply adding a preceding zero. See {@link http://www.gs1.org/barcodes/technical/idkeys/gtin GS1 GTIN Summary} for more details. */
    "https://schema.org/gtin13"?: SchemaValue<Text, "https://schema.org/gtin13">;
    /** The GTIN-14 code of the product, or the product to which the offer refers. See {@link http://www.gs1.org/barcodes/technical/idkeys/gtin GS1 GTIN Summary} for more details. */
    "https://schema.org/gtin14"?: SchemaValue<Text, "https://schema.org/gtin14">;
    /** The GTIN-8 code of the product, or the product to which the offer refers. This code is also known as EAN/UCC-8 or 8-digit EAN. See {@link http://www.gs1.org/barcodes/technical/idkeys/gtin GS1 GTIN Summary} for more details. */
    "https://schema.org/gtin8"?: SchemaValue<Text, "https://schema.org/gtin8">;
    /** A product measurement, for example the inseam of pants, the wheel size of a bicycle, or the gauge of a screw. Usually an exact measurement, but can also be a range of measurements for adjustable products, for example belts and ski bindings. */
    "https://schema.org/hasMeasurement"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/hasMeasurement">;
    /** Specifies a MerchantReturnPolicy that may be applicable. */
    "https://schema.org/hasMerchantReturnPolicy"?: SchemaValue<MerchantReturnPolicy | IdReference, "https://schema.org/hasMerchantReturnPolicy">;
    /** This links to a node or nodes indicating the exact quantity of the products included in an {@link https://schema.org/Offer Offer} or {@link https://schema.org/ProductCollection ProductCollection}. */
    "https://schema.org/includesObject"?: SchemaValue<TypeAndQuantityNode | IdReference, "https://schema.org/includesObject">;
    /**
     * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is not valid, e.g. a region where the transaction is not allowed.
     *
     * See also {@link https://schema.org/eligibleRegion eligibleRegion}.
     */
    "https://schema.org/ineligibleRegion"?: SchemaValue<GeoShape | Place | Text | IdReference, "https://schema.org/ineligibleRegion">;
    /** The current approximate inventory level for the item or items. */
    "https://schema.org/inventoryLevel"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/inventoryLevel">;
    /** A predefined value from OfferItemCondition specifying the condition of the product or service, or the products or services included in the offer. Also used for product return policies to specify the condition of products accepted for returns. */
    "https://schema.org/itemCondition"?: SchemaValue<OfferItemCondition | IdReference, "https://schema.org/itemCondition">;
    /** An item being offered (or demanded). The transactional nature of the offer or demand is documented using {@link https://schema.org/businessFunction businessFunction}, e.g. sell, lease etc. While several common expected types are listed explicitly in this definition, others can be used. Using a second type, such as Product or a subtype of Product, can clarify the nature of the offer. */
    "https://schema.org/itemOffered"?: SchemaValue<AggregateOffer | CreativeWork | Event | MenuItem | Product | Service | Trip | IdReference, "https://schema.org/itemOffered">;
    /** Length of the lease for some {@link https://schema.org/Accommodation Accommodation}, either particular to some {@link https://schema.org/Offer Offer} or in some cases intrinsic to the property. */
    "https://schema.org/leaseLength"?: SchemaValue<Duration | QuantitativeValue | IdReference, "https://schema.org/leaseLength">;
    /** The Manufacturer Part Number (MPN) of the product, or the product to which the offer refers. */
    "https://schema.org/mpn"?: SchemaValue<Text, "https://schema.org/mpn">;
    /** A pointer to the organization or person making the offer. */
    "https://schema.org/offeredBy"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/offeredBy">;
    /**
     * The offer price of a product, or of a price component when attached to PriceSpecification and its subtypes.
     *
     * Usage guidelines:
     * - Use the {@link https://schema.org/priceCurrency priceCurrency} property (with standard formats: {@link http://en.wikipedia.org/wiki/ISO_4217 ISO 4217 currency format} e.g. "USD"; {@link https://en.wikipedia.org/wiki/List_of_cryptocurrencies Ticker symbol} for cryptocurrencies e.g. "BTC"; well known names for {@link https://en.wikipedia.org/wiki/Local_exchange_trading_system Local Exchange Tradings Systems} (LETS) and other currency types e.g. "Ithaca HOUR") instead of including {@link http://en.wikipedia.org/wiki/Dollar_sign#Currencies_that_use_the_dollar_or_peso_sign ambiguous symbols} such as '$' in the value.
     * - Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
     * - Note that both {@link http://www.w3.org/TR/xhtml-rdfa-primer/#using-the-content-attribute RDFa} and Microdata syntax allow the use of a "content=" attribute for publishing simple machine-readable values alongside more human-friendly formatting.
     * - Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.
     */
    "https://schema.org/price"?: SchemaValue<Number | Text, "https://schema.org/price">;
    /**
     * The currency of the price, or a price component when attached to {@link https://schema.org/PriceSpecification PriceSpecification} and its subtypes.
     *
     * Use standard formats: {@link http://en.wikipedia.org/wiki/ISO_4217 ISO 4217 currency format} e.g. "USD"; {@link https://en.wikipedia.org/wiki/List_of_cryptocurrencies Ticker symbol} for cryptocurrencies e.g. "BTC"; well known names for {@link https://en.wikipedia.org/wiki/Local_exchange_trading_system Local Exchange Tradings Systems} (LETS) and other currency types e.g. "Ithaca HOUR".
     */
    "https://schema.org/priceCurrency"?: SchemaValue<Text, "https://schema.org/priceCurrency">;
    /** One or more detailed price specifications, indicating the unit price and delivery or payment charges. */
    "https://schema.org/priceSpecification"?: SchemaValue<PriceSpecification | IdReference, "https://schema.org/priceSpecification">;
    /** The date after which the price is no longer available. */
    "https://schema.org/priceValidUntil"?: SchemaValue<Date, "https://schema.org/priceValidUntil">;
    /** A review of the item. */
    "https://schema.org/review"?: SchemaValue<Review | IdReference, "https://schema.org/review">;
    /**
     * Review of the item.
     *
     * @deprecated Consider using https://schema.org/review instead.
     */
    "https://schema.org/reviews"?: SchemaValue<Review | IdReference, "https://schema.org/reviews">;
    /** An entity which offers (sells / leases / lends / loans) the services / goods. A seller may also be a provider. */
    "https://schema.org/seller"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/seller">;
    /** The serial number or any alphanumeric identifier of a particular product. When attached to an offer, it is a shortcut for the serial number of the product included in the offer. */
    "https://schema.org/serialNumber"?: SchemaValue<Text, "https://schema.org/serialNumber">;
    /** Indicates information about the shipping policies and options associated with an {@link https://schema.org/Offer Offer}. */
    "https://schema.org/shippingDetails"?: SchemaValue<OfferShippingDetails | IdReference, "https://schema.org/shippingDetails">;
    /** The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers. */
    "https://schema.org/sku"?: SchemaValue<Text, "https://schema.org/sku">;
    /** The date when the item becomes valid. */
    "https://schema.org/validFrom"?: SchemaValue<Date | DateTime, "https://schema.org/validFrom">;
    /** The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours. */
    "https://schema.org/validThrough"?: SchemaValue<Date | DateTime, "https://schema.org/validThrough">;
    /** The warranty promise(s) included in the offer. */
    "https://schema.org/warranty"?: SchemaValue<WarrantyPromise | IdReference, "https://schema.org/warranty">;
}
interface OfferLeaf extends OfferBase {
    "@type": "https://schema.org/Offer";
}
/**
 * An offer to transfer some rights to an item or to provide a service — for example, an offer to sell tickets to an event, to rent the DVD of a movie, to stream a TV show over the internet, to repair a motorcycle, or to loan a book.
 *
 * Note: As the {@link https://schema.org/businessFunction businessFunction} property, which identifies the form of offer (e.g. sell, lease, repair, dispose), defaults to http://purl.org/goodrelations/v1#Sell; an Offer without a defined businessFunction value can be assumed to be an offer to sell.
 *
 * For {@link http://www.gs1.org/barcodes/technical/idkeys/gtin GTIN}-related fields, see {@link http://www.gs1.org/barcodes/support/check_digit_calculator Check Digit calculator} and {@link http://www.gs1us.org/resources/standards/gtin-validation-guide validation guide} from {@link http://www.gs1.org/ GS1}.
 */
export declare type Offer = OfferLeaf | AggregateOffer | OfferForLease | OfferForPurchase;
interface OfferCatalogLeaf extends ItemListBase {
    "@type": "https://schema.org/OfferCatalog";
}
/** An OfferCatalog is an ItemList that contains related Offers and/or further OfferCatalogs that are offeredBy the same provider. */
export declare type OfferCatalog = OfferCatalogLeaf;
interface OfferForLeaseLeaf extends OfferBase {
    "@type": "https://schema.org/OfferForLease";
}
/** An {@link https://schema.org/OfferForLease OfferForLease} in Schema.org represents an {@link https://schema.org/Offer Offer} to lease out something, i.e. an {@link https://schema.org/Offer Offer} whose {@link https://schema.org/businessFunction businessFunction} is {@link http://purl.org/goodrelations/v1#LeaseOut. lease out}. See {@link https://en.wikipedia.org/wiki/GoodRelations Good Relations} for background on the underlying concepts. */
export declare type OfferForLease = OfferForLeaseLeaf;
interface OfferForPurchaseLeaf extends OfferBase {
    "@type": "https://schema.org/OfferForPurchase";
}
/** An {@link https://schema.org/OfferForPurchase OfferForPurchase} in Schema.org represents an {@link https://schema.org/Offer Offer} to sell something, i.e. an {@link https://schema.org/Offer Offer} whose {@link https://schema.org/businessFunction businessFunction} is {@link http://purl.org/goodrelations/v1#Sell. sell}. See {@link https://en.wikipedia.org/wiki/GoodRelations Good Relations} for background on the underlying concepts. */
export declare type OfferForPurchase = OfferForPurchaseLeaf;
interface OfferItemConditionLeaf extends EnumerationBase {
    "@type": "https://schema.org/OfferItemCondition";
}
/** A list of possible conditions for the item. */
export declare type OfferItemCondition = "https://schema.org/DamagedCondition" | "https://schema.org/NewCondition" | "https://schema.org/RefurbishedCondition" | "https://schema.org/UsedCondition" | OfferItemConditionLeaf;
interface OfferShippingDetailsBase extends ThingBase {
    /** The total delay between the receipt of the order and the goods reaching the final customer. */
    "https://schema.org/deliveryTime"?: SchemaValue<ShippingDeliveryTime | IdReference, "https://schema.org/deliveryTime">;
    /** Indicates when shipping to a particular {@link https://schema.org/shippingDestination shippingDestination} is not available. */
    "https://schema.org/doesNotShip"?: SchemaValue<Boolean, "https://schema.org/doesNotShip">;
    /** indicates (possibly multiple) shipping destinations. These can be defined in several ways e.g. postalCode ranges. */
    "https://schema.org/shippingDestination"?: SchemaValue<DefinedRegion | IdReference, "https://schema.org/shippingDestination">;
    /** Label to match an {@link https://schema.org/OfferShippingDetails OfferShippingDetails} with a {@link https://schema.org/ShippingRateSettings ShippingRateSettings} (within the context of a {@link https://schema.org/shippingSettingsLink shippingSettingsLink} cross-reference). */
    "https://schema.org/shippingLabel"?: SchemaValue<Text, "https://schema.org/shippingLabel">;
    /** The shipping rate is the cost of shipping to the specified destination. Typically, the maxValue and currency values (of the {@link https://schema.org/MonetaryAmount MonetaryAmount}) are most appropriate. */
    "https://schema.org/shippingRate"?: SchemaValue<MonetaryAmount | IdReference, "https://schema.org/shippingRate">;
    /** Link to a page containing {@link https://schema.org/ShippingRateSettings ShippingRateSettings} and {@link https://schema.org/DeliveryTimeSettings DeliveryTimeSettings} details. */
    "https://schema.org/shippingSettingsLink"?: SchemaValue<URL, "https://schema.org/shippingSettingsLink">;
    /** Label to match an {@link https://schema.org/OfferShippingDetails OfferShippingDetails} with a {@link https://schema.org/DeliveryTimeSettings DeliveryTimeSettings} (within the context of a {@link https://schema.org/shippingSettingsLink shippingSettingsLink} cross-reference). */
    "https://schema.org/transitTimeLabel"?: SchemaValue<Text, "https://schema.org/transitTimeLabel">;
}
interface OfferShippingDetailsLeaf extends OfferShippingDetailsBase {
    "@type": "https://schema.org/OfferShippingDetails";
}
/**
 * OfferShippingDetails represents information about shipping destinations.
 *
 * Multiple of these entities can be used to represent different shipping rates for different destinations:
 *
 * One entity for Alaska/Hawaii. A different one for continental US.A different one for all France.
 *
 * Multiple of these entities can be used to represent different shipping costs and delivery times.
 *
 * Two entities that are identical but differ in rate and time:
 *
 * e.g. Cheaper and slower: $5 in 5-7days or Fast and expensive: $15 in 1-2 days.
 */
export declare type OfferShippingDetails = OfferShippingDetailsLeaf;
interface OfficeEquipmentStoreLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/OfficeEquipmentStore";
}
/** An office equipment store. */
export declare type OfficeEquipmentStore = OfficeEquipmentStoreLeaf | string;
interface OnDemandEventLeaf extends PublicationEventBase {
    "@type": "https://schema.org/OnDemandEvent";
}
/** A publication event e.g. catch-up TV or radio podcast, during which a program is available on-demand. */
export declare type OnDemandEvent = OnDemandEventLeaf;
interface OpeningHoursSpecificationBase extends ThingBase {
    /** The closing hour of the place or service on the given day(s) of the week. */
    "https://schema.org/closes"?: SchemaValue<Time, "https://schema.org/closes">;
    /** The day of the week for which these opening hours are valid. */
    "https://schema.org/dayOfWeek"?: SchemaValue<DayOfWeek | IdReference, "https://schema.org/dayOfWeek">;
    /** The opening hour of the place or service on the given day(s) of the week. */
    "https://schema.org/opens"?: SchemaValue<Time, "https://schema.org/opens">;
    /** The date when the item becomes valid. */
    "https://schema.org/validFrom"?: SchemaValue<Date | DateTime, "https://schema.org/validFrom">;
    /** The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours. */
    "https://schema.org/validThrough"?: SchemaValue<Date | DateTime, "https://schema.org/validThrough">;
}
interface OpeningHoursSpecificationLeaf extends OpeningHoursSpecificationBase {
    "@type": "https://schema.org/OpeningHoursSpecification";
}
/**
 * A structured value providing information about the opening hours of a place or a certain service inside a place.
 *
 * The place is __open__ if the {@link https://schema.org/opens opens} property is specified, and __closed__ otherwise.
 *
 * If the value for the {@link https://schema.org/closes closes} property is less than the value for the {@link https://schema.org/opens opens} property then the hour range is assumed to span over the next day.
 */
export declare type OpeningHoursSpecification = OpeningHoursSpecificationLeaf;
interface OpinionNewsArticleLeaf extends NewsArticleBase {
    "@type": "https://schema.org/OpinionNewsArticle";
}
/** An {@link https://schema.org/OpinionNewsArticle OpinionNewsArticle} is a {@link https://schema.org/NewsArticle NewsArticle} that primarily expresses opinions rather than journalistic reporting of news and events. For example, a {@link https://schema.org/NewsArticle NewsArticle} consisting of a column or {@link https://schema.org/Blog Blog}/{@link https://schema.org/BlogPosting BlogPosting} entry in the Opinions section of a news publication. */
export declare type OpinionNewsArticle = OpinionNewsArticleLeaf;
interface OpticianLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/Optician";
}
/** A store that sells reading glasses and similar devices for improving vision. */
export declare type Optician = OpticianLeaf | string;
interface OrderBase extends ThingBase {
    /** The offer(s) -- e.g., product, quantity and price combinations -- included in the order. */
    "https://schema.org/acceptedOffer"?: SchemaValue<Offer | IdReference, "https://schema.org/acceptedOffer">;
    /** The billing address for the order. */
    "https://schema.org/billingAddress"?: SchemaValue<PostalAddress | IdReference, "https://schema.org/billingAddress">;
    /** An entity that arranges for an exchange between a buyer and a seller. In most cases a broker never acquires or releases ownership of a product or service involved in an exchange. If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred. */
    "https://schema.org/broker"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/broker">;
    /** A number that confirms the given order or payment has been received. */
    "https://schema.org/confirmationNumber"?: SchemaValue<Text, "https://schema.org/confirmationNumber">;
    /** Party placing the order or paying the invoice. */
    "https://schema.org/customer"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/customer">;
    /** Any discount applied (to an Order). */
    "https://schema.org/discount"?: SchemaValue<Number | Text, "https://schema.org/discount">;
    /** Code used to redeem a discount. */
    "https://schema.org/discountCode"?: SchemaValue<Text, "https://schema.org/discountCode">;
    /**
     * The currency of the discount.
     *
     * Use standard formats: {@link http://en.wikipedia.org/wiki/ISO_4217 ISO 4217 currency format} e.g. "USD"; {@link https://en.wikipedia.org/wiki/List_of_cryptocurrencies Ticker symbol} for cryptocurrencies e.g. "BTC"; well known names for {@link https://en.wikipedia.org/wiki/Local_exchange_trading_system Local Exchange Tradings Systems} (LETS) and other currency types e.g. "Ithaca HOUR".
     */
    "https://schema.org/discountCurrency"?: SchemaValue<Text, "https://schema.org/discountCurrency">;
    /** Was the offer accepted as a gift for someone other than the buyer. */
    "https://schema.org/isGift"?: SchemaValue<Boolean, "https://schema.org/isGift">;
    /**
     * 'merchant' is an out-dated term for 'seller'.
     *
     * @deprecated Consider using https://schema.org/seller instead.
     */
    "https://schema.org/merchant"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/merchant">;
    /** Date order was placed. */
    "https://schema.org/orderDate"?: SchemaValue<Date | DateTime, "https://schema.org/orderDate">;
    /** The delivery of the parcel related to this order or order item. */
    "https://schema.org/orderDelivery"?: SchemaValue<ParcelDelivery | IdReference, "https://schema.org/orderDelivery">;
    /** The item ordered. */
    "https://schema.org/orderedItem"?: SchemaValue<OrderItem | Product | Service | IdReference, "https://schema.org/orderedItem">;
    /** The identifier of the transaction. */
    "https://schema.org/orderNumber"?: SchemaValue<Text, "https://schema.org/orderNumber">;
    /** The current status of the order. */
    "https://schema.org/orderStatus"?: SchemaValue<OrderStatus | IdReference, "https://schema.org/orderStatus">;
    /** The order is being paid as part of the referenced Invoice. */
    "https://schema.org/partOfInvoice"?: SchemaValue<Invoice | IdReference, "https://schema.org/partOfInvoice">;
    /**
     * The date that payment is due.
     *
     * @deprecated Consider using https://schema.org/paymentDueDate instead.
     */
    "https://schema.org/paymentDue"?: SchemaValue<DateTime, "https://schema.org/paymentDue">;
    /** The date that payment is due. */
    "https://schema.org/paymentDueDate"?: SchemaValue<Date | DateTime, "https://schema.org/paymentDueDate">;
    /** The name of the credit card or other method of payment for the order. */
    "https://schema.org/paymentMethod"?: SchemaValue<PaymentMethod | IdReference, "https://schema.org/paymentMethod">;
    /** An identifier for the method of payment used (e.g. the last 4 digits of the credit card). */
    "https://schema.org/paymentMethodId"?: SchemaValue<Text, "https://schema.org/paymentMethodId">;
    /** The URL for sending a payment. */
    "https://schema.org/paymentUrl"?: SchemaValue<URL, "https://schema.org/paymentUrl">;
    /** An entity which offers (sells / leases / lends / loans) the services / goods. A seller may also be a provider. */
    "https://schema.org/seller"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/seller">;
}
interface OrderLeaf extends OrderBase {
    "@type": "https://schema.org/Order";
}
/** An order is a confirmation of a transaction (a receipt), which can contain multiple line items, each represented by an Offer that has been accepted by the customer. */
export declare type Order = OrderLeaf;
interface OrderActionBase extends TradeActionBase {
    /** A sub property of instrument. The method of delivery. */
    "https://schema.org/deliveryMethod"?: SchemaValue<DeliveryMethod | IdReference, "https://schema.org/deliveryMethod">;
}
interface OrderActionLeaf extends OrderActionBase {
    "@type": "https://schema.org/OrderAction";
}
/** An agent orders an object/product/service to be delivered/sent. */
export declare type OrderAction = OrderActionLeaf;
interface OrderItemBase extends ThingBase {
    /** The delivery of the parcel related to this order or order item. */
    "https://schema.org/orderDelivery"?: SchemaValue<ParcelDelivery | IdReference, "https://schema.org/orderDelivery">;
    /** The item ordered. */
    "https://schema.org/orderedItem"?: SchemaValue<OrderItem | Product | Service | IdReference, "https://schema.org/orderedItem">;
    /** The identifier of the order item. */
    "https://schema.org/orderItemNumber"?: SchemaValue<Text, "https://schema.org/orderItemNumber">;
    /** The current status of the order item. */
    "https://schema.org/orderItemStatus"?: SchemaValue<OrderStatus | IdReference, "https://schema.org/orderItemStatus">;
    /** The number of the item ordered. If the property is not set, assume the quantity is one. */
    "https://schema.org/orderQuantity"?: SchemaValue<Number, "https://schema.org/orderQuantity">;
}
interface OrderItemLeaf extends OrderItemBase {
    "@type": "https://schema.org/OrderItem";
}
/** An order item is a line of an order. It includes the quantity and shipping details of a bought offer. */
export declare type OrderItem = OrderItemLeaf;
interface OrderStatusLeaf extends EnumerationBase {
    "@type": "https://schema.org/OrderStatus";
}
/** Enumerated status values for Order. */
export declare type OrderStatus = "https://schema.org/OrderCancelled" | "https://schema.org/OrderDelivered" | "https://schema.org/OrderInTransit" | "https://schema.org/OrderPaymentDue" | "https://schema.org/OrderPickupAvailable" | "https://schema.org/OrderProblem" | "https://schema.org/OrderProcessing" | "https://schema.org/OrderReturned" | OrderStatusLeaf;
interface OrganizationBase extends ThingBase {
    /** For a {@link https://schema.org/NewsMediaOrganization NewsMediaOrganization} or other news-related {@link https://schema.org/Organization Organization}, a statement about public engagement activities (for news media, the newsroom’s), including involving the public - digitally or otherwise -- in coverage decisions, reporting and activities after publication. */
    "https://schema.org/actionableFeedbackPolicy"?: SchemaValue<CreativeWork | URL | IdReference, "https://schema.org/actionableFeedbackPolicy">;
    /** Physical address of the item. */
    "https://schema.org/address"?: SchemaValue<PostalAddress | Text | IdReference, "https://schema.org/address">;
    /** The overall rating, based on a collection of reviews or ratings, of the item. */
    "https://schema.org/aggregateRating"?: SchemaValue<AggregateRating | IdReference, "https://schema.org/aggregateRating">;
    /** Alumni of an organization. */
    "https://schema.org/alumni"?: SchemaValue<Person | IdReference, "https://schema.org/alumni">;
    /** The geographic area where a service or offered item is provided. */
    "https://schema.org/areaServed"?: SchemaValue<AdministrativeArea | GeoShape | Place | Text | IdReference, "https://schema.org/areaServed">;
    /** An award won by or for this item. */
    "https://schema.org/award"?: SchemaValue<Text, "https://schema.org/award">;
    /**
     * Awards won by or for this item.
     *
     * @deprecated Consider using https://schema.org/award instead.
     */
    "https://schema.org/awards"?: SchemaValue<Text, "https://schema.org/awards">;
    /** The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person. */
    "https://schema.org/brand"?: SchemaValue<Brand | Organization | IdReference, "https://schema.org/brand">;
    /** A contact point for a person or organization. */
    "https://schema.org/contactPoint"?: SchemaValue<ContactPoint | IdReference, "https://schema.org/contactPoint">;
    /**
     * A contact point for a person or organization.
     *
     * @deprecated Consider using https://schema.org/contactPoint instead.
     */
    "https://schema.org/contactPoints"?: SchemaValue<ContactPoint | IdReference, "https://schema.org/contactPoints">;
    /** For an {@link https://schema.org/Organization Organization} (e.g. {@link https://schema.org/NewsMediaOrganization NewsMediaOrganization}), a statement describing (in news media, the newsroom’s) disclosure and correction policy for errors. */
    "https://schema.org/correctionsPolicy"?: SchemaValue<CreativeWork | URL | IdReference, "https://schema.org/correctionsPolicy">;
    /** A relationship between an organization and a department of that organization, also described as an organization (allowing different urls, logos, opening hours). For example: a store with a pharmacy, or a bakery with a cafe. */
    "https://schema.org/department"?: SchemaValue<Organization | IdReference, "https://schema.org/department">;
    /** The date that this organization was dissolved. */
    "https://schema.org/dissolutionDate"?: SchemaValue<Date, "https://schema.org/dissolutionDate">;
    /** Statement on diversity policy by an {@link https://schema.org/Organization Organization} e.g. a {@link https://schema.org/NewsMediaOrganization NewsMediaOrganization}. For a {@link https://schema.org/NewsMediaOrganization NewsMediaOrganization}, a statement describing the newsroom’s diversity policy on both staffing and sources, typically providing staffing data. */
    "https://schema.org/diversityPolicy"?: SchemaValue<CreativeWork | URL | IdReference, "https://schema.org/diversityPolicy">;
    /** For an {@link https://schema.org/Organization Organization} (often but not necessarily a {@link https://schema.org/NewsMediaOrganization NewsMediaOrganization}), a report on staffing diversity issues. In a news context this might be for example ASNE or RTDNA (US) reports, or self-reported. */
    "https://schema.org/diversityStaffingReport"?: SchemaValue<Article | URL | IdReference, "https://schema.org/diversityStaffingReport">;
    /** The Dun & Bradstreet DUNS number for identifying an organization or business person. */
    "https://schema.org/duns"?: SchemaValue<Text, "https://schema.org/duns">;
    /** Email address. */
    "https://schema.org/email"?: SchemaValue<Text, "https://schema.org/email">;
    /** Someone working for this organization. */
    "https://schema.org/employee"?: SchemaValue<Person | IdReference, "https://schema.org/employee">;
    /**
     * People working for this organization.
     *
     * @deprecated Consider using https://schema.org/employee instead.
     */
    "https://schema.org/employees"?: SchemaValue<Person | IdReference, "https://schema.org/employees">;
    /** Statement about ethics policy, e.g. of a {@link https://schema.org/NewsMediaOrganization NewsMediaOrganization} regarding journalistic and publishing practices, or of a {@link https://schema.org/Restaurant Restaurant}, a page describing food source policies. In the case of a {@link https://schema.org/NewsMediaOrganization NewsMediaOrganization}, an ethicsPolicy is typically a statement describing the personal, organizational, and corporate standards of behavior expected by the organization. */
    "https://schema.org/ethicsPolicy"?: SchemaValue<CreativeWork | URL | IdReference, "https://schema.org/ethicsPolicy">;
    /** Upcoming or past event associated with this place, organization, or action. */
    "https://schema.org/event"?: SchemaValue<Event | IdReference, "https://schema.org/event">;
    /**
     * Upcoming or past events associated with this place or organization.
     *
     * @deprecated Consider using https://schema.org/event instead.
     */
    "https://schema.org/events"?: SchemaValue<Event | IdReference, "https://schema.org/events">;
    /** The fax number. */
    "https://schema.org/faxNumber"?: SchemaValue<Text, "https://schema.org/faxNumber">;
    /** A person who founded this organization. */
    "https://schema.org/founder"?: SchemaValue<Person | IdReference, "https://schema.org/founder">;
    /**
     * A person who founded this organization.
     *
     * @deprecated Consider using https://schema.org/founder instead.
     */
    "https://schema.org/founders"?: SchemaValue<Person | IdReference, "https://schema.org/founders">;
    /** The date that this organization was founded. */
    "https://schema.org/foundingDate"?: SchemaValue<Date, "https://schema.org/foundingDate">;
    /** The place where the Organization was founded. */
    "https://schema.org/foundingLocation"?: SchemaValue<Place | IdReference, "https://schema.org/foundingLocation">;
    /** A person or organization that supports (sponsors) something through some kind of financial contribution. */
    "https://schema.org/funder"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/funder">;
    /** The {@link http://www.gs1.org/gln Global Location Number} (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations. */
    "https://schema.org/globalLocationNumber"?: SchemaValue<Text, "https://schema.org/globalLocationNumber">;
    /** A credential awarded to the Person or Organization. */
    "https://schema.org/hasCredential"?: SchemaValue<EducationalOccupationalCredential | IdReference, "https://schema.org/hasCredential">;
    /** Specifies a MerchantReturnPolicy that may be applicable. */
    "https://schema.org/hasMerchantReturnPolicy"?: SchemaValue<MerchantReturnPolicy | IdReference, "https://schema.org/hasMerchantReturnPolicy">;
    /** Indicates an OfferCatalog listing for this Organization, Person, or Service. */
    "https://schema.org/hasOfferCatalog"?: SchemaValue<OfferCatalog | IdReference, "https://schema.org/hasOfferCatalog">;
    /** Points-of-Sales operated by the organization or person. */
    "https://schema.org/hasPOS"?: SchemaValue<Place | IdReference, "https://schema.org/hasPOS">;
    /**
     * Indicates a ProductReturnPolicy that may be applicable.
     *
     * @deprecated Consider using https://schema.org/hasMerchantReturnPolicy instead.
     */
    "https://schema.org/hasProductReturnPolicy"?: SchemaValue<ProductReturnPolicy | IdReference, "https://schema.org/hasProductReturnPolicy">;
    /** The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used. */
    "https://schema.org/interactionStatistic"?: SchemaValue<InteractionCounter | IdReference, "https://schema.org/interactionStatistic">;
    /** The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place. */
    "https://schema.org/isicV4"?: SchemaValue<Text, "https://schema.org/isicV4">;
    /** Of a {@link https://schema.org/Person Person}, and less typically of an {@link https://schema.org/Organization Organization}, to indicate a topic that is known about - suggesting possible expertise but not implying it. We do not distinguish skill levels here, or relate this to educational content, events, objectives or {@link https://schema.org/JobPosting JobPosting} descriptions. */
    "https://schema.org/knowsAbout"?: SchemaValue<Text | Thing | URL | IdReference, "https://schema.org/knowsAbout">;
    /** Of a {@link https://schema.org/Person Person}, and less typically of an {@link https://schema.org/Organization Organization}, to indicate a known language. We do not distinguish skill levels or reading/writing/speaking/signing here. Use language codes from the {@link http://tools.ietf.org/html/bcp47 IETF BCP 47 standard}. */
    "https://schema.org/knowsLanguage"?: SchemaValue<Language | Text | IdReference, "https://schema.org/knowsLanguage">;
    /** The official name of the organization, e.g. the registered company name. */
    "https://schema.org/legalName"?: SchemaValue<Text, "https://schema.org/legalName">;
    /** An organization identifier that uniquely identifies a legal entity as defined in ISO 17442. */
    "https://schema.org/leiCode"?: SchemaValue<Text, "https://schema.org/leiCode">;
    /** The location of, for example, where an event is happening, where an organization is located, or where an action takes place. */
    "https://schema.org/location"?: SchemaValue<Place | PostalAddress | Text | VirtualLocation | IdReference, "https://schema.org/location">;
    /** An associated logo. */
    "https://schema.org/logo"?: SchemaValue<ImageObject | URL | IdReference, "https://schema.org/logo">;
    /** A pointer to products or services offered by the organization or person. */
    "https://schema.org/makesOffer"?: SchemaValue<Offer | IdReference, "https://schema.org/makesOffer">;
    /** A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals. */
    "https://schema.org/member"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/member">;
    /** An Organization (or ProgramMembership) to which this Person or Organization belongs. */
    "https://schema.org/memberOf"?: SchemaValue<Organization | ProgramMembership | IdReference, "https://schema.org/memberOf">;
    /**
     * A member of this organization.
     *
     * @deprecated Consider using https://schema.org/member instead.
     */
    "https://schema.org/members"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/members">;
    /** The North American Industry Classification System (NAICS) code for a particular organization or business person. */
    "https://schema.org/naics"?: SchemaValue<Text, "https://schema.org/naics">;
    /** nonprofit Status indicates the legal status of a non-profit organization in its primary place of business. */
    "https://schema.org/nonprofitStatus"?: SchemaValue<NonprofitType | IdReference, "https://schema.org/nonprofitStatus">;
    /** The number of employees in an organization e.g. business. */
    "https://schema.org/numberOfEmployees"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/numberOfEmployees">;
    /** For an {@link https://schema.org/Organization Organization} (often but not necessarily a {@link https://schema.org/NewsMediaOrganization NewsMediaOrganization}), a description of organizational ownership structure; funding and grants. In a news/media setting, this is with particular reference to editorial independence. Note that the {@link https://schema.org/funder funder} is also available and can be used to make basic funder information machine-readable. */
    "https://schema.org/ownershipFundingInfo"?: SchemaValue<AboutPage | CreativeWork | Text | URL | IdReference, "https://schema.org/ownershipFundingInfo">;
    /** Products owned by the organization or person. */
    "https://schema.org/owns"?: SchemaValue<OwnershipInfo | Product | IdReference, "https://schema.org/owns">;
    /** The larger organization that this organization is a {@link https://schema.org/subOrganization subOrganization} of, if any. */
    "https://schema.org/parentOrganization"?: SchemaValue<Organization | IdReference, "https://schema.org/parentOrganization">;
    /**
     * The publishingPrinciples property indicates (typically via {@link https://schema.org/URL URL}) a document describing the editorial principles of an {@link https://schema.org/Organization Organization} (or individual e.g. a {@link https://schema.org/Person Person} writing a blog) that relate to their activities as a publisher, e.g. ethics or diversity policies. When applied to a {@link https://schema.org/CreativeWork CreativeWork} (e.g. {@link https://schema.org/NewsArticle NewsArticle}) the principles are those of the party primarily responsible for the creation of the {@link https://schema.org/CreativeWork CreativeWork}.
     *
     * While such policies are most typically expressed in natural language, sometimes related information (e.g. indicating a {@link https://schema.org/funder funder}) can be expressed using schema.org terminology.
     */
    "https://schema.org/publishingPrinciples"?: SchemaValue<CreativeWork | URL | IdReference, "https://schema.org/publishingPrinciples">;
    /** A review of the item. */
    "https://schema.org/review"?: SchemaValue<Review | IdReference, "https://schema.org/review">;
    /**
     * Review of the item.
     *
     * @deprecated Consider using https://schema.org/review instead.
     */
    "https://schema.org/reviews"?: SchemaValue<Review | IdReference, "https://schema.org/reviews">;
    /** A pointer to products or services sought by the organization or person (demand). */
    "https://schema.org/seeks"?: SchemaValue<Demand | IdReference, "https://schema.org/seeks">;
    /**
     * The geographic area where the service is provided.
     *
     * @deprecated Consider using https://schema.org/areaServed instead.
     */
    "https://schema.org/serviceArea"?: SchemaValue<AdministrativeArea | GeoShape | Place | IdReference, "https://schema.org/serviceArea">;
    /** A slogan or motto associated with the item. */
    "https://schema.org/slogan"?: SchemaValue<Text, "https://schema.org/slogan">;
    /** A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event. */
    "https://schema.org/sponsor"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/sponsor">;
    /** A relationship between two organizations where the first includes the second, e.g., as a subsidiary. See also: the more specific 'department' property. */
    "https://schema.org/subOrganization"?: SchemaValue<Organization | IdReference, "https://schema.org/subOrganization">;
    /** The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain. */
    "https://schema.org/taxID"?: SchemaValue<Text, "https://schema.org/taxID">;
    /** The telephone number. */
    "https://schema.org/telephone"?: SchemaValue<Text, "https://schema.org/telephone">;
    /** For an {@link https://schema.org/Organization Organization} (typically a {@link https://schema.org/NewsMediaOrganization NewsMediaOrganization}), a statement about policy on use of unnamed sources and the decision process required. */
    "https://schema.org/unnamedSourcesPolicy"?: SchemaValue<CreativeWork | URL | IdReference, "https://schema.org/unnamedSourcesPolicy">;
    /** The Value-added Tax ID of the organization or person. */
    "https://schema.org/vatID"?: SchemaValue<Text, "https://schema.org/vatID">;
}
interface OrganizationLeaf extends OrganizationBase {
    "@type": "https://schema.org/Organization";
}
/** An organization such as a school, NGO, corporation, club, etc. */
export declare type Organization = OrganizationLeaf | Airline | Consortium | Corporation | EducationalOrganization | FundingScheme | GovernmentOrganization | LibrarySystem | LocalBusiness | MedicalOrganization | NewsMediaOrganization | NGO | PerformingGroup | Project | ResearchOrganization | SportsOrganization | WorkersUnion | string;
interface OrganizeActionLeaf extends ActionBase {
    "@type": "https://schema.org/OrganizeAction";
}
/** The act of manipulating/administering/supervising/controlling one or more objects. */
export declare type OrganizeAction = OrganizeActionLeaf | AllocateAction | ApplyAction | BookmarkAction | PlanAction;
interface OutletStoreLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/OutletStore";
}
/** An outlet store. */
export declare type OutletStore = OutletStoreLeaf | string;
interface OwnershipInfoBase extends ThingBase {
    /** The organization or person from which the product was acquired. */
    "https://schema.org/acquiredFrom"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/acquiredFrom">;
    /** The date and time of obtaining the product. */
    "https://schema.org/ownedFrom"?: SchemaValue<DateTime, "https://schema.org/ownedFrom">;
    /** The date and time of giving up ownership on the product. */
    "https://schema.org/ownedThrough"?: SchemaValue<DateTime, "https://schema.org/ownedThrough">;
    /** The product that this structured value is referring to. */
    "https://schema.org/typeOfGood"?: SchemaValue<Product | Service | IdReference, "https://schema.org/typeOfGood">;
}
interface OwnershipInfoLeaf extends OwnershipInfoBase {
    "@type": "https://schema.org/OwnershipInfo";
}
/** A structured value providing information about when a certain organization or person owned a certain product. */
export declare type OwnershipInfo = OwnershipInfoLeaf;
interface PaintActionLeaf extends ActionBase {
    "@type": "https://schema.org/PaintAction";
}
/** The act of producing a painting, typically with paint and canvas as instruments. */
export declare type PaintAction = PaintActionLeaf;
interface PaintingLeaf extends CreativeWorkBase {
    "@type": "https://schema.org/Painting";
}
/** A painting. */
export declare type Painting = PaintingLeaf;
interface PalliativeProcedureBase extends MedicalProcedureBase, MedicalTherapyBase {
}
interface PalliativeProcedureLeaf extends PalliativeProcedureBase {
    "@type": "https://schema.org/PalliativeProcedure";
}
/** A medical procedure intended primarily for palliative purposes, aimed at relieving the symptoms of an underlying health condition. */
export declare type PalliativeProcedure = PalliativeProcedureLeaf;
interface ParcelDeliveryBase extends ThingBase {
    /**
     * 'carrier' is an out-dated term indicating the 'provider' for parcel delivery and flights.
     *
     * @deprecated Consider using https://schema.org/provider instead.
     */
    "https://schema.org/carrier"?: SchemaValue<Organization | IdReference, "https://schema.org/carrier">;
    /** Destination address. */
    "https://schema.org/deliveryAddress"?: SchemaValue<PostalAddress | IdReference, "https://schema.org/deliveryAddress">;
    /** New entry added as the package passes through each leg of its journey (from shipment to final delivery). */
    "https://schema.org/deliveryStatus"?: SchemaValue<DeliveryEvent | IdReference, "https://schema.org/deliveryStatus">;
    /** The earliest date the package may arrive. */
    "https://schema.org/expectedArrivalFrom"?: SchemaValue<Date | DateTime, "https://schema.org/expectedArrivalFrom">;
    /** The latest date the package may arrive. */
    "https://schema.org/expectedArrivalUntil"?: SchemaValue<Date | DateTime, "https://schema.org/expectedArrivalUntil">;
    /** Method used for delivery or shipping. */
    "https://schema.org/hasDeliveryMethod"?: SchemaValue<DeliveryMethod | IdReference, "https://schema.org/hasDeliveryMethod">;
    /** Item(s) being shipped. */
    "https://schema.org/itemShipped"?: SchemaValue<Product | IdReference, "https://schema.org/itemShipped">;
    /** Shipper's address. */
    "https://schema.org/originAddress"?: SchemaValue<PostalAddress | IdReference, "https://schema.org/originAddress">;
    /** The overall order the items in this delivery were included in. */
    "https://schema.org/partOfOrder"?: SchemaValue<Order | IdReference, "https://schema.org/partOfOrder">;
    /** The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller. */
    "https://schema.org/provider"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/provider">;
    /** Shipper tracking number. */
    "https://schema.org/trackingNumber"?: SchemaValue<Text, "https://schema.org/trackingNumber">;
    /** Tracking url for the parcel delivery. */
    "https://schema.org/trackingUrl"?: SchemaValue<URL, "https://schema.org/trackingUrl">;
}
interface ParcelDeliveryLeaf extends ParcelDeliveryBase {
    "@type": "https://schema.org/ParcelDelivery";
}
/** The delivery of a parcel either via the postal service or a commercial service. */
export declare type ParcelDelivery = ParcelDeliveryLeaf;
interface ParentAudienceBase extends PeopleAudienceBase {
    /** Maximal age of the child. */
    "https://schema.org/childMaxAge"?: SchemaValue<Number, "https://schema.org/childMaxAge">;
    /** Minimal age of the child. */
    "https://schema.org/childMinAge"?: SchemaValue<Number, "https://schema.org/childMinAge">;
}
interface ParentAudienceLeaf extends ParentAudienceBase {
    "@type": "https://schema.org/ParentAudience";
}
/** A set of characteristics describing parents, who can be interested in viewing some content. */
export declare type ParentAudience = ParentAudienceLeaf;
interface ParkLeaf extends CivicStructureBase {
    "@type": "https://schema.org/Park";
}
/** A park. */
export declare type Park = ParkLeaf | string;
interface ParkingFacilityLeaf extends CivicStructureBase {
    "@type": "https://schema.org/ParkingFacility";
}
/** A parking lot or other parking facility. */
export declare type ParkingFacility = ParkingFacilityLeaf | string;
interface PathologyTestBase extends MedicalTestBase {
    /** The type of tissue sample required for the test. */
    "https://schema.org/tissueSample"?: SchemaValue<Text, "https://schema.org/tissueSample">;
}
interface PathologyTestLeaf extends PathologyTestBase {
    "@type": "https://schema.org/PathologyTest";
}
/** A medical test performed by a laboratory that typically involves examination of a tissue sample by a pathologist. */
export declare type PathologyTest = PathologyTestLeaf;
interface PatientBase extends MedicalAudienceBase, PersonBase {
    /** One or more alternative conditions considered in the differential diagnosis process as output of a diagnosis process. */
    "https://schema.org/diagnosis"?: SchemaValue<MedicalCondition | IdReference, "https://schema.org/diagnosis">;
    /** Specifying a drug or medicine used in a medication procedure. */
    "https://schema.org/drug"?: SchemaValue<Drug | IdReference, "https://schema.org/drug">;
    /** Specifying the health condition(s) of a patient, medical study, or other target audience. */
    "https://schema.org/healthCondition"?: SchemaValue<MedicalCondition | IdReference, "https://schema.org/healthCondition">;
}
interface PatientLeaf extends PatientBase {
    "@type": "https://schema.org/Patient";
}
/** A patient is any person recipient of health care services. */
export declare type Patient = PatientLeaf | string;
interface PawnShopLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/PawnShop";
}
/** A shop that will buy, or lend money against the security of, personal possessions. */
export declare type PawnShop = PawnShopLeaf | string;
interface PayActionBase extends TradeActionBase {
    /** A sub property of participant. The participant who is at the receiving end of the action. */
    "https://schema.org/recipient"?: SchemaValue<Audience | ContactPoint | Organization | Person | IdReference, "https://schema.org/recipient">;
}
interface PayActionLeaf extends PayActionBase {
    "@type": "https://schema.org/PayAction";
}
/** An agent pays a price to a participant. */
export declare type PayAction = PayActionLeaf;
interface PaymentCardBase extends EnumerationBase, FinancialProductBase {
    /** A cardholder benefit that pays the cardholder a small percentage of their net expenditures. */
    "https://schema.org/cashBack"?: SchemaValue<Boolean | Number, "https://schema.org/cashBack">;
    /** A secure method for consumers to purchase products or services via debit, credit or smartcards by using RFID or NFC technology. */
    "https://schema.org/contactlessPayment"?: SchemaValue<Boolean, "https://schema.org/contactlessPayment">;
    /** A floor limit is the amount of money above which credit card transactions must be authorized. */
    "https://schema.org/floorLimit"?: SchemaValue<MonetaryAmount | IdReference, "https://schema.org/floorLimit">;
    /** The minimum payment is the lowest amount of money that one is required to pay on a credit card statement each month. */
    "https://schema.org/monthlyMinimumRepaymentAmount"?: SchemaValue<MonetaryAmount | Number | IdReference, "https://schema.org/monthlyMinimumRepaymentAmount">;
}
interface PaymentCardLeaf extends PaymentCardBase {
    "@type": "https://schema.org/PaymentCard";
}
/** A payment method using a credit, debit, store or other card to associate the payment with an account. */
export declare type PaymentCard = PaymentCardLeaf | CreditCard;
interface PaymentChargeSpecificationBase extends PriceSpecificationBase {
    /** The delivery method(s) to which the delivery charge or payment charge specification applies. */
    "https://schema.org/appliesToDeliveryMethod"?: SchemaValue<DeliveryMethod | IdReference, "https://schema.org/appliesToDeliveryMethod">;
    /** The payment method(s) to which the payment charge specification applies. */
    "https://schema.org/appliesToPaymentMethod"?: SchemaValue<PaymentMethod | IdReference, "https://schema.org/appliesToPaymentMethod">;
}
interface PaymentChargeSpecificationLeaf extends PaymentChargeSpecificationBase {
    "@type": "https://schema.org/PaymentChargeSpecification";
}
/** The costs of settling the payment using a particular payment method. */
export declare type PaymentChargeSpecification = PaymentChargeSpecificationLeaf;
interface PaymentMethodLeaf extends EnumerationBase {
    "@type": "https://schema.org/PaymentMethod";
}
/**
 * A payment method is a standardized procedure for transferring the monetary amount for a purchase. Payment methods are characterized by the legal and technical structures used, and by the organization or group carrying out the transaction.
 *
 * Commonly used values:
 * - http://purl.org/goodrelations/v1#ByBankTransferInAdvance
 * - http://purl.org/goodrelations/v1#ByInvoice
 * - http://purl.org/goodrelations/v1#Cash
 * - http://purl.org/goodrelations/v1#CheckInAdvance
 * - http://purl.org/goodrelations/v1#COD
 * - http://purl.org/goodrelations/v1#DirectDebit
 * - http://purl.org/goodrelations/v1#GoogleCheckout
 * - http://purl.org/goodrelations/v1#PayPal
 * - http://purl.org/goodrelations/v1#PaySwarm
 */
export declare type PaymentMethod = PaymentMethodLeaf | PaymentCard;
interface PaymentServiceLeaf extends FinancialProductBase {
    "@type": "https://schema.org/PaymentService";
}
/** A Service to transfer funds from a person or organization to a beneficiary person or organization. */
export declare type PaymentService = PaymentServiceLeaf;
interface PaymentStatusTypeLeaf extends EnumerationBase {
    "@type": "https://schema.org/PaymentStatusType";
}
/** A specific payment status. For example, PaymentDue, PaymentComplete, etc. */
export declare type PaymentStatusType = "https://schema.org/PaymentAutomaticallyApplied" | "https://schema.org/PaymentComplete" | "https://schema.org/PaymentDeclined" | "https://schema.org/PaymentDue" | "https://schema.org/PaymentPastDue" | PaymentStatusTypeLeaf;
interface PeopleAudienceBase extends AudienceBase {
    /** Specifying the health condition(s) of a patient, medical study, or other target audience. */
    "https://schema.org/healthCondition"?: SchemaValue<MedicalCondition | IdReference, "https://schema.org/healthCondition">;
    /** Audiences defined by a person's gender. */
    "https://schema.org/requiredGender"?: SchemaValue<Text, "https://schema.org/requiredGender">;
    /** Audiences defined by a person's maximum age. */
    "https://schema.org/requiredMaxAge"?: SchemaValue<Integer, "https://schema.org/requiredMaxAge">;
    /** Audiences defined by a person's minimum age. */
    "https://schema.org/requiredMinAge"?: SchemaValue<Integer, "https://schema.org/requiredMinAge">;
    /** The age or age range for the intended audience or person, for example 3-12 months for infants, 1-5 years for toddlers. */
    "https://schema.org/suggestedAge"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/suggestedAge">;
    /** The suggested gender of the intended person or audience, for example "male", "female", or "unisex". */
    "https://schema.org/suggestedGender"?: SchemaValue<GenderType | Text | IdReference, "https://schema.org/suggestedGender">;
    /** Maximum recommended age in years for the audience or user. */
    "https://schema.org/suggestedMaxAge"?: SchemaValue<Number, "https://schema.org/suggestedMaxAge">;
    /** A suggested range of body measurements for the intended audience or person, for example inseam between 32 and 34 inches or height between 170 and 190 cm. Typically found on a size chart for wearable products. */
    "https://schema.org/suggestedMeasurement"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/suggestedMeasurement">;
    /** Minimum recommended age in years for the audience or user. */
    "https://schema.org/suggestedMinAge"?: SchemaValue<Number, "https://schema.org/suggestedMinAge">;
}
interface PeopleAudienceLeaf extends PeopleAudienceBase {
    "@type": "https://schema.org/PeopleAudience";
}
/** A set of characteristics belonging to people, e.g. who compose an item's target audience. */
export declare type PeopleAudience = PeopleAudienceLeaf | MedicalAudience | ParentAudience;
interface PerformActionBase extends PlayActionBase {
    /** A sub property of location. The entertainment business where the action occurred. */
    "https://schema.org/entertainmentBusiness"?: SchemaValue<EntertainmentBusiness | IdReference, "https://schema.org/entertainmentBusiness">;
}
interface PerformActionLeaf extends PerformActionBase {
    "@type": "https://schema.org/PerformAction";
}
/** The act of participating in performance arts. */
export declare type PerformAction = PerformActionLeaf;
interface PerformingArtsTheaterLeaf extends CivicStructureBase {
    "@type": "https://schema.org/PerformingArtsTheater";
}
/** A theater or other performing art center. */
export declare type PerformingArtsTheater = PerformingArtsTheaterLeaf | string;
interface PerformingGroupLeaf extends OrganizationBase {
    "@type": "https://schema.org/PerformingGroup";
}
/** A performance group, such as a band, an orchestra, or a circus. */
export declare type PerformingGroup = PerformingGroupLeaf | DanceGroup | MusicGroup | TheaterGroup | string;
interface PeriodicalLeaf extends CreativeWorkSeriesBase {
    "@type": "https://schema.org/Periodical";
}
/**
 * A publication in any medium issued in successive parts bearing numerical or chronological designations and intended, such as a magazine, scholarly journal, or newspaper to continue indefinitely.
 *
 * See also {@link http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html blog post}.
 */
export declare type Periodical = PeriodicalLeaf | ComicSeries | Newspaper;
interface PermitBase extends ThingBase {
    /** The organization issuing the ticket or permit. */
    "https://schema.org/issuedBy"?: SchemaValue<Organization | IdReference, "https://schema.org/issuedBy">;
    /** The service through with the permit was granted. */
    "https://schema.org/issuedThrough"?: SchemaValue<Service | IdReference, "https://schema.org/issuedThrough">;
    /** The target audience for this permit. */
    "https://schema.org/permitAudience"?: SchemaValue<Audience | IdReference, "https://schema.org/permitAudience">;
    /** The duration of validity of a permit or similar thing. */
    "https://schema.org/validFor"?: SchemaValue<Duration | IdReference, "https://schema.org/validFor">;
    /** The date when the item becomes valid. */
    "https://schema.org/validFrom"?: SchemaValue<Date | DateTime, "https://schema.org/validFrom">;
    /** The geographic area where a permit or similar thing is valid. */
    "https://schema.org/validIn"?: SchemaValue<AdministrativeArea | IdReference, "https://schema.org/validIn">;
    /** The date when the item is no longer valid. */
    "https://schema.org/validUntil"?: SchemaValue<Date, "https://schema.org/validUntil">;
}
interface PermitLeaf extends PermitBase {
    "@type": "https://schema.org/Permit";
}
/** A permit issued by an organization, e.g. a parking pass. */
export declare type Permit = PermitLeaf | GovernmentPermit;
interface PersonBase extends ThingBase {
    /** An additional name for a Person, can be used for a middle name. */
    "https://schema.org/additionalName"?: SchemaValue<Text, "https://schema.org/additionalName">;
    /** Physical address of the item. */
    "https://schema.org/address"?: SchemaValue<PostalAddress | Text | IdReference, "https://schema.org/address">;
    /** An organization that this person is affiliated with. For example, a school/university, a club, or a team. */
    "https://schema.org/affiliation"?: SchemaValue<Organization | IdReference, "https://schema.org/affiliation">;
    /** An organization that the person is an alumni of. */
    "https://schema.org/alumniOf"?: SchemaValue<EducationalOrganization | Organization | IdReference, "https://schema.org/alumniOf">;
    /** An award won by or for this item. */
    "https://schema.org/award"?: SchemaValue<Text, "https://schema.org/award">;
    /**
     * Awards won by or for this item.
     *
     * @deprecated Consider using https://schema.org/award instead.
     */
    "https://schema.org/awards"?: SchemaValue<Text, "https://schema.org/awards">;
    /** Date of birth. */
    "https://schema.org/birthDate"?: SchemaValue<Date, "https://schema.org/birthDate">;
    /** The place where the person was born. */
    "https://schema.org/birthPlace"?: SchemaValue<Place | IdReference, "https://schema.org/birthPlace">;
    /** The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person. */
    "https://schema.org/brand"?: SchemaValue<Brand | Organization | IdReference, "https://schema.org/brand">;
    /** A {@link https://en.wikipedia.org/wiki/Call_sign callsign}, as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles. */
    "https://schema.org/callSign"?: SchemaValue<Text, "https://schema.org/callSign">;
    /** A child of the person. */
    "https://schema.org/children"?: SchemaValue<Person | IdReference, "https://schema.org/children">;
    /** A colleague of the person. */
    "https://schema.org/colleague"?: SchemaValue<Person | URL | IdReference, "https://schema.org/colleague">;
    /**
     * A colleague of the person.
     *
     * @deprecated Consider using https://schema.org/colleague instead.
     */
    "https://schema.org/colleagues"?: SchemaValue<Person | IdReference, "https://schema.org/colleagues">;
    /** A contact point for a person or organization. */
    "https://schema.org/contactPoint"?: SchemaValue<ContactPoint | IdReference, "https://schema.org/contactPoint">;
    /**
     * A contact point for a person or organization.
     *
     * @deprecated Consider using https://schema.org/contactPoint instead.
     */
    "https://schema.org/contactPoints"?: SchemaValue<ContactPoint | IdReference, "https://schema.org/contactPoints">;
    /** Date of death. */
    "https://schema.org/deathDate"?: SchemaValue<Date, "https://schema.org/deathDate">;
    /** The place where the person died. */
    "https://schema.org/deathPlace"?: SchemaValue<Place | IdReference, "https://schema.org/deathPlace">;
    /** The Dun & Bradstreet DUNS number for identifying an organization or business person. */
    "https://schema.org/duns"?: SchemaValue<Text, "https://schema.org/duns">;
    /** Email address. */
    "https://schema.org/email"?: SchemaValue<Text, "https://schema.org/email">;
    /** Family name. In the U.S., the last name of a Person. */
    "https://schema.org/familyName"?: SchemaValue<Text, "https://schema.org/familyName">;
    /** The fax number. */
    "https://schema.org/faxNumber"?: SchemaValue<Text, "https://schema.org/faxNumber">;
    /** The most generic uni-directional social relation. */
    "https://schema.org/follows"?: SchemaValue<Person | IdReference, "https://schema.org/follows">;
    /** A person or organization that supports (sponsors) something through some kind of financial contribution. */
    "https://schema.org/funder"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/funder">;
    /** Gender of something, typically a {@link https://schema.org/Person Person}, but possibly also fictional characters, animals, etc. While https://schema.org/Male and https://schema.org/Female may be used, text strings are also acceptable for people who do not identify as a binary gender. The {@link https://schema.org/gender gender} property can also be used in an extended sense to cover e.g. the gender of sports teams. As with the gender of individuals, we do not try to enumerate all possibilities. A mixed-gender {@link https://schema.org/SportsTeam SportsTeam} can be indicated with a text value of "Mixed". */
    "https://schema.org/gender"?: SchemaValue<GenderType | Text | IdReference, "https://schema.org/gender">;
    /** Given name. In the U.S., the first name of a Person. */
    "https://schema.org/givenName"?: SchemaValue<Text, "https://schema.org/givenName">;
    /** The {@link http://www.gs1.org/gln Global Location Number} (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations. */
    "https://schema.org/globalLocationNumber"?: SchemaValue<Text, "https://schema.org/globalLocationNumber">;
    /** A credential awarded to the Person or Organization. */
    "https://schema.org/hasCredential"?: SchemaValue<EducationalOccupationalCredential | IdReference, "https://schema.org/hasCredential">;
    /** The Person's occupation. For past professions, use Role for expressing dates. */
    "https://schema.org/hasOccupation"?: SchemaValue<Occupation | IdReference, "https://schema.org/hasOccupation">;
    /** Indicates an OfferCatalog listing for this Organization, Person, or Service. */
    "https://schema.org/hasOfferCatalog"?: SchemaValue<OfferCatalog | IdReference, "https://schema.org/hasOfferCatalog">;
    /** Points-of-Sales operated by the organization or person. */
    "https://schema.org/hasPOS"?: SchemaValue<Place | IdReference, "https://schema.org/hasPOS">;
    /** The height of the item. */
    "https://schema.org/height"?: SchemaValue<Distance | QuantitativeValue | IdReference, "https://schema.org/height">;
    /** A contact location for a person's residence. */
    "https://schema.org/homeLocation"?: SchemaValue<ContactPoint | Place | IdReference, "https://schema.org/homeLocation">;
    /** An honorific prefix preceding a Person's name such as Dr/Mrs/Mr. */
    "https://schema.org/honorificPrefix"?: SchemaValue<Text, "https://schema.org/honorificPrefix">;
    /** An honorific suffix following a Person's name such as M.D. /PhD/MSCSW. */
    "https://schema.org/honorificSuffix"?: SchemaValue<Text, "https://schema.org/honorificSuffix">;
    /** The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used. */
    "https://schema.org/interactionStatistic"?: SchemaValue<InteractionCounter | IdReference, "https://schema.org/interactionStatistic">;
    /** The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place. */
    "https://schema.org/isicV4"?: SchemaValue<Text, "https://schema.org/isicV4">;
    /** The job title of the person (for example, Financial Manager). */
    "https://schema.org/jobTitle"?: SchemaValue<DefinedTerm | Text | IdReference, "https://schema.org/jobTitle">;
    /** The most generic bi-directional social/work relation. */
    "https://schema.org/knows"?: SchemaValue<Person | IdReference, "https://schema.org/knows">;
    /** Of a {@link https://schema.org/Person Person}, and less typically of an {@link https://schema.org/Organization Organization}, to indicate a topic that is known about - suggesting possible expertise but not implying it. We do not distinguish skill levels here, or relate this to educational content, events, objectives or {@link https://schema.org/JobPosting JobPosting} descriptions. */
    "https://schema.org/knowsAbout"?: SchemaValue<Text | Thing | URL | IdReference, "https://schema.org/knowsAbout">;
    /** Of a {@link https://schema.org/Person Person}, and less typically of an {@link https://schema.org/Organization Organization}, to indicate a known language. We do not distinguish skill levels or reading/writing/speaking/signing here. Use language codes from the {@link http://tools.ietf.org/html/bcp47 IETF BCP 47 standard}. */
    "https://schema.org/knowsLanguage"?: SchemaValue<Language | Text | IdReference, "https://schema.org/knowsLanguage">;
    /** A pointer to products or services offered by the organization or person. */
    "https://schema.org/makesOffer"?: SchemaValue<Offer | IdReference, "https://schema.org/makesOffer">;
    /** An Organization (or ProgramMembership) to which this Person or Organization belongs. */
    "https://schema.org/memberOf"?: SchemaValue<Organization | ProgramMembership | IdReference, "https://schema.org/memberOf">;
    /** The North American Industry Classification System (NAICS) code for a particular organization or business person. */
    "https://schema.org/naics"?: SchemaValue<Text, "https://schema.org/naics">;
    /** Nationality of the person. */
    "https://schema.org/nationality"?: SchemaValue<Country | IdReference, "https://schema.org/nationality">;
    /** The total financial value of the person as calculated by subtracting assets from liabilities. */
    "https://schema.org/netWorth"?: SchemaValue<MonetaryAmount | PriceSpecification | IdReference, "https://schema.org/netWorth">;
    /** Products owned by the organization or person. */
    "https://schema.org/owns"?: SchemaValue<OwnershipInfo | Product | IdReference, "https://schema.org/owns">;
    /** A parent of this person. */
    "https://schema.org/parent"?: SchemaValue<Person | IdReference, "https://schema.org/parent">;
    /**
     * A parents of the person.
     *
     * @deprecated Consider using https://schema.org/parent instead.
     */
    "https://schema.org/parents"?: SchemaValue<Person | IdReference, "https://schema.org/parents">;
    /** Event that this person is a performer or participant in. */
    "https://schema.org/performerIn"?: SchemaValue<Event | IdReference, "https://schema.org/performerIn">;
    /**
     * The publishingPrinciples property indicates (typically via {@link https://schema.org/URL URL}) a document describing the editorial principles of an {@link https://schema.org/Organization Organization} (or individual e.g. a {@link https://schema.org/Person Person} writing a blog) that relate to their activities as a publisher, e.g. ethics or diversity policies. When applied to a {@link https://schema.org/CreativeWork CreativeWork} (e.g. {@link https://schema.org/NewsArticle NewsArticle}) the principles are those of the party primarily responsible for the creation of the {@link https://schema.org/CreativeWork CreativeWork}.
     *
     * While such policies are most typically expressed in natural language, sometimes related information (e.g. indicating a {@link https://schema.org/funder funder}) can be expressed using schema.org terminology.
     */
    "https://schema.org/publishingPrinciples"?: SchemaValue<CreativeWork | URL | IdReference, "https://schema.org/publishingPrinciples">;
    /** The most generic familial relation. */
    "https://schema.org/relatedTo"?: SchemaValue<Person | IdReference, "https://schema.org/relatedTo">;
    /** A pointer to products or services sought by the organization or person (demand). */
    "https://schema.org/seeks"?: SchemaValue<Demand | IdReference, "https://schema.org/seeks">;
    /** A sibling of the person. */
    "https://schema.org/sibling"?: SchemaValue<Person | IdReference, "https://schema.org/sibling">;
    /**
     * A sibling of the person.
     *
     * @deprecated Consider using https://schema.org/sibling instead.
     */
    "https://schema.org/siblings"?: SchemaValue<Person | IdReference, "https://schema.org/siblings">;
    /** A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event. */
    "https://schema.org/sponsor"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/sponsor">;
    /** The person's spouse. */
    "https://schema.org/spouse"?: SchemaValue<Person | IdReference, "https://schema.org/spouse">;
    /** The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain. */
    "https://schema.org/taxID"?: SchemaValue<Text, "https://schema.org/taxID">;
    /** The telephone number. */
    "https://schema.org/telephone"?: SchemaValue<Text, "https://schema.org/telephone">;
    /** The Value-added Tax ID of the organization or person. */
    "https://schema.org/vatID"?: SchemaValue<Text, "https://schema.org/vatID">;
    /** The weight of the product or person. */
    "https://schema.org/weight"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/weight">;
    /** A contact location for a person's place of work. */
    "https://schema.org/workLocation"?: SchemaValue<ContactPoint | Place | IdReference, "https://schema.org/workLocation">;
    /** Organizations that the person works for. */
    "https://schema.org/worksFor"?: SchemaValue<Organization | IdReference, "https://schema.org/worksFor">;
}
interface PersonLeaf extends PersonBase {
    "@type": "https://schema.org/Person";
}
/** A person (alive, dead, undead, or fictional). */
export declare type Person = PersonLeaf | Patient | string;
interface PetStoreLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/PetStore";
}
/** A pet store. */
export declare type PetStore = PetStoreLeaf | string;
interface PharmacyBase extends LocalBusinessBase, MedicalOrganizationBase {
}
interface PharmacyLeaf extends PharmacyBase {
    "@type": "https://schema.org/Pharmacy";
}
/** A pharmacy or drugstore. */
export declare type Pharmacy = PharmacyLeaf | string;
interface PhotographLeaf extends CreativeWorkBase {
    "@type": "https://schema.org/Photograph";
}
/** A photograph. */
export declare type Photograph = PhotographLeaf;
interface PhotographActionLeaf extends ActionBase {
    "@type": "https://schema.org/PhotographAction";
}
/** The act of capturing still images of objects using a camera. */
export declare type PhotographAction = PhotographActionLeaf;
interface PhysicalActivityBase extends MedicalEntityBase {
    /** The anatomy of the underlying organ system or structures associated with this entity. */
    "https://schema.org/associatedAnatomy"?: SchemaValue<AnatomicalStructure | AnatomicalSystem | SuperficialAnatomy | IdReference, "https://schema.org/associatedAnatomy">;
    /** A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy. */
    "https://schema.org/category"?: SchemaValue<PhysicalActivityCategory | Text | Thing | URL | IdReference, "https://schema.org/category">;
    /** The characteristics of associated patients, such as age, gender, race etc. */
    "https://schema.org/epidemiology"?: SchemaValue<Text, "https://schema.org/epidemiology">;
    /** Changes in the normal mechanical, physical, and biochemical functions that are associated with this activity or condition. */
    "https://schema.org/pathophysiology"?: SchemaValue<Text, "https://schema.org/pathophysiology">;
}
interface PhysicalActivityLeaf extends PhysicalActivityBase {
    "@type": "https://schema.org/PhysicalActivity";
}
/** Any bodily activity that enhances or maintains physical fitness and overall health and wellness. Includes activity that is part of daily living and routine, structured exercise, and exercise prescribed as part of a medical treatment or recovery plan. */
export declare type PhysicalActivity = PhysicalActivityLeaf | ExercisePlan;
interface PhysicalActivityCategoryLeaf extends EnumerationBase {
    "@type": "https://schema.org/PhysicalActivityCategory";
}
/** Categories of physical activity, organized by physiologic classification. */
export declare type PhysicalActivityCategory = "https://schema.org/AerobicActivity" | "https://schema.org/AnaerobicActivity" | "https://schema.org/Balance" | "https://schema.org/Flexibility" | "https://schema.org/LeisureTimeActivity" | "https://schema.org/OccupationalActivity" | "https://schema.org/StrengthTraining" | PhysicalActivityCategoryLeaf;
interface PhysicalExamBase extends MedicalProcedureBase, EnumerationBase {
}
interface PhysicalExamLeaf extends PhysicalExamBase {
    "@type": "https://schema.org/PhysicalExam";
}
/** A type of physical examination of a patient performed by a physician. */
export declare type PhysicalExam = "https://schema.org/Abdomen" | "https://schema.org/Appearance" | "https://schema.org/CardiovascularExam" | "https://schema.org/Ear" | "https://schema.org/Eye" | "https://schema.org/Genitourinary" | "https://schema.org/Head" | "https://schema.org/Lung" | "https://schema.org/MusculoskeletalExam" | "https://schema.org/Neck" | "https://schema.org/Neuro" | "https://schema.org/Nose" | "https://schema.org/Skin" | "https://schema.org/Throat" | PhysicalExamLeaf;
interface PhysicalTherapyLeaf extends MedicalTherapyBase {
    "@type": "https://schema.org/PhysicalTherapy";
}
/** A process of progressive physical care and rehabilitation aimed at improving a health condition. */
export declare type PhysicalTherapy = PhysicalTherapyLeaf;
interface PhysicianBase extends LocalBusinessBase, MedicalOrganizationBase {
    /** A medical service available from this provider. */
    "https://schema.org/availableService"?: SchemaValue<MedicalProcedure | MedicalTest | MedicalTherapy | IdReference, "https://schema.org/availableService">;
    /** A hospital with which the physician or office is affiliated. */
    "https://schema.org/hospitalAffiliation"?: SchemaValue<Hospital | IdReference, "https://schema.org/hospitalAffiliation">;
    /** A medical specialty of the provider. */
    "https://schema.org/medicalSpecialty"?: SchemaValue<MedicalSpecialty | IdReference, "https://schema.org/medicalSpecialty">;
}
interface PhysicianLeaf extends PhysicianBase {
    "@type": "https://schema.org/Physician";
}
/** A doctor's office. */
export declare type Physician = PhysicianLeaf | string;
interface PlaceBase extends ThingBase {
    /**
     * A property-value pair representing an additional characteristics of the entitity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.
     *
     * Note: Publishers should be aware that applications designed to use specific schema.org properties (e.g. https://schema.org/width, https://schema.org/color, https://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.
     */
    "https://schema.org/additionalProperty"?: SchemaValue<PropertyValue | IdReference, "https://schema.org/additionalProperty">;
    /** Physical address of the item. */
    "https://schema.org/address"?: SchemaValue<PostalAddress | Text | IdReference, "https://schema.org/address">;
    /** The overall rating, based on a collection of reviews or ratings, of the item. */
    "https://schema.org/aggregateRating"?: SchemaValue<AggregateRating | IdReference, "https://schema.org/aggregateRating">;
    /** An amenity feature (e.g. a characteristic or service) of the Accommodation. This generic property does not make a statement about whether the feature is included in an offer for the main accommodation or available at extra costs. */
    "https://schema.org/amenityFeature"?: SchemaValue<LocationFeatureSpecification | IdReference, "https://schema.org/amenityFeature">;
    /**
     * A short textual code (also called "store code") that uniquely identifies a place of business. The code is typically assigned by the parentOrganization and used in structured URLs.
     *
     * For example, in the URL http://www.starbucks.co.uk/store-locator/etc/detail/3047 the code "3047" is a branchCode for a particular branch.
     */
    "https://schema.org/branchCode"?: SchemaValue<Text, "https://schema.org/branchCode">;
    /**
     * The basic containment relation between a place and one that contains it.
     *
     * @deprecated Consider using https://schema.org/containedInPlace instead.
     */
    "https://schema.org/containedIn"?: SchemaValue<Place | IdReference, "https://schema.org/containedIn">;
    /** The basic containment relation between a place and one that contains it. */
    "https://schema.org/containedInPlace"?: SchemaValue<Place | IdReference, "https://schema.org/containedInPlace">;
    /** The basic containment relation between a place and another that it contains. */
    "https://schema.org/containsPlace"?: SchemaValue<Place | IdReference, "https://schema.org/containsPlace">;
    /** Upcoming or past event associated with this place, organization, or action. */
    "https://schema.org/event"?: SchemaValue<Event | IdReference, "https://schema.org/event">;
    /**
     * Upcoming or past events associated with this place or organization.
     *
     * @deprecated Consider using https://schema.org/event instead.
     */
    "https://schema.org/events"?: SchemaValue<Event | IdReference, "https://schema.org/events">;
    /** The fax number. */
    "https://schema.org/faxNumber"?: SchemaValue<Text, "https://schema.org/faxNumber">;
    /** The geo coordinates of the place. */
    "https://schema.org/geo"?: SchemaValue<GeoCoordinates | GeoShape | IdReference, "https://schema.org/geo">;
    /** Represents a relationship between two geometries (or the places they represent), relating a containing geometry to a contained geometry. "a contains b iff no points of b lie in the exterior of a, and at least one point of the interior of b lies in the interior of a". As defined in {@link https://en.wikipedia.org/wiki/DE-9IM DE-9IM}. */
    "https://schema.org/geoContains"?: SchemaValue<GeospatialGeometry | Place | IdReference, "https://schema.org/geoContains">;
    /** Represents a relationship between two geometries (or the places they represent), relating a geometry to another that covers it. As defined in {@link https://en.wikipedia.org/wiki/DE-9IM DE-9IM}. */
    "https://schema.org/geoCoveredBy"?: SchemaValue<GeospatialGeometry | Place | IdReference, "https://schema.org/geoCoveredBy">;
    /** Represents a relationship between two geometries (or the places they represent), relating a covering geometry to a covered geometry. "Every point of b is a point of (the interior or boundary of) a". As defined in {@link https://en.wikipedia.org/wiki/DE-9IM DE-9IM}. */
    "https://schema.org/geoCovers"?: SchemaValue<GeospatialGeometry | Place | IdReference, "https://schema.org/geoCovers">;
    /** Represents a relationship between two geometries (or the places they represent), relating a geometry to another that crosses it: "a crosses b: they have some but not all interior points in common, and the dimension of the intersection is less than that of at least one of them". As defined in {@link https://en.wikipedia.org/wiki/DE-9IM DE-9IM}. */
    "https://schema.org/geoCrosses"?: SchemaValue<GeospatialGeometry | Place | IdReference, "https://schema.org/geoCrosses">;
    /** Represents spatial relations in which two geometries (or the places they represent) are topologically disjoint: they have no point in common. They form a set of disconnected geometries." (a symmetric relationship, as defined in {@link https://en.wikipedia.org/wiki/DE-9IM DE-9IM}) */
    "https://schema.org/geoDisjoint"?: SchemaValue<GeospatialGeometry | Place | IdReference, "https://schema.org/geoDisjoint">;
    /** Represents spatial relations in which two geometries (or the places they represent) are topologically equal, as defined in {@link https://en.wikipedia.org/wiki/DE-9IM DE-9IM}. "Two geometries are topologically equal if their interiors intersect and no part of the interior or boundary of one geometry intersects the exterior of the other" (a symmetric relationship) */
    "https://schema.org/geoEquals"?: SchemaValue<GeospatialGeometry | Place | IdReference, "https://schema.org/geoEquals">;
    /** Represents spatial relations in which two geometries (or the places they represent) have at least one point in common. As defined in {@link https://en.wikipedia.org/wiki/DE-9IM DE-9IM}. */
    "https://schema.org/geoIntersects"?: SchemaValue<GeospatialGeometry | Place | IdReference, "https://schema.org/geoIntersects">;
    /** Represents a relationship between two geometries (or the places they represent), relating a geometry to another that geospatially overlaps it, i.e. they have some but not all points in common. As defined in {@link https://en.wikipedia.org/wiki/DE-9IM DE-9IM}. */
    "https://schema.org/geoOverlaps"?: SchemaValue<GeospatialGeometry | Place | IdReference, "https://schema.org/geoOverlaps">;
    /** Represents spatial relations in which two geometries (or the places they represent) touch: they have at least one boundary point in common, but no interior points." (a symmetric relationship, as defined in {@link https://en.wikipedia.org/wiki/DE-9IM DE-9IM} ) */
    "https://schema.org/geoTouches"?: SchemaValue<GeospatialGeometry | Place | IdReference, "https://schema.org/geoTouches">;
    /** Represents a relationship between two geometries (or the places they represent), relating a geometry to one that contains it, i.e. it is inside (i.e. within) its interior. As defined in {@link https://en.wikipedia.org/wiki/DE-9IM DE-9IM}. */
    "https://schema.org/geoWithin"?: SchemaValue<GeospatialGeometry | Place | IdReference, "https://schema.org/geoWithin">;
    /** The {@link http://www.gs1.org/gln Global Location Number} (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations. */
    "https://schema.org/globalLocationNumber"?: SchemaValue<Text, "https://schema.org/globalLocationNumber">;
    /** Indicates whether some facility (e.g. {@link https://schema.org/FoodEstablishment FoodEstablishment}, {@link https://schema.org/CovidTestingFacility CovidTestingFacility}) offers a service that can be used by driving through in a car. In the case of {@link https://schema.org/CovidTestingFacility CovidTestingFacility} such facilities could potentially help with social distancing from other potentially-infected users. */
    "https://schema.org/hasDriveThroughService"?: SchemaValue<Boolean, "https://schema.org/hasDriveThroughService">;
    /** A URL to a map of the place. */
    "https://schema.org/hasMap"?: SchemaValue<Map | URL | IdReference, "https://schema.org/hasMap">;
    /** A flag to signal that the item, event, or place is accessible for free. */
    "https://schema.org/isAccessibleForFree"?: SchemaValue<Boolean, "https://schema.org/isAccessibleForFree">;
    /** The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place. */
    "https://schema.org/isicV4"?: SchemaValue<Text, "https://schema.org/isicV4">;
    /** The latitude of a location. For example `37.42242` ({@link https://en.wikipedia.org/wiki/World_Geodetic_System WGS 84}). */
    "https://schema.org/latitude"?: SchemaValue<Number | Text, "https://schema.org/latitude">;
    /** An associated logo. */
    "https://schema.org/logo"?: SchemaValue<ImageObject | URL | IdReference, "https://schema.org/logo">;
    /** The longitude of a location. For example `-122.08585` ({@link https://en.wikipedia.org/wiki/World_Geodetic_System WGS 84}). */
    "https://schema.org/longitude"?: SchemaValue<Number | Text, "https://schema.org/longitude">;
    /**
     * A URL to a map of the place.
     *
     * @deprecated Consider using https://schema.org/hasMap instead.
     */
    "https://schema.org/map"?: SchemaValue<URL, "https://schema.org/map">;
    /**
     * A URL to a map of the place.
     *
     * @deprecated Consider using https://schema.org/hasMap instead.
     */
    "https://schema.org/maps"?: SchemaValue<URL, "https://schema.org/maps">;
    /** The total number of individuals that may attend an event or venue. */
    "https://schema.org/maximumAttendeeCapacity"?: SchemaValue<Integer, "https://schema.org/maximumAttendeeCapacity">;
    /** The opening hours of a certain place. */
    "https://schema.org/openingHoursSpecification"?: SchemaValue<OpeningHoursSpecification | IdReference, "https://schema.org/openingHoursSpecification">;
    /** A photograph of this place. */
    "https://schema.org/photo"?: SchemaValue<ImageObject | Photograph | IdReference, "https://schema.org/photo">;
    /**
     * Photographs of this place.
     *
     * @deprecated Consider using https://schema.org/photo instead.
     */
    "https://schema.org/photos"?: SchemaValue<ImageObject | Photograph | IdReference, "https://schema.org/photos">;
    /** A flag to signal that the {@link https://schema.org/Place Place} is open to public visitors. If this property is omitted there is no assumed default boolean value */
    "https://schema.org/publicAccess"?: SchemaValue<Boolean, "https://schema.org/publicAccess">;
    /** A review of the item. */
    "https://schema.org/review"?: SchemaValue<Review | IdReference, "https://schema.org/review">;
    /**
     * Review of the item.
     *
     * @deprecated Consider using https://schema.org/review instead.
     */
    "https://schema.org/reviews"?: SchemaValue<Review | IdReference, "https://schema.org/reviews">;
    /** A slogan or motto associated with the item. */
    "https://schema.org/slogan"?: SchemaValue<Text, "https://schema.org/slogan">;
    /** Indicates whether it is allowed to smoke in the place, e.g. in the restaurant, hotel or hotel room. */
    "https://schema.org/smokingAllowed"?: SchemaValue<Boolean, "https://schema.org/smokingAllowed">;
    /**
     * The special opening hours of a certain place.
     *
     * Use this to explicitly override general opening hours brought in scope by {@link https://schema.org/openingHoursSpecification openingHoursSpecification} or {@link https://schema.org/openingHours openingHours}.
     */
    "https://schema.org/specialOpeningHoursSpecification"?: SchemaValue<OpeningHoursSpecification | IdReference, "https://schema.org/specialOpeningHoursSpecification">;
    /** The telephone number. */
    "https://schema.org/telephone"?: SchemaValue<Text, "https://schema.org/telephone">;
    /** A page providing information on how to book a tour of some {@link https://schema.org/Place Place}, such as an {@link https://schema.org/Accommodation Accommodation} or {@link https://schema.org/ApartmentComplex ApartmentComplex} in a real estate setting, as well as other kinds of tours as appropriate. */
    "https://schema.org/tourBookingPage"?: SchemaValue<URL, "https://schema.org/tourBookingPage">;
}
interface PlaceLeaf extends PlaceBase {
    "@type": "https://schema.org/Place";
}
/** Entities that have a somewhat fixed, physical extension. */
export declare type Place = PlaceLeaf | Accommodation | AdministrativeArea | CivicStructure | Landform | LandmarksOrHistoricalBuildings | LocalBusiness | Residence | TouristAttraction | TouristDestination | string;
interface PlaceOfWorshipLeaf extends CivicStructureBase {
    "@type": "https://schema.org/PlaceOfWorship";
}
/** Place of worship, such as a church, synagogue, or mosque. */
export declare type PlaceOfWorship = PlaceOfWorshipLeaf | BuddhistTemple | Church | HinduTemple | Mosque | Synagogue | string;
interface PlanActionBase extends ActionBase {
    /** The time the object is scheduled to. */
    "https://schema.org/scheduledTime"?: SchemaValue<DateTime, "https://schema.org/scheduledTime">;
}
interface PlanActionLeaf extends PlanActionBase {
    "@type": "https://schema.org/PlanAction";
}
/** The act of planning the execution of an event/task/action/reservation/plan to a future date. */
export declare type PlanAction = PlanActionLeaf | CancelAction | ReserveAction | ScheduleAction;
interface PlayLeaf extends CreativeWorkBase {
    "@type": "https://schema.org/Play";
}
/** A play is a form of literature, usually consisting of dialogue between characters, intended for theatrical performance rather than just reading. Note: A performance of a Play would be a {@link https://schema.org/TheaterEvent TheaterEvent} or {@link https://schema.org/BroadcastEvent BroadcastEvent} - the _Play_ being the {@link https://schema.org/workPerformed workPerformed}. */
export declare type Play = PlayLeaf;
interface PlayActionBase extends ActionBase {
    /** An intended audience, i.e. a group for whom something was created. */
    "https://schema.org/audience"?: SchemaValue<Audience | IdReference, "https://schema.org/audience">;
    /** Upcoming or past event associated with this place, organization, or action. */
    "https://schema.org/event"?: SchemaValue<Event | IdReference, "https://schema.org/event">;
}
interface PlayActionLeaf extends PlayActionBase {
    "@type": "https://schema.org/PlayAction";
}
/**
 * The act of playing/exercising/training/performing for enjoyment, leisure, recreation, Competition or exercise.
 *
 * Related actions:
 * - {@link https://schema.org/ListenAction ListenAction}: Unlike ListenAction (which is under ConsumeAction), PlayAction refers to performing for an audience or at an event, rather than consuming music.
 * - {@link https://schema.org/WatchAction WatchAction}: Unlike WatchAction (which is under ConsumeAction), PlayAction refers to showing/displaying for an audience or at an event, rather than consuming visual content.
 */
export declare type PlayAction = PlayActionLeaf | ExerciseAction | PerformAction;
interface PlaygroundLeaf extends CivicStructureBase {
    "@type": "https://schema.org/Playground";
}
/** A playground. */
export declare type Playground = PlaygroundLeaf | string;
interface PlumberLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/Plumber";
}
/** A plumbing service. */
export declare type Plumber = PlumberLeaf | string;
interface PodcastEpisodeLeaf extends EpisodeBase {
    "@type": "https://schema.org/PodcastEpisode";
}
/** A single episode of a podcast series. */
export declare type PodcastEpisode = PodcastEpisodeLeaf;
interface PodcastSeasonLeaf extends CreativeWorkSeasonBase {
    "@type": "https://schema.org/PodcastSeason";
}
/** A single season of a podcast. Many podcasts do not break down into separate seasons. In that case, PodcastSeries should be used. */
export declare type PodcastSeason = PodcastSeasonLeaf;
interface PodcastSeriesBase extends CreativeWorkSeriesBase {
    /** An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip. */
    "https://schema.org/actor"?: SchemaValue<Person | IdReference, "https://schema.org/actor">;
    /** The URL for a feed, e.g. associated with a podcast series, blog, or series of date-stamped updates. This is usually RSS or Atom. */
    "https://schema.org/webFeed"?: SchemaValue<DataFeed | URL | IdReference, "https://schema.org/webFeed">;
}
interface PodcastSeriesLeaf extends PodcastSeriesBase {
    "@type": "https://schema.org/PodcastSeries";
}
/** A podcast is an episodic series of digital audio or video files which a user can download and listen to. */
export declare type PodcastSeries = PodcastSeriesLeaf;
interface PoliceStationBase extends LocalBusinessBase, CivicStructureBase {
}
interface PoliceStationLeaf extends PoliceStationBase {
    "@type": "https://schema.org/PoliceStation";
}
/** A police station. */
export declare type PoliceStation = PoliceStationLeaf | string;
interface PondLeaf extends PlaceBase {
    "@type": "https://schema.org/Pond";
}
/** A pond. */
export declare type Pond = PondLeaf | string;
interface PostalAddressBase extends ContactPointBase {
    /** The country. For example, USA. You can also provide the two-letter {@link http://en.wikipedia.org/wiki/ISO_3166-1 ISO 3166-1 alpha-2 country code}. */
    "https://schema.org/addressCountry"?: SchemaValue<Country | Text | IdReference, "https://schema.org/addressCountry">;
    /** The locality in which the street address is, and which is in the region. For example, Mountain View. */
    "https://schema.org/addressLocality"?: SchemaValue<Text, "https://schema.org/addressLocality">;
    /** The region in which the locality is, and which is in the country. For example, California or another appropriate first-level {@link https://en.wikipedia.org/wiki/List_of_administrative_divisions_by_country Administrative division} */
    "https://schema.org/addressRegion"?: SchemaValue<Text, "https://schema.org/addressRegion">;
    /** The postal code. For example, 94043. */
    "https://schema.org/postalCode"?: SchemaValue<Text, "https://schema.org/postalCode">;
    /** The post office box number for PO box addresses. */
    "https://schema.org/postOfficeBoxNumber"?: SchemaValue<Text, "https://schema.org/postOfficeBoxNumber">;
    /** The street address. For example, 1600 Amphitheatre Pkwy. */
    "https://schema.org/streetAddress"?: SchemaValue<Text, "https://schema.org/streetAddress">;
}
interface PostalAddressLeaf extends PostalAddressBase {
    "@type": "https://schema.org/PostalAddress";
}
/** The mailing address. */
export declare type PostalAddress = PostalAddressLeaf;
interface PostalCodeRangeSpecificationBase extends ThingBase {
    /** First postal code in a range (included). */
    "https://schema.org/postalCodeBegin"?: SchemaValue<Text, "https://schema.org/postalCodeBegin">;
    /** Last postal code in the range (included). Needs to be after {@link https://schema.org/postalCodeBegin postalCodeBegin}. */
    "https://schema.org/postalCodeEnd"?: SchemaValue<Text, "https://schema.org/postalCodeEnd">;
}
interface PostalCodeRangeSpecificationLeaf extends PostalCodeRangeSpecificationBase {
    "@type": "https://schema.org/PostalCodeRangeSpecification";
}
/** Indicates a range of postalcodes, usually defined as the set of valid codes between {@link https://schema.org/postalCodeBegin postalCodeBegin} and {@link https://schema.org/postalCodeEnd postalCodeEnd}, inclusively. */
export declare type PostalCodeRangeSpecification = PostalCodeRangeSpecificationLeaf;
interface PosterLeaf extends CreativeWorkBase {
    "@type": "https://schema.org/Poster";
}
/** A large, usually printed placard, bill, or announcement, often illustrated, that is posted to advertise or publicize something. */
export declare type Poster = PosterLeaf;
interface PostOfficeLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/PostOffice";
}
/** A post office. */
export declare type PostOffice = PostOfficeLeaf | string;
interface PreOrderActionLeaf extends TradeActionBase {
    "@type": "https://schema.org/PreOrderAction";
}
/** An agent orders a (not yet released) object/product/service to be delivered/sent. */
export declare type PreOrderAction = PreOrderActionLeaf;
interface PrependActionLeaf extends InsertActionBase {
    "@type": "https://schema.org/PrependAction";
}
/** The act of inserting at the beginning if an ordered collection. */
export declare type PrependAction = PrependActionLeaf;
interface PreschoolLeaf extends EducationalOrganizationBase {
    "@type": "https://schema.org/Preschool";
}
/** A preschool. */
export declare type Preschool = PreschoolLeaf | string;
interface PresentationDigitalDocumentLeaf extends DigitalDocumentBase {
    "@type": "https://schema.org/PresentationDigitalDocument";
}
/** A file containing slides or used for a presentation. */
export declare type PresentationDigitalDocument = PresentationDigitalDocumentLeaf;
interface PreventionIndicationLeaf extends MedicalEntityBase {
    "@type": "https://schema.org/PreventionIndication";
}
/** An indication for preventing an underlying condition, symptom, etc. */
export declare type PreventionIndication = PreventionIndicationLeaf;
interface PriceComponentTypeEnumerationLeaf extends EnumerationBase {
    "@type": "https://schema.org/PriceComponentTypeEnumeration";
}
/** Enumerates different price components that together make up the total price for an offered product. */
export declare type PriceComponentTypeEnumeration = "https://schema.org/ActivationFee" | "https://schema.org/CleaningFee" | "https://schema.org/DistanceFee" | "https://schema.org/Downpayment" | "https://schema.org/Installment" | "https://schema.org/Subscription" | PriceComponentTypeEnumerationLeaf;
interface PriceSpecificationBase extends ThingBase {
    /** The interval and unit of measurement of ordering quantities for which the offer or price specification is valid. This allows e.g. specifying that a certain freight charge is valid only for a certain quantity. */
    "https://schema.org/eligibleQuantity"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/eligibleQuantity">;
    /** The transaction volume, in a monetary unit, for which the offer or price specification is valid, e.g. for indicating a minimal purchasing volume, to express free shipping above a certain order volume, or to limit the acceptance of credit cards to purchases to a certain minimal amount. */
    "https://schema.org/eligibleTransactionVolume"?: SchemaValue<PriceSpecification | IdReference, "https://schema.org/eligibleTransactionVolume">;
    /** The highest price if the price is a range. */
    "https://schema.org/maxPrice"?: SchemaValue<Number, "https://schema.org/maxPrice">;
    /** The lowest price if the price is a range. */
    "https://schema.org/minPrice"?: SchemaValue<Number, "https://schema.org/minPrice">;
    /**
     * The offer price of a product, or of a price component when attached to PriceSpecification and its subtypes.
     *
     * Usage guidelines:
     * - Use the {@link https://schema.org/priceCurrency priceCurrency} property (with standard formats: {@link http://en.wikipedia.org/wiki/ISO_4217 ISO 4217 currency format} e.g. "USD"; {@link https://en.wikipedia.org/wiki/List_of_cryptocurrencies Ticker symbol} for cryptocurrencies e.g. "BTC"; well known names for {@link https://en.wikipedia.org/wiki/Local_exchange_trading_system Local Exchange Tradings Systems} (LETS) and other currency types e.g. "Ithaca HOUR") instead of including {@link http://en.wikipedia.org/wiki/Dollar_sign#Currencies_that_use_the_dollar_or_peso_sign ambiguous symbols} such as '$' in the value.
     * - Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
     * - Note that both {@link http://www.w3.org/TR/xhtml-rdfa-primer/#using-the-content-attribute RDFa} and Microdata syntax allow the use of a "content=" attribute for publishing simple machine-readable values alongside more human-friendly formatting.
     * - Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.
     */
    "https://schema.org/price"?: SchemaValue<Number | Text, "https://schema.org/price">;
    /**
     * The currency of the price, or a price component when attached to {@link https://schema.org/PriceSpecification PriceSpecification} and its subtypes.
     *
     * Use standard formats: {@link http://en.wikipedia.org/wiki/ISO_4217 ISO 4217 currency format} e.g. "USD"; {@link https://en.wikipedia.org/wiki/List_of_cryptocurrencies Ticker symbol} for cryptocurrencies e.g. "BTC"; well known names for {@link https://en.wikipedia.org/wiki/Local_exchange_trading_system Local Exchange Tradings Systems} (LETS) and other currency types e.g. "Ithaca HOUR".
     */
    "https://schema.org/priceCurrency"?: SchemaValue<Text, "https://schema.org/priceCurrency">;
    /** The date when the item becomes valid. */
    "https://schema.org/validFrom"?: SchemaValue<Date | DateTime, "https://schema.org/validFrom">;
    /** The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours. */
    "https://schema.org/validThrough"?: SchemaValue<Date | DateTime, "https://schema.org/validThrough">;
    /** Specifies whether the applicable value-added tax (VAT) is included in the price specification or not. */
    "https://schema.org/valueAddedTaxIncluded"?: SchemaValue<Boolean, "https://schema.org/valueAddedTaxIncluded">;
}
interface PriceSpecificationLeaf extends PriceSpecificationBase {
    "@type": "https://schema.org/PriceSpecification";
}
/** A structured value representing a price or price range. Typically, only the subclasses of this type are used for markup. It is recommended to use {@link https://schema.org/MonetaryAmount MonetaryAmount} to describe independent amounts of money such as a salary, credit card limits, etc. */
export declare type PriceSpecification = PriceSpecificationLeaf | CompoundPriceSpecification | DeliveryChargeSpecification | PaymentChargeSpecification | UnitPriceSpecification;
interface PriceTypeEnumerationLeaf extends EnumerationBase {
    "@type": "https://schema.org/PriceTypeEnumeration";
}
/** Enumerates different price types, for example list price, invoice price, and sale price. */
export declare type PriceTypeEnumeration = "https://schema.org/InvoicePrice" | "https://schema.org/ListPrice" | "https://schema.org/MinimumAdvertisedPrice" | "https://schema.org/MSRP" | "https://schema.org/SalePrice" | "https://schema.org/SRP" | PriceTypeEnumerationLeaf;
interface ProductBase extends ThingBase {
    /**
     * A property-value pair representing an additional characteristics of the entitity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.
     *
     * Note: Publishers should be aware that applications designed to use specific schema.org properties (e.g. https://schema.org/width, https://schema.org/color, https://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.
     */
    "https://schema.org/additionalProperty"?: SchemaValue<PropertyValue | IdReference, "https://schema.org/additionalProperty">;
    /** The overall rating, based on a collection of reviews or ratings, of the item. */
    "https://schema.org/aggregateRating"?: SchemaValue<AggregateRating | IdReference, "https://schema.org/aggregateRating">;
    /** An intended audience, i.e. a group for whom something was created. */
    "https://schema.org/audience"?: SchemaValue<Audience | IdReference, "https://schema.org/audience">;
    /** An award won by or for this item. */
    "https://schema.org/award"?: SchemaValue<Text, "https://schema.org/award">;
    /**
     * Awards won by or for this item.
     *
     * @deprecated Consider using https://schema.org/award instead.
     */
    "https://schema.org/awards"?: SchemaValue<Text, "https://schema.org/awards">;
    /** The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person. */
    "https://schema.org/brand"?: SchemaValue<Brand | Organization | IdReference, "https://schema.org/brand">;
    /** A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy. */
    "https://schema.org/category"?: SchemaValue<PhysicalActivityCategory | Text | Thing | URL | IdReference, "https://schema.org/category">;
    /** The color of the product. */
    "https://schema.org/color"?: SchemaValue<Text, "https://schema.org/color">;
    /** The place where the product was assembled. */
    "https://schema.org/countryOfAssembly"?: SchemaValue<Text, "https://schema.org/countryOfAssembly">;
    /** The place where the item (typically {@link https://schema.org/Product Product}) was last processed and tested before importation. */
    "https://schema.org/countryOfLastProcessing"?: SchemaValue<Text, "https://schema.org/countryOfLastProcessing">;
    /**
     * The country of origin of something, including products as well as creative works such as movie and TV content.
     *
     * In the case of TV and movie, this would be the country of the principle offices of the production company or individual responsible for the movie. For other kinds of {@link https://schema.org/CreativeWork CreativeWork} it is difficult to provide fully general guidance, and properties such as {@link https://schema.org/contentLocation contentLocation} and {@link https://schema.org/locationCreated locationCreated} may be more applicable.
     *
     * In the case of products, the country of origin of the product. The exact interpretation of this may vary by context and product type, and cannot be fully enumerated here.
     */
    "https://schema.org/countryOfOrigin"?: SchemaValue<Country | IdReference, "https://schema.org/countryOfOrigin">;
    /** The depth of the item. */
    "https://schema.org/depth"?: SchemaValue<Distance | QuantitativeValue | IdReference, "https://schema.org/depth">;
    /** A Global Trade Item Number ({@link https://www.gs1.org/standards/id-keys/gtin GTIN}). GTINs identify trade items, including products and services, using numeric identification codes. The {@link https://schema.org/gtin gtin} property generalizes the earlier {@link https://schema.org/gtin8 gtin8}, {@link https://schema.org/gtin12 gtin12}, {@link https://schema.org/gtin13 gtin13}, and {@link https://schema.org/gtin14 gtin14} properties. The GS1 {@link https://www.gs1.org/standards/Digital-Link/ digital link specifications} express GTINs as URLs. A correct {@link https://schema.org/gtin gtin} value should be a valid GTIN, which means that it should be an all-numeric string of either 8, 12, 13 or 14 digits, or a "GS1 Digital Link" URL based on such a string. The numeric component should also have a {@link https://www.gs1.org/services/check-digit-calculator valid GS1 check digit} and meet the other rules for valid GTINs. See also {@link http://www.gs1.org/barcodes/technical/idkeys/gtin GS1's GTIN Summary} and {@link https://en.wikipedia.org/wiki/Global_Trade_Item_Number Wikipedia} for more details. Left-padding of the gtin values is not required or encouraged. */
    "https://schema.org/gtin"?: SchemaValue<Text, "https://schema.org/gtin">;
    /** The GTIN-12 code of the product, or the product to which the offer refers. The GTIN-12 is the 12-digit GS1 Identification Key composed of a U.P.C. Company Prefix, Item Reference, and Check Digit used to identify trade items. See {@link http://www.gs1.org/barcodes/technical/idkeys/gtin GS1 GTIN Summary} for more details. */
    "https://schema.org/gtin12"?: SchemaValue<Text, "https://schema.org/gtin12">;
    /** The GTIN-13 code of the product, or the product to which the offer refers. This is equivalent to 13-digit ISBN codes and EAN UCC-13. Former 12-digit UPC codes can be converted into a GTIN-13 code by simply adding a preceding zero. See {@link http://www.gs1.org/barcodes/technical/idkeys/gtin GS1 GTIN Summary} for more details. */
    "https://schema.org/gtin13"?: SchemaValue<Text, "https://schema.org/gtin13">;
    /** The GTIN-14 code of the product, or the product to which the offer refers. See {@link http://www.gs1.org/barcodes/technical/idkeys/gtin GS1 GTIN Summary} for more details. */
    "https://schema.org/gtin14"?: SchemaValue<Text, "https://schema.org/gtin14">;
    /** The GTIN-8 code of the product, or the product to which the offer refers. This code is also known as EAN/UCC-8 or 8-digit EAN. See {@link http://www.gs1.org/barcodes/technical/idkeys/gtin GS1 GTIN Summary} for more details. */
    "https://schema.org/gtin8"?: SchemaValue<Text, "https://schema.org/gtin8">;
    /** Defines the energy efficiency Category (also known as "class" or "rating") for a product according to an international energy efficiency standard. */
    "https://schema.org/hasEnergyConsumptionDetails"?: SchemaValue<EnergyConsumptionDetails | IdReference, "https://schema.org/hasEnergyConsumptionDetails">;
    /** A product measurement, for example the inseam of pants, the wheel size of a bicycle, or the gauge of a screw. Usually an exact measurement, but can also be a range of measurements for adjustable products, for example belts and ski bindings. */
    "https://schema.org/hasMeasurement"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/hasMeasurement">;
    /** Specifies a MerchantReturnPolicy that may be applicable. */
    "https://schema.org/hasMerchantReturnPolicy"?: SchemaValue<MerchantReturnPolicy | IdReference, "https://schema.org/hasMerchantReturnPolicy">;
    /**
     * Indicates a ProductReturnPolicy that may be applicable.
     *
     * @deprecated Consider using https://schema.org/hasMerchantReturnPolicy instead.
     */
    "https://schema.org/hasProductReturnPolicy"?: SchemaValue<ProductReturnPolicy | IdReference, "https://schema.org/hasProductReturnPolicy">;
    /** The height of the item. */
    "https://schema.org/height"?: SchemaValue<Distance | QuantitativeValue | IdReference, "https://schema.org/height">;
    /** Indicates the {@link https://schema.org/productGroupID productGroupID} for a {@link https://schema.org/ProductGroup ProductGroup} that this product {@link https://schema.org/isVariantOf isVariantOf}. */
    "https://schema.org/inProductGroupWithID"?: SchemaValue<Text, "https://schema.org/inProductGroupWithID">;
    /** A pointer to another product (or multiple products) for which this product is an accessory or spare part. */
    "https://schema.org/isAccessoryOrSparePartFor"?: SchemaValue<Product | IdReference, "https://schema.org/isAccessoryOrSparePartFor">;
    /** A pointer to another product (or multiple products) for which this product is a consumable. */
    "https://schema.org/isConsumableFor"?: SchemaValue<Product | IdReference, "https://schema.org/isConsumableFor">;
    /** A pointer to another, somehow related product (or multiple products). */
    "https://schema.org/isRelatedTo"?: SchemaValue<Product | Service | IdReference, "https://schema.org/isRelatedTo">;
    /** A pointer to another, functionally similar product (or multiple products). */
    "https://schema.org/isSimilarTo"?: SchemaValue<Product | Service | IdReference, "https://schema.org/isSimilarTo">;
    /** Indicates the kind of product that this is a variant of. In the case of {@link https://schema.org/ProductModel ProductModel}, this is a pointer (from a ProductModel) to a base product from which this product is a variant. It is safe to infer that the variant inherits all product features from the base model, unless defined locally. This is not transitive. In the case of a {@link https://schema.org/ProductGroup ProductGroup}, the group description also serves as a template, representing a set of Products that vary on explicitly defined, specific dimensions only (so it defines both a set of variants, as well as which values distinguish amongst those variants). When used with {@link https://schema.org/ProductGroup ProductGroup}, this property can apply to any {@link https://schema.org/Product Product} included in the group. */
    "https://schema.org/isVariantOf"?: SchemaValue<ProductGroup | ProductModel | IdReference, "https://schema.org/isVariantOf">;
    /** A predefined value from OfferItemCondition specifying the condition of the product or service, or the products or services included in the offer. Also used for product return policies to specify the condition of products accepted for returns. */
    "https://schema.org/itemCondition"?: SchemaValue<OfferItemCondition | IdReference, "https://schema.org/itemCondition">;
    /** An associated logo. */
    "https://schema.org/logo"?: SchemaValue<ImageObject | URL | IdReference, "https://schema.org/logo">;
    /** The manufacturer of the product. */
    "https://schema.org/manufacturer"?: SchemaValue<Organization | IdReference, "https://schema.org/manufacturer">;
    /** A material that something is made from, e.g. leather, wool, cotton, paper. */
    "https://schema.org/material"?: SchemaValue<Product | Text | URL | IdReference, "https://schema.org/material">;
    /** The model of the product. Use with the URL of a ProductModel or a textual representation of the model identifier. The URL of the ProductModel can be from an external source. It is recommended to additionally provide strong product identifiers via the gtin8/gtin13/gtin14 and mpn properties. */
    "https://schema.org/model"?: SchemaValue<ProductModel | Text | IdReference, "https://schema.org/model">;
    /** The Manufacturer Part Number (MPN) of the product, or the product to which the offer refers. */
    "https://schema.org/mpn"?: SchemaValue<Text, "https://schema.org/mpn">;
    /** Indicates the {@link https://en.wikipedia.org/wiki/NATO_Stock_Number NATO stock number} (nsn) of a {@link https://schema.org/Product Product}. */
    "https://schema.org/nsn"?: SchemaValue<Text, "https://schema.org/nsn">;
    /** An offer to provide this item—for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use {@link https://schema.org/businessFunction businessFunction} to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a {@link https://schema.org/Demand Demand}. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer. */
    "https://schema.org/offers"?: SchemaValue<Demand | Offer | IdReference, "https://schema.org/offers">;
    /** A pattern that something has, for example 'polka dot', 'striped', 'Canadian flag'. Values are typically expressed as text, although links to controlled value schemes are also supported. */
    "https://schema.org/pattern"?: SchemaValue<DefinedTerm | Text | IdReference, "https://schema.org/pattern">;
    /** The product identifier, such as ISBN. For example: `meta itemprop="productID" content="isbn:123-456-789"`. */
    "https://schema.org/productID"?: SchemaValue<Text, "https://schema.org/productID">;
    /** The date of production of the item, e.g. vehicle. */
    "https://schema.org/productionDate"?: SchemaValue<Date, "https://schema.org/productionDate">;
    /** The date the item e.g. vehicle was purchased by the current owner. */
    "https://schema.org/purchaseDate"?: SchemaValue<Date, "https://schema.org/purchaseDate">;
    /** The release date of a product or product model. This can be used to distinguish the exact variant of a product. */
    "https://schema.org/releaseDate"?: SchemaValue<Date, "https://schema.org/releaseDate">;
    /** A review of the item. */
    "https://schema.org/review"?: SchemaValue<Review | IdReference, "https://schema.org/review">;
    /**
     * Review of the item.
     *
     * @deprecated Consider using https://schema.org/review instead.
     */
    "https://schema.org/reviews"?: SchemaValue<Review | IdReference, "https://schema.org/reviews">;
    /** A standardized size of a product or creative work, specified either through a simple textual string (for example 'XL', '32Wx34L'), a QuantitativeValue with a unitCode, or a comprehensive and structured {@link https://schema.org/SizeSpecification SizeSpecification}; in other cases, the {@link https://schema.org/width width}, {@link https://schema.org/height height}, {@link https://schema.org/depth depth} and {@link https://schema.org/weight weight} properties may be more applicable. */
    "https://schema.org/size"?: SchemaValue<DefinedTerm | QuantitativeValue | SizeSpecification | Text | IdReference, "https://schema.org/size">;
    /** The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers. */
    "https://schema.org/sku"?: SchemaValue<Text, "https://schema.org/sku">;
    /** A slogan or motto associated with the item. */
    "https://schema.org/slogan"?: SchemaValue<Text, "https://schema.org/slogan">;
    /** The weight of the product or person. */
    "https://schema.org/weight"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/weight">;
    /** The width of the item. */
    "https://schema.org/width"?: SchemaValue<Distance | QuantitativeValue | IdReference, "https://schema.org/width">;
}
interface ProductLeaf extends ProductBase {
    "@type": "https://schema.org/Product";
}
/** Any offered product or service. For example: a pair of shoes; a concert ticket; the rental of a car; a haircut; or an episode of a TV show streamed online. */
export declare type Product = ProductLeaf | IndividualProduct | ProductCollection | ProductGroup | ProductModel | SomeProducts | Vehicle;
interface ProductCollectionBase extends CollectionBase, ProductBase {
    /** This links to a node or nodes indicating the exact quantity of the products included in an {@link https://schema.org/Offer Offer} or {@link https://schema.org/ProductCollection ProductCollection}. */
    "https://schema.org/includesObject"?: SchemaValue<TypeAndQuantityNode | IdReference, "https://schema.org/includesObject">;
}
interface ProductCollectionLeaf extends ProductCollectionBase {
    "@type": "https://schema.org/ProductCollection";
}
/** A set of products (either {@link https://schema.org/ProductGroup ProductGroup}s or specific variants) that are listed together e.g. in an {@link https://schema.org/Offer Offer}. */
export declare type ProductCollection = ProductCollectionLeaf;
interface ProductGroupBase extends ProductBase {
    /** Indicates a {@link https://schema.org/Product Product} that is a member of this {@link https://schema.org/ProductGroup ProductGroup} (or {@link https://schema.org/ProductModel ProductModel}). */
    "https://schema.org/hasVariant"?: SchemaValue<Product | IdReference, "https://schema.org/hasVariant">;
    /** Indicates a textual identifier for a ProductGroup. */
    "https://schema.org/productGroupID"?: SchemaValue<Text, "https://schema.org/productGroupID">;
    /** Indicates the property or properties by which the variants in a {@link https://schema.org/ProductGroup ProductGroup} vary, e.g. their size, color etc. Schema.org properties can be referenced by their short name e.g. "color"; terms defined elsewhere can be referenced with their URIs. */
    "https://schema.org/variesBy"?: SchemaValue<DefinedTerm | Text | IdReference, "https://schema.org/variesBy">;
}
interface ProductGroupLeaf extends ProductGroupBase {
    "@type": "https://schema.org/ProductGroup";
}
/**
 * A ProductGroup represents a group of {@link https://schema.org/Product Product}s that vary only in certain well-described ways, such as by {@link https://schema.org/size size}, {@link https://schema.org/color color}, {@link https://schema.org/material material} etc.
 *
 * While a ProductGroup itself is not directly offered for sale, the various varying products that it represents can be. The ProductGroup serves as a prototype or template, standing in for all of the products who have an {@link https://schema.org/isVariantOf isVariantOf} relationship to it. As such, properties (including additional types) can be applied to the ProductGroup to represent characteristics shared by each of the (possibly very many) variants. Properties that reference a ProductGroup are not included in this mechanism; neither are the following specific properties {@link https://schema.org/variesBy variesBy}, {@link https://schema.org/hasVariant hasVariant}, {@link https://schema.org/url url}.
 */
export declare type ProductGroup = ProductGroupLeaf;
interface ProductModelBase extends ProductBase {
    /** Indicates the kind of product that this is a variant of. In the case of {@link https://schema.org/ProductModel ProductModel}, this is a pointer (from a ProductModel) to a base product from which this product is a variant. It is safe to infer that the variant inherits all product features from the base model, unless defined locally. This is not transitive. In the case of a {@link https://schema.org/ProductGroup ProductGroup}, the group description also serves as a template, representing a set of Products that vary on explicitly defined, specific dimensions only (so it defines both a set of variants, as well as which values distinguish amongst those variants). When used with {@link https://schema.org/ProductGroup ProductGroup}, this property can apply to any {@link https://schema.org/Product Product} included in the group. */
    "https://schema.org/isVariantOf"?: SchemaValue<ProductGroup | ProductModel | IdReference, "https://schema.org/isVariantOf">;
    /** A pointer from a previous, often discontinued variant of the product to its newer variant. */
    "https://schema.org/predecessorOf"?: SchemaValue<ProductModel | IdReference, "https://schema.org/predecessorOf">;
    /** A pointer from a newer variant of a product to its previous, often discontinued predecessor. */
    "https://schema.org/successorOf"?: SchemaValue<ProductModel | IdReference, "https://schema.org/successorOf">;
}
interface ProductModelLeaf extends ProductModelBase {
    "@type": "https://schema.org/ProductModel";
}
/** A datasheet or vendor specification of a product (in the sense of a prototypical description). */
export declare type ProductModel = ProductModelLeaf;
interface ProductReturnEnumerationLeaf extends EnumerationBase {
    "@type": "https://schema.org/ProductReturnEnumeration";
}
/**
 * ProductReturnEnumeration enumerates several kinds of product return policy. Note that this structure may not capture all aspects of the policy.
 *
 * @deprecated Use MerchantReturnEnumeration instead.
 */
export declare type ProductReturnEnumeration = "https://schema.org/ProductReturnFiniteReturnWindow" | "https://schema.org/ProductReturnNotPermitted" | "https://schema.org/ProductReturnUnlimitedWindow" | "https://schema.org/ProductReturnUnspecified" | ProductReturnEnumerationLeaf;
interface ProductReturnPolicyBase extends ThingBase {
    /**
     * The productReturnDays property indicates the number of days (from purchase) within which relevant product return policy is applicable.
     *
     * @deprecated Consider using https://schema.org/merchantReturnDays instead.
     */
    "https://schema.org/productReturnDays"?: SchemaValue<Integer, "https://schema.org/productReturnDays">;
    /**
     * Indicates a Web page or service by URL, for product return.
     *
     * @deprecated Consider using https://schema.org/merchantReturnLink instead.
     */
    "https://schema.org/productReturnLink"?: SchemaValue<URL, "https://schema.org/productReturnLink">;
}
interface ProductReturnPolicyLeaf extends ProductReturnPolicyBase {
    "@type": "https://schema.org/ProductReturnPolicy";
}
/**
 * A ProductReturnPolicy provides information about product return policies associated with an {@link https://schema.org/Organization Organization} or {@link https://schema.org/Product Product}.
 *
 * @deprecated Use MerchantReturnPolicy instead.
 */
export declare type ProductReturnPolicy = ProductReturnPolicyLeaf;
interface ProfessionalServiceLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/ProfessionalService";
}
/**
 * Original definition: "provider of professional services."
 *
 * The general {@link https://schema.org/ProfessionalService ProfessionalService} type for local businesses was deprecated due to confusion with {@link https://schema.org/Service Service}. For reference, the types that it included were: {@link https://schema.org/Dentist Dentist}, {@link https://schema.org/AccountingService AccountingService}, {@link https://schema.org/Attorney Attorney}, {@link https://schema.org/Notary Notary}, as well as types for several kinds of {@link https://schema.org/HomeAndConstructionBusiness HomeAndConstructionBusiness}: {@link https://schema.org/Electrician Electrician}, {@link https://schema.org/GeneralContractor GeneralContractor}, {@link https://schema.org/HousePainter HousePainter}, {@link https://schema.org/Locksmith Locksmith}, {@link https://schema.org/Plumber Plumber}, {@link https://schema.org/RoofingContractor RoofingContractor}. {@link https://schema.org/LegalService LegalService} was introduced as a more inclusive supertype of {@link https://schema.org/Attorney Attorney}.
 */
export declare type ProfessionalService = ProfessionalServiceLeaf | string;
interface ProfilePageLeaf extends WebPageBase {
    "@type": "https://schema.org/ProfilePage";
}
/** Web page type: Profile page. */
export declare type ProfilePage = ProfilePageLeaf;
interface ProgramMembershipBase extends ThingBase {
    /** The organization (airline, travelers' club, etc.) the membership is made with. */
    "https://schema.org/hostingOrganization"?: SchemaValue<Organization | IdReference, "https://schema.org/hostingOrganization">;
    /** A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals. */
    "https://schema.org/member"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/member">;
    /**
     * A member of this organization.
     *
     * @deprecated Consider using https://schema.org/member instead.
     */
    "https://schema.org/members"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/members">;
    /** A unique identifier for the membership. */
    "https://schema.org/membershipNumber"?: SchemaValue<Text, "https://schema.org/membershipNumber">;
    /** The number of membership points earned by the member. If necessary, the unitText can be used to express the units the points are issued in. (e.g. stars, miles, etc.) */
    "https://schema.org/membershipPointsEarned"?: SchemaValue<Number | QuantitativeValue | IdReference, "https://schema.org/membershipPointsEarned">;
    /** The program providing the membership. */
    "https://schema.org/programName"?: SchemaValue<Text, "https://schema.org/programName">;
}
interface ProgramMembershipLeaf extends ProgramMembershipBase {
    "@type": "https://schema.org/ProgramMembership";
}
/** Used to describe membership in a loyalty programs (e.g. "StarAliance"), traveler clubs (e.g. "AAA"), purchase clubs ("Safeway Club"), etc. */
export declare type ProgramMembership = ProgramMembershipLeaf;
interface ProjectLeaf extends OrganizationBase {
    "@type": "https://schema.org/Project";
}
/** An enterprise (potentially individual but typically collaborative), planned to achieve a particular aim. Use properties from {@link https://schema.org/Organization Organization}, {@link https://schema.org/subOrganization subOrganization}/{@link https://schema.org/parentOrganization parentOrganization} to indicate project sub-structures. */
export declare type Project = ProjectLeaf | FundingAgency | ResearchProject | string;
interface PronounceableTextBase extends Partial<IdReference> {
    /** The language of the content or performance or used in an action. Please use one of the language codes from the {@link http://tools.ietf.org/html/bcp47 IETF BCP 47 standard}. See also {@link https://schema.org/availableLanguage availableLanguage}. */
    "https://schema.org/inLanguage"?: SchemaValue<Language | Text | IdReference, "https://schema.org/inLanguage">;
    /** Representation of a text {@link https://schema.org/textValue textValue} using the specified {@link https://schema.org/speechToTextMarkup speechToTextMarkup}. For example the city name of Houston in IPA: /\u02C8hju\u02D0st\u0259n/. */
    "https://schema.org/phoneticText"?: SchemaValue<Text, "https://schema.org/phoneticText">;
    /** Form of markup used. eg. {@link https://www.w3.org/TR/speech-synthesis11 SSML} or {@link https://www.wikidata.org/wiki/Property:P898 IPA}. */
    "https://schema.org/speechToTextMarkup"?: SchemaValue<Text, "https://schema.org/speechToTextMarkup">;
    /** Text value being annotated. */
    "https://schema.org/textValue"?: SchemaValue<Text, "https://schema.org/textValue">;
}
interface PronounceableTextLeaf extends PronounceableTextBase {
    "@type": "https://schema.org/PronounceableText";
}
/** Data type: PronounceableText. */
export declare type PronounceableText = PronounceableTextLeaf | string;
interface PropertyBase extends ThingBase {
    /** Relates a property to a class that is (one of) the type(s) the property is expected to be used on. */
    "https://schema.org/domainIncludes"?: SchemaValue<Class | IdReference, "https://schema.org/domainIncludes">;
    /** Relates a property to a property that is its inverse. Inverse properties relate the same pairs of items to each other, but in reversed direction. For example, the 'alumni' and 'alumniOf' properties are inverseOf each other. Some properties don't have explicit inverses; in these situations RDFa and JSON-LD syntax for reverse properties can be used. */
    "https://schema.org/inverseOf"?: SchemaValue<Property | IdReference, "https://schema.org/inverseOf">;
    /** Relates a property to a class that constitutes (one of) the expected type(s) for values of the property. */
    "https://schema.org/rangeIncludes"?: SchemaValue<Class | IdReference, "https://schema.org/rangeIncludes">;
    /** Relates a term (i.e. a property, class or enumeration) to one that supersedes it. */
    "https://schema.org/supersededBy"?: SchemaValue<Class | Enumeration | Property | IdReference, "https://schema.org/supersededBy">;
}
interface PropertyLeaf extends PropertyBase {
    "@type": "https://schema.org/Property";
}
/** A property, used to indicate attributes and relationships of some Thing; equivalent to rdf:Property. */
export declare type Property = PropertyLeaf;
interface PropertyValueBase extends ThingBase {
    /** The upper value of some characteristic or property. */
    "https://schema.org/maxValue"?: SchemaValue<Number, "https://schema.org/maxValue">;
    /**
     * A technique or technology used in a {@link https://schema.org/Dataset Dataset} (or {@link https://schema.org/DataDownload DataDownload}, {@link https://schema.org/DataCatalog DataCatalog}), corresponding to the method used for measuring the corresponding variable(s) (described using {@link https://schema.org/variableMeasured variableMeasured}). This is oriented towards scientific and scholarly dataset publication but may have broader applicability; it is not intended as a full representation of measurement, but rather as a high level summary for dataset discovery.
     *
     * For example, if {@link https://schema.org/variableMeasured variableMeasured} is: molecule concentration, {@link https://schema.org/measurementTechnique measurementTechnique} could be: "mass spectrometry" or "nmr spectroscopy" or "colorimetry" or "immunofluorescence".
     *
     * If the {@link https://schema.org/variableMeasured variableMeasured} is "depression rating", the {@link https://schema.org/measurementTechnique measurementTechnique} could be "Zung Scale" or "HAM-D" or "Beck Depression Inventory".
     *
     * If there are several {@link https://schema.org/variableMeasured variableMeasured} properties recorded for some given data object, use a {@link https://schema.org/PropertyValue PropertyValue} for each {@link https://schema.org/variableMeasured variableMeasured} and attach the corresponding {@link https://schema.org/measurementTechnique measurementTechnique}.
     */
    "https://schema.org/measurementTechnique"?: SchemaValue<Text | URL, "https://schema.org/measurementTechnique">;
    /** The lower value of some characteristic or property. */
    "https://schema.org/minValue"?: SchemaValue<Number, "https://schema.org/minValue">;
    /** A commonly used identifier for the characteristic represented by the property, e.g. a manufacturer or a standard code for a property. propertyID can be (1) a prefixed string, mainly meant to be used with standards for product properties; (2) a site-specific, non-prefixed string (e.g. the primary key of the property or the vendor-specific id of the property), or (3) a URL indicating the type of the property, either pointing to an external vocabulary, or a Web resource that describes the property (e.g. a glossary entry). Standards bodies should promote a standard prefix for the identifiers of properties from their standards. */
    "https://schema.org/propertyID"?: SchemaValue<Text | URL, "https://schema.org/propertyID">;
    /** The unit of measurement given using the UN/CEFACT Common Code (3 characters) or a URL. Other codes than the UN/CEFACT Common Code may be used with a prefix followed by a colon. */
    "https://schema.org/unitCode"?: SchemaValue<Text | URL, "https://schema.org/unitCode">;
    /** A string or text indicating the unit of measurement. Useful if you cannot provide a standard unit code for {@link unitCode unitCode}. */
    "https://schema.org/unitText"?: SchemaValue<Text, "https://schema.org/unitText">;
    /**
     * The value of the quantitative value or property value node.
     * - For {@link https://schema.org/QuantitativeValue QuantitativeValue} and {@link https://schema.org/MonetaryAmount MonetaryAmount}, the recommended type for values is 'Number'.
     * - For {@link https://schema.org/PropertyValue PropertyValue}, it can be 'Text;', 'Number', 'Boolean', or 'StructuredValue'.
     * - Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.
     * - Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
     */
    "https://schema.org/value"?: SchemaValue<Boolean | Number | StructuredValue | Text | IdReference, "https://schema.org/value">;
    /** A secondary value that provides additional information on the original value, e.g. a reference temperature or a type of measurement. */
    "https://schema.org/valueReference"?: SchemaValue<DefinedTerm | Enumeration | MeasurementTypeEnumeration | PropertyValue | QualitativeValue | QuantitativeValue | StructuredValue | Text | IdReference, "https://schema.org/valueReference">;
}
interface PropertyValueLeaf extends PropertyValueBase {
    "@type": "https://schema.org/PropertyValue";
}
/**
 * A property-value pair, e.g. representing a feature of a product or place. Use the 'name' property for the name of the property. If there is an additional human-readable version of the value, put that into the 'description' property.
 *
 * Always use specific schema.org properties when a) they exist and b) you can populate them. Using PropertyValue as a substitute will typically not trigger the same effect as using the original, specific property.
 */
export declare type PropertyValue = PropertyValueLeaf | LocationFeatureSpecification;
interface PropertyValueSpecificationBase extends ThingBase {
    /** The default value of the input. For properties that expect a literal, the default is a literal value, for properties that expect an object, it's an ID reference to one of the current values. */
    "https://schema.org/defaultValue"?: SchemaValue<Text | Thing | IdReference, "https://schema.org/defaultValue">;
    /** The upper value of some characteristic or property. */
    "https://schema.org/maxValue"?: SchemaValue<Number, "https://schema.org/maxValue">;
    /** The lower value of some characteristic or property. */
    "https://schema.org/minValue"?: SchemaValue<Number, "https://schema.org/minValue">;
    /** Whether multiple values are allowed for the property. Default is false. */
    "https://schema.org/multipleValues"?: SchemaValue<Boolean, "https://schema.org/multipleValues">;
    /** Whether or not a property is mutable. Default is false. Specifying this for a property that also has a value makes it act similar to a "hidden" input in an HTML form. */
    "https://schema.org/readonlyValue"?: SchemaValue<Boolean, "https://schema.org/readonlyValue">;
    /** The stepValue attribute indicates the granularity that is expected (and required) of the value in a PropertyValueSpecification. */
    "https://schema.org/stepValue"?: SchemaValue<Number, "https://schema.org/stepValue">;
    /** Specifies the allowed range for number of characters in a literal value. */
    "https://schema.org/valueMaxLength"?: SchemaValue<Number, "https://schema.org/valueMaxLength">;
    /** Specifies the minimum allowed range for number of characters in a literal value. */
    "https://schema.org/valueMinLength"?: SchemaValue<Number, "https://schema.org/valueMinLength">;
    /** Indicates the name of the PropertyValueSpecification to be used in URL templates and form encoding in a manner analogous to HTML's input@name. */
    "https://schema.org/valueName"?: SchemaValue<Text, "https://schema.org/valueName">;
    /** Specifies a regular expression for testing literal values according to the HTML spec. */
    "https://schema.org/valuePattern"?: SchemaValue<Text, "https://schema.org/valuePattern">;
    /** Whether the property must be filled in to complete the action. Default is false. */
    "https://schema.org/valueRequired"?: SchemaValue<Boolean, "https://schema.org/valueRequired">;
}
interface PropertyValueSpecificationLeaf extends PropertyValueSpecificationBase {
    "@type": "https://schema.org/PropertyValueSpecification";
}
/** A Property value specification. */
export declare type PropertyValueSpecification = PropertyValueSpecificationLeaf;
interface ProteinBase extends BioChemEntityBase {
    /** A symbolic representation of a BioChemEnity. For example, a nucleotide sequence of a Gene or an amino acid sequence of a Protein. */
    "https://schema.org/hasBioPolymerSequence"?: SchemaValue<Text, "https://schema.org/hasBioPolymerSequence">;
}
interface ProteinLeaf extends ProteinBase {
    "@type": "https://schema.org/Protein";
}
/** Protein is here used in its widest possible definition, as classes of amino acid based molecules. Amyloid-beta Protein in human (UniProt P05067), eukaryota (e.g. an OrthoDB group) or even a single molecule that one can point to are all of type schema:Protein. A protein can thus be a subclass of another protein, e.g. schema:Protein as a UniProt record can have multiple isoforms inside it which would also be schema:Protein. They can be imagined, synthetic, hypothetical or naturally occurring. */
export declare type Protein = ProteinLeaf;
interface PsychologicalTreatmentLeaf extends TherapeuticProcedureBase {
    "@type": "https://schema.org/PsychologicalTreatment";
}
/** A process of care relying upon counseling, dialogue and communication aimed at improving a mental health condition without use of drugs. */
export declare type PsychologicalTreatment = PsychologicalTreatmentLeaf;
interface PublicationEventBase extends EventBase {
    /**
     * A flag to signal that the item, event, or place is accessible for free.
     *
     * @deprecated Consider using https://schema.org/isAccessibleForFree instead.
     */
    "https://schema.org/free"?: SchemaValue<Boolean, "https://schema.org/free">;
    /** An agent associated with the publication event. */
    "https://schema.org/publishedBy"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/publishedBy">;
    /** A broadcast service associated with the publication event. */
    "https://schema.org/publishedOn"?: SchemaValue<BroadcastService | IdReference, "https://schema.org/publishedOn">;
}
interface PublicationEventLeaf extends PublicationEventBase {
    "@type": "https://schema.org/PublicationEvent";
}
/** A PublicationEvent corresponds indifferently to the event of publication for a CreativeWork of any type e.g. a broadcast event, an on-demand event, a book/journal publication via a variety of delivery media. */
export declare type PublicationEvent = PublicationEventLeaf | BroadcastEvent | OnDemandEvent;
interface PublicationIssueBase extends CreativeWorkBase {
    /** Identifies the issue of publication; for example, "iii" or "2". */
    "https://schema.org/issueNumber"?: SchemaValue<Integer | Text, "https://schema.org/issueNumber">;
    /** The page on which the work ends; for example "138" or "xvi". */
    "https://schema.org/pageEnd"?: SchemaValue<Integer | Text, "https://schema.org/pageEnd">;
    /** The page on which the work starts; for example "135" or "xiii". */
    "https://schema.org/pageStart"?: SchemaValue<Integer | Text, "https://schema.org/pageStart">;
    /** Any description of pages that is not separated into pageStart and pageEnd; for example, "1-6, 9, 55" or "10-12, 46-49". */
    "https://schema.org/pagination"?: SchemaValue<Text, "https://schema.org/pagination">;
}
interface PublicationIssueLeaf extends PublicationIssueBase {
    "@type": "https://schema.org/PublicationIssue";
}
/**
 * A part of a successively published publication such as a periodical or publication volume, often numbered, usually containing a grouping of works such as articles.
 *
 * See also {@link http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html blog post}.
 */
export declare type PublicationIssue = PublicationIssueLeaf | ComicIssue;
interface PublicationVolumeBase extends CreativeWorkBase {
    /** The page on which the work ends; for example "138" or "xvi". */
    "https://schema.org/pageEnd"?: SchemaValue<Integer | Text, "https://schema.org/pageEnd">;
    /** The page on which the work starts; for example "135" or "xiii". */
    "https://schema.org/pageStart"?: SchemaValue<Integer | Text, "https://schema.org/pageStart">;
    /** Any description of pages that is not separated into pageStart and pageEnd; for example, "1-6, 9, 55" or "10-12, 46-49". */
    "https://schema.org/pagination"?: SchemaValue<Text, "https://schema.org/pagination">;
    /** Identifies the volume of publication or multi-part work; for example, "iii" or "2". */
    "https://schema.org/volumeNumber"?: SchemaValue<Integer | Text, "https://schema.org/volumeNumber">;
}
interface PublicationVolumeLeaf extends PublicationVolumeBase {
    "@type": "https://schema.org/PublicationVolume";
}
/**
 * A part of a successively published publication such as a periodical or multi-volume work, often numbered. It may represent a time span, such as a year.
 *
 * See also {@link http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html blog post}.
 */
export declare type PublicationVolume = PublicationVolumeLeaf;
interface PublicSwimmingPoolLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/PublicSwimmingPool";
}
/** A public swimming pool. */
export declare type PublicSwimmingPool = PublicSwimmingPoolLeaf | string;
interface PublicToiletLeaf extends CivicStructureBase {
    "@type": "https://schema.org/PublicToilet";
}
/** A public toilet is a room or small building containing one or more toilets (and possibly also urinals) which is available for use by the general public, or by customers or employees of certain businesses. */
export declare type PublicToilet = PublicToiletLeaf | string;
interface QAPageLeaf extends WebPageBase {
    "@type": "https://schema.org/QAPage";
}
/** A QAPage is a WebPage focussed on a specific Question and its Answer(s), e.g. in a question answering site or documenting Frequently Asked Questions (FAQs). */
export declare type QAPage = QAPageLeaf;
interface QualitativeValueBase extends EnumerationBase {
    /**
     * A property-value pair representing an additional characteristics of the entitity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.
     *
     * Note: Publishers should be aware that applications designed to use specific schema.org properties (e.g. https://schema.org/width, https://schema.org/color, https://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.
     */
    "https://schema.org/additionalProperty"?: SchemaValue<PropertyValue | IdReference, "https://schema.org/additionalProperty">;
    /** This ordering relation for qualitative values indicates that the subject is equal to the object. */
    "https://schema.org/equal"?: SchemaValue<QualitativeValue | IdReference, "https://schema.org/equal">;
    /** This ordering relation for qualitative values indicates that the subject is greater than the object. */
    "https://schema.org/greater"?: SchemaValue<QualitativeValue | IdReference, "https://schema.org/greater">;
    /** This ordering relation for qualitative values indicates that the subject is greater than or equal to the object. */
    "https://schema.org/greaterOrEqual"?: SchemaValue<QualitativeValue | IdReference, "https://schema.org/greaterOrEqual">;
    /** This ordering relation for qualitative values indicates that the subject is lesser than the object. */
    "https://schema.org/lesser"?: SchemaValue<QualitativeValue | IdReference, "https://schema.org/lesser">;
    /** This ordering relation for qualitative values indicates that the subject is lesser than or equal to the object. */
    "https://schema.org/lesserOrEqual"?: SchemaValue<QualitativeValue | IdReference, "https://schema.org/lesserOrEqual">;
    /** This ordering relation for qualitative values indicates that the subject is not equal to the object. */
    "https://schema.org/nonEqual"?: SchemaValue<QualitativeValue | IdReference, "https://schema.org/nonEqual">;
    /** A secondary value that provides additional information on the original value, e.g. a reference temperature or a type of measurement. */
    "https://schema.org/valueReference"?: SchemaValue<DefinedTerm | Enumeration | MeasurementTypeEnumeration | PropertyValue | QualitativeValue | QuantitativeValue | StructuredValue | Text | IdReference, "https://schema.org/valueReference">;
}
interface QualitativeValueLeaf extends QualitativeValueBase {
    "@type": "https://schema.org/QualitativeValue";
}
/** A predefined value for a product characteristic, e.g. the power cord plug type 'US' or the garment sizes 'S', 'M', 'L', and 'XL'. */
export declare type QualitativeValue = QualitativeValueLeaf | BedType | DriveWheelConfigurationValue | SizeSpecification | SteeringPositionValue;
interface QuantitativeValueBase extends ThingBase {
    /**
     * A property-value pair representing an additional characteristics of the entitity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.
     *
     * Note: Publishers should be aware that applications designed to use specific schema.org properties (e.g. https://schema.org/width, https://schema.org/color, https://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.
     */
    "https://schema.org/additionalProperty"?: SchemaValue<PropertyValue | IdReference, "https://schema.org/additionalProperty">;
    /** The upper value of some characteristic or property. */
    "https://schema.org/maxValue"?: SchemaValue<Number, "https://schema.org/maxValue">;
    /** The lower value of some characteristic or property. */
    "https://schema.org/minValue"?: SchemaValue<Number, "https://schema.org/minValue">;
    /** The unit of measurement given using the UN/CEFACT Common Code (3 characters) or a URL. Other codes than the UN/CEFACT Common Code may be used with a prefix followed by a colon. */
    "https://schema.org/unitCode"?: SchemaValue<Text | URL, "https://schema.org/unitCode">;
    /** A string or text indicating the unit of measurement. Useful if you cannot provide a standard unit code for {@link unitCode unitCode}. */
    "https://schema.org/unitText"?: SchemaValue<Text, "https://schema.org/unitText">;
    /**
     * The value of the quantitative value or property value node.
     * - For {@link https://schema.org/QuantitativeValue QuantitativeValue} and {@link https://schema.org/MonetaryAmount MonetaryAmount}, the recommended type for values is 'Number'.
     * - For {@link https://schema.org/PropertyValue PropertyValue}, it can be 'Text;', 'Number', 'Boolean', or 'StructuredValue'.
     * - Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.
     * - Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
     */
    "https://schema.org/value"?: SchemaValue<Boolean | Number | StructuredValue | Text | IdReference, "https://schema.org/value">;
    /** A secondary value that provides additional information on the original value, e.g. a reference temperature or a type of measurement. */
    "https://schema.org/valueReference"?: SchemaValue<DefinedTerm | Enumeration | MeasurementTypeEnumeration | PropertyValue | QualitativeValue | QuantitativeValue | StructuredValue | Text | IdReference, "https://schema.org/valueReference">;
}
interface QuantitativeValueLeaf extends QuantitativeValueBase {
    "@type": "https://schema.org/QuantitativeValue";
}
/** A point value or interval for product characteristics and other purposes. */
export declare type QuantitativeValue = QuantitativeValueLeaf;
interface QuantitativeValueDistributionBase extends ThingBase {
    /** The duration of the item (movie, audio recording, event, etc.) in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}. */
    "https://schema.org/duration"?: SchemaValue<Duration | IdReference, "https://schema.org/duration">;
    /** The median value. */
    "https://schema.org/median"?: SchemaValue<Number, "https://schema.org/median">;
    /** The 10th percentile value. */
    "https://schema.org/percentile10"?: SchemaValue<Number, "https://schema.org/percentile10">;
    /** The 25th percentile value. */
    "https://schema.org/percentile25"?: SchemaValue<Number, "https://schema.org/percentile25">;
    /** The 75th percentile value. */
    "https://schema.org/percentile75"?: SchemaValue<Number, "https://schema.org/percentile75">;
    /** The 90th percentile value. */
    "https://schema.org/percentile90"?: SchemaValue<Number, "https://schema.org/percentile90">;
}
interface QuantitativeValueDistributionLeaf extends QuantitativeValueDistributionBase {
    "@type": "https://schema.org/QuantitativeValueDistribution";
}
/** A statistical distribution of values. */
export declare type QuantitativeValueDistribution = QuantitativeValueDistributionLeaf | MonetaryAmountDistribution;
interface QuantityLeaf extends ThingBase {
    "@type": "https://schema.org/Quantity";
}
/** Quantities such as distance, time, mass, weight, etc. Particular instances of say Mass are entities like '3 Kg' or '4 milligrams'. */
export declare type Quantity = QuantityLeaf | Distance | Duration | Energy | Mass | string;
interface QuestionBase extends CommentBase {
    /** The answer(s) that has been accepted as best, typically on a Question/Answer site. Sites vary in their selection mechanisms, e.g. drawing on community opinion and/or the view of the Question author. */
    "https://schema.org/acceptedAnswer"?: SchemaValue<Answer | ItemList | IdReference, "https://schema.org/acceptedAnswer">;
    /** The number of answers this question has received. */
    "https://schema.org/answerCount"?: SchemaValue<Integer, "https://schema.org/answerCount">;
    /** For questions that are part of learning resources (e.g. Quiz), eduQuestionType indicates the format of question being given. Example: "Multiple choice", "Open ended", "Flashcard". */
    "https://schema.org/eduQuestionType"?: SchemaValue<Text, "https://schema.org/eduQuestionType">;
    /** An answer (possibly one of several, possibly incorrect) to a Question, e.g. on a Question/Answer site. */
    "https://schema.org/suggestedAnswer"?: SchemaValue<Answer | ItemList | IdReference, "https://schema.org/suggestedAnswer">;
}
interface QuestionLeaf extends QuestionBase {
    "@type": "https://schema.org/Question";
}
/** A specific question - e.g. from a user seeking answers online, or collected in a Frequently Asked Questions (FAQ) document. */
export declare type Question = QuestionLeaf;
interface QuizLeaf extends LearningResourceBase {
    "@type": "https://schema.org/Quiz";
}
/** Quiz: A test of knowledge, skills and abilities. */
export declare type Quiz = QuizLeaf;
interface QuotationBase extends CreativeWorkBase {
    /** The (e.g. fictional) character, Person or Organization to whom the quotation is attributed within the containing CreativeWork. */
    "https://schema.org/spokenByCharacter"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/spokenByCharacter">;
}
interface QuotationLeaf extends QuotationBase {
    "@type": "https://schema.org/Quotation";
}
/** A quotation. Often but not necessarily from some written work, attributable to a real world author and - if associated with a fictional character - to any fictional Person. Use {@link https://schema.org/isBasedOn isBasedOn} to link to source/origin. The {@link https://schema.org/recordedIn recordedIn} property can be used to reference a Quotation from an {@link https://schema.org/Event Event}. */
export declare type Quotation = QuotationLeaf;
interface QuoteActionLeaf extends TradeActionBase {
    "@type": "https://schema.org/QuoteAction";
}
/** An agent quotes/estimates/appraises an object/product/service with a price at a location/store. */
export declare type QuoteAction = QuoteActionLeaf;
interface RadiationTherapyLeaf extends MedicalTherapyBase {
    "@type": "https://schema.org/RadiationTherapy";
}
/** A process of care using radiation aimed at improving a health condition. */
export declare type RadiationTherapy = RadiationTherapyLeaf;
interface RadioBroadcastServiceLeaf extends BroadcastServiceBase {
    "@type": "https://schema.org/RadioBroadcastService";
}
/** A delivery service through which radio content is provided via broadcast over the air or online. */
export declare type RadioBroadcastService = RadioBroadcastServiceLeaf;
interface RadioChannelLeaf extends BroadcastChannelBase {
    "@type": "https://schema.org/RadioChannel";
}
/** A unique instance of a radio BroadcastService on a CableOrSatelliteService lineup. */
export declare type RadioChannel = RadioChannelLeaf | AMRadioChannel | FMRadioChannel;
interface RadioClipLeaf extends ClipBase {
    "@type": "https://schema.org/RadioClip";
}
/** A short radio program or a segment/part of a radio program. */
export declare type RadioClip = RadioClipLeaf;
interface RadioEpisodeLeaf extends EpisodeBase {
    "@type": "https://schema.org/RadioEpisode";
}
/** A radio episode which can be part of a series or season. */
export declare type RadioEpisode = RadioEpisodeLeaf;
interface RadioSeasonLeaf extends CreativeWorkSeasonBase {
    "@type": "https://schema.org/RadioSeason";
}
/** Season dedicated to radio broadcast and associated online delivery. */
export declare type RadioSeason = RadioSeasonLeaf;
interface RadioSeriesBase extends CreativeWorkSeriesBase {
    /** An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip. */
    "https://schema.org/actor"?: SchemaValue<Person | IdReference, "https://schema.org/actor">;
    /**
     * An actor, e.g. in tv, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip.
     *
     * @deprecated Consider using https://schema.org/actor instead.
     */
    "https://schema.org/actors"?: SchemaValue<Person | IdReference, "https://schema.org/actors">;
    /** A season that is part of the media series. */
    "https://schema.org/containsSeason"?: SchemaValue<CreativeWorkSeason | IdReference, "https://schema.org/containsSeason">;
    /** A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip. */
    "https://schema.org/director"?: SchemaValue<Person | IdReference, "https://schema.org/director">;
    /**
     * A director of e.g. tv, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip.
     *
     * @deprecated Consider using https://schema.org/director instead.
     */
    "https://schema.org/directors"?: SchemaValue<Person | IdReference, "https://schema.org/directors">;
    /** An episode of a tv, radio or game media within a series or season. */
    "https://schema.org/episode"?: SchemaValue<Episode | IdReference, "https://schema.org/episode">;
    /**
     * An episode of a TV/radio series or season.
     *
     * @deprecated Consider using https://schema.org/episode instead.
     */
    "https://schema.org/episodes"?: SchemaValue<Episode | IdReference, "https://schema.org/episodes">;
    /** The composer of the soundtrack. */
    "https://schema.org/musicBy"?: SchemaValue<MusicGroup | Person | IdReference, "https://schema.org/musicBy">;
    /** The number of episodes in this season or series. */
    "https://schema.org/numberOfEpisodes"?: SchemaValue<Integer, "https://schema.org/numberOfEpisodes">;
    /** The number of seasons in this series. */
    "https://schema.org/numberOfSeasons"?: SchemaValue<Integer, "https://schema.org/numberOfSeasons">;
    /** The production company or studio responsible for the item e.g. series, video game, episode etc. */
    "https://schema.org/productionCompany"?: SchemaValue<Organization | IdReference, "https://schema.org/productionCompany">;
    /**
     * A season in a media series.
     *
     * @deprecated Consider using https://schema.org/containsSeason instead.
     */
    "https://schema.org/season"?: SchemaValue<CreativeWorkSeason | URL | IdReference, "https://schema.org/season">;
    /**
     * A season in a media series.
     *
     * @deprecated Consider using https://schema.org/season instead.
     */
    "https://schema.org/seasons"?: SchemaValue<CreativeWorkSeason | IdReference, "https://schema.org/seasons">;
    /** The trailer of a movie or tv/radio series, season, episode, etc. */
    "https://schema.org/trailer"?: SchemaValue<VideoObject | IdReference, "https://schema.org/trailer">;
}
interface RadioSeriesLeaf extends RadioSeriesBase {
    "@type": "https://schema.org/RadioSeries";
}
/** CreativeWorkSeries dedicated to radio broadcast and associated online delivery. */
export declare type RadioSeries = RadioSeriesLeaf;
interface RadioStationLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/RadioStation";
}
/** A radio station. */
export declare type RadioStation = RadioStationLeaf | string;
interface RatingBase extends ThingBase {
    /** The author of this content or rating. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably. */
    "https://schema.org/author"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/author">;
    /** The highest value allowed in this rating system. If bestRating is omitted, 5 is assumed. */
    "https://schema.org/bestRating"?: SchemaValue<Number | Text, "https://schema.org/bestRating">;
    /** A short explanation (e.g. one to two sentences) providing background context and other information that led to the conclusion expressed in the rating. This is particularly applicable to ratings associated with "fact check" markup using {@link https://schema.org/ClaimReview ClaimReview}. */
    "https://schema.org/ratingExplanation"?: SchemaValue<Text, "https://schema.org/ratingExplanation">;
    /**
     * The rating for the content.
     *
     * Usage guidelines:
     * - Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.
     * - Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
     */
    "https://schema.org/ratingValue"?: SchemaValue<Number | Text, "https://schema.org/ratingValue">;
    /** This Review or Rating is relevant to this part or facet of the itemReviewed. */
    "https://schema.org/reviewAspect"?: SchemaValue<Text, "https://schema.org/reviewAspect">;
    /** The lowest value allowed in this rating system. If worstRating is omitted, 1 is assumed. */
    "https://schema.org/worstRating"?: SchemaValue<Number | Text, "https://schema.org/worstRating">;
}
interface RatingLeaf extends RatingBase {
    "@type": "https://schema.org/Rating";
}
/** A rating is an evaluation on a numeric scale, such as 1 to 5 stars. */
export declare type Rating = RatingLeaf | AggregateRating | EndorsementRating;
interface ReactActionLeaf extends ActionBase {
    "@type": "https://schema.org/ReactAction";
}
/** The act of responding instinctively and emotionally to an object, expressing a sentiment. */
export declare type ReactAction = ReactActionLeaf | AgreeAction | DisagreeAction | DislikeAction | EndorseAction | LikeAction | WantAction;
interface ReadActionLeaf extends ConsumeActionBase {
    "@type": "https://schema.org/ReadAction";
}
/** The act of consuming written content. */
export declare type ReadAction = ReadActionLeaf;
interface RealEstateAgentLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/RealEstateAgent";
}
/** A real-estate agent. */
export declare type RealEstateAgent = RealEstateAgentLeaf | string;
interface RealEstateListingBase extends WebPageBase {
    /** Publication date of an online listing. */
    "https://schema.org/datePosted"?: SchemaValue<Date | DateTime, "https://schema.org/datePosted">;
    /** Length of the lease for some {@link https://schema.org/Accommodation Accommodation}, either particular to some {@link https://schema.org/Offer Offer} or in some cases intrinsic to the property. */
    "https://schema.org/leaseLength"?: SchemaValue<Duration | QuantitativeValue | IdReference, "https://schema.org/leaseLength">;
}
interface RealEstateListingLeaf extends RealEstateListingBase {
    "@type": "https://schema.org/RealEstateListing";
}
/** A {@link https://schema.org/RealEstateListing RealEstateListing} is a listing that describes one or more real-estate {@link https://schema.org/Offer Offer}s (whose {@link https://schema.org/businessFunction businessFunction} is typically to lease out, or to sell). The {@link https://schema.org/RealEstateListing RealEstateListing} type itself represents the overall listing, as manifested in some {@link https://schema.org/WebPage WebPage}. */
export declare type RealEstateListing = RealEstateListingLeaf;
interface ReceiveActionBase extends TransferActionBase {
    /** A sub property of instrument. The method of delivery. */
    "https://schema.org/deliveryMethod"?: SchemaValue<DeliveryMethod | IdReference, "https://schema.org/deliveryMethod">;
    /** A sub property of participant. The participant who is at the sending end of the action. */
    "https://schema.org/sender"?: SchemaValue<Audience | Organization | Person | IdReference, "https://schema.org/sender">;
}
interface ReceiveActionLeaf extends ReceiveActionBase {
    "@type": "https://schema.org/ReceiveAction";
}
/**
 * The act of physically/electronically taking delivery of an object that has been transferred from an origin to a destination. Reciprocal of SendAction.
 *
 * Related actions:
 * - {@link https://schema.org/SendAction SendAction}: The reciprocal of ReceiveAction.
 * - {@link https://schema.org/TakeAction TakeAction}: Unlike TakeAction, ReceiveAction does not imply that the ownership has been transfered (e.g. I can receive a package, but it does not mean the package is now mine).
 */
export declare type ReceiveAction = ReceiveActionLeaf;
interface RecipeBase extends HowToBase {
    /** The method of cooking, such as Frying, Steaming, ... */
    "https://schema.org/cookingMethod"?: SchemaValue<Text, "https://schema.org/cookingMethod">;
    /** The time it takes to actually cook the dish, in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 duration format}. */
    "https://schema.org/cookTime"?: SchemaValue<Duration | IdReference, "https://schema.org/cookTime">;
    /**
     * A single ingredient used in the recipe, e.g. sugar, flour or garlic.
     *
     * @deprecated Consider using https://schema.org/recipeIngredient instead.
     */
    "https://schema.org/ingredients"?: SchemaValue<Text, "https://schema.org/ingredients">;
    /** Nutrition information about the recipe or menu item. */
    "https://schema.org/nutrition"?: SchemaValue<NutritionInformation | IdReference, "https://schema.org/nutrition">;
    /** The category of the recipe—for example, appetizer, entree, etc. */
    "https://schema.org/recipeCategory"?: SchemaValue<Text, "https://schema.org/recipeCategory">;
    /** The cuisine of the recipe (for example, French or Ethiopian). */
    "https://schema.org/recipeCuisine"?: SchemaValue<Text, "https://schema.org/recipeCuisine">;
    /** A single ingredient used in the recipe, e.g. sugar, flour or garlic. */
    "https://schema.org/recipeIngredient"?: SchemaValue<Text, "https://schema.org/recipeIngredient">;
    /** A step in making the recipe, in the form of a single item (document, video, etc.) or an ordered list with HowToStep and/or HowToSection items. */
    "https://schema.org/recipeInstructions"?: SchemaValue<CreativeWork | ItemList | Text | IdReference, "https://schema.org/recipeInstructions">;
    /** The quantity produced by the recipe (for example, number of people served, number of servings, etc). */
    "https://schema.org/recipeYield"?: SchemaValue<QuantitativeValue | Text | IdReference, "https://schema.org/recipeYield">;
    /** Indicates a dietary restriction or guideline for which this recipe or menu item is suitable, e.g. diabetic, halal etc. */
    "https://schema.org/suitableForDiet"?: SchemaValue<RestrictedDiet | IdReference, "https://schema.org/suitableForDiet">;
}
interface RecipeLeaf extends RecipeBase {
    "@type": "https://schema.org/Recipe";
}
/** A recipe. For dietary restrictions covered by the recipe, a few common restrictions are enumerated via {@link https://schema.org/suitableForDiet suitableForDiet}. The {@link https://schema.org/keywords keywords} property can also be used to add more detail. */
export declare type Recipe = RecipeLeaf;
interface RecommendationBase extends ReviewBase {
    /** A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy. */
    "https://schema.org/category"?: SchemaValue<PhysicalActivityCategory | Text | Thing | URL | IdReference, "https://schema.org/category">;
}
interface RecommendationLeaf extends RecommendationBase {
    "@type": "https://schema.org/Recommendation";
}
/** {@link https://schema.org/Recommendation Recommendation} is a type of {@link https://schema.org/Review Review} that suggests or proposes something as the best option or best course of action. Recommendations may be for products or services, or other concrete things, as in the case of a ranked list or product guide. A {@link https://schema.org/Guide Guide} may list multiple recommendations for different categories. For example, in a {@link https://schema.org/Guide Guide} about which TVs to buy, the author may have several {@link https://schema.org/Recommendation Recommendation}s. */
export declare type Recommendation = RecommendationLeaf;
interface RecommendedDoseScheduleLeaf extends DoseScheduleBase {
    "@type": "https://schema.org/RecommendedDoseSchedule";
}
/** A recommended dosing schedule for a drug or supplement as prescribed or recommended by an authority or by the drug/supplement's manufacturer. Capture the recommending authority in the recognizingAuthority property of MedicalEntity. */
export declare type RecommendedDoseSchedule = RecommendedDoseScheduleLeaf;
interface RecyclingCenterLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/RecyclingCenter";
}
/** A recycling center. */
export declare type RecyclingCenter = RecyclingCenterLeaf | string;
interface RefundTypeEnumerationLeaf extends EnumerationBase {
    "@type": "https://schema.org/RefundTypeEnumeration";
}
/** Enumerates several kinds of product return refund types. */
export declare type RefundTypeEnumeration = "https://schema.org/ExchangeRefund" | "https://schema.org/FullRefund" | "https://schema.org/StoreCreditRefund" | RefundTypeEnumerationLeaf;
interface RegisterActionLeaf extends ActionBase {
    "@type": "https://schema.org/RegisterAction";
}
/**
 * The act of registering to be a user of a service, product or web page.
 *
 * Related actions:
 * - {@link https://schema.org/JoinAction JoinAction}: Unlike JoinAction, RegisterAction implies you are registering to be a user of a service, _not_ a group/team of people.
 * - [FollowAction]]: Unlike FollowAction, RegisterAction doesn't imply that the agent is expecting to poll for updates from the object.
 * - {@link https://schema.org/SubscribeAction SubscribeAction}: Unlike SubscribeAction, RegisterAction doesn't imply that the agent is expecting updates from the object.
 */
export declare type RegisterAction = RegisterActionLeaf;
interface RejectActionLeaf extends ActionBase {
    "@type": "https://schema.org/RejectAction";
}
/**
 * The act of rejecting to/adopting an object.
 *
 * Related actions:
 * - {@link https://schema.org/AcceptAction AcceptAction}: The antonym of RejectAction.
 */
export declare type RejectAction = RejectActionLeaf;
interface RentActionBase extends TradeActionBase {
    /** A sub property of participant. The owner of the real estate property. */
    "https://schema.org/landlord"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/landlord">;
    /** A sub property of participant. The real estate agent involved in the action. */
    "https://schema.org/realEstateAgent"?: SchemaValue<RealEstateAgent | IdReference, "https://schema.org/realEstateAgent">;
}
interface RentActionLeaf extends RentActionBase {
    "@type": "https://schema.org/RentAction";
}
/** The act of giving money in return for temporary use, but not ownership, of an object such as a vehicle or property. For example, an agent rents a property from a landlord in exchange for a periodic payment. */
export declare type RentAction = RentActionLeaf;
interface RentalCarReservationBase extends ReservationBase {
    /** Where a rental car can be dropped off. */
    "https://schema.org/dropoffLocation"?: SchemaValue<Place | IdReference, "https://schema.org/dropoffLocation">;
    /** When a rental car can be dropped off. */
    "https://schema.org/dropoffTime"?: SchemaValue<DateTime, "https://schema.org/dropoffTime">;
    /** Where a taxi will pick up a passenger or a rental car can be picked up. */
    "https://schema.org/pickupLocation"?: SchemaValue<Place | IdReference, "https://schema.org/pickupLocation">;
    /** When a taxi will pickup a passenger or a rental car can be picked up. */
    "https://schema.org/pickupTime"?: SchemaValue<DateTime, "https://schema.org/pickupTime">;
}
interface RentalCarReservationLeaf extends RentalCarReservationBase {
    "@type": "https://schema.org/RentalCarReservation";
}
/**
 * A reservation for a rental car.
 *
 * Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations.
 */
export declare type RentalCarReservation = RentalCarReservationLeaf;
interface RepaymentSpecificationBase extends ThingBase {
    /** a type of payment made in cash during the onset of the purchase of an expensive good/service. The payment typically represents only a percentage of the full purchase price. */
    "https://schema.org/downPayment"?: SchemaValue<MonetaryAmount | Number | IdReference, "https://schema.org/downPayment">;
    /** The amount to be paid as a penalty in the event of early payment of the loan. */
    "https://schema.org/earlyPrepaymentPenalty"?: SchemaValue<MonetaryAmount | IdReference, "https://schema.org/earlyPrepaymentPenalty">;
    /** The amount of money to pay in a single payment. */
    "https://schema.org/loanPaymentAmount"?: SchemaValue<MonetaryAmount | IdReference, "https://schema.org/loanPaymentAmount">;
    /** Frequency of payments due, i.e. number of months between payments. This is defined as a frequency, i.e. the reciprocal of a period of time. */
    "https://schema.org/loanPaymentFrequency"?: SchemaValue<Number, "https://schema.org/loanPaymentFrequency">;
    /** The number of payments contractually required at origination to repay the loan. For monthly paying loans this is the number of months from the contractual first payment date to the maturity date. */
    "https://schema.org/numberOfLoanPayments"?: SchemaValue<Number, "https://schema.org/numberOfLoanPayments">;
}
interface RepaymentSpecificationLeaf extends RepaymentSpecificationBase {
    "@type": "https://schema.org/RepaymentSpecification";
}
/** A structured value representing repayment. */
export declare type RepaymentSpecification = RepaymentSpecificationLeaf;
interface ReplaceActionBase extends UpdateActionBase {
    /** A sub property of object. The object that is being replaced. */
    "https://schema.org/replacee"?: SchemaValue<Thing | IdReference, "https://schema.org/replacee">;
    /** A sub property of object. The object that replaces. */
    "https://schema.org/replacer"?: SchemaValue<Thing | IdReference, "https://schema.org/replacer">;
}
interface ReplaceActionLeaf extends ReplaceActionBase {
    "@type": "https://schema.org/ReplaceAction";
}
/** The act of editing a recipient by replacing an old object with a new object. */
export declare type ReplaceAction = ReplaceActionLeaf;
interface ReplyActionBase extends CommunicateActionBase {
    /** A sub property of result. The Comment created or sent as a result of this action. */
    "https://schema.org/resultComment"?: SchemaValue<Comment | IdReference, "https://schema.org/resultComment">;
}
interface ReplyActionLeaf extends ReplyActionBase {
    "@type": "https://schema.org/ReplyAction";
}
/**
 * The act of responding to a question/message asked/sent by the object. Related to {@link https://schema.org/AskAction AskAction}
 *
 * Related actions:
 * - {@link https://schema.org/AskAction AskAction}: Appears generally as an origin of a ReplyAction.
 */
export declare type ReplyAction = ReplyActionLeaf;
interface ReportBase extends ArticleBase {
    /** The number or other unique designator assigned to a Report by the publishing organization. */
    "https://schema.org/reportNumber"?: SchemaValue<Text, "https://schema.org/reportNumber">;
}
interface ReportLeaf extends ReportBase {
    "@type": "https://schema.org/Report";
}
/** A Report generated by governmental or non-governmental organization. */
export declare type Report = ReportLeaf;
interface ReportageNewsArticleLeaf extends NewsArticleBase {
    "@type": "https://schema.org/ReportageNewsArticle";
}
/**
 * The {@link https://schema.org/ReportageNewsArticle ReportageNewsArticle} type is a subtype of {@link https://schema.org/NewsArticle NewsArticle} representing news articles which are the result of journalistic news reporting conventions.
 *
 * In practice many news publishers produce a wide variety of article types, many of which might be considered a {@link https://schema.org/NewsArticle NewsArticle} but not a {@link https://schema.org/ReportageNewsArticle ReportageNewsArticle}. For example, opinion pieces, reviews, analysis, sponsored or satirical articles, or articles that combine several of these elements.
 *
 * The {@link https://schema.org/ReportageNewsArticle ReportageNewsArticle} type is based on a stricter ideal for "news" as a work of journalism, with articles based on factual information either observed or verified by the author, or reported and verified from knowledgeable sources. This often includes perspectives from multiple viewpoints on a particular issue (distinguishing news reports from public relations or propaganda). News reports in the {@link https://schema.org/ReportageNewsArticle ReportageNewsArticle} sense de-emphasize the opinion of the author, with commentary and value judgements typically expressed elsewhere.
 *
 * A {@link https://schema.org/ReportageNewsArticle ReportageNewsArticle} which goes deeper into analysis can also be marked with an additional type of {@link https://schema.org/AnalysisNewsArticle AnalysisNewsArticle}.
 */
export declare type ReportageNewsArticle = ReportageNewsArticleLeaf;
interface ReportedDoseScheduleLeaf extends DoseScheduleBase {
    "@type": "https://schema.org/ReportedDoseSchedule";
}
/** A patient-reported or observed dosing schedule for a drug or supplement. */
export declare type ReportedDoseSchedule = ReportedDoseScheduleLeaf;
interface ResearcherLeaf extends AudienceBase {
    "@type": "https://schema.org/Researcher";
}
/** Researchers. */
export declare type Researcher = ResearcherLeaf;
interface ResearchOrganizationLeaf extends OrganizationBase {
    "@type": "https://schema.org/ResearchOrganization";
}
/** A Research Organization (e.g. scientific institute, research company). */
export declare type ResearchOrganization = ResearchOrganizationLeaf | string;
interface ResearchProjectLeaf extends OrganizationBase {
    "@type": "https://schema.org/ResearchProject";
}
/** A Research project. */
export declare type ResearchProject = ResearchProjectLeaf | string;
interface ReservationBase extends ThingBase {
    /**
     * 'bookingAgent' is an out-dated term indicating a 'broker' that serves as a booking agent.
     *
     * @deprecated Consider using https://schema.org/broker instead.
     */
    "https://schema.org/bookingAgent"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/bookingAgent">;
    /** The date and time the reservation was booked. */
    "https://schema.org/bookingTime"?: SchemaValue<DateTime, "https://schema.org/bookingTime">;
    /** An entity that arranges for an exchange between a buyer and a seller. In most cases a broker never acquires or releases ownership of a product or service involved in an exchange. If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred. */
    "https://schema.org/broker"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/broker">;
    /** The date and time the reservation was modified. */
    "https://schema.org/modifiedTime"?: SchemaValue<DateTime, "https://schema.org/modifiedTime">;
    /**
     * The currency of the price, or a price component when attached to {@link https://schema.org/PriceSpecification PriceSpecification} and its subtypes.
     *
     * Use standard formats: {@link http://en.wikipedia.org/wiki/ISO_4217 ISO 4217 currency format} e.g. "USD"; {@link https://en.wikipedia.org/wiki/List_of_cryptocurrencies Ticker symbol} for cryptocurrencies e.g. "BTC"; well known names for {@link https://en.wikipedia.org/wiki/Local_exchange_trading_system Local Exchange Tradings Systems} (LETS) and other currency types e.g. "Ithaca HOUR".
     */
    "https://schema.org/priceCurrency"?: SchemaValue<Text, "https://schema.org/priceCurrency">;
    /** Any membership in a frequent flyer, hotel loyalty program, etc. being applied to the reservation. */
    "https://schema.org/programMembershipUsed"?: SchemaValue<ProgramMembership | IdReference, "https://schema.org/programMembershipUsed">;
    /** The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller. */
    "https://schema.org/provider"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/provider">;
    /** The thing -- flight, event, restaurant,etc. being reserved. */
    "https://schema.org/reservationFor"?: SchemaValue<Thing | IdReference, "https://schema.org/reservationFor">;
    /** A unique identifier for the reservation. */
    "https://schema.org/reservationId"?: SchemaValue<Text, "https://schema.org/reservationId">;
    /** The current status of the reservation. */
    "https://schema.org/reservationStatus"?: SchemaValue<ReservationStatusType | IdReference, "https://schema.org/reservationStatus">;
    /** A ticket associated with the reservation. */
    "https://schema.org/reservedTicket"?: SchemaValue<Ticket | IdReference, "https://schema.org/reservedTicket">;
    /**
     * The total price for the reservation or ticket, including applicable taxes, shipping, etc.
     *
     * Usage guidelines:
     * - Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.
     * - Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
     */
    "https://schema.org/totalPrice"?: SchemaValue<Number | PriceSpecification | Text | IdReference, "https://schema.org/totalPrice">;
    /** The person or organization the reservation or ticket is for. */
    "https://schema.org/underName"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/underName">;
}
interface ReservationLeaf extends ReservationBase {
    "@type": "https://schema.org/Reservation";
}
/**
 * Describes a reservation for travel, dining or an event. Some reservations require tickets.
 *
 * Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, restaurant reservations, flights, or rental cars, use {@link https://schema.org/Offer Offer}.
 */
export declare type Reservation = ReservationLeaf | BoatReservation | BusReservation | EventReservation | FlightReservation | FoodEstablishmentReservation | LodgingReservation | RentalCarReservation | ReservationPackage | TaxiReservation | TrainReservation;
interface ReservationPackageBase extends ReservationBase {
    /** The individual reservations included in the package. Typically a repeated property. */
    "https://schema.org/subReservation"?: SchemaValue<Reservation | IdReference, "https://schema.org/subReservation">;
}
interface ReservationPackageLeaf extends ReservationPackageBase {
    "@type": "https://schema.org/ReservationPackage";
}
/** A group of multiple reservations with common values for all sub-reservations. */
export declare type ReservationPackage = ReservationPackageLeaf;
interface ReservationStatusTypeLeaf extends EnumerationBase {
    "@type": "https://schema.org/ReservationStatusType";
}
/** Enumerated status values for Reservation. */
export declare type ReservationStatusType = "https://schema.org/ReservationCancelled" | "https://schema.org/ReservationConfirmed" | "https://schema.org/ReservationHold" | "https://schema.org/ReservationPending" | ReservationStatusTypeLeaf;
interface ReserveActionLeaf extends PlanActionBase {
    "@type": "https://schema.org/ReserveAction";
}
/**
 * Reserving a concrete object.
 *
 * Related actions:
 * - {@link https://schema.org/ScheduleAction ScheduleAction}: Unlike ScheduleAction, ReserveAction reserves concrete objects (e.g. a table, a hotel) towards a time slot / spatial allocation.
 */
export declare type ReserveAction = ReserveActionLeaf;
interface ReservoirLeaf extends PlaceBase {
    "@type": "https://schema.org/Reservoir";
}
/** A reservoir of water, typically an artificially created lake, like the Lake Kariba reservoir. */
export declare type Reservoir = ReservoirLeaf | string;
interface ResidenceBase extends PlaceBase {
    /** A floorplan of some {@link https://schema.org/Accommodation Accommodation}. */
    "https://schema.org/accommodationFloorPlan"?: SchemaValue<FloorPlan | IdReference, "https://schema.org/accommodationFloorPlan">;
}
interface ResidenceLeaf extends ResidenceBase {
    "@type": "https://schema.org/Residence";
}
/** The place where a person lives. */
export declare type Residence = ResidenceLeaf | ApartmentComplex | GatedResidenceCommunity | string;
interface ResortLeaf extends LodgingBusinessBase {
    "@type": "https://schema.org/Resort";
}
/**
 * A resort is a place used for relaxation or recreation, attracting visitors for holidays or vacations. Resorts are places, towns or sometimes commercial establishment operated by a single company (Source: Wikipedia, the free encyclopedia, see {@link http://en.wikipedia.org/wiki/Resort http://en.wikipedia.org/wiki/Resort}).
 *
 * See also the {@link /docs/hotels.html dedicated document on the use of schema.org for marking up hotels and other forms of accommodations}.
 */
export declare type Resort = ResortLeaf | SkiResort | string;
interface RestaurantLeaf extends FoodEstablishmentBase {
    "@type": "https://schema.org/Restaurant";
}
/** A restaurant. */
export declare type Restaurant = RestaurantLeaf | string;
interface RestrictedDietLeaf extends EnumerationBase {
    "@type": "https://schema.org/RestrictedDiet";
}
/** A diet restricted to certain foods or preparations for cultural, religious, health or lifestyle reasons. */
export declare type RestrictedDiet = "https://schema.org/DiabeticDiet" | "https://schema.org/GlutenFreeDiet" | "https://schema.org/HalalDiet" | "https://schema.org/HinduDiet" | "https://schema.org/KosherDiet" | "https://schema.org/LowCalorieDiet" | "https://schema.org/LowFatDiet" | "https://schema.org/LowLactoseDiet" | "https://schema.org/LowSaltDiet" | "https://schema.org/VeganDiet" | "https://schema.org/VegetarianDiet" | RestrictedDietLeaf;
interface ResumeActionLeaf extends ActionBase {
    "@type": "https://schema.org/ResumeAction";
}
/** The act of resuming a device or application which was formerly paused (e.g. resume music playback or resume a timer). */
export declare type ResumeAction = ResumeActionLeaf;
interface ReturnActionBase extends TransferActionBase {
    /** A sub property of participant. The participant who is at the receiving end of the action. */
    "https://schema.org/recipient"?: SchemaValue<Audience | ContactPoint | Organization | Person | IdReference, "https://schema.org/recipient">;
}
interface ReturnActionLeaf extends ReturnActionBase {
    "@type": "https://schema.org/ReturnAction";
}
/** The act of returning to the origin that which was previously received (concrete objects) or taken (ownership). */
export declare type ReturnAction = ReturnActionLeaf;
interface ReturnFeesEnumerationLeaf extends EnumerationBase {
    "@type": "https://schema.org/ReturnFeesEnumeration";
}
/** Enumerates several kinds of policies for product return fees. */
export declare type ReturnFeesEnumeration = "https://schema.org/FreeReturn" | "https://schema.org/OriginalShippingFees" | "https://schema.org/RestockingFees" | "https://schema.org/ReturnFeesCustomerResponsibility" | "https://schema.org/ReturnShippingFees" | ReturnFeesEnumerationLeaf;
interface ReturnLabelSourceEnumerationLeaf extends EnumerationBase {
    "@type": "https://schema.org/ReturnLabelSourceEnumeration";
}
/** Enumerates several types of return labels for product returns. */
export declare type ReturnLabelSourceEnumeration = "https://schema.org/ReturnLabelCustomerResponsibility" | "https://schema.org/ReturnLabelDownloadAndPrint" | "https://schema.org/ReturnLabelInBox" | ReturnLabelSourceEnumerationLeaf;
interface ReturnMethodEnumerationLeaf extends EnumerationBase {
    "@type": "https://schema.org/ReturnMethodEnumeration";
}
/** Enumerates several types of product return methods. */
export declare type ReturnMethodEnumeration = "https://schema.org/ReturnAtKiosk" | "https://schema.org/ReturnByMail" | "https://schema.org/ReturnInStore" | ReturnMethodEnumerationLeaf;
interface ReviewBase extends CreativeWorkBase {
    /** An associated {@link https://schema.org/ClaimReview ClaimReview}, related by specific common content, topic or claim. The expectation is that this property would be most typically used in cases where a single activity is conducting both claim reviews and media reviews, in which case {@link https://schema.org/relatedMediaReview relatedMediaReview} would commonly be used on a {@link https://schema.org/ClaimReview ClaimReview}, while {@link https://schema.org/relatedClaimReview relatedClaimReview} would be used on {@link https://schema.org/MediaReview MediaReview}. */
    "https://schema.org/associatedClaimReview"?: SchemaValue<Review | IdReference, "https://schema.org/associatedClaimReview">;
    /** An associated {@link https://schema.org/MediaReview MediaReview}, related by specific common content, topic or claim. The expectation is that this property would be most typically used in cases where a single activity is conducting both claim reviews and media reviews, in which case {@link https://schema.org/relatedMediaReview relatedMediaReview} would commonly be used on a {@link https://schema.org/ClaimReview ClaimReview}, while {@link https://schema.org/relatedClaimReview relatedClaimReview} would be used on {@link https://schema.org/MediaReview MediaReview}. */
    "https://schema.org/associatedMediaReview"?: SchemaValue<Review | IdReference, "https://schema.org/associatedMediaReview">;
    /** An associated {@link https://schema.org/Review Review}. */
    "https://schema.org/associatedReview"?: SchemaValue<Review | IdReference, "https://schema.org/associatedReview">;
    /** The item that is being reviewed/rated. */
    "https://schema.org/itemReviewed"?: SchemaValue<Thing | IdReference, "https://schema.org/itemReviewed">;
    /** Indicates, in the context of a {@link https://schema.org/Review Review} (e.g. framed as 'pro' vs 'con' considerations), negative considerations - either as unstructured text, or a list. */
    "https://schema.org/negativeNotes"?: SchemaValue<ItemList | ListItem | Text | WebContent | IdReference, "https://schema.org/negativeNotes">;
    /** Indicates, in the context of a {@link https://schema.org/Review Review} (e.g. framed as 'pro' vs 'con' considerations), positive considerations - either as unstructured text, or a list. */
    "https://schema.org/positiveNotes"?: SchemaValue<ItemList | ListItem | Text | WebContent | IdReference, "https://schema.org/positiveNotes">;
    /** This Review or Rating is relevant to this part or facet of the itemReviewed. */
    "https://schema.org/reviewAspect"?: SchemaValue<Text, "https://schema.org/reviewAspect">;
    /** The actual body of the review. */
    "https://schema.org/reviewBody"?: SchemaValue<Text, "https://schema.org/reviewBody">;
    /** The rating given in this review. Note that reviews can themselves be rated. The `reviewRating` applies to rating given by the review. The {@link https://schema.org/aggregateRating aggregateRating} property applies to the review itself, as a creative work. */
    "https://schema.org/reviewRating"?: SchemaValue<Rating | IdReference, "https://schema.org/reviewRating">;
}
interface ReviewLeaf extends ReviewBase {
    "@type": "https://schema.org/Review";
}
/** A review of an item - for example, of a restaurant, movie, or store. */
export declare type Review = ReviewLeaf | ClaimReview | CriticReview | EmployerReview | MediaReview | Recommendation | UserReview;
interface ReviewActionBase extends ActionBase {
    /** A sub property of result. The review that resulted in the performing of the action. */
    "https://schema.org/resultReview"?: SchemaValue<Review | IdReference, "https://schema.org/resultReview">;
}
interface ReviewActionLeaf extends ReviewActionBase {
    "@type": "https://schema.org/ReviewAction";
}
/** The act of producing a balanced opinion about the object for an audience. An agent reviews an object with participants resulting in a review. */
export declare type ReviewAction = ReviewActionLeaf;
interface ReviewNewsArticleBase extends NewsArticleBase, ReviewBase {
}
interface ReviewNewsArticleLeaf extends ReviewNewsArticleBase {
    "@type": "https://schema.org/ReviewNewsArticle";
}
/** A {@link https://schema.org/NewsArticle NewsArticle} and {@link https://schema.org/CriticReview CriticReview} providing a professional critic's assessment of a service, product, performance, or artistic or literary work. */
export declare type ReviewNewsArticle = ReviewNewsArticleLeaf;
interface RiverBodyOfWaterLeaf extends PlaceBase {
    "@type": "https://schema.org/RiverBodyOfWater";
}
/** A river (for example, the broad majestic Shannon). */
export declare type RiverBodyOfWater = RiverBodyOfWaterLeaf | string;
interface RoofingContractorLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/RoofingContractor";
}
/** A roofing contractor. */
export declare type RoofingContractor = RoofingContractorLeaf | string;
interface RoomLeaf extends AccommodationBase {
    "@type": "https://schema.org/Room";
}
/**
 * A room is a distinguishable space within a structure, usually separated from other spaces by interior walls. (Source: Wikipedia, the free encyclopedia, see {@link http://en.wikipedia.org/wiki/Room http://en.wikipedia.org/wiki/Room}).
 *
 * See also the {@link /docs/hotels.html dedicated document on the use of schema.org for marking up hotels and other forms of accommodations}.
 */
export declare type Room = RoomLeaf | HotelRoom | MeetingRoom | string;
interface RsvpActionBase extends InformActionBase {
    /** If responding yes, the number of guests who will attend in addition to the invitee. */
    "https://schema.org/additionalNumberOfGuests"?: SchemaValue<Number, "https://schema.org/additionalNumberOfGuests">;
    /** Comments, typically from users. */
    "https://schema.org/comment"?: SchemaValue<Comment | IdReference, "https://schema.org/comment">;
    /** The response (yes, no, maybe) to the RSVP. */
    "https://schema.org/rsvpResponse"?: SchemaValue<RsvpResponseType | IdReference, "https://schema.org/rsvpResponse">;
}
interface RsvpActionLeaf extends RsvpActionBase {
    "@type": "https://schema.org/RsvpAction";
}
/** The act of notifying an event organizer as to whether you expect to attend the event. */
export declare type RsvpAction = RsvpActionLeaf;
interface RsvpResponseTypeLeaf extends EnumerationBase {
    "@type": "https://schema.org/RsvpResponseType";
}
/** RsvpResponseType is an enumeration type whose instances represent responding to an RSVP request. */
export declare type RsvpResponseType = "https://schema.org/RsvpResponseMaybe" | "https://schema.org/RsvpResponseNo" | "https://schema.org/RsvpResponseYes" | RsvpResponseTypeLeaf;
interface RVParkLeaf extends CivicStructureBase {
    "@type": "https://schema.org/RVPark";
}
/** A place offering space for "Recreational Vehicles", Caravans, mobile homes and the like. */
export declare type RVPark = RVParkLeaf | string;
interface SaleEventLeaf extends EventBase {
    "@type": "https://schema.org/SaleEvent";
}
/** Event type: Sales event. */
export declare type SaleEvent = SaleEventLeaf;
interface SatiricalArticleLeaf extends ArticleBase {
    "@type": "https://schema.org/SatiricalArticle";
}
/** An {@link https://schema.org/Article Article} whose content is primarily {@link https://schema.org/satirical satirical}(https://en.wikipedia.org/wiki/Satire) in nature, i.e. unlikely to be literally true. A satirical article is sometimes but not necessarily also a {@link https://schema.org/NewsArticle NewsArticle}. {@link https://schema.org/ScholarlyArticle ScholarlyArticle}s are also sometimes satirized. */
export declare type SatiricalArticle = SatiricalArticleLeaf;
interface ScheduleBase extends ThingBase {
    /** Defines the day(s) of the week on which a recurring {@link https://schema.org/Event Event} takes place. May be specified using either {@link https://schema.org/DayOfWeek DayOfWeek}, or alternatively {@link https://schema.org/Text Text} conforming to iCal's syntax for byDay recurrence rules. */
    "https://schema.org/byDay"?: SchemaValue<DayOfWeek | Text | IdReference, "https://schema.org/byDay">;
    /** Defines the month(s) of the year on which a recurring {@link https://schema.org/Event Event} takes place. Specified as an {@link https://schema.org/Integer Integer} between 1-12. January is 1. */
    "https://schema.org/byMonth"?: SchemaValue<Integer, "https://schema.org/byMonth">;
    /** Defines the day(s) of the month on which a recurring {@link https://schema.org/Event Event} takes place. Specified as an {@link https://schema.org/Integer Integer} between 1-31. */
    "https://schema.org/byMonthDay"?: SchemaValue<Integer, "https://schema.org/byMonthDay">;
    /** Defines the week(s) of the month on which a recurring Event takes place. Specified as an Integer between 1-5. For clarity, byMonthWeek is best used in conjunction with byDay to indicate concepts like the first and third Mondays of a month. */
    "https://schema.org/byMonthWeek"?: SchemaValue<Integer, "https://schema.org/byMonthWeek">;
    /** The duration of the item (movie, audio recording, event, etc.) in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}. */
    "https://schema.org/duration"?: SchemaValue<Duration | IdReference, "https://schema.org/duration">;
    /** The end date and time of the item (in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}). */
    "https://schema.org/endDate"?: SchemaValue<Date | DateTime, "https://schema.org/endDate">;
    /**
     * The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. e.g. John wrote a book from January to _December_. For media, including audio and video, it's the time offset of the end of a clip within a larger file.
     *
     * Note that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
     */
    "https://schema.org/endTime"?: SchemaValue<DateTime | Time, "https://schema.org/endTime">;
    /** Defines a {@link https://schema.org/Date Date} or {@link https://schema.org/DateTime DateTime} during which a scheduled {@link https://schema.org/Event Event} will not take place. The property allows exceptions to a {@link https://schema.org/Schedule Schedule} to be specified. If an exception is specified as a {@link https://schema.org/DateTime DateTime} then only the event that would have started at that specific date and time should be excluded from the schedule. If an exception is specified as a {@link https://schema.org/Date Date} then any event that is scheduled for that 24 hour period should be excluded from the schedule. This allows a whole day to be excluded from the schedule without having to itemise every scheduled event. */
    "https://schema.org/exceptDate"?: SchemaValue<Date | DateTime, "https://schema.org/exceptDate">;
    /** Defines the number of times a recurring {@link https://schema.org/Event Event} will take place */
    "https://schema.org/repeatCount"?: SchemaValue<Integer, "https://schema.org/repeatCount">;
    /** Defines the frequency at which {@link https://schema.org/Event Event}s will occur according to a schedule {@link https://schema.org/Schedule Schedule}. The intervals between events should be defined as a {@link https://schema.org/Duration Duration} of time. */
    "https://schema.org/repeatFrequency"?: SchemaValue<Duration | Text | IdReference, "https://schema.org/repeatFrequency">;
    /** Indicates the timezone for which the time(s) indicated in the {@link https://schema.org/Schedule Schedule} are given. The value provided should be among those listed in the IANA Time Zone Database. */
    "https://schema.org/scheduleTimezone"?: SchemaValue<Text, "https://schema.org/scheduleTimezone">;
    /** The start date and time of the item (in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}). */
    "https://schema.org/startDate"?: SchemaValue<Date | DateTime, "https://schema.org/startDate">;
    /**
     * The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. e.g. John wrote a book from _January_ to December. For media, including audio and video, it's the time offset of the start of a clip within a larger file.
     *
     * Note that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
     */
    "https://schema.org/startTime"?: SchemaValue<DateTime | Time, "https://schema.org/startTime">;
}
interface ScheduleLeaf extends ScheduleBase {
    "@type": "https://schema.org/Schedule";
}
/** A schedule defines a repeating time period used to describe a regularly occurring {@link https://schema.org/Event Event}. At a minimum a schedule will specify {@link https://schema.org/repeatFrequency repeatFrequency} which describes the interval between occurences of the event. Additional information can be provided to specify the schedule more precisely. This includes identifying the day(s) of the week or month when the recurring event will take place, in addition to its start and end time. Schedules may also have start and end dates to indicate when they are active, e.g. to define a limited calendar of events. */
export declare type Schedule = ScheduleLeaf;
interface ScheduleActionLeaf extends PlanActionBase {
    "@type": "https://schema.org/ScheduleAction";
}
/**
 * Scheduling future actions, events, or tasks.
 *
 * Related actions:
 * - {@link https://schema.org/ReserveAction ReserveAction}: Unlike ReserveAction, ScheduleAction allocates future actions (e.g. an event, a task, etc) towards a time slot / spatial allocation.
 */
export declare type ScheduleAction = ScheduleActionLeaf;
interface ScholarlyArticleLeaf extends ArticleBase {
    "@type": "https://schema.org/ScholarlyArticle";
}
/** A scholarly article. */
export declare type ScholarlyArticle = ScholarlyArticleLeaf | MedicalScholarlyArticle;
interface SchoolLeaf extends EducationalOrganizationBase {
    "@type": "https://schema.org/School";
}
/** A school. */
export declare type School = SchoolLeaf | string;
interface SchoolDistrictLeaf extends PlaceBase {
    "@type": "https://schema.org/SchoolDistrict";
}
/** A School District is an administrative area for the administration of schools. */
export declare type SchoolDistrict = SchoolDistrictLeaf | string;
interface ScreeningEventBase extends EventBase {
    /** Languages in which subtitles/captions are available, in {@link http://tools.ietf.org/html/bcp47 IETF BCP 47 standard format}. */
    "https://schema.org/subtitleLanguage"?: SchemaValue<Language | Text | IdReference, "https://schema.org/subtitleLanguage">;
    /** The type of screening or video broadcast used (e.g. IMAX, 3D, SD, HD, etc.). */
    "https://schema.org/videoFormat"?: SchemaValue<Text, "https://schema.org/videoFormat">;
    /** The movie presented during this event. */
    "https://schema.org/workPresented"?: SchemaValue<Movie | IdReference, "https://schema.org/workPresented">;
}
interface ScreeningEventLeaf extends ScreeningEventBase {
    "@type": "https://schema.org/ScreeningEvent";
}
/** A screening of a movie or other video. */
export declare type ScreeningEvent = ScreeningEventLeaf;
interface SculptureLeaf extends CreativeWorkBase {
    "@type": "https://schema.org/Sculpture";
}
/** A piece of sculpture. */
export declare type Sculpture = SculptureLeaf;
interface SeaBodyOfWaterLeaf extends PlaceBase {
    "@type": "https://schema.org/SeaBodyOfWater";
}
/** A sea (for example, the Caspian sea). */
export declare type SeaBodyOfWater = SeaBodyOfWaterLeaf | string;
interface SearchActionBase extends ActionBase {
    /** A sub property of instrument. The query used on this action. */
    "https://schema.org/query"?: SchemaValue<Text, "https://schema.org/query">;
}
interface SearchActionLeaf extends SearchActionBase {
    "@type": "https://schema.org/SearchAction";
}
/**
 * The act of searching for an object.
 *
 * Related actions:
 * - {@link https://schema.org/FindAction FindAction}: SearchAction generally leads to a FindAction, but not necessarily.
 */
export declare type SearchAction = SearchActionLeaf;
interface SearchResultsPageLeaf extends WebPageBase {
    "@type": "https://schema.org/SearchResultsPage";
}
/** Web page type: Search results page. */
export declare type SearchResultsPage = SearchResultsPageLeaf;
interface SeasonLeaf extends CreativeWorkBase {
    "@type": "https://schema.org/Season";
}
/**
 * A media season e.g. tv, radio, video game etc.
 *
 * @deprecated Use CreativeWorkSeason instead.
 */
export declare type Season = SeasonLeaf;
interface SeatBase extends ThingBase {
    /** The type/class of the seat. */
    "https://schema.org/seatingType"?: SchemaValue<QualitativeValue | Text | IdReference, "https://schema.org/seatingType">;
    /** The location of the reserved seat (e.g., 27). */
    "https://schema.org/seatNumber"?: SchemaValue<Text, "https://schema.org/seatNumber">;
    /** The row location of the reserved seat (e.g., B). */
    "https://schema.org/seatRow"?: SchemaValue<Text, "https://schema.org/seatRow">;
    /** The section location of the reserved seat (e.g. Orchestra). */
    "https://schema.org/seatSection"?: SchemaValue<Text, "https://schema.org/seatSection">;
}
interface SeatLeaf extends SeatBase {
    "@type": "https://schema.org/Seat";
}
/** Used to describe a seat, such as a reserved seat in an event reservation. */
export declare type Seat = SeatLeaf;
interface SeekToActionBase extends ActionBase {
    /** The start time of the clip expressed as the number of seconds from the beginning of the work. */
    "https://schema.org/startOffset"?: SchemaValue<HyperTocEntry | Number | IdReference, "https://schema.org/startOffset">;
}
interface SeekToActionLeaf extends SeekToActionBase {
    "@type": "https://schema.org/SeekToAction";
}
/** This is the {@link https://schema.org/Action Action} of navigating to a specific {@link https://schema.org/startOffset startOffset} timestamp within a {@link https://schema.org/VideoObject VideoObject}, typically represented with a URL template structure. */
export declare type SeekToAction = SeekToActionLeaf;
interface SelfStorageLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/SelfStorage";
}
/** A self-storage facility. */
export declare type SelfStorage = SelfStorageLeaf | string;
interface SellActionBase extends TradeActionBase {
    /** A sub property of participant. The participant/person/organization that bought the object. */
    "https://schema.org/buyer"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/buyer">;
    /**
     * The warranty promise(s) included in the offer.
     *
     * @deprecated Consider using https://schema.org/warranty instead.
     */
    "https://schema.org/warrantyPromise"?: SchemaValue<WarrantyPromise | IdReference, "https://schema.org/warrantyPromise">;
}
interface SellActionLeaf extends SellActionBase {
    "@type": "https://schema.org/SellAction";
}
/** The act of taking money from a buyer in exchange for goods or services rendered. An agent sells an object, product, or service to a buyer for a price. Reciprocal of BuyAction. */
export declare type SellAction = SellActionLeaf;
interface SendActionBase extends TransferActionBase {
    /** A sub property of instrument. The method of delivery. */
    "https://schema.org/deliveryMethod"?: SchemaValue<DeliveryMethod | IdReference, "https://schema.org/deliveryMethod">;
    /** A sub property of participant. The participant who is at the receiving end of the action. */
    "https://schema.org/recipient"?: SchemaValue<Audience | ContactPoint | Organization | Person | IdReference, "https://schema.org/recipient">;
}
interface SendActionLeaf extends SendActionBase {
    "@type": "https://schema.org/SendAction";
}
/**
 * The act of physically/electronically dispatching an object for transfer from an origin to a destination.Related actions:
 * - {@link https://schema.org/ReceiveAction ReceiveAction}: The reciprocal of SendAction.
 * - {@link https://schema.org/GiveAction GiveAction}: Unlike GiveAction, SendAction does not imply the transfer of ownership (e.g. I can send you my laptop, but I'm not necessarily giving it to you).
 */
export declare type SendAction = SendActionLeaf;
interface SeriesLeaf extends ThingBase {
    "@type": "https://schema.org/Series";
}
/** A Series in schema.org is a group of related items, typically but not necessarily of the same kind. See also {@link https://schema.org/CreativeWorkSeries CreativeWorkSeries}, {@link https://schema.org/EventSeries EventSeries}. */
export declare type Series = SeriesLeaf | CreativeWorkSeries | EventSeries;
interface ServiceBase extends ThingBase {
    /** The overall rating, based on a collection of reviews or ratings, of the item. */
    "https://schema.org/aggregateRating"?: SchemaValue<AggregateRating | IdReference, "https://schema.org/aggregateRating">;
    /** The geographic area where a service or offered item is provided. */
    "https://schema.org/areaServed"?: SchemaValue<AdministrativeArea | GeoShape | Place | Text | IdReference, "https://schema.org/areaServed">;
    /** An intended audience, i.e. a group for whom something was created. */
    "https://schema.org/audience"?: SchemaValue<Audience | IdReference, "https://schema.org/audience">;
    /** A means of accessing the service (e.g. a phone bank, a web site, a location, etc.). */
    "https://schema.org/availableChannel"?: SchemaValue<ServiceChannel | IdReference, "https://schema.org/availableChannel">;
    /** An award won by or for this item. */
    "https://schema.org/award"?: SchemaValue<Text, "https://schema.org/award">;
    /** The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person. */
    "https://schema.org/brand"?: SchemaValue<Brand | Organization | IdReference, "https://schema.org/brand">;
    /** An entity that arranges for an exchange between a buyer and a seller. In most cases a broker never acquires or releases ownership of a product or service involved in an exchange. If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred. */
    "https://schema.org/broker"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/broker">;
    /** A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy. */
    "https://schema.org/category"?: SchemaValue<PhysicalActivityCategory | Text | Thing | URL | IdReference, "https://schema.org/category">;
    /** Indicates an OfferCatalog listing for this Organization, Person, or Service. */
    "https://schema.org/hasOfferCatalog"?: SchemaValue<OfferCatalog | IdReference, "https://schema.org/hasOfferCatalog">;
    /** The hours during which this service or contact is available. */
    "https://schema.org/hoursAvailable"?: SchemaValue<OpeningHoursSpecification | IdReference, "https://schema.org/hoursAvailable">;
    /** A pointer to another, somehow related product (or multiple products). */
    "https://schema.org/isRelatedTo"?: SchemaValue<Product | Service | IdReference, "https://schema.org/isRelatedTo">;
    /** A pointer to another, functionally similar product (or multiple products). */
    "https://schema.org/isSimilarTo"?: SchemaValue<Product | Service | IdReference, "https://schema.org/isSimilarTo">;
    /** An associated logo. */
    "https://schema.org/logo"?: SchemaValue<ImageObject | URL | IdReference, "https://schema.org/logo">;
    /** An offer to provide this item—for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use {@link https://schema.org/businessFunction businessFunction} to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a {@link https://schema.org/Demand Demand}. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer. */
    "https://schema.org/offers"?: SchemaValue<Demand | Offer | IdReference, "https://schema.org/offers">;
    /**
     * The tangible thing generated by the service, e.g. a passport, permit, etc.
     *
     * @deprecated Consider using https://schema.org/serviceOutput instead.
     */
    "https://schema.org/produces"?: SchemaValue<Thing | IdReference, "https://schema.org/produces">;
    /** The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller. */
    "https://schema.org/provider"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/provider">;
    /** Indicates the mobility of a provided service (e.g. 'static', 'dynamic'). */
    "https://schema.org/providerMobility"?: SchemaValue<Text, "https://schema.org/providerMobility">;
    /** A review of the item. */
    "https://schema.org/review"?: SchemaValue<Review | IdReference, "https://schema.org/review">;
    /**
     * The geographic area where the service is provided.
     *
     * @deprecated Consider using https://schema.org/areaServed instead.
     */
    "https://schema.org/serviceArea"?: SchemaValue<AdministrativeArea | GeoShape | Place | IdReference, "https://schema.org/serviceArea">;
    /**
     * The audience eligible for this service.
     *
     * @deprecated Consider using https://schema.org/audience instead.
     */
    "https://schema.org/serviceAudience"?: SchemaValue<Audience | IdReference, "https://schema.org/serviceAudience">;
    /** The tangible thing generated by the service, e.g. a passport, permit, etc. */
    "https://schema.org/serviceOutput"?: SchemaValue<Thing | IdReference, "https://schema.org/serviceOutput">;
    /** The type of service being offered, e.g. veterans' benefits, emergency relief, etc. */
    "https://schema.org/serviceType"?: SchemaValue<GovernmentBenefitsType | Text | IdReference, "https://schema.org/serviceType">;
    /** A slogan or motto associated with the item. */
    "https://schema.org/slogan"?: SchemaValue<Text, "https://schema.org/slogan">;
    /** Human-readable terms of service documentation. */
    "https://schema.org/termsOfService"?: SchemaValue<Text | URL, "https://schema.org/termsOfService">;
}
interface ServiceLeaf extends ServiceBase {
    "@type": "https://schema.org/Service";
}
/** A service provided by an organization, e.g. delivery service, print services, etc. */
export declare type Service = ServiceLeaf | BroadcastService | CableOrSatelliteService | FinancialProduct | FoodService | GovernmentService | Taxi | TaxiService | WebAPI;
interface ServiceChannelBase extends ThingBase {
    /** A language someone may use with or at the item, service or place. Please use one of the language codes from the {@link http://tools.ietf.org/html/bcp47 IETF BCP 47 standard}. See also {@link https://schema.org/inLanguage inLanguage} */
    "https://schema.org/availableLanguage"?: SchemaValue<Language | Text | IdReference, "https://schema.org/availableLanguage">;
    /** Estimated processing time for the service using this channel. */
    "https://schema.org/processingTime"?: SchemaValue<Duration | IdReference, "https://schema.org/processingTime">;
    /** The service provided by this channel. */
    "https://schema.org/providesService"?: SchemaValue<Service | IdReference, "https://schema.org/providesService">;
    /** The location (e.g. civic structure, local business, etc.) where a person can go to access the service. */
    "https://schema.org/serviceLocation"?: SchemaValue<Place | IdReference, "https://schema.org/serviceLocation">;
    /** The phone number to use to access the service. */
    "https://schema.org/servicePhone"?: SchemaValue<ContactPoint | IdReference, "https://schema.org/servicePhone">;
    /** The address for accessing the service by mail. */
    "https://schema.org/servicePostalAddress"?: SchemaValue<PostalAddress | IdReference, "https://schema.org/servicePostalAddress">;
    /** The number to access the service by text message. */
    "https://schema.org/serviceSmsNumber"?: SchemaValue<ContactPoint | IdReference, "https://schema.org/serviceSmsNumber">;
    /** The website to access the service. */
    "https://schema.org/serviceUrl"?: SchemaValue<URL, "https://schema.org/serviceUrl">;
}
interface ServiceChannelLeaf extends ServiceChannelBase {
    "@type": "https://schema.org/ServiceChannel";
}
/** A means for accessing a service, e.g. a government office location, web site, or phone number. */
export declare type ServiceChannel = ServiceChannelLeaf;
interface ShareActionLeaf extends CommunicateActionBase {
    "@type": "https://schema.org/ShareAction";
}
/** The act of distributing content to people for their amusement or edification. */
export declare type ShareAction = ShareActionLeaf;
interface SheetMusicLeaf extends CreativeWorkBase {
    "@type": "https://schema.org/SheetMusic";
}
/** Printed music, as opposed to performed or recorded music. */
export declare type SheetMusic = SheetMusicLeaf;
interface ShippingDeliveryTimeBase extends ThingBase {
    /** Days of the week when the merchant typically operates, indicated via opening hours markup. */
    "https://schema.org/businessDays"?: SchemaValue<OpeningHoursSpecification | IdReference, "https://schema.org/businessDays">;
    /** Order cutoff time allows merchants to describe the time after which they will no longer process orders received on that day. For orders processed after cutoff time, one day gets added to the delivery time estimate. This property is expected to be most typically used via the {@link https://schema.org/ShippingRateSettings ShippingRateSettings} publication pattern. The time is indicated using the ISO-8601 Time format, e.g. "23:30:00-05:00" would represent 6:30 pm Eastern Standard Time (EST) which is 5 hours behind Coordinated Universal Time (UTC). */
    "https://schema.org/cutoffTime"?: SchemaValue<Time, "https://schema.org/cutoffTime">;
    /** The typical delay between the receipt of the order and the goods either leaving the warehouse or being prepared for pickup, in case the delivery method is on site pickup. Typical properties: minValue, maxValue, unitCode (d for DAY). This is by common convention assumed to mean business days (if a unitCode is used, coded as "d"), i.e. only counting days when the business normally operates. */
    "https://schema.org/handlingTime"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/handlingTime">;
    /** The typical delay the order has been sent for delivery and the goods reach the final customer. Typical properties: minValue, maxValue, unitCode (d for DAY). */
    "https://schema.org/transitTime"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/transitTime">;
}
interface ShippingDeliveryTimeLeaf extends ShippingDeliveryTimeBase {
    "@type": "https://schema.org/ShippingDeliveryTime";
}
/** ShippingDeliveryTime provides various pieces of information about delivery times for shipping. */
export declare type ShippingDeliveryTime = ShippingDeliveryTimeLeaf;
interface ShippingRateSettingsBase extends ThingBase {
    /** Indicates when shipping to a particular {@link https://schema.org/shippingDestination shippingDestination} is not available. */
    "https://schema.org/doesNotShip"?: SchemaValue<Boolean, "https://schema.org/doesNotShip">;
    /** A monetary value above which (or equal to) the shipping rate becomes free. Intended to be used via an {@link https://schema.org/OfferShippingDetails OfferShippingDetails} with {@link https://schema.org/shippingSettingsLink shippingSettingsLink} matching this {@link https://schema.org/ShippingRateSettings ShippingRateSettings}. */
    "https://schema.org/freeShippingThreshold"?: SchemaValue<DeliveryChargeSpecification | MonetaryAmount | IdReference, "https://schema.org/freeShippingThreshold">;
    /** This can be marked 'true' to indicate that some published {@link https://schema.org/DeliveryTimeSettings DeliveryTimeSettings} or {@link https://schema.org/ShippingRateSettings ShippingRateSettings} are intended to apply to all {@link https://schema.org/OfferShippingDetails OfferShippingDetails} published by the same merchant, when referenced by a {@link https://schema.org/shippingSettingsLink shippingSettingsLink} in those settings. It is not meaningful to use a 'true' value for this property alongside a transitTimeLabel (for {@link https://schema.org/DeliveryTimeSettings DeliveryTimeSettings}) or shippingLabel (for {@link https://schema.org/ShippingRateSettings ShippingRateSettings}), since this property is for use with unlabelled settings. */
    "https://schema.org/isUnlabelledFallback"?: SchemaValue<Boolean, "https://schema.org/isUnlabelledFallback">;
    /** indicates (possibly multiple) shipping destinations. These can be defined in several ways e.g. postalCode ranges. */
    "https://schema.org/shippingDestination"?: SchemaValue<DefinedRegion | IdReference, "https://schema.org/shippingDestination">;
    /** Label to match an {@link https://schema.org/OfferShippingDetails OfferShippingDetails} with a {@link https://schema.org/ShippingRateSettings ShippingRateSettings} (within the context of a {@link https://schema.org/shippingSettingsLink shippingSettingsLink} cross-reference). */
    "https://schema.org/shippingLabel"?: SchemaValue<Text, "https://schema.org/shippingLabel">;
    /** The shipping rate is the cost of shipping to the specified destination. Typically, the maxValue and currency values (of the {@link https://schema.org/MonetaryAmount MonetaryAmount}) are most appropriate. */
    "https://schema.org/shippingRate"?: SchemaValue<MonetaryAmount | IdReference, "https://schema.org/shippingRate">;
}
interface ShippingRateSettingsLeaf extends ShippingRateSettingsBase {
    "@type": "https://schema.org/ShippingRateSettings";
}
/** A ShippingRateSettings represents re-usable pieces of shipping information. It is designed for publication on an URL that may be referenced via the {@link https://schema.org/shippingSettingsLink shippingSettingsLink} property of an {@link https://schema.org/OfferShippingDetails OfferShippingDetails}. Several occurrences can be published, distinguished and matched (i.e. identified/referenced) by their different values for {@link https://schema.org/shippingLabel shippingLabel}. */
export declare type ShippingRateSettings = ShippingRateSettingsLeaf;
interface ShoeStoreLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/ShoeStore";
}
/** A shoe store. */
export declare type ShoeStore = ShoeStoreLeaf | string;
interface ShoppingCenterLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/ShoppingCenter";
}
/** A shopping center or mall. */
export declare type ShoppingCenter = ShoppingCenterLeaf | string;
interface ShortStoryLeaf extends CreativeWorkBase {
    "@type": "https://schema.org/ShortStory";
}
/** Short story or tale. A brief work of literature, usually written in narrative prose. */
export declare type ShortStory = ShortStoryLeaf;
interface SingleFamilyResidenceBase extends HouseBase {
    /** The number of rooms (excluding bathrooms and closets) of the accommodation or lodging business. Typical unit code(s): ROM for room or C62 for no unit. The type of room can be put in the unitText property of the QuantitativeValue. */
    "https://schema.org/numberOfRooms"?: SchemaValue<Number | QuantitativeValue | IdReference, "https://schema.org/numberOfRooms">;
    /** The allowed total occupancy for the accommodation in persons (including infants etc). For individual accommodations, this is not necessarily the legal maximum but defines the permitted usage as per the contractual agreement (e.g. a double room used by a single person). Typical unit code(s): C62 for person */
    "https://schema.org/occupancy"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/occupancy">;
}
interface SingleFamilyResidenceLeaf extends SingleFamilyResidenceBase {
    "@type": "https://schema.org/SingleFamilyResidence";
}
/** Residence type: Single-family home. */
export declare type SingleFamilyResidence = SingleFamilyResidenceLeaf | string;
interface SiteNavigationElementLeaf extends WebPageElementBase {
    "@type": "https://schema.org/SiteNavigationElement";
}
/** A navigation element of the page. */
export declare type SiteNavigationElement = SiteNavigationElementLeaf;
interface SizeGroupEnumerationLeaf extends EnumerationBase {
    "@type": "https://schema.org/SizeGroupEnumeration";
}
/** Enumerates common size groups for various product categories. */
export declare type SizeGroupEnumeration = SizeGroupEnumerationLeaf | WearableSizeGroupEnumeration;
interface SizeSpecificationBase extends QualitativeValueBase {
    /** A product measurement, for example the inseam of pants, the wheel size of a bicycle, or the gauge of a screw. Usually an exact measurement, but can also be a range of measurements for adjustable products, for example belts and ski bindings. */
    "https://schema.org/hasMeasurement"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/hasMeasurement">;
    /** The size group (also known as "size type") for a product's size. Size groups are common in the fashion industry to define size segments and suggested audiences for wearable products. Multiple values can be combined, for example "men's big and tall", "petite maternity" or "regular" */
    "https://schema.org/sizeGroup"?: SchemaValue<SizeGroupEnumeration | Text | IdReference, "https://schema.org/sizeGroup">;
    /** The size system used to identify a product's size. Typically either a standard (for example, "GS1" or "ISO-EN13402"), country code (for example "US" or "JP"), or a measuring system (for example "Metric" or "Imperial"). */
    "https://schema.org/sizeSystem"?: SchemaValue<SizeSystemEnumeration | Text | IdReference, "https://schema.org/sizeSystem">;
    /** The age or age range for the intended audience or person, for example 3-12 months for infants, 1-5 years for toddlers. */
    "https://schema.org/suggestedAge"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/suggestedAge">;
    /** The suggested gender of the intended person or audience, for example "male", "female", or "unisex". */
    "https://schema.org/suggestedGender"?: SchemaValue<GenderType | Text | IdReference, "https://schema.org/suggestedGender">;
    /** A suggested range of body measurements for the intended audience or person, for example inseam between 32 and 34 inches or height between 170 and 190 cm. Typically found on a size chart for wearable products. */
    "https://schema.org/suggestedMeasurement"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/suggestedMeasurement">;
}
interface SizeSpecificationLeaf extends SizeSpecificationBase {
    "@type": "https://schema.org/SizeSpecification";
}
/** Size related properties of a product, typically a size code ({@link https://schema.org/name name}) and optionally a {@link https://schema.org/sizeSystem sizeSystem}, {@link https://schema.org/sizeGroup sizeGroup}, and product measurements ({@link https://schema.org/hasMeasurement hasMeasurement}). In addition, the intended audience can be defined through {@link https://schema.org/suggestedAge suggestedAge}, {@link https://schema.org/suggestedGender suggestedGender}, and suggested body measurements ({@link https://schema.org/suggestedMeasurement suggestedMeasurement}). */
export declare type SizeSpecification = SizeSpecificationLeaf;
interface SizeSystemEnumerationLeaf extends EnumerationBase {
    "@type": "https://schema.org/SizeSystemEnumeration";
}
/** Enumerates common size systems for different categories of products, for example "EN-13402" or "UK" for wearables or "Imperial" for screws. */
export declare type SizeSystemEnumeration = "https://schema.org/SizeSystemImperial" | "https://schema.org/SizeSystemMetric" | SizeSystemEnumerationLeaf | WearableSizeSystemEnumeration;
interface SkiResortBase extends LodgingBusinessBase, LocalBusinessBase {
}
interface SkiResortLeaf extends SkiResortBase {
    "@type": "https://schema.org/SkiResort";
}
/** A ski resort. */
export declare type SkiResort = SkiResortLeaf | string;
interface SocialEventLeaf extends EventBase {
    "@type": "https://schema.org/SocialEvent";
}
/** Event type: Social event. */
export declare type SocialEvent = SocialEventLeaf;
interface SocialMediaPostingBase extends ArticleBase {
    /** A CreativeWork such as an image, video, or audio clip shared as part of this posting. */
    "https://schema.org/sharedContent"?: SchemaValue<CreativeWork | IdReference, "https://schema.org/sharedContent">;
}
interface SocialMediaPostingLeaf extends SocialMediaPostingBase {
    "@type": "https://schema.org/SocialMediaPosting";
}
/** A post to a social media platform, including blog posts, tweets, Facebook posts, etc. */
export declare type SocialMediaPosting = SocialMediaPostingLeaf | BlogPosting | DiscussionForumPosting;
interface SoftwareApplicationBase extends CreativeWorkBase {
    /** Type of software application, e.g. 'Game, Multimedia'. */
    "https://schema.org/applicationCategory"?: SchemaValue<Text | URL, "https://schema.org/applicationCategory">;
    /** Subcategory of the application, e.g. 'Arcade Game'. */
    "https://schema.org/applicationSubCategory"?: SchemaValue<Text | URL, "https://schema.org/applicationSubCategory">;
    /** The name of the application suite to which the application belongs (e.g. Excel belongs to Office). */
    "https://schema.org/applicationSuite"?: SchemaValue<Text, "https://schema.org/applicationSuite">;
    /** Device required to run the application. Used in cases where a specific make/model is required to run the application. */
    "https://schema.org/availableOnDevice"?: SchemaValue<Text, "https://schema.org/availableOnDevice">;
    /** Countries for which the application is not supported. You can also provide the two-letter ISO 3166-1 alpha-2 country code. */
    "https://schema.org/countriesNotSupported"?: SchemaValue<Text, "https://schema.org/countriesNotSupported">;
    /** Countries for which the application is supported. You can also provide the two-letter ISO 3166-1 alpha-2 country code. */
    "https://schema.org/countriesSupported"?: SchemaValue<Text, "https://schema.org/countriesSupported">;
    /**
     * Device required to run the application. Used in cases where a specific make/model is required to run the application.
     *
     * @deprecated Consider using https://schema.org/availableOnDevice instead.
     */
    "https://schema.org/device"?: SchemaValue<Text, "https://schema.org/device">;
    /** If the file can be downloaded, URL to download the binary. */
    "https://schema.org/downloadUrl"?: SchemaValue<URL, "https://schema.org/downloadUrl">;
    /** Features or modules provided by this application (and possibly required by other applications). */
    "https://schema.org/featureList"?: SchemaValue<Text | URL, "https://schema.org/featureList">;
    /** Size of the application / package (e.g. 18MB). In the absence of a unit (MB, KB etc.), KB will be assumed. */
    "https://schema.org/fileSize"?: SchemaValue<Text, "https://schema.org/fileSize">;
    /** URL at which the app may be installed, if different from the URL of the item. */
    "https://schema.org/installUrl"?: SchemaValue<URL, "https://schema.org/installUrl">;
    /** Minimum memory requirements. */
    "https://schema.org/memoryRequirements"?: SchemaValue<Text | URL, "https://schema.org/memoryRequirements">;
    /** Operating systems supported (Windows 7, OSX 10.6, Android 1.6). */
    "https://schema.org/operatingSystem"?: SchemaValue<Text, "https://schema.org/operatingSystem">;
    /** Permission(s) required to run the app (for example, a mobile app may require full internet access or may run only on wifi). */
    "https://schema.org/permissions"?: SchemaValue<Text, "https://schema.org/permissions">;
    /** Processor architecture required to run the application (e.g. IA64). */
    "https://schema.org/processorRequirements"?: SchemaValue<Text, "https://schema.org/processorRequirements">;
    /** Description of what changed in this version. */
    "https://schema.org/releaseNotes"?: SchemaValue<Text | URL, "https://schema.org/releaseNotes">;
    /**
     * Component dependency requirements for application. This includes runtime environments and shared libraries that are not included in the application distribution package, but required to run the application (Examples: DirectX, Java or .NET runtime).
     *
     * @deprecated Consider using https://schema.org/softwareRequirements instead.
     */
    "https://schema.org/requirements"?: SchemaValue<Text | URL, "https://schema.org/requirements">;
    /** A link to a screenshot image of the app. */
    "https://schema.org/screenshot"?: SchemaValue<ImageObject | URL | IdReference, "https://schema.org/screenshot">;
    /** Additional content for a software application. */
    "https://schema.org/softwareAddOn"?: SchemaValue<SoftwareApplication | IdReference, "https://schema.org/softwareAddOn">;
    /** Software application help. */
    "https://schema.org/softwareHelp"?: SchemaValue<CreativeWork | IdReference, "https://schema.org/softwareHelp">;
    /** Component dependency requirements for application. This includes runtime environments and shared libraries that are not included in the application distribution package, but required to run the application (Examples: DirectX, Java or .NET runtime). */
    "https://schema.org/softwareRequirements"?: SchemaValue<Text | URL, "https://schema.org/softwareRequirements">;
    /** Version of the software instance. */
    "https://schema.org/softwareVersion"?: SchemaValue<Text, "https://schema.org/softwareVersion">;
    /** Storage requirements (free space required). */
    "https://schema.org/storageRequirements"?: SchemaValue<Text | URL, "https://schema.org/storageRequirements">;
    /** Supporting data for a SoftwareApplication. */
    "https://schema.org/supportingData"?: SchemaValue<DataFeed | IdReference, "https://schema.org/supportingData">;
}
interface SoftwareApplicationLeaf extends SoftwareApplicationBase {
    "@type": "https://schema.org/SoftwareApplication";
}
/** A software application. */
export declare type SoftwareApplication = SoftwareApplicationLeaf | MobileApplication | VideoGame | WebApplication;
interface SoftwareSourceCodeBase extends CreativeWorkBase {
    /** Link to the repository where the un-compiled, human readable code and related code is located (SVN, github, CodePlex). */
    "https://schema.org/codeRepository"?: SchemaValue<URL, "https://schema.org/codeRepository">;
    /** What type of code sample: full (compile ready) solution, code snippet, inline code, scripts, template. */
    "https://schema.org/codeSampleType"?: SchemaValue<Text, "https://schema.org/codeSampleType">;
    /** The computer programming language. */
    "https://schema.org/programmingLanguage"?: SchemaValue<ComputerLanguage | Text | IdReference, "https://schema.org/programmingLanguage">;
    /**
     * Runtime platform or script interpreter dependencies (Example - Java v1, Python2.3, .Net Framework 3.0).
     *
     * @deprecated Consider using https://schema.org/runtimePlatform instead.
     */
    "https://schema.org/runtime"?: SchemaValue<Text, "https://schema.org/runtime">;
    /** Runtime platform or script interpreter dependencies (Example - Java v1, Python2.3, .Net Framework 3.0). */
    "https://schema.org/runtimePlatform"?: SchemaValue<Text, "https://schema.org/runtimePlatform">;
    /**
     * What type of code sample: full (compile ready) solution, code snippet, inline code, scripts, template.
     *
     * @deprecated Consider using https://schema.org/codeSampleType instead.
     */
    "https://schema.org/sampleType"?: SchemaValue<Text, "https://schema.org/sampleType">;
    /** Target Operating System / Product to which the code applies. If applies to several versions, just the product name can be used. */
    "https://schema.org/targetProduct"?: SchemaValue<SoftwareApplication | IdReference, "https://schema.org/targetProduct">;
}
interface SoftwareSourceCodeLeaf extends SoftwareSourceCodeBase {
    "@type": "https://schema.org/SoftwareSourceCode";
}
/** Computer programming source code. Example: Full (compile ready) solutions, code snippet samples, scripts, templates. */
export declare type SoftwareSourceCode = SoftwareSourceCodeLeaf;
interface SolveMathActionBase extends ActionBase {
    /** For questions that are part of learning resources (e.g. Quiz), eduQuestionType indicates the format of question being given. Example: "Multiple choice", "Open ended", "Flashcard". */
    "https://schema.org/eduQuestionType"?: SchemaValue<Text, "https://schema.org/eduQuestionType">;
}
interface SolveMathActionLeaf extends SolveMathActionBase {
    "@type": "https://schema.org/SolveMathAction";
}
/** The action that takes in a math expression and directs users to a page potentially capable of solving/simplifying that expression. */
export declare type SolveMathAction = SolveMathActionLeaf;
interface SomeProductsBase extends ProductBase {
    /** The current approximate inventory level for the item or items. */
    "https://schema.org/inventoryLevel"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/inventoryLevel">;
}
interface SomeProductsLeaf extends SomeProductsBase {
    "@type": "https://schema.org/SomeProducts";
}
/** A placeholder for multiple similar products of the same kind. */
export declare type SomeProducts = SomeProductsLeaf;
interface SpeakableSpecificationBase extends ThingBase {
    /** A CSS selector, e.g. of a {@link https://schema.org/SpeakableSpecification SpeakableSpecification} or {@link https://schema.org/WebPageElement WebPageElement}. In the latter case, multiple matches within a page can constitute a single conceptual "Web page element". */
    "https://schema.org/cssSelector"?: SchemaValue<CssSelectorType, "https://schema.org/cssSelector">;
    /** An XPath, e.g. of a {@link https://schema.org/SpeakableSpecification SpeakableSpecification} or {@link https://schema.org/WebPageElement WebPageElement}. In the latter case, multiple matches within a page can constitute a single conceptual "Web page element". */
    "https://schema.org/xpath"?: SchemaValue<XPathType, "https://schema.org/xpath">;
}
interface SpeakableSpecificationLeaf extends SpeakableSpecificationBase {
    "@type": "https://schema.org/SpeakableSpecification";
}
/** A SpeakableSpecification indicates (typically via {@link https://schema.org/xpath xpath} or {@link https://schema.org/cssSelector cssSelector}) sections of a document that are highlighted as particularly {@link https://schema.org/speakable speakable}. Instances of this type are expected to be used primarily as values of the {@link https://schema.org/speakable speakable} property. */
export declare type SpeakableSpecification = SpeakableSpecificationLeaf;
interface SpecialAnnouncementBase extends CreativeWorkBase {
    /** Indicates a specific {@link https://schema.org/CivicStructure CivicStructure} or {@link https://schema.org/LocalBusiness LocalBusiness} associated with the SpecialAnnouncement. For example, a specific testing facility or business with special opening hours. For a larger geographic region like a quarantine of an entire region, use {@link https://schema.org/spatialCoverage spatialCoverage}. */
    "https://schema.org/announcementLocation"?: SchemaValue<CivicStructure | LocalBusiness | IdReference, "https://schema.org/announcementLocation">;
    /** A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy. */
    "https://schema.org/category"?: SchemaValue<PhysicalActivityCategory | Text | Thing | URL | IdReference, "https://schema.org/category">;
    /** Publication date of an online listing. */
    "https://schema.org/datePosted"?: SchemaValue<Date | DateTime, "https://schema.org/datePosted">;
    /** Information about disease prevention. */
    "https://schema.org/diseasePreventionInfo"?: SchemaValue<URL | WebContent | IdReference, "https://schema.org/diseasePreventionInfo">;
    /** Statistical information about the spread of a disease, either as {@link https://schema.org/WebContent WebContent}, or described directly as a {@link https://schema.org/Dataset Dataset}, or the specific {@link https://schema.org/Observation Observation}s in the dataset. When a {@link https://schema.org/WebContent WebContent} URL is provided, the page indicated might also contain more such markup. */
    "https://schema.org/diseaseSpreadStatistics"?: SchemaValue<Dataset | Observation | URL | WebContent | IdReference, "https://schema.org/diseaseSpreadStatistics">;
    /** Information about getting tested (for a {@link https://schema.org/MedicalCondition MedicalCondition}), e.g. in the context of a pandemic. */
    "https://schema.org/gettingTestedInfo"?: SchemaValue<URL | WebContent | IdReference, "https://schema.org/gettingTestedInfo">;
    /** governmentBenefitsInfo provides information about government benefits associated with a SpecialAnnouncement. */
    "https://schema.org/governmentBenefitsInfo"?: SchemaValue<GovernmentService | IdReference, "https://schema.org/governmentBenefitsInfo">;
    /** Indicates a page with news updates and guidelines. This could often be (but is not required to be) the main page containing {@link https://schema.org/SpecialAnnouncement SpecialAnnouncement} markup on a site. */
    "https://schema.org/newsUpdatesAndGuidelines"?: SchemaValue<URL | WebContent | IdReference, "https://schema.org/newsUpdatesAndGuidelines">;
    /** Information about public transport closures. */
    "https://schema.org/publicTransportClosuresInfo"?: SchemaValue<URL | WebContent | IdReference, "https://schema.org/publicTransportClosuresInfo">;
    /** Guidelines about quarantine rules, e.g. in the context of a pandemic. */
    "https://schema.org/quarantineGuidelines"?: SchemaValue<URL | WebContent | IdReference, "https://schema.org/quarantineGuidelines">;
    /** Information about school closures. */
    "https://schema.org/schoolClosuresInfo"?: SchemaValue<URL | WebContent | IdReference, "https://schema.org/schoolClosuresInfo">;
    /** Information about travel bans, e.g. in the context of a pandemic. */
    "https://schema.org/travelBans"?: SchemaValue<URL | WebContent | IdReference, "https://schema.org/travelBans">;
    /** The URL for a feed, e.g. associated with a podcast series, blog, or series of date-stamped updates. This is usually RSS or Atom. */
    "https://schema.org/webFeed"?: SchemaValue<DataFeed | URL | IdReference, "https://schema.org/webFeed">;
}
interface SpecialAnnouncementLeaf extends SpecialAnnouncementBase {
    "@type": "https://schema.org/SpecialAnnouncement";
}
/**
 * A SpecialAnnouncement combines a simple date-stamped textual information update with contextualized Web links and other structured data. It represents an information update made by a locally-oriented organization, for example schools, pharmacies, healthcare providers, community groups, police, local government.
 *
 * For work in progress guidelines on Coronavirus-related markup see {@link https://docs.google.com/document/d/14ikaGCKxo50rRM7nvKSlbUpjyIk2WMQd3IkB1lItlrM/edit# this doc}.
 *
 * The motivating scenario for SpecialAnnouncement is the {@link https://en.wikipedia.org/wiki/2019%E2%80%9320_coronavirus_pandemic Coronavirus pandemic}, and the initial vocabulary is oriented to this urgent situation. Schema.org expect to improve the markup iteratively as it is deployed and as feedback emerges from use. In addition to our usual {@link https://github.com/schemaorg/schemaorg/issues/2490 Github entry}, feedback comments can also be provided in {@link https://docs.google.com/document/d/1fpdFFxk8s87CWwACs53SGkYv3aafSxz_DTtOQxMrBJQ/edit# this document}.
 *
 * While this schema is designed to communicate urgent crisis-related information, it is not the same as an emergency warning technology like {@link https://en.wikipedia.org/wiki/Common_Alerting_Protocol CAP}, although there may be overlaps. The intent is to cover the kinds of everyday practical information being posted to existing websites during an emergency situation.
 *
 * Several kinds of information can be provided:
 *
 * We encourage the provision of "name", "text", "datePosted", "expires" (if appropriate), "category" and "url" as a simple baseline. It is important to provide a value for "category" where possible, most ideally as a well known URL from Wikipedia or Wikidata. In the case of the 2019-2020 Coronavirus pandemic, this should be "https://en.wikipedia.org/w/index.php?title=2019-20\_coronavirus\_pandemic" or "https://www.wikidata.org/wiki/Q81068910".
 *
 * For many of the possible properties, values can either be simple links or an inline description, depending on whether a summary is available. For a link, provide just the URL of the appropriate page as the property's value. For an inline description, use a {@link https://schema.org/WebContent WebContent} type, and provide the url as a property of that, alongside at least a simple "{@link https://schema.org/text text}" summary of the page. It is unlikely that a single SpecialAnnouncement will need all of the possible properties simultaneously.
 *
 * We expect that in many cases the page referenced might contain more specialized structured data, e.g. contact info, {@link https://schema.org/openingHours openingHours}, {@link https://schema.org/Event Event}, {@link https://schema.org/FAQPage FAQPage} etc. By linking to those pages from a {@link https://schema.org/SpecialAnnouncement SpecialAnnouncement} you can help make it clearer that the events are related to the situation (e.g. Coronavirus) indicated by the {@link https://schema.org/category category} property of the {@link https://schema.org/SpecialAnnouncement SpecialAnnouncement}.
 *
 * Many {@link https://schema.org/SpecialAnnouncement SpecialAnnouncement}s will relate to particular regions and to identifiable local organizations. Use {@link https://schema.org/spatialCoverage spatialCoverage} for the region, and {@link https://schema.org/announcementLocation announcementLocation} to indicate specific {@link https://schema.org/LocalBusiness LocalBusiness}es and {@link https://schema.org/CivicStructure CivicStructure}s. If the announcement affects both a particular region and a specific location (for example, a library closure that serves an entire region), use both {@link https://schema.org/spatialCoverage spatialCoverage} and {@link https://schema.org/announcementLocation announcementLocation}.
 *
 * The {@link https://schema.org/about about} property can be used to indicate entities that are the focus of the announcement. We now recommend using {@link https://schema.org/about about} only for representing non-location entities (e.g. a {@link https://schema.org/Course Course} or a {@link https://schema.org/RadioStation RadioStation}). For places, use {@link https://schema.org/announcementLocation announcementLocation} and {@link https://schema.org/spatialCoverage spatialCoverage}. Consumers of this markup should be aware that the initial design encouraged the use of /about for locations too.
 *
 * The basic content of {@link https://schema.org/SpecialAnnouncement SpecialAnnouncement} is similar to that of an {@link https://en.wikipedia.org/wiki/RSS RSS} or {@link https://en.wikipedia.org/wiki/Atom_(Web_standard) Atom} feed. For publishers without such feeds, basic feed-like information can be shared by posting {@link https://schema.org/SpecialAnnouncement SpecialAnnouncement} updates in a page, e.g. using JSON-LD. For sites with Atom/RSS functionality, you can point to a feed with the {@link https://schema.org/webFeed webFeed} property. This can be a simple URL, or an inline {@link https://schema.org/DataFeed DataFeed} object, with {@link https://schema.org/encodingFormat encodingFormat} providing media type information e.g. "application/rss+xml" or "application/atom+xml".
 */
export declare type SpecialAnnouncement = SpecialAnnouncementLeaf;
interface SpecialtyLeaf extends EnumerationBase {
    "@type": "https://schema.org/Specialty";
}
/** Any branch of a field in which people typically develop specific expertise, usually after significant study, time, and effort. */
export declare type Specialty = SpecialtyLeaf | MedicalSpecialty;
interface SportingGoodsStoreLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/SportingGoodsStore";
}
/** A sporting goods store. */
export declare type SportingGoodsStore = SportingGoodsStoreLeaf | string;
interface SportsActivityLocationLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/SportsActivityLocation";
}
/** A sports location, such as a playing field. */
export declare type SportsActivityLocation = SportsActivityLocationLeaf | BowlingAlley | ExerciseGym | GolfCourse | HealthClub | PublicSwimmingPool | SkiResort | SportsClub | StadiumOrArena | TennisComplex | string;
interface SportsClubLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/SportsClub";
}
/** A sports club. */
export declare type SportsClub = SportsClubLeaf | string;
interface SportsEventBase extends EventBase {
    /** The away team in a sports event. */
    "https://schema.org/awayTeam"?: SchemaValue<Person | SportsTeam | IdReference, "https://schema.org/awayTeam">;
    /** A competitor in a sports event. */
    "https://schema.org/competitor"?: SchemaValue<Person | SportsTeam | IdReference, "https://schema.org/competitor">;
    /** The home team in a sports event. */
    "https://schema.org/homeTeam"?: SchemaValue<Person | SportsTeam | IdReference, "https://schema.org/homeTeam">;
    /** A type of sport (e.g. Baseball). */
    "https://schema.org/sport"?: SchemaValue<Text | URL, "https://schema.org/sport">;
}
interface SportsEventLeaf extends SportsEventBase {
    "@type": "https://schema.org/SportsEvent";
}
/** Event type: Sports event. */
export declare type SportsEvent = SportsEventLeaf;
interface SportsOrganizationBase extends OrganizationBase {
    /** A type of sport (e.g. Baseball). */
    "https://schema.org/sport"?: SchemaValue<Text | URL, "https://schema.org/sport">;
}
interface SportsOrganizationLeaf extends SportsOrganizationBase {
    "@type": "https://schema.org/SportsOrganization";
}
/** Represents the collection of all sports organizations, including sports teams, governing bodies, and sports associations. */
export declare type SportsOrganization = SportsOrganizationLeaf | SportsTeam | string;
interface SportsTeamBase extends SportsOrganizationBase {
    /** A person that acts as performing member of a sports team; a player as opposed to a coach. */
    "https://schema.org/athlete"?: SchemaValue<Person | IdReference, "https://schema.org/athlete">;
    /** A person that acts in a coaching role for a sports team. */
    "https://schema.org/coach"?: SchemaValue<Person | IdReference, "https://schema.org/coach">;
    /** Gender of something, typically a {@link https://schema.org/Person Person}, but possibly also fictional characters, animals, etc. While https://schema.org/Male and https://schema.org/Female may be used, text strings are also acceptable for people who do not identify as a binary gender. The {@link https://schema.org/gender gender} property can also be used in an extended sense to cover e.g. the gender of sports teams. As with the gender of individuals, we do not try to enumerate all possibilities. A mixed-gender {@link https://schema.org/SportsTeam SportsTeam} can be indicated with a text value of "Mixed". */
    "https://schema.org/gender"?: SchemaValue<GenderType | Text | IdReference, "https://schema.org/gender">;
}
interface SportsTeamLeaf extends SportsTeamBase {
    "@type": "https://schema.org/SportsTeam";
}
/** Organization: Sports team. */
export declare type SportsTeam = SportsTeamLeaf | string;
interface SpreadsheetDigitalDocumentLeaf extends DigitalDocumentBase {
    "@type": "https://schema.org/SpreadsheetDigitalDocument";
}
/** A spreadsheet file. */
export declare type SpreadsheetDigitalDocument = SpreadsheetDigitalDocumentLeaf;
interface StadiumOrArenaBase extends LocalBusinessBase, CivicStructureBase {
}
interface StadiumOrArenaLeaf extends StadiumOrArenaBase {
    "@type": "https://schema.org/StadiumOrArena";
}
/** A stadium. */
export declare type StadiumOrArena = StadiumOrArenaLeaf | string;
interface StateLeaf extends PlaceBase {
    "@type": "https://schema.org/State";
}
/** A state or province of a country. */
export declare type State = StateLeaf | string;
interface StatementLeaf extends CreativeWorkBase {
    "@type": "https://schema.org/Statement";
}
/** A statement about something, for example a fun or interesting fact. If known, the main entity this statement is about, can be indicated using mainEntity. For more formal claims (e.g. in Fact Checking), consider using {@link https://schema.org/Claim Claim} instead. Use the {@link https://schema.org/text text} property to capture the text of the statement. */
export declare type Statement = StatementLeaf;
interface StatisticalPopulationBase extends ThingBase {
    /** Indicates a property used as a constraint to define a {@link https://schema.org/StatisticalPopulation StatisticalPopulation} with respect to the set of entities corresponding to an indicated type (via {@link https://schema.org/populationType populationType}). */
    "https://schema.org/constrainingProperty"?: SchemaValue<Integer, "https://schema.org/constrainingProperty">;
    /** Indicates the number of constraints (not counting {@link https://schema.org/populationType populationType}) defined for a particular {@link https://schema.org/StatisticalPopulation StatisticalPopulation}. This helps applications understand if they have access to a sufficiently complete description of a {@link https://schema.org/StatisticalPopulation StatisticalPopulation}. */
    "https://schema.org/numConstraints"?: SchemaValue<Integer, "https://schema.org/numConstraints">;
    /** Indicates the populationType common to all members of a {@link https://schema.org/StatisticalPopulation StatisticalPopulation}. */
    "https://schema.org/populationType"?: SchemaValue<Class | IdReference, "https://schema.org/populationType">;
}
interface StatisticalPopulationLeaf extends StatisticalPopulationBase {
    "@type": "https://schema.org/StatisticalPopulation";
}
/** A StatisticalPopulation is a set of instances of a certain given type that satisfy some set of constraints. The property {@link https://schema.org/populationType populationType} is used to specify the type. Any property that can be used on instances of that type can appear on the statistical population. For example, a {@link https://schema.org/StatisticalPopulation StatisticalPopulation} representing all {@link https://schema.org/Person Person}s with a {@link https://schema.org/homeLocation homeLocation} of East Podunk California, would be described by applying the appropriate {@link https://schema.org/homeLocation homeLocation} and {@link https://schema.org/populationType populationType} properties to a {@link https://schema.org/StatisticalPopulation StatisticalPopulation} item that stands for that set of people. The properties {@link https://schema.org/numConstraints numConstraints} and {@link https://schema.org/constrainingProperty constrainingProperty} are used to specify which of the populations properties are used to specify the population. Note that the sense of "population" used here is the general sense of a statistical population, and does not imply that the population consists of people. For example, a {@link https://schema.org/populationType populationType} of {@link https://schema.org/Event Event} or {@link https://schema.org/NewsArticle NewsArticle} could be used. See also {@link https://schema.org/Observation Observation}, and the {@link /docs/data-and-datasets.html data and datasets} overview for more details. */
export declare type StatisticalPopulation = StatisticalPopulationLeaf;
interface StatusEnumerationLeaf extends EnumerationBase {
    "@type": "https://schema.org/StatusEnumeration";
}
/** Lists or enumerations dealing with status types. */
export declare type StatusEnumeration = StatusEnumerationLeaf | ActionStatusType | EventStatusType | GameServerStatus | LegalForceStatus | OrderStatus | PaymentStatusType | ReservationStatusType;
interface SteeringPositionValueLeaf extends QualitativeValueBase {
    "@type": "https://schema.org/SteeringPositionValue";
}
/** A value indicating a steering position. */
export declare type SteeringPositionValue = "https://schema.org/LeftHandDriving" | "https://schema.org/RightHandDriving" | SteeringPositionValueLeaf;
interface StoreLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/Store";
}
/** A retail good store. */
export declare type Store = StoreLeaf | AutoPartsStore | BikeStore | BookStore | ClothingStore | ComputerStore | ConvenienceStore | DepartmentStore | ElectronicsStore | Florist | FurnitureStore | GardenStore | GroceryStore | HardwareStore | HobbyShop | HomeGoodsStore | JewelryStore | LiquorStore | MensClothingStore | MobilePhoneStore | MovieRentalStore | MusicStore | OfficeEquipmentStore | OutletStore | PawnShop | PetStore | ShoeStore | SportingGoodsStore | TireShop | ToyStore | WholesaleStore | string;
interface StructuredValueLeaf extends ThingBase {
    "@type": "https://schema.org/StructuredValue";
}
/** Structured values are used when the value of a property has a more complex structure than simply being a textual value or a reference to another thing. */
export declare type StructuredValue = StructuredValueLeaf | CDCPMDRecord | ContactPoint | DatedMoneySpecification | DefinedRegion | DeliveryTimeSettings | EngineSpecification | ExchangeRateSpecification | GeoCoordinates | GeoShape | InteractionCounter | MonetaryAmount | NutritionInformation | OfferShippingDetails | OpeningHoursSpecification | OwnershipInfo | PostalCodeRangeSpecification | PriceSpecification | PropertyValue | QuantitativeValue | QuantitativeValueDistribution | RepaymentSpecification | ShippingDeliveryTime | ShippingRateSettings | TypeAndQuantityNode | WarrantyPromise;
interface StupidTypeBase extends ThingBase {
    /** This is a StupidProperty! - for testing only */
    "https://schema.org/stupidProperty"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/stupidProperty">;
}
interface StupidTypeLeaf extends StupidTypeBase {
    "@type": "https://schema.org/StupidType";
}
/** A StupidType for testing. */
export declare type StupidType = StupidTypeLeaf;
interface SubscribeActionLeaf extends ActionBase {
    "@type": "https://schema.org/SubscribeAction";
}
/**
 * The act of forming a personal connection with someone/something (object) unidirectionally/asymmetrically to get updates pushed to.
 *
 * Related actions:
 * - {@link https://schema.org/FollowAction FollowAction}: Unlike FollowAction, SubscribeAction implies that the subscriber acts as a passive agent being constantly/actively pushed for updates.
 * - {@link https://schema.org/RegisterAction RegisterAction}: Unlike RegisterAction, SubscribeAction implies that the agent is interested in continuing receiving updates from the object.
 * - {@link https://schema.org/JoinAction JoinAction}: Unlike JoinAction, SubscribeAction implies that the agent is interested in continuing receiving updates from the object.
 */
export declare type SubscribeAction = SubscribeActionLeaf;
interface SubstanceBase extends MedicalEntityBase {
    /** An active ingredient, typically chemical compounds and/or biologic substances. */
    "https://schema.org/activeIngredient"?: SchemaValue<Text, "https://schema.org/activeIngredient">;
    /** Recommended intake of this supplement for a given population as defined by a specific recommending authority. */
    "https://schema.org/maximumIntake"?: SchemaValue<MaximumDoseSchedule | IdReference, "https://schema.org/maximumIntake">;
}
interface SubstanceLeaf extends SubstanceBase {
    "@type": "https://schema.org/Substance";
}
/** Any matter of defined composition that has discrete existence, whose origin may be biological, mineral or chemical. */
export declare type Substance = SubstanceLeaf | DietarySupplement | Drug;
interface SubwayStationLeaf extends CivicStructureBase {
    "@type": "https://schema.org/SubwayStation";
}
/** A subway station. */
export declare type SubwayStation = SubwayStationLeaf | string;
interface SuiteBase extends AccommodationBase {
    /** The type of bed or beds included in the accommodation. For the single case of just one bed of a certain type, you use bed directly with a text. If you want to indicate the quantity of a certain kind of bed, use an instance of BedDetails. For more detailed information, use the amenityFeature property. */
    "https://schema.org/bed"?: SchemaValue<BedDetails | BedType | Text | IdReference, "https://schema.org/bed">;
    /** The number of rooms (excluding bathrooms and closets) of the accommodation or lodging business. Typical unit code(s): ROM for room or C62 for no unit. The type of room can be put in the unitText property of the QuantitativeValue. */
    "https://schema.org/numberOfRooms"?: SchemaValue<Number | QuantitativeValue | IdReference, "https://schema.org/numberOfRooms">;
    /** The allowed total occupancy for the accommodation in persons (including infants etc). For individual accommodations, this is not necessarily the legal maximum but defines the permitted usage as per the contractual agreement (e.g. a double room used by a single person). Typical unit code(s): C62 for person */
    "https://schema.org/occupancy"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/occupancy">;
}
interface SuiteLeaf extends SuiteBase {
    "@type": "https://schema.org/Suite";
}
/**
 * A suite in a hotel or other public accommodation, denotes a class of luxury accommodations, the key feature of which is multiple rooms (Source: Wikipedia, the free encyclopedia, see {@link http://en.wikipedia.org/wiki/Suite_(hotel) http://en.wikipedia.org/wiki/Suite_(hotel)}).
 *
 * See also the {@link /docs/hotels.html dedicated document on the use of schema.org for marking up hotels and other forms of accommodations}.
 */
export declare type Suite = SuiteLeaf | string;
interface SuperficialAnatomyBase extends MedicalEntityBase {
    /** If applicable, a description of the pathophysiology associated with the anatomical system, including potential abnormal changes in the mechanical, physical, and biochemical functions of the system. */
    "https://schema.org/associatedPathophysiology"?: SchemaValue<Text, "https://schema.org/associatedPathophysiology">;
    /** Anatomical systems or structures that relate to the superficial anatomy. */
    "https://schema.org/relatedAnatomy"?: SchemaValue<AnatomicalStructure | AnatomicalSystem | IdReference, "https://schema.org/relatedAnatomy">;
    /** A medical condition associated with this anatomy. */
    "https://schema.org/relatedCondition"?: SchemaValue<MedicalCondition | IdReference, "https://schema.org/relatedCondition">;
    /** A medical therapy related to this anatomy. */
    "https://schema.org/relatedTherapy"?: SchemaValue<MedicalTherapy | IdReference, "https://schema.org/relatedTherapy">;
    /** The significance associated with the superficial anatomy; as an example, how characteristics of the superficial anatomy can suggest underlying medical conditions or courses of treatment. */
    "https://schema.org/significance"?: SchemaValue<Text, "https://schema.org/significance">;
}
interface SuperficialAnatomyLeaf extends SuperficialAnatomyBase {
    "@type": "https://schema.org/SuperficialAnatomy";
}
/** Anatomical features that can be observed by sight (without dissection), including the form and proportions of the human body as well as surface landmarks that correspond to deeper subcutaneous structures. Superficial anatomy plays an important role in sports medicine, phlebotomy, and other medical specialties as underlying anatomical structures can be identified through surface palpation. For example, during back surgery, superficial anatomy can be used to palpate and count vertebrae to find the site of incision. Or in phlebotomy, superficial anatomy can be used to locate an underlying vein; for example, the median cubital vein can be located by palpating the borders of the cubital fossa (such as the epicondyles of the humerus) and then looking for the superficial signs of the vein, such as size, prominence, ability to refill after depression, and feel of surrounding tissue support. As another example, in a subluxation (dislocation) of the glenohumeral joint, the bony structure becomes pronounced with the deltoid muscle failing to cover the glenohumeral joint allowing the edges of the scapula to be superficially visible. Here, the superficial anatomy is the visible edges of the scapula, implying the underlying dislocation of the joint (the related anatomical structure). */
export declare type SuperficialAnatomy = SuperficialAnatomyLeaf;
interface SurgicalProcedureLeaf extends MedicalProcedureBase {
    "@type": "https://schema.org/SurgicalProcedure";
}
/** A medical procedure involving an incision with instruments; performed for diagnose, or therapeutic purposes. */
export declare type SurgicalProcedure = SurgicalProcedureLeaf;
interface SuspendActionLeaf extends ActionBase {
    "@type": "https://schema.org/SuspendAction";
}
/** The act of momentarily pausing a device or application (e.g. pause music playback or pause a timer). */
export declare type SuspendAction = SuspendActionLeaf;
interface SynagogueLeaf extends CivicStructureBase {
    "@type": "https://schema.org/Synagogue";
}
/** A synagogue. */
export declare type Synagogue = SynagogueLeaf | string;
interface TableLeaf extends WebPageElementBase {
    "@type": "https://schema.org/Table";
}
/** A table on a Web page. */
export declare type Table = TableLeaf;
interface TakeActionLeaf extends TransferActionBase {
    "@type": "https://schema.org/TakeAction";
}
/**
 * The act of gaining ownership of an object from an origin. Reciprocal of GiveAction.
 *
 * Related actions:
 * - {@link https://schema.org/GiveAction GiveAction}: The reciprocal of TakeAction.
 * - {@link https://schema.org/ReceiveAction ReceiveAction}: Unlike ReceiveAction, TakeAction implies that ownership has been transfered.
 */
export declare type TakeAction = TakeActionLeaf;
interface TattooParlorLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/TattooParlor";
}
/** A tattoo parlor. */
export declare type TattooParlor = TattooParlorLeaf | string;
interface TaxiLeaf extends ServiceBase {
    "@type": "https://schema.org/Taxi";
}
/**
 * A taxi.
 *
 * @deprecated Use TaxiService instead.
 */
export declare type Taxi = TaxiLeaf;
interface TaxiReservationBase extends ReservationBase {
    /** Number of people the reservation should accommodate. */
    "https://schema.org/partySize"?: SchemaValue<Integer | QuantitativeValue | IdReference, "https://schema.org/partySize">;
    /** Where a taxi will pick up a passenger or a rental car can be picked up. */
    "https://schema.org/pickupLocation"?: SchemaValue<Place | IdReference, "https://schema.org/pickupLocation">;
    /** When a taxi will pickup a passenger or a rental car can be picked up. */
    "https://schema.org/pickupTime"?: SchemaValue<DateTime, "https://schema.org/pickupTime">;
}
interface TaxiReservationLeaf extends TaxiReservationBase {
    "@type": "https://schema.org/TaxiReservation";
}
/**
 * A reservation for a taxi.
 *
 * Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use {@link https://schema.org/Offer Offer}.
 */
export declare type TaxiReservation = TaxiReservationLeaf;
interface TaxiServiceLeaf extends ServiceBase {
    "@type": "https://schema.org/TaxiService";
}
/** A service for a vehicle for hire with a driver for local travel. Fares are usually calculated based on distance traveled. */
export declare type TaxiService = TaxiServiceLeaf;
interface TaxiStandLeaf extends CivicStructureBase {
    "@type": "https://schema.org/TaxiStand";
}
/** A taxi stand. */
export declare type TaxiStand = TaxiStandLeaf | string;
interface TaxonBase extends ThingBase {
    /** Closest child taxa of the taxon in question. */
    "https://schema.org/childTaxon"?: SchemaValue<Taxon | Text | URL | IdReference, "https://schema.org/childTaxon">;
    /** A Defined Term contained in this term set. */
    "https://schema.org/hasDefinedTerm"?: SchemaValue<DefinedTerm | IdReference, "https://schema.org/hasDefinedTerm">;
    /** Closest parent taxon of the taxon in question. */
    "https://schema.org/parentTaxon"?: SchemaValue<Taxon | Text | URL | IdReference, "https://schema.org/parentTaxon">;
    /** The taxonomic rank of this taxon given preferably as a URI from a controlled vocabulary \u2013 (typically the ranks from TDWG TaxonRank ontology or equivalent Wikidata URIs). */
    "https://schema.org/taxonRank"?: SchemaValue<PropertyValue | Text | URL | IdReference, "https://schema.org/taxonRank">;
}
interface TaxonLeaf extends TaxonBase {
    "@type": "https://schema.org/Taxon";
}
/** A set of organisms asserted to represent a natural cohesive biological unit. */
export declare type Taxon = TaxonLeaf;
interface TechArticleBase extends ArticleBase {
    /** Prerequisites needed to fulfill steps in article. */
    "https://schema.org/dependencies"?: SchemaValue<Text, "https://schema.org/dependencies">;
    /** Proficiency needed for this content; expected values: 'Beginner', 'Expert'. */
    "https://schema.org/proficiencyLevel"?: SchemaValue<Text, "https://schema.org/proficiencyLevel">;
}
interface TechArticleLeaf extends TechArticleBase {
    "@type": "https://schema.org/TechArticle";
}
/** A technical article - Example: How-to (task) topics, step-by-step, procedural troubleshooting, specifications, etc. */
export declare type TechArticle = TechArticleLeaf | APIReference;
interface TelevisionChannelLeaf extends BroadcastChannelBase {
    "@type": "https://schema.org/TelevisionChannel";
}
/** A unique instance of a television BroadcastService on a CableOrSatelliteService lineup. */
export declare type TelevisionChannel = TelevisionChannelLeaf;
interface TelevisionStationLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/TelevisionStation";
}
/** A television station. */
export declare type TelevisionStation = TelevisionStationLeaf | string;
interface TennisComplexLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/TennisComplex";
}
/** A tennis complex. */
export declare type TennisComplex = TennisComplexLeaf | string;
interface TextDigitalDocumentLeaf extends DigitalDocumentBase {
    "@type": "https://schema.org/TextDigitalDocument";
}
/** A file composed primarily of text. */
export declare type TextDigitalDocument = TextDigitalDocumentLeaf;
interface TheaterEventLeaf extends EventBase {
    "@type": "https://schema.org/TheaterEvent";
}
/** Event type: Theater performance. */
export declare type TheaterEvent = TheaterEventLeaf;
interface TheaterGroupLeaf extends OrganizationBase {
    "@type": "https://schema.org/TheaterGroup";
}
/** A theater group or company, for example, the Royal Shakespeare Company or Druid Theatre. */
export declare type TheaterGroup = TheaterGroupLeaf | string;
interface TherapeuticProcedureBase extends MedicalProcedureBase {
    /** A possible complication and/or side effect of this therapy. If it is known that an adverse outcome is serious (resulting in death, disability, or permanent damage; requiring hospitalization; or is otherwise life-threatening or requires immediate medical attention), tag it as a seriouseAdverseOutcome instead. */
    "https://schema.org/adverseOutcome"?: SchemaValue<MedicalEntity | IdReference, "https://schema.org/adverseOutcome">;
    /** A dosing schedule for the drug for a given population, either observed, recommended, or maximum dose based on the type used. */
    "https://schema.org/doseSchedule"?: SchemaValue<DoseSchedule | IdReference, "https://schema.org/doseSchedule">;
    /** Specifying a drug or medicine used in a medication procedure. */
    "https://schema.org/drug"?: SchemaValue<Drug | IdReference, "https://schema.org/drug">;
}
interface TherapeuticProcedureLeaf extends TherapeuticProcedureBase {
    "@type": "https://schema.org/TherapeuticProcedure";
}
/** A medical procedure intended primarily for therapeutic purposes, aimed at improving a health condition. */
export declare type TherapeuticProcedure = TherapeuticProcedureLeaf | MedicalTherapy | PsychologicalTreatment;
interface ThesisBase extends CreativeWorkBase {
    /** Qualification, candidature, degree, application that Thesis supports. */
    "https://schema.org/inSupportOf"?: SchemaValue<Text, "https://schema.org/inSupportOf">;
}
interface ThesisLeaf extends ThesisBase {
    "@type": "https://schema.org/Thesis";
}
/** A thesis or dissertation document submitted in support of candidature for an academic degree or professional qualification. */
export declare type Thesis = ThesisLeaf;
interface ThingBase extends Partial<IdReference> {
    /** An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally. */
    "https://schema.org/additionalType"?: SchemaValue<URL, "https://schema.org/additionalType">;
    /** An alias for the item. */
    "https://schema.org/alternateName"?: SchemaValue<Text, "https://schema.org/alternateName">;
    /** A description of the item. */
    "https://schema.org/description"?: SchemaValue<Text, "https://schema.org/description">;
    /** A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation. */
    "https://schema.org/disambiguatingDescription"?: SchemaValue<Text, "https://schema.org/disambiguatingDescription">;
    /** The identifier property represents any kind of identifier for any kind of {@link https://schema.org/Thing Thing}, such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See {@link /docs/datamodel.html#identifierBg background notes} for more details. */
    "https://schema.org/identifier"?: SchemaValue<PropertyValue | Text | URL | IdReference, "https://schema.org/identifier">;
    /** An image of the item. This can be a {@link https://schema.org/URL URL} or a fully described {@link https://schema.org/ImageObject ImageObject}. */
    "https://schema.org/image"?: SchemaValue<ImageObject | URL | IdReference, "https://schema.org/image">;
    /** Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See {@link /docs/datamodel.html#mainEntityBackground background notes} for details. */
    "https://schema.org/mainEntityOfPage"?: SchemaValue<CreativeWork | URL | IdReference, "https://schema.org/mainEntityOfPage">;
    /** The name of the item. */
    "https://schema.org/name"?: SchemaValue<Text, "https://schema.org/name">;
    /** Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role. */
    "https://schema.org/potentialAction"?: SchemaValue<Action | IdReference, "https://schema.org/potentialAction">;
    /** URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website. */
    "https://schema.org/sameAs"?: SchemaValue<URL, "https://schema.org/sameAs">;
    /** A CreativeWork or Event about this Thing. */
    "https://schema.org/subjectOf"?: SchemaValue<CreativeWork | Event | IdReference, "https://schema.org/subjectOf">;
    /** URL of the item. */
    "https://schema.org/url"?: SchemaValue<URL, "https://schema.org/url">;
}
interface ThingLeaf extends ThingBase {
    "@type": "https://schema.org/Thing";
}
/** The most generic type of item. */
export declare type Thing = ThingLeaf | Action | BioChemEntity | CreativeWork | Event | Intangible | MedicalEntity | Organization | Person | Place | Product | StupidType | Taxon;
interface TicketBase extends ThingBase {
    /** The date the ticket was issued. */
    "https://schema.org/dateIssued"?: SchemaValue<Date | DateTime, "https://schema.org/dateIssued">;
    /** The organization issuing the ticket or permit. */
    "https://schema.org/issuedBy"?: SchemaValue<Organization | IdReference, "https://schema.org/issuedBy">;
    /**
     * The currency of the price, or a price component when attached to {@link https://schema.org/PriceSpecification PriceSpecification} and its subtypes.
     *
     * Use standard formats: {@link http://en.wikipedia.org/wiki/ISO_4217 ISO 4217 currency format} e.g. "USD"; {@link https://en.wikipedia.org/wiki/List_of_cryptocurrencies Ticker symbol} for cryptocurrencies e.g. "BTC"; well known names for {@link https://en.wikipedia.org/wiki/Local_exchange_trading_system Local Exchange Tradings Systems} (LETS) and other currency types e.g. "Ithaca HOUR".
     */
    "https://schema.org/priceCurrency"?: SchemaValue<Text, "https://schema.org/priceCurrency">;
    /** The seat associated with the ticket. */
    "https://schema.org/ticketedSeat"?: SchemaValue<Seat | IdReference, "https://schema.org/ticketedSeat">;
    /** The unique identifier for the ticket. */
    "https://schema.org/ticketNumber"?: SchemaValue<Text, "https://schema.org/ticketNumber">;
    /** Reference to an asset (e.g., Barcode, QR code image or PDF) usable for entrance. */
    "https://schema.org/ticketToken"?: SchemaValue<Text | URL, "https://schema.org/ticketToken">;
    /**
     * The total price for the reservation or ticket, including applicable taxes, shipping, etc.
     *
     * Usage guidelines:
     * - Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.
     * - Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
     */
    "https://schema.org/totalPrice"?: SchemaValue<Number | PriceSpecification | Text | IdReference, "https://schema.org/totalPrice">;
    /** The person or organization the reservation or ticket is for. */
    "https://schema.org/underName"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/underName">;
}
interface TicketLeaf extends TicketBase {
    "@type": "https://schema.org/Ticket";
}
/** Used to describe a ticket to an event, a flight, a bus ride, etc. */
export declare type Ticket = TicketLeaf;
interface TieActionLeaf extends ActionBase {
    "@type": "https://schema.org/TieAction";
}
/** The act of reaching a draw in a competitive activity. */
export declare type TieAction = TieActionLeaf;
interface TipActionBase extends TradeActionBase {
    /** A sub property of participant. The participant who is at the receiving end of the action. */
    "https://schema.org/recipient"?: SchemaValue<Audience | ContactPoint | Organization | Person | IdReference, "https://schema.org/recipient">;
}
interface TipActionLeaf extends TipActionBase {
    "@type": "https://schema.org/TipAction";
}
/** The act of giving money voluntarily to a beneficiary in recognition of services rendered. */
export declare type TipAction = TipActionLeaf;
interface TireShopLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/TireShop";
}
/** A tire shop. */
export declare type TireShop = TireShopLeaf | string;
interface TouristAttractionBase extends PlaceBase {
    /** A language someone may use with or at the item, service or place. Please use one of the language codes from the {@link http://tools.ietf.org/html/bcp47 IETF BCP 47 standard}. See also {@link https://schema.org/inLanguage inLanguage} */
    "https://schema.org/availableLanguage"?: SchemaValue<Language | Text | IdReference, "https://schema.org/availableLanguage">;
    /** Attraction suitable for type(s) of tourist. eg. Children, visitors from a particular country, etc. */
    "https://schema.org/touristType"?: SchemaValue<Audience | Text | IdReference, "https://schema.org/touristType">;
}
interface TouristAttractionLeaf extends TouristAttractionBase {
    "@type": "https://schema.org/TouristAttraction";
}
/** A tourist attraction. In principle any Thing can be a {@link https://schema.org/TouristAttraction TouristAttraction}, from a {@link https://schema.org/Mountain Mountain} and {@link https://schema.org/LandmarksOrHistoricalBuildings LandmarksOrHistoricalBuildings} to a {@link https://schema.org/LocalBusiness LocalBusiness}. This Type can be used on its own to describe a general {@link https://schema.org/TouristAttraction TouristAttraction}, or be used as an {@link https://schema.org/additionalType additionalType} to add tourist attraction properties to any other type. (See examples below) */
export declare type TouristAttraction = TouristAttractionLeaf | string;
interface TouristDestinationBase extends PlaceBase {
    /** Attraction located at destination. */
    "https://schema.org/includesAttraction"?: SchemaValue<TouristAttraction | IdReference, "https://schema.org/includesAttraction">;
    /** Attraction suitable for type(s) of tourist. eg. Children, visitors from a particular country, etc. */
    "https://schema.org/touristType"?: SchemaValue<Audience | Text | IdReference, "https://schema.org/touristType">;
}
interface TouristDestinationLeaf extends TouristDestinationBase {
    "@type": "https://schema.org/TouristDestination";
}
/** A tourist destination. In principle any {@link https://schema.org/Place Place} can be a {@link https://schema.org/TouristDestination TouristDestination} from a {@link https://schema.org/City City}, Region or {@link https://schema.org/Country Country} to an {@link https://schema.org/AmusementPark AmusementPark} or {@link https://schema.org/Hotel Hotel}. This Type can be used on its own to describe a general {@link https://schema.org/TouristDestination TouristDestination}, or be used as an {@link https://schema.org/additionalType additionalType} to add tourist relevant properties to any other {@link https://schema.org/Place Place}. A {@link https://schema.org/TouristDestination TouristDestination} is defined as a {@link https://schema.org/Place Place} that contains, or is colocated with, one or more {@link https://schema.org/TouristAttraction TouristAttraction}s, often linked by a similar theme or interest to a particular {@link https://schema.org/touristType touristType}. The {@link http://www2.unwto.org/ UNWTO} defines Destination (main destination of a tourism trip) as the place visited that is central to the decision to take the trip. (See examples below). */
export declare type TouristDestination = TouristDestinationLeaf | string;
interface TouristInformationCenterLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/TouristInformationCenter";
}
/** A tourist information center. */
export declare type TouristInformationCenter = TouristInformationCenterLeaf | string;
interface TouristTripBase extends TripBase {
    /** Attraction suitable for type(s) of tourist. eg. Children, visitors from a particular country, etc. */
    "https://schema.org/touristType"?: SchemaValue<Audience | Text | IdReference, "https://schema.org/touristType">;
}
interface TouristTripLeaf extends TouristTripBase {
    "@type": "https://schema.org/TouristTrip";
}
/** A tourist trip. A created itinerary of visits to one or more places of interest ({@link https://schema.org/TouristAttraction TouristAttraction}/{@link https://schema.org/TouristDestination TouristDestination}) often linked by a similar theme, geographic area, or interest to a particular {@link https://schema.org/touristType touristType}. The {@link http://www2.unwto.org/ UNWTO} defines tourism trip as the Trip taken by visitors. (See examples below). */
export declare type TouristTrip = TouristTripLeaf;
interface ToyStoreLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/ToyStore";
}
/** A toy store. */
export declare type ToyStore = ToyStoreLeaf | string;
interface TrackActionBase extends ActionBase {
    /** A sub property of instrument. The method of delivery. */
    "https://schema.org/deliveryMethod"?: SchemaValue<DeliveryMethod | IdReference, "https://schema.org/deliveryMethod">;
}
interface TrackActionLeaf extends TrackActionBase {
    "@type": "https://schema.org/TrackAction";
}
/**
 * An agent tracks an object for updates.
 *
 * Related actions:
 * - {@link https://schema.org/FollowAction FollowAction}: Unlike FollowAction, TrackAction refers to the interest on the location of innanimates objects.
 * - {@link https://schema.org/SubscribeAction SubscribeAction}: Unlike SubscribeAction, TrackAction refers to the interest on the location of innanimate objects.
 */
export declare type TrackAction = TrackActionLeaf;
interface TradeActionBase extends ActionBase {
    /**
     * The offer price of a product, or of a price component when attached to PriceSpecification and its subtypes.
     *
     * Usage guidelines:
     * - Use the {@link https://schema.org/priceCurrency priceCurrency} property (with standard formats: {@link http://en.wikipedia.org/wiki/ISO_4217 ISO 4217 currency format} e.g. "USD"; {@link https://en.wikipedia.org/wiki/List_of_cryptocurrencies Ticker symbol} for cryptocurrencies e.g. "BTC"; well known names for {@link https://en.wikipedia.org/wiki/Local_exchange_trading_system Local Exchange Tradings Systems} (LETS) and other currency types e.g. "Ithaca HOUR") instead of including {@link http://en.wikipedia.org/wiki/Dollar_sign#Currencies_that_use_the_dollar_or_peso_sign ambiguous symbols} such as '$' in the value.
     * - Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
     * - Note that both {@link http://www.w3.org/TR/xhtml-rdfa-primer/#using-the-content-attribute RDFa} and Microdata syntax allow the use of a "content=" attribute for publishing simple machine-readable values alongside more human-friendly formatting.
     * - Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.
     */
    "https://schema.org/price"?: SchemaValue<Number | Text, "https://schema.org/price">;
    /**
     * The currency of the price, or a price component when attached to {@link https://schema.org/PriceSpecification PriceSpecification} and its subtypes.
     *
     * Use standard formats: {@link http://en.wikipedia.org/wiki/ISO_4217 ISO 4217 currency format} e.g. "USD"; {@link https://en.wikipedia.org/wiki/List_of_cryptocurrencies Ticker symbol} for cryptocurrencies e.g. "BTC"; well known names for {@link https://en.wikipedia.org/wiki/Local_exchange_trading_system Local Exchange Tradings Systems} (LETS) and other currency types e.g. "Ithaca HOUR".
     */
    "https://schema.org/priceCurrency"?: SchemaValue<Text, "https://schema.org/priceCurrency">;
    /** One or more detailed price specifications, indicating the unit price and delivery or payment charges. */
    "https://schema.org/priceSpecification"?: SchemaValue<PriceSpecification | IdReference, "https://schema.org/priceSpecification">;
}
interface TradeActionLeaf extends TradeActionBase {
    "@type": "https://schema.org/TradeAction";
}
/** The act of participating in an exchange of goods and services for monetary compensation. An agent trades an object, product or service with a participant in exchange for a one time or periodic payment. */
export declare type TradeAction = TradeActionLeaf | BuyAction | DonateAction | OrderAction | PayAction | PreOrderAction | QuoteAction | RentAction | SellAction | TipAction;
interface TrainReservationLeaf extends ReservationBase {
    "@type": "https://schema.org/TrainReservation";
}
/**
 * A reservation for train travel.
 *
 * Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use {@link https://schema.org/Offer Offer}.
 */
export declare type TrainReservation = TrainReservationLeaf;
interface TrainStationLeaf extends CivicStructureBase {
    "@type": "https://schema.org/TrainStation";
}
/** A train station. */
export declare type TrainStation = TrainStationLeaf | string;
interface TrainTripBase extends TripBase {
    /** The platform where the train arrives. */
    "https://schema.org/arrivalPlatform"?: SchemaValue<Text, "https://schema.org/arrivalPlatform">;
    /** The station where the train trip ends. */
    "https://schema.org/arrivalStation"?: SchemaValue<TrainStation | IdReference, "https://schema.org/arrivalStation">;
    /** The platform from which the train departs. */
    "https://schema.org/departurePlatform"?: SchemaValue<Text, "https://schema.org/departurePlatform">;
    /** The station from which the train departs. */
    "https://schema.org/departureStation"?: SchemaValue<TrainStation | IdReference, "https://schema.org/departureStation">;
    /** The name of the train (e.g. The Orient Express). */
    "https://schema.org/trainName"?: SchemaValue<Text, "https://schema.org/trainName">;
    /** The unique identifier for the train. */
    "https://schema.org/trainNumber"?: SchemaValue<Text, "https://schema.org/trainNumber">;
}
interface TrainTripLeaf extends TrainTripBase {
    "@type": "https://schema.org/TrainTrip";
}
/** A trip on a commercial train line. */
export declare type TrainTrip = TrainTripLeaf;
interface TransferActionBase extends ActionBase {
    /** A sub property of location. The original location of the object or the agent before the action. */
    "https://schema.org/fromLocation"?: SchemaValue<Place | IdReference, "https://schema.org/fromLocation">;
    /** A sub property of location. The final location of the object or the agent after the action. */
    "https://schema.org/toLocation"?: SchemaValue<Place | IdReference, "https://schema.org/toLocation">;
}
interface TransferActionLeaf extends TransferActionBase {
    "@type": "https://schema.org/TransferAction";
}
/** The act of transferring/moving (abstract or concrete) animate or inanimate objects from one place to another. */
export declare type TransferAction = TransferActionLeaf | BorrowAction | DownloadAction | GiveAction | LendAction | MoneyTransfer | ReceiveAction | ReturnAction | SendAction | TakeAction;
interface TravelActionBase extends MoveActionBase {
    /** The distance travelled, e.g. exercising or travelling. */
    "https://schema.org/distance"?: SchemaValue<Distance | IdReference, "https://schema.org/distance">;
}
interface TravelActionLeaf extends TravelActionBase {
    "@type": "https://schema.org/TravelAction";
}
/** The act of traveling from an fromLocation to a destination by a specified mode of transport, optionally with participants. */
export declare type TravelAction = TravelActionLeaf;
interface TravelAgencyLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/TravelAgency";
}
/** A travel agency. */
export declare type TravelAgency = TravelAgencyLeaf | string;
interface TreatmentIndicationLeaf extends MedicalEntityBase {
    "@type": "https://schema.org/TreatmentIndication";
}
/** An indication for treating an underlying condition, symptom, etc. */
export declare type TreatmentIndication = TreatmentIndicationLeaf;
interface TripBase extends ThingBase {
    /** The expected arrival time. */
    "https://schema.org/arrivalTime"?: SchemaValue<DateTime | Time, "https://schema.org/arrivalTime">;
    /** The expected departure time. */
    "https://schema.org/departureTime"?: SchemaValue<DateTime | Time, "https://schema.org/departureTime">;
    /** Destination(s) ( {@link https://schema.org/Place Place} ) that make up a trip. For a trip where destination order is important use {@link https://schema.org/ItemList ItemList} to specify that order (see examples). */
    "https://schema.org/itinerary"?: SchemaValue<ItemList | Place | IdReference, "https://schema.org/itinerary">;
    /** An offer to provide this item—for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use {@link https://schema.org/businessFunction businessFunction} to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a {@link https://schema.org/Demand Demand}. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer. */
    "https://schema.org/offers"?: SchemaValue<Demand | Offer | IdReference, "https://schema.org/offers">;
    /** Identifies that this {@link https://schema.org/Trip Trip} is a subTrip of another Trip. For example Day 1, Day 2, etc. of a multi-day trip. */
    "https://schema.org/partOfTrip"?: SchemaValue<Trip | IdReference, "https://schema.org/partOfTrip">;
    /** The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller. */
    "https://schema.org/provider"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/provider">;
    /** Identifies a {@link https://schema.org/Trip Trip} that is a subTrip of this Trip. For example Day 1, Day 2, etc. of a multi-day trip. */
    "https://schema.org/subTrip"?: SchemaValue<Trip | IdReference, "https://schema.org/subTrip">;
}
interface TripLeaf extends TripBase {
    "@type": "https://schema.org/Trip";
}
/** A trip or journey. An itinerary of visits to one or more places. */
export declare type Trip = TripLeaf | BoatTrip | BusTrip | Flight | TouristTrip | TrainTrip;
interface TVClipBase extends ClipBase {
    /**
     * The TV series to which this episode or season belongs.
     *
     * @deprecated Consider using https://schema.org/partOfSeries instead.
     */
    "https://schema.org/partOfTVSeries"?: SchemaValue<TVSeries | IdReference, "https://schema.org/partOfTVSeries">;
}
interface TVClipLeaf extends TVClipBase {
    "@type": "https://schema.org/TVClip";
}
/** A short TV program or a segment/part of a TV program. */
export declare type TVClip = TVClipLeaf;
interface TVEpisodeBase extends EpisodeBase {
    /**
     * The country of origin of something, including products as well as creative works such as movie and TV content.
     *
     * In the case of TV and movie, this would be the country of the principle offices of the production company or individual responsible for the movie. For other kinds of {@link https://schema.org/CreativeWork CreativeWork} it is difficult to provide fully general guidance, and properties such as {@link https://schema.org/contentLocation contentLocation} and {@link https://schema.org/locationCreated locationCreated} may be more applicable.
     *
     * In the case of products, the country of origin of the product. The exact interpretation of this may vary by context and product type, and cannot be fully enumerated here.
     */
    "https://schema.org/countryOfOrigin"?: SchemaValue<Country | IdReference, "https://schema.org/countryOfOrigin">;
    /**
     * The TV series to which this episode or season belongs.
     *
     * @deprecated Consider using https://schema.org/partOfSeries instead.
     */
    "https://schema.org/partOfTVSeries"?: SchemaValue<TVSeries | IdReference, "https://schema.org/partOfTVSeries">;
    /** Languages in which subtitles/captions are available, in {@link http://tools.ietf.org/html/bcp47 IETF BCP 47 standard format}. */
    "https://schema.org/subtitleLanguage"?: SchemaValue<Language | Text | IdReference, "https://schema.org/subtitleLanguage">;
    /**
     * An {@link https://eidr.org/ EIDR} (Entertainment Identifier Registry) {@link https://schema.org/identifier identifier} representing at the most general/abstract level, a work of film or television.
     *
     * For example, the motion picture known as "Ghostbusters" has a titleEIDR of "10.5240/7EC7-228A-510A-053E-CBB8-J". This title (or work) may have several variants, which EIDR calls "edits". See {@link https://schema.org/editEIDR editEIDR}.
     *
     * Since schema.org types like {@link https://schema.org/Movie Movie} and {@link https://schema.org/TVEpisode TVEpisode} can be used for both works and their multiple expressions, it is possible to use {@link https://schema.org/titleEIDR titleEIDR} alone (for a general description), or alongside {@link https://schema.org/editEIDR editEIDR} for a more edit-specific description.
     */
    "https://schema.org/titleEIDR"?: SchemaValue<Text | URL, "https://schema.org/titleEIDR">;
}
interface TVEpisodeLeaf extends TVEpisodeBase {
    "@type": "https://schema.org/TVEpisode";
}
/** A TV episode which can be part of a series or season. */
export declare type TVEpisode = TVEpisodeLeaf;
interface TVSeasonBase extends CreativeWorkBase, CreativeWorkSeasonBase {
    /**
     * The country of origin of something, including products as well as creative works such as movie and TV content.
     *
     * In the case of TV and movie, this would be the country of the principle offices of the production company or individual responsible for the movie. For other kinds of {@link https://schema.org/CreativeWork CreativeWork} it is difficult to provide fully general guidance, and properties such as {@link https://schema.org/contentLocation contentLocation} and {@link https://schema.org/locationCreated locationCreated} may be more applicable.
     *
     * In the case of products, the country of origin of the product. The exact interpretation of this may vary by context and product type, and cannot be fully enumerated here.
     */
    "https://schema.org/countryOfOrigin"?: SchemaValue<Country | IdReference, "https://schema.org/countryOfOrigin">;
    /**
     * The TV series to which this episode or season belongs.
     *
     * @deprecated Consider using https://schema.org/partOfSeries instead.
     */
    "https://schema.org/partOfTVSeries"?: SchemaValue<TVSeries | IdReference, "https://schema.org/partOfTVSeries">;
}
interface TVSeasonLeaf extends TVSeasonBase {
    "@type": "https://schema.org/TVSeason";
}
/** Season dedicated to TV broadcast and associated online delivery. */
export declare type TVSeason = TVSeasonLeaf;
interface TVSeriesBase extends CreativeWorkSeriesBase, CreativeWorkBase {
    /** An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip. */
    "https://schema.org/actor"?: SchemaValue<Person | IdReference, "https://schema.org/actor">;
    /**
     * An actor, e.g. in tv, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip.
     *
     * @deprecated Consider using https://schema.org/actor instead.
     */
    "https://schema.org/actors"?: SchemaValue<Person | IdReference, "https://schema.org/actors">;
    /** A season that is part of the media series. */
    "https://schema.org/containsSeason"?: SchemaValue<CreativeWorkSeason | IdReference, "https://schema.org/containsSeason">;
    /**
     * The country of origin of something, including products as well as creative works such as movie and TV content.
     *
     * In the case of TV and movie, this would be the country of the principle offices of the production company or individual responsible for the movie. For other kinds of {@link https://schema.org/CreativeWork CreativeWork} it is difficult to provide fully general guidance, and properties such as {@link https://schema.org/contentLocation contentLocation} and {@link https://schema.org/locationCreated locationCreated} may be more applicable.
     *
     * In the case of products, the country of origin of the product. The exact interpretation of this may vary by context and product type, and cannot be fully enumerated here.
     */
    "https://schema.org/countryOfOrigin"?: SchemaValue<Country | IdReference, "https://schema.org/countryOfOrigin">;
    /** A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip. */
    "https://schema.org/director"?: SchemaValue<Person | IdReference, "https://schema.org/director">;
    /**
     * A director of e.g. tv, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip.
     *
     * @deprecated Consider using https://schema.org/director instead.
     */
    "https://schema.org/directors"?: SchemaValue<Person | IdReference, "https://schema.org/directors">;
    /** An episode of a tv, radio or game media within a series or season. */
    "https://schema.org/episode"?: SchemaValue<Episode | IdReference, "https://schema.org/episode">;
    /**
     * An episode of a TV/radio series or season.
     *
     * @deprecated Consider using https://schema.org/episode instead.
     */
    "https://schema.org/episodes"?: SchemaValue<Episode | IdReference, "https://schema.org/episodes">;
    /** The composer of the soundtrack. */
    "https://schema.org/musicBy"?: SchemaValue<MusicGroup | Person | IdReference, "https://schema.org/musicBy">;
    /** The number of episodes in this season or series. */
    "https://schema.org/numberOfEpisodes"?: SchemaValue<Integer, "https://schema.org/numberOfEpisodes">;
    /** The number of seasons in this series. */
    "https://schema.org/numberOfSeasons"?: SchemaValue<Integer, "https://schema.org/numberOfSeasons">;
    /** The production company or studio responsible for the item e.g. series, video game, episode etc. */
    "https://schema.org/productionCompany"?: SchemaValue<Organization | IdReference, "https://schema.org/productionCompany">;
    /**
     * A season in a media series.
     *
     * @deprecated Consider using https://schema.org/containsSeason instead.
     */
    "https://schema.org/season"?: SchemaValue<CreativeWorkSeason | URL | IdReference, "https://schema.org/season">;
    /**
     * A season in a media series.
     *
     * @deprecated Consider using https://schema.org/season instead.
     */
    "https://schema.org/seasons"?: SchemaValue<CreativeWorkSeason | IdReference, "https://schema.org/seasons">;
    /** The trailer of a movie or tv/radio series, season, episode, etc. */
    "https://schema.org/trailer"?: SchemaValue<VideoObject | IdReference, "https://schema.org/trailer">;
}
interface TVSeriesLeaf extends TVSeriesBase {
    "@type": "https://schema.org/TVSeries";
}
/** CreativeWorkSeries dedicated to TV broadcast and associated online delivery. */
export declare type TVSeries = TVSeriesLeaf;
interface TypeAndQuantityNodeBase extends ThingBase {
    /** The quantity of the goods included in the offer. */
    "https://schema.org/amountOfThisGood"?: SchemaValue<Number, "https://schema.org/amountOfThisGood">;
    /** The business function (e.g. sell, lease, repair, dispose) of the offer or component of a bundle (TypeAndQuantityNode). The default is http://purl.org/goodrelations/v1#Sell. */
    "https://schema.org/businessFunction"?: SchemaValue<BusinessFunction | IdReference, "https://schema.org/businessFunction">;
    /** The product that this structured value is referring to. */
    "https://schema.org/typeOfGood"?: SchemaValue<Product | Service | IdReference, "https://schema.org/typeOfGood">;
    /** The unit of measurement given using the UN/CEFACT Common Code (3 characters) or a URL. Other codes than the UN/CEFACT Common Code may be used with a prefix followed by a colon. */
    "https://schema.org/unitCode"?: SchemaValue<Text | URL, "https://schema.org/unitCode">;
    /** A string or text indicating the unit of measurement. Useful if you cannot provide a standard unit code for {@link unitCode unitCode}. */
    "https://schema.org/unitText"?: SchemaValue<Text, "https://schema.org/unitText">;
}
interface TypeAndQuantityNodeLeaf extends TypeAndQuantityNodeBase {
    "@type": "https://schema.org/TypeAndQuantityNode";
}
/** A structured value indicating the quantity, unit of measurement, and business function of goods included in a bundle offer. */
export declare type TypeAndQuantityNode = TypeAndQuantityNodeLeaf;
interface UKNonprofitTypeLeaf extends EnumerationBase {
    "@type": "https://schema.org/UKNonprofitType";
}
/** UKNonprofitType: Non-profit organization type originating from the United Kingdom. */
export declare type UKNonprofitType = "https://schema.org/CharitableIncorporatedOrganization" | "https://schema.org/LimitedByGuaranteeCharity" | "https://schema.org/UKTrust" | "https://schema.org/UnincorporatedAssociationCharity" | UKNonprofitTypeLeaf;
interface UnitPriceSpecificationBase extends PriceSpecificationBase {
    /** Specifies for how long this price (or price component) will be billed. Can be used, for example, to model the contractual duration of a subscription or payment plan. Type can be either a Duration or a Number (in which case the unit of measurement, for example month, is specified by the unitCode property). */
    "https://schema.org/billingDuration"?: SchemaValue<Duration | Number | QuantitativeValue | IdReference, "https://schema.org/billingDuration">;
    /** This property specifies the minimal quantity and rounding increment that will be the basis for the billing. The unit of measurement is specified by the unitCode property. */
    "https://schema.org/billingIncrement"?: SchemaValue<Number, "https://schema.org/billingIncrement">;
    /** Specifies after how much time this price (or price component) becomes valid and billing starts. Can be used, for example, to model a price increase after the first year of a subscription. The unit of measurement is specified by the unitCode property. */
    "https://schema.org/billingStart"?: SchemaValue<Number, "https://schema.org/billingStart">;
    /** Identifies a price component (for example, a line item on an invoice), part of the total price for an offer. */
    "https://schema.org/priceComponentType"?: SchemaValue<PriceComponentTypeEnumeration | IdReference, "https://schema.org/priceComponentType">;
    /** Defines the type of a price specified for an offered product, for example a list price, a (temporary) sale price or a manufacturer suggested retail price. If multiple prices are specified for an offer the {@link https://schema.org/priceType priceType} property can be used to identify the type of each such specified price. The value of priceType can be specified as a value from enumeration PriceTypeEnumeration or as a free form text string for price types that are not already predefined in PriceTypeEnumeration. */
    "https://schema.org/priceType"?: SchemaValue<PriceTypeEnumeration | Text | IdReference, "https://schema.org/priceType">;
    /** The reference quantity for which a certain price applies, e.g. 1 EUR per 4 kWh of electricity. This property is a replacement for unitOfMeasurement for the advanced cases where the price does not relate to a standard unit. */
    "https://schema.org/referenceQuantity"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/referenceQuantity">;
    /** The unit of measurement given using the UN/CEFACT Common Code (3 characters) or a URL. Other codes than the UN/CEFACT Common Code may be used with a prefix followed by a colon. */
    "https://schema.org/unitCode"?: SchemaValue<Text | URL, "https://schema.org/unitCode">;
    /** A string or text indicating the unit of measurement. Useful if you cannot provide a standard unit code for {@link unitCode unitCode}. */
    "https://schema.org/unitText"?: SchemaValue<Text, "https://schema.org/unitText">;
}
interface UnitPriceSpecificationLeaf extends UnitPriceSpecificationBase {
    "@type": "https://schema.org/UnitPriceSpecification";
}
/** The price asked for a given offer by the respective organization or person. */
export declare type UnitPriceSpecification = UnitPriceSpecificationLeaf;
interface UnRegisterActionLeaf extends ActionBase {
    "@type": "https://schema.org/UnRegisterAction";
}
/**
 * The act of un-registering from a service.
 *
 * Related actions:
 * - {@link https://schema.org/RegisterAction RegisterAction}: antonym of UnRegisterAction.
 * - {@link https://schema.org/LeaveAction LeaveAction}: Unlike LeaveAction, UnRegisterAction implies that you are unregistering from a service you werer previously registered, rather than leaving a team/group of people.
 */
export declare type UnRegisterAction = UnRegisterActionLeaf;
interface UpdateActionBase extends ActionBase {
    /**
     * A sub property of object. The collection target of the action.
     *
     * @deprecated Consider using https://schema.org/targetCollection instead.
     */
    "https://schema.org/collection"?: SchemaValue<Thing | IdReference, "https://schema.org/collection">;
    /** A sub property of object. The collection target of the action. */
    "https://schema.org/targetCollection"?: SchemaValue<Thing | IdReference, "https://schema.org/targetCollection">;
}
interface UpdateActionLeaf extends UpdateActionBase {
    "@type": "https://schema.org/UpdateAction";
}
/** The act of managing by changing/editing the state of the object. */
export declare type UpdateAction = UpdateActionLeaf | AddAction | DeleteAction | ReplaceAction;
/** Data type: URL. */
export declare type URL = string;
interface UseActionLeaf extends ConsumeActionBase {
    "@type": "https://schema.org/UseAction";
}
/** The act of applying an object to its intended purpose. */
export declare type UseAction = UseActionLeaf | WearAction;
interface UserBlocksLeaf extends EventBase {
    "@type": "https://schema.org/UserBlocks";
}
/**
 * UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use {@link https://schema.org/Action Action}-based vocabulary, alongside types such as {@link https://schema.org/Comment Comment}.
 *
 * @deprecated Use InteractionCounter instead.
 */
export declare type UserBlocks = UserBlocksLeaf;
interface UserCheckinsLeaf extends EventBase {
    "@type": "https://schema.org/UserCheckins";
}
/**
 * UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use {@link https://schema.org/Action Action}-based vocabulary, alongside types such as {@link https://schema.org/Comment Comment}.
 *
 * @deprecated Use InteractionCounter instead.
 */
export declare type UserCheckins = UserCheckinsLeaf;
interface UserCommentsBase extends EventBase {
    /** The text of the UserComment. */
    "https://schema.org/commentText"?: SchemaValue<Text, "https://schema.org/commentText">;
    /** The time at which the UserComment was made. */
    "https://schema.org/commentTime"?: SchemaValue<Date | DateTime, "https://schema.org/commentTime">;
    /** The creator/author of this CreativeWork. This is the same as the Author property for CreativeWork. */
    "https://schema.org/creator"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/creator">;
    /** Specifies the CreativeWork associated with the UserComment. */
    "https://schema.org/discusses"?: SchemaValue<CreativeWork | IdReference, "https://schema.org/discusses">;
    /** The URL at which a reply may be posted to the specified UserComment. */
    "https://schema.org/replyToUrl"?: SchemaValue<URL, "https://schema.org/replyToUrl">;
}
interface UserCommentsLeaf extends UserCommentsBase {
    "@type": "https://schema.org/UserComments";
}
/**
 * UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use {@link https://schema.org/Action Action}-based vocabulary, alongside types such as {@link https://schema.org/Comment Comment}.
 *
 * @deprecated Use InteractionCounter instead.
 */
export declare type UserComments = UserCommentsLeaf;
interface UserDownloadsLeaf extends EventBase {
    "@type": "https://schema.org/UserDownloads";
}
/**
 * UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use {@link https://schema.org/Action Action}-based vocabulary, alongside types such as {@link https://schema.org/Comment Comment}.
 *
 * @deprecated Use InteractionCounter instead.
 */
export declare type UserDownloads = UserDownloadsLeaf;
interface UserInteractionLeaf extends EventBase {
    "@type": "https://schema.org/UserInteraction";
}
/**
 * UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use {@link https://schema.org/Action Action}-based vocabulary, alongside types such as {@link https://schema.org/Comment Comment}.
 *
 * @deprecated Use InteractionCounter instead.
 */
export declare type UserInteraction = UserInteractionLeaf | UserBlocks | UserCheckins | UserComments | UserDownloads | UserLikes | UserPageVisits | UserPlays | UserPlusOnes | UserTweets;
interface UserLikesLeaf extends EventBase {
    "@type": "https://schema.org/UserLikes";
}
/**
 * UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use {@link https://schema.org/Action Action}-based vocabulary, alongside types such as {@link https://schema.org/Comment Comment}.
 *
 * @deprecated Use InteractionCounter instead.
 */
export declare type UserLikes = UserLikesLeaf;
interface UserPageVisitsLeaf extends EventBase {
    "@type": "https://schema.org/UserPageVisits";
}
/**
 * UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use {@link https://schema.org/Action Action}-based vocabulary, alongside types such as {@link https://schema.org/Comment Comment}.
 *
 * @deprecated Use InteractionCounter instead.
 */
export declare type UserPageVisits = UserPageVisitsLeaf;
interface UserPlaysLeaf extends EventBase {
    "@type": "https://schema.org/UserPlays";
}
/**
 * UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use {@link https://schema.org/Action Action}-based vocabulary, alongside types such as {@link https://schema.org/Comment Comment}.
 *
 * @deprecated Use InteractionCounter instead.
 */
export declare type UserPlays = UserPlaysLeaf;
interface UserPlusOnesLeaf extends EventBase {
    "@type": "https://schema.org/UserPlusOnes";
}
/**
 * UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use {@link https://schema.org/Action Action}-based vocabulary, alongside types such as {@link https://schema.org/Comment Comment}.
 *
 * @deprecated Use InteractionCounter instead.
 */
export declare type UserPlusOnes = UserPlusOnesLeaf;
interface UserReviewLeaf extends ReviewBase {
    "@type": "https://schema.org/UserReview";
}
/** A review created by an end-user (e.g. consumer, purchaser, attendee etc.), in contrast with {@link https://schema.org/CriticReview CriticReview}. */
export declare type UserReview = UserReviewLeaf;
interface UserTweetsLeaf extends EventBase {
    "@type": "https://schema.org/UserTweets";
}
/**
 * UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use {@link https://schema.org/Action Action}-based vocabulary, alongside types such as {@link https://schema.org/Comment Comment}.
 *
 * @deprecated Use InteractionCounter instead.
 */
export declare type UserTweets = UserTweetsLeaf;
interface USNonprofitTypeLeaf extends EnumerationBase {
    "@type": "https://schema.org/USNonprofitType";
}
/** USNonprofitType: Non-profit organization type originating from the United States. */
export declare type USNonprofitType = "https://schema.org/Nonprofit501a" | "https://schema.org/Nonprofit501c1" | "https://schema.org/Nonprofit501c10" | "https://schema.org/Nonprofit501c11" | "https://schema.org/Nonprofit501c12" | "https://schema.org/Nonprofit501c13" | "https://schema.org/Nonprofit501c14" | "https://schema.org/Nonprofit501c15" | "https://schema.org/Nonprofit501c16" | "https://schema.org/Nonprofit501c17" | "https://schema.org/Nonprofit501c18" | "https://schema.org/Nonprofit501c19" | "https://schema.org/Nonprofit501c2" | "https://schema.org/Nonprofit501c20" | "https://schema.org/Nonprofit501c21" | "https://schema.org/Nonprofit501c22" | "https://schema.org/Nonprofit501c23" | "https://schema.org/Nonprofit501c24" | "https://schema.org/Nonprofit501c25" | "https://schema.org/Nonprofit501c26" | "https://schema.org/Nonprofit501c27" | "https://schema.org/Nonprofit501c28" | "https://schema.org/Nonprofit501c3" | "https://schema.org/Nonprofit501c4" | "https://schema.org/Nonprofit501c5" | "https://schema.org/Nonprofit501c6" | "https://schema.org/Nonprofit501c7" | "https://schema.org/Nonprofit501c8" | "https://schema.org/Nonprofit501c9" | "https://schema.org/Nonprofit501d" | "https://schema.org/Nonprofit501e" | "https://schema.org/Nonprofit501f" | "https://schema.org/Nonprofit501k" | "https://schema.org/Nonprofit501n" | "https://schema.org/Nonprofit501q" | "https://schema.org/Nonprofit527" | USNonprofitTypeLeaf;
interface VehicleBase extends ProductBase {
    /**
     * The time needed to accelerate the vehicle from a given start velocity to a given target velocity.
     *
     * Typical unit code(s): SEC for seconds
     * - Note: There are unfortunately no standard unit codes for seconds/0..100 km/h or seconds/0..60 mph. Simply use "SEC" for seconds and indicate the velocities in the {@link https://schema.org/name name} of the {@link https://schema.org/QuantitativeValue QuantitativeValue}, or use {@link https://schema.org/valueReference valueReference} with a {@link https://schema.org/QuantitativeValue QuantitativeValue} of 0..60 mph or 0..100 km/h to specify the reference speeds.
     */
    "https://schema.org/accelerationTime"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/accelerationTime">;
    /** Indicates the design and body style of the vehicle (e.g. station wagon, hatchback, etc.). */
    "https://schema.org/bodyType"?: SchemaValue<QualitativeValue | Text | URL | IdReference, "https://schema.org/bodyType">;
    /** A {@link https://en.wikipedia.org/wiki/Call_sign callsign}, as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles. */
    "https://schema.org/callSign"?: SchemaValue<Text, "https://schema.org/callSign">;
    /**
     * The available volume for cargo or luggage. For automobiles, this is usually the trunk volume.
     *
     * Typical unit code(s): LTR for liters, FTQ for cubic foot/feet
     *
     * Note: You can use {@link https://schema.org/minValue minValue} and {@link https://schema.org/maxValue maxValue} to indicate ranges.
     */
    "https://schema.org/cargoVolume"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/cargoVolume">;
    /** The date of the first registration of the vehicle with the respective public authorities. */
    "https://schema.org/dateVehicleFirstRegistered"?: SchemaValue<Date, "https://schema.org/dateVehicleFirstRegistered">;
    /** The drive wheel configuration, i.e. which roadwheels will receive torque from the vehicle's engine via the drivetrain. */
    "https://schema.org/driveWheelConfiguration"?: SchemaValue<DriveWheelConfigurationValue | Text | IdReference, "https://schema.org/driveWheelConfiguration">;
    /** The CO2 emissions in g/km. When used in combination with a QuantitativeValue, put "g/km" into the unitText property of that value, since there is no UN/CEFACT Common Code for "g/km". */
    "https://schema.org/emissionsCO2"?: SchemaValue<Number, "https://schema.org/emissionsCO2">;
    /**
     * The capacity of the fuel tank or in the case of electric cars, the battery. If there are multiple components for storage, this should indicate the total of all storage of the same type.
     *
     * Typical unit code(s): LTR for liters, GLL of US gallons, GLI for UK / imperial gallons, AMH for ampere-hours (for electrical vehicles).
     */
    "https://schema.org/fuelCapacity"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/fuelCapacity">;
    /**
     * The amount of fuel consumed for traveling a particular distance or temporal duration with the given vehicle (e.g. liters per 100 km).
     * - Note 1: There are unfortunately no standard unit codes for liters per 100 km. Use {@link https://schema.org/unitText unitText} to indicate the unit of measurement, e.g. L/100 km.
     * - Note 2: There are two ways of indicating the fuel consumption, {@link https://schema.org/fuelConsumption fuelConsumption} (e.g. 8 liters per 100 km) and {@link https://schema.org/fuelEfficiency fuelEfficiency} (e.g. 30 miles per gallon). They are reciprocal.
     * - Note 3: Often, the absolute value is useful only when related to driving speed ("at 80 km/h") or usage pattern ("city traffic"). You can use {@link https://schema.org/valueReference valueReference} to link the value for the fuel consumption to another value.
     */
    "https://schema.org/fuelConsumption"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/fuelConsumption">;
    /**
     * The distance traveled per unit of fuel used; most commonly miles per gallon (mpg) or kilometers per liter (km/L).
     * - Note 1: There are unfortunately no standard unit codes for miles per gallon or kilometers per liter. Use {@link https://schema.org/unitText unitText} to indicate the unit of measurement, e.g. mpg or km/L.
     * - Note 2: There are two ways of indicating the fuel consumption, {@link https://schema.org/fuelConsumption fuelConsumption} (e.g. 8 liters per 100 km) and {@link https://schema.org/fuelEfficiency fuelEfficiency} (e.g. 30 miles per gallon). They are reciprocal.
     * - Note 3: Often, the absolute value is useful only when related to driving speed ("at 80 km/h") or usage pattern ("city traffic"). You can use {@link https://schema.org/valueReference valueReference} to link the value for the fuel economy to another value.
     */
    "https://schema.org/fuelEfficiency"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/fuelEfficiency">;
    /** The type of fuel suitable for the engine or engines of the vehicle. If the vehicle has only one engine, this property can be attached directly to the vehicle. */
    "https://schema.org/fuelType"?: SchemaValue<QualitativeValue | Text | URL | IdReference, "https://schema.org/fuelType">;
    /** A textual description of known damages, both repaired and unrepaired. */
    "https://schema.org/knownVehicleDamages"?: SchemaValue<Text, "https://schema.org/knownVehicleDamages">;
    /** Indicates that the vehicle meets the respective emission standard. */
    "https://schema.org/meetsEmissionStandard"?: SchemaValue<QualitativeValue | Text | URL | IdReference, "https://schema.org/meetsEmissionStandard">;
    /**
     * The total distance travelled by the particular vehicle since its initial production, as read from its odometer.
     *
     * Typical unit code(s): KMT for kilometers, SMI for statute miles
     */
    "https://schema.org/mileageFromOdometer"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/mileageFromOdometer">;
    /** The release date of a vehicle model (often used to differentiate versions of the same make and model). */
    "https://schema.org/modelDate"?: SchemaValue<Date, "https://schema.org/modelDate">;
    /** The number or type of airbags in the vehicle. */
    "https://schema.org/numberOfAirbags"?: SchemaValue<Number | Text, "https://schema.org/numberOfAirbags">;
    /**
     * The number of axles.
     *
     * Typical unit code(s): C62
     */
    "https://schema.org/numberOfAxles"?: SchemaValue<Number | QuantitativeValue | IdReference, "https://schema.org/numberOfAxles">;
    /**
     * The number of doors.
     *
     * Typical unit code(s): C62
     */
    "https://schema.org/numberOfDoors"?: SchemaValue<Number | QuantitativeValue | IdReference, "https://schema.org/numberOfDoors">;
    /**
     * The total number of forward gears available for the transmission system of the vehicle.
     *
     * Typical unit code(s): C62
     */
    "https://schema.org/numberOfForwardGears"?: SchemaValue<Number | QuantitativeValue | IdReference, "https://schema.org/numberOfForwardGears">;
    /**
     * The number of owners of the vehicle, including the current one.
     *
     * Typical unit code(s): C62
     */
    "https://schema.org/numberOfPreviousOwners"?: SchemaValue<Number | QuantitativeValue | IdReference, "https://schema.org/numberOfPreviousOwners">;
    /**
     * The permitted weight of passengers and cargo, EXCLUDING the weight of the empty vehicle.
     *
     * Typical unit code(s): KGM for kilogram, LBR for pound
     * - Note 1: Many databases specify the permitted TOTAL weight instead, which is the sum of {@link https://schema.org/weight weight} and {@link https://schema.org/payload payload}
     * - Note 2: You can indicate additional information in the {@link https://schema.org/name name} of the {@link https://schema.org/QuantitativeValue QuantitativeValue} node.
     * - Note 3: You may also link to a {@link https://schema.org/QualitativeValue QualitativeValue} node that provides additional information using {@link https://schema.org/valueReference valueReference}.
     * - Note 4: Note that you can use {@link https://schema.org/minValue minValue} and {@link https://schema.org/maxValue maxValue} to indicate ranges.
     */
    "https://schema.org/payload"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/payload">;
    /** The date of production of the item, e.g. vehicle. */
    "https://schema.org/productionDate"?: SchemaValue<Date, "https://schema.org/productionDate">;
    /** The date the item e.g. vehicle was purchased by the current owner. */
    "https://schema.org/purchaseDate"?: SchemaValue<Date, "https://schema.org/purchaseDate">;
    /**
     * The number of persons that can be seated (e.g. in a vehicle), both in terms of the physical space available, and in terms of limitations set by law.
     *
     * Typical unit code(s): C62 for persons
     */
    "https://schema.org/seatingCapacity"?: SchemaValue<Number | QuantitativeValue | IdReference, "https://schema.org/seatingCapacity">;
    /**
     * The speed range of the vehicle. If the vehicle is powered by an engine, the upper limit of the speed range (indicated by {@link https://schema.org/maxValue maxValue} should be the maximum speed achievable under regular conditions.
     *
     * Typical unit code(s): KMH for km/h, HM for mile per hour (0.447 04 m/s), KNT for knot
     *
     * *Note 1: Use {@link https://schema.org/minValue minValue} and {@link https://schema.org/maxValue maxValue} to indicate the range. Typically, the minimal value is zero.
     * - Note 2: There are many different ways of measuring the speed range. You can link to information about how the given value has been determined using the {@link https://schema.org/valueReference valueReference} property.
     */
    "https://schema.org/speed"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/speed">;
    /** The position of the steering wheel or similar device (mostly for cars). */
    "https://schema.org/steeringPosition"?: SchemaValue<SteeringPositionValue | IdReference, "https://schema.org/steeringPosition">;
    /** This is a StupidProperty! - for testing only */
    "https://schema.org/stupidProperty"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/stupidProperty">;
    /**
     * The permitted vertical load (TWR) of a trailer attached to the vehicle. Also referred to as Tongue Load Rating (TLR) or Vertical Load Rating (VLR)
     *
     * Typical unit code(s): KGM for kilogram, LBR for pound
     * - Note 1: You can indicate additional information in the {@link https://schema.org/name name} of the {@link https://schema.org/QuantitativeValue QuantitativeValue} node.
     * - Note 2: You may also link to a {@link https://schema.org/QualitativeValue QualitativeValue} node that provides additional information using {@link https://schema.org/valueReference valueReference}.
     * - Note 3: Note that you can use {@link https://schema.org/minValue minValue} and {@link https://schema.org/maxValue maxValue} to indicate ranges.
     */
    "https://schema.org/tongueWeight"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/tongueWeight">;
    /**
     * The permitted weight of a trailer attached to the vehicle.
     *
     * Typical unit code(s): KGM for kilogram, LBR for pound
     * - Note 1: You can indicate additional information in the {@link https://schema.org/name name} of the {@link https://schema.org/QuantitativeValue QuantitativeValue} node.
     * - Note 2: You may also link to a {@link https://schema.org/QualitativeValue QualitativeValue} node that provides additional information using {@link https://schema.org/valueReference valueReference}.
     * - Note 3: Note that you can use {@link https://schema.org/minValue minValue} and {@link https://schema.org/maxValue maxValue} to indicate ranges.
     */
    "https://schema.org/trailerWeight"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/trailerWeight">;
    /** A short text indicating the configuration of the vehicle, e.g. '5dr hatchback ST 2.5 MT 225 hp' or 'limited edition'. */
    "https://schema.org/vehicleConfiguration"?: SchemaValue<Text, "https://schema.org/vehicleConfiguration">;
    /** Information about the engine or engines of the vehicle. */
    "https://schema.org/vehicleEngine"?: SchemaValue<EngineSpecification | IdReference, "https://schema.org/vehicleEngine">;
    /** The Vehicle Identification Number (VIN) is a unique serial number used by the automotive industry to identify individual motor vehicles. */
    "https://schema.org/vehicleIdentificationNumber"?: SchemaValue<Text, "https://schema.org/vehicleIdentificationNumber">;
    /** The color or color combination of the interior of the vehicle. */
    "https://schema.org/vehicleInteriorColor"?: SchemaValue<Text, "https://schema.org/vehicleInteriorColor">;
    /** The type or material of the interior of the vehicle (e.g. synthetic fabric, leather, wood, etc.). While most interior types are characterized by the material used, an interior type can also be based on vehicle usage or target audience. */
    "https://schema.org/vehicleInteriorType"?: SchemaValue<Text, "https://schema.org/vehicleInteriorType">;
    /** The release date of a vehicle model (often used to differentiate versions of the same make and model). */
    "https://schema.org/vehicleModelDate"?: SchemaValue<Date, "https://schema.org/vehicleModelDate">;
    /**
     * The number of passengers that can be seated in the vehicle, both in terms of the physical space available, and in terms of limitations set by law.
     *
     * Typical unit code(s): C62 for persons.
     */
    "https://schema.org/vehicleSeatingCapacity"?: SchemaValue<Number | QuantitativeValue | IdReference, "https://schema.org/vehicleSeatingCapacity">;
    /** Indicates whether the vehicle has been used for special purposes, like commercial rental, driving school, or as a taxi. The legislation in many countries requires this information to be revealed when offering a car for sale. */
    "https://schema.org/vehicleSpecialUsage"?: SchemaValue<CarUsageType | Text | IdReference, "https://schema.org/vehicleSpecialUsage">;
    /** The type of component used for transmitting the power from a rotating power source to the wheels or other relevant component(s) ("gearbox" for cars). */
    "https://schema.org/vehicleTransmission"?: SchemaValue<QualitativeValue | Text | URL | IdReference, "https://schema.org/vehicleTransmission">;
    /**
     * The permitted total weight of the loaded vehicle, including passengers and cargo and the weight of the empty vehicle.
     *
     * Typical unit code(s): KGM for kilogram, LBR for pound
     * - Note 1: You can indicate additional information in the {@link https://schema.org/name name} of the {@link https://schema.org/QuantitativeValue QuantitativeValue} node.
     * - Note 2: You may also link to a {@link https://schema.org/QualitativeValue QualitativeValue} node that provides additional information using {@link https://schema.org/valueReference valueReference}.
     * - Note 3: Note that you can use {@link https://schema.org/minValue minValue} and {@link https://schema.org/maxValue maxValue} to indicate ranges.
     */
    "https://schema.org/weightTotal"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/weightTotal">;
    /**
     * The distance between the centers of the front and rear wheels.
     *
     * Typical unit code(s): CMT for centimeters, MTR for meters, INH for inches, FOT for foot/feet
     */
    "https://schema.org/wheelbase"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/wheelbase">;
}
interface VehicleLeaf extends VehicleBase {
    "@type": "https://schema.org/Vehicle";
}
/** A vehicle is a device that is designed or used to transport people or cargo over land, water, air, or through space. */
export declare type Vehicle = VehicleLeaf | BusOrCoach | Car | Motorcycle | MotorizedBicycle;
interface VeinBase extends AnatomicalStructureBase {
    /** The vasculature that the vein drains into. */
    "https://schema.org/drainsTo"?: SchemaValue<Vessel | IdReference, "https://schema.org/drainsTo">;
    /** The anatomical or organ system drained by this vessel; generally refers to a specific part of an organ. */
    "https://schema.org/regionDrained"?: SchemaValue<AnatomicalStructure | AnatomicalSystem | IdReference, "https://schema.org/regionDrained">;
    /** The anatomical or organ system that the vein flows into; a larger structure that the vein connects to. */
    "https://schema.org/tributary"?: SchemaValue<AnatomicalStructure | IdReference, "https://schema.org/tributary">;
}
interface VeinLeaf extends VeinBase {
    "@type": "https://schema.org/Vein";
}
/** A type of blood vessel that specifically carries blood to the heart. */
export declare type Vein = VeinLeaf;
interface VesselLeaf extends AnatomicalStructureBase {
    "@type": "https://schema.org/Vessel";
}
/** A component of the human body circulatory system comprised of an intricate network of hollow tubes that transport blood throughout the entire body. */
export declare type Vessel = VesselLeaf | Artery | LymphaticVessel | Vein;
interface VeterinaryCareLeaf extends MedicalOrganizationBase {
    "@type": "https://schema.org/VeterinaryCare";
}
/** A vet's office. */
export declare type VeterinaryCare = VeterinaryCareLeaf | string;
interface VideoGalleryLeaf extends WebPageBase {
    "@type": "https://schema.org/VideoGallery";
}
/** Web page type: Video gallery page. */
export declare type VideoGallery = VideoGalleryLeaf;
interface VideoGameBase extends SoftwareApplicationBase, GameBase {
    /** An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip. */
    "https://schema.org/actor"?: SchemaValue<Person | IdReference, "https://schema.org/actor">;
    /**
     * An actor, e.g. in tv, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip.
     *
     * @deprecated Consider using https://schema.org/actor instead.
     */
    "https://schema.org/actors"?: SchemaValue<Person | IdReference, "https://schema.org/actors">;
    /** Cheat codes to the game. */
    "https://schema.org/cheatCode"?: SchemaValue<CreativeWork | IdReference, "https://schema.org/cheatCode">;
    /** A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip. */
    "https://schema.org/director"?: SchemaValue<Person | IdReference, "https://schema.org/director">;
    /**
     * A director of e.g. tv, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip.
     *
     * @deprecated Consider using https://schema.org/director instead.
     */
    "https://schema.org/directors"?: SchemaValue<Person | IdReference, "https://schema.org/directors">;
    /** The electronic systems used to play {@link http://en.wikipedia.org/wiki/Category:Video_game_platforms video games}. */
    "https://schema.org/gamePlatform"?: SchemaValue<Text | Thing | URL | IdReference, "https://schema.org/gamePlatform">;
    /** The server on which it is possible to play the game. */
    "https://schema.org/gameServer"?: SchemaValue<GameServer | IdReference, "https://schema.org/gameServer">;
    /** Links to tips, tactics, etc. */
    "https://schema.org/gameTip"?: SchemaValue<CreativeWork | IdReference, "https://schema.org/gameTip">;
    /** The composer of the soundtrack. */
    "https://schema.org/musicBy"?: SchemaValue<MusicGroup | Person | IdReference, "https://schema.org/musicBy">;
    /** Indicates whether this game is multi-player, co-op or single-player. The game can be marked as multi-player, co-op and single-player at the same time. */
    "https://schema.org/playMode"?: SchemaValue<GamePlayMode | IdReference, "https://schema.org/playMode">;
    /** The trailer of a movie or tv/radio series, season, episode, etc. */
    "https://schema.org/trailer"?: SchemaValue<VideoObject | IdReference, "https://schema.org/trailer">;
}
interface VideoGameLeaf extends VideoGameBase {
    "@type": "https://schema.org/VideoGame";
}
/** A video game is an electronic game that involves human interaction with a user interface to generate visual feedback on a video device. */
export declare type VideoGame = VideoGameLeaf;
interface VideoGameClipLeaf extends ClipBase {
    "@type": "https://schema.org/VideoGameClip";
}
/** A short segment/part of a video game. */
export declare type VideoGameClip = VideoGameClipLeaf;
interface VideoGameSeriesBase extends CreativeWorkSeriesBase {
    /** An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip. */
    "https://schema.org/actor"?: SchemaValue<Person | IdReference, "https://schema.org/actor">;
    /**
     * An actor, e.g. in tv, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip.
     *
     * @deprecated Consider using https://schema.org/actor instead.
     */
    "https://schema.org/actors"?: SchemaValue<Person | IdReference, "https://schema.org/actors">;
    /** A piece of data that represents a particular aspect of a fictional character (skill, power, character points, advantage, disadvantage). */
    "https://schema.org/characterAttribute"?: SchemaValue<Thing | IdReference, "https://schema.org/characterAttribute">;
    /** Cheat codes to the game. */
    "https://schema.org/cheatCode"?: SchemaValue<CreativeWork | IdReference, "https://schema.org/cheatCode">;
    /** A season that is part of the media series. */
    "https://schema.org/containsSeason"?: SchemaValue<CreativeWorkSeason | IdReference, "https://schema.org/containsSeason">;
    /** A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip. */
    "https://schema.org/director"?: SchemaValue<Person | IdReference, "https://schema.org/director">;
    /**
     * A director of e.g. tv, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip.
     *
     * @deprecated Consider using https://schema.org/director instead.
     */
    "https://schema.org/directors"?: SchemaValue<Person | IdReference, "https://schema.org/directors">;
    /** An episode of a tv, radio or game media within a series or season. */
    "https://schema.org/episode"?: SchemaValue<Episode | IdReference, "https://schema.org/episode">;
    /**
     * An episode of a TV/radio series or season.
     *
     * @deprecated Consider using https://schema.org/episode instead.
     */
    "https://schema.org/episodes"?: SchemaValue<Episode | IdReference, "https://schema.org/episodes">;
    /** An item is an object within the game world that can be collected by a player or, occasionally, a non-player character. */
    "https://schema.org/gameItem"?: SchemaValue<Thing | IdReference, "https://schema.org/gameItem">;
    /** Real or fictional location of the game (or part of game). */
    "https://schema.org/gameLocation"?: SchemaValue<Place | PostalAddress | URL | IdReference, "https://schema.org/gameLocation">;
    /** The electronic systems used to play {@link http://en.wikipedia.org/wiki/Category:Video_game_platforms video games}. */
    "https://schema.org/gamePlatform"?: SchemaValue<Text | Thing | URL | IdReference, "https://schema.org/gamePlatform">;
    /** The composer of the soundtrack. */
    "https://schema.org/musicBy"?: SchemaValue<MusicGroup | Person | IdReference, "https://schema.org/musicBy">;
    /** The number of episodes in this season or series. */
    "https://schema.org/numberOfEpisodes"?: SchemaValue<Integer, "https://schema.org/numberOfEpisodes">;
    /** Indicate how many people can play this game (minimum, maximum, or range). */
    "https://schema.org/numberOfPlayers"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/numberOfPlayers">;
    /** The number of seasons in this series. */
    "https://schema.org/numberOfSeasons"?: SchemaValue<Integer, "https://schema.org/numberOfSeasons">;
    /** Indicates whether this game is multi-player, co-op or single-player. The game can be marked as multi-player, co-op and single-player at the same time. */
    "https://schema.org/playMode"?: SchemaValue<GamePlayMode | IdReference, "https://schema.org/playMode">;
    /** The production company or studio responsible for the item e.g. series, video game, episode etc. */
    "https://schema.org/productionCompany"?: SchemaValue<Organization | IdReference, "https://schema.org/productionCompany">;
    /** The task that a player-controlled character, or group of characters may complete in order to gain a reward. */
    "https://schema.org/quest"?: SchemaValue<Thing | IdReference, "https://schema.org/quest">;
    /**
     * A season in a media series.
     *
     * @deprecated Consider using https://schema.org/containsSeason instead.
     */
    "https://schema.org/season"?: SchemaValue<CreativeWorkSeason | URL | IdReference, "https://schema.org/season">;
    /**
     * A season in a media series.
     *
     * @deprecated Consider using https://schema.org/season instead.
     */
    "https://schema.org/seasons"?: SchemaValue<CreativeWorkSeason | IdReference, "https://schema.org/seasons">;
    /** The trailer of a movie or tv/radio series, season, episode, etc. */
    "https://schema.org/trailer"?: SchemaValue<VideoObject | IdReference, "https://schema.org/trailer">;
}
interface VideoGameSeriesLeaf extends VideoGameSeriesBase {
    "@type": "https://schema.org/VideoGameSeries";
}
/** A video game series. */
export declare type VideoGameSeries = VideoGameSeriesLeaf;
interface VideoObjectBase extends MediaObjectBase {
    /** An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip. */
    "https://schema.org/actor"?: SchemaValue<Person | IdReference, "https://schema.org/actor">;
    /**
     * An actor, e.g. in tv, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip.
     *
     * @deprecated Consider using https://schema.org/actor instead.
     */
    "https://schema.org/actors"?: SchemaValue<Person | IdReference, "https://schema.org/actors">;
    /** The caption for this object. For downloadable machine formats (closed caption, subtitles etc.) use MediaObject and indicate the {@link https://schema.org/encodingFormat encodingFormat}. */
    "https://schema.org/caption"?: SchemaValue<MediaObject | Text | IdReference, "https://schema.org/caption">;
    /** A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip. */
    "https://schema.org/director"?: SchemaValue<Person | IdReference, "https://schema.org/director">;
    /**
     * A director of e.g. tv, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip.
     *
     * @deprecated Consider using https://schema.org/director instead.
     */
    "https://schema.org/directors"?: SchemaValue<Person | IdReference, "https://schema.org/directors">;
    /** Represents textual captioning from a {@link https://schema.org/MediaObject MediaObject}, e.g. text of a 'meme'. */
    "https://schema.org/embeddedTextCaption"?: SchemaValue<Text, "https://schema.org/embeddedTextCaption">;
    /** The composer of the soundtrack. */
    "https://schema.org/musicBy"?: SchemaValue<MusicGroup | Person | IdReference, "https://schema.org/musicBy">;
    /** Thumbnail image for an image or video. */
    "https://schema.org/thumbnail"?: SchemaValue<ImageObject | IdReference, "https://schema.org/thumbnail">;
    /** If this MediaObject is an AudioObject or VideoObject, the transcript of that object. */
    "https://schema.org/transcript"?: SchemaValue<Text, "https://schema.org/transcript">;
    /** The frame size of the video. */
    "https://schema.org/videoFrameSize"?: SchemaValue<Text, "https://schema.org/videoFrameSize">;
    /** The quality of the video. */
    "https://schema.org/videoQuality"?: SchemaValue<Text, "https://schema.org/videoQuality">;
}
interface VideoObjectLeaf extends VideoObjectBase {
    "@type": "https://schema.org/VideoObject";
}
/** A video file. */
export declare type VideoObject = VideoObjectLeaf | VideoObjectSnapshot;
interface VideoObjectSnapshotLeaf extends VideoObjectBase {
    "@type": "https://schema.org/VideoObjectSnapshot";
}
/** A specific and exact (byte-for-byte) version of a {@link https://schema.org/VideoObject VideoObject}. Two byte-for-byte identical files, for the purposes of this type, considered identical. If they have different embedded metadata the files will differ. Different external facts about the files, e.g. creator or dateCreated that aren't represented in their actual content, do not affect this notion of identity. */
export declare type VideoObjectSnapshot = VideoObjectSnapshotLeaf;
interface ViewActionLeaf extends ConsumeActionBase {
    "@type": "https://schema.org/ViewAction";
}
/** The act of consuming static visual content. */
export declare type ViewAction = ViewActionLeaf;
interface VirtualLocationLeaf extends ThingBase {
    "@type": "https://schema.org/VirtualLocation";
}
/** An online or virtual location for attending events. For example, one may attend an online seminar or educational event. While a virtual location may be used as the location of an event, virtual locations should not be confused with physical locations in the real world. */
export declare type VirtualLocation = VirtualLocationLeaf;
interface VisualArtsEventLeaf extends EventBase {
    "@type": "https://schema.org/VisualArtsEvent";
}
/** Event type: Visual arts event. */
export declare type VisualArtsEvent = VisualArtsEventLeaf;
interface VisualArtworkBase extends CreativeWorkBase {
    /** The number of copies when multiple copies of a piece of artwork are produced - e.g. for a limited edition of 20 prints, 'artEdition' refers to the total number of copies (in this example "20"). */
    "https://schema.org/artEdition"?: SchemaValue<Integer | Text, "https://schema.org/artEdition">;
    /** e.g. Painting, Drawing, Sculpture, Print, Photograph, Assemblage, Collage, etc. */
    "https://schema.org/artform"?: SchemaValue<Text | URL, "https://schema.org/artform">;
    /** The primary artist for a work in a medium other than pencils or digital line art--for example, if the primary artwork is done in watercolors or digital paints. */
    "https://schema.org/artist"?: SchemaValue<Person | IdReference, "https://schema.org/artist">;
    /** The material used. (e.g. Oil, Watercolour, Acrylic, Linoprint, Marble, Cyanotype, Digital, Lithograph, DryPoint, Intaglio, Pastel, Woodcut, Pencil, Mixed Media, etc.) */
    "https://schema.org/artMedium"?: SchemaValue<Text | URL, "https://schema.org/artMedium">;
    /** The supporting materials for the artwork, e.g. Canvas, Paper, Wood, Board, etc. */
    "https://schema.org/artworkSurface"?: SchemaValue<Text | URL, "https://schema.org/artworkSurface">;
    /** The individual who adds color to inked drawings. */
    "https://schema.org/colorist"?: SchemaValue<Person | IdReference, "https://schema.org/colorist">;
    /** The depth of the item. */
    "https://schema.org/depth"?: SchemaValue<Distance | QuantitativeValue | IdReference, "https://schema.org/depth">;
    /** The height of the item. */
    "https://schema.org/height"?: SchemaValue<Distance | QuantitativeValue | IdReference, "https://schema.org/height">;
    /** The individual who traces over the pencil drawings in ink after pencils are complete. */
    "https://schema.org/inker"?: SchemaValue<Person | IdReference, "https://schema.org/inker">;
    /** The individual who adds lettering, including speech balloons and sound effects, to artwork. */
    "https://schema.org/letterer"?: SchemaValue<Person | IdReference, "https://schema.org/letterer">;
    /** The individual who draws the primary narrative artwork. */
    "https://schema.org/penciler"?: SchemaValue<Person | IdReference, "https://schema.org/penciler">;
    /**
     * A material used as a surface in some artwork, e.g. Canvas, Paper, Wood, Board, etc.
     *
     * @deprecated Consider using https://schema.org/artworkSurface instead.
     */
    "https://schema.org/surface"?: SchemaValue<Text | URL, "https://schema.org/surface">;
    /** The width of the item. */
    "https://schema.org/width"?: SchemaValue<Distance | QuantitativeValue | IdReference, "https://schema.org/width">;
}
interface VisualArtworkLeaf extends VisualArtworkBase {
    "@type": "https://schema.org/VisualArtwork";
}
/** A work of art that is primarily visual in character. */
export declare type VisualArtwork = VisualArtworkLeaf | CoverArt;
interface VitalSignLeaf extends MedicalSignBase {
    "@type": "https://schema.org/VitalSign";
}
/** Vital signs are measures of various physiological functions in order to assess the most basic body functions. */
export declare type VitalSign = VitalSignLeaf;
interface VolcanoLeaf extends PlaceBase {
    "@type": "https://schema.org/Volcano";
}
/** A volcano, like Fuji san. */
export declare type Volcano = VolcanoLeaf | string;
interface VoteActionBase extends ChooseActionBase {
    /** A sub property of object. The candidate subject of this action. */
    "https://schema.org/candidate"?: SchemaValue<Person | IdReference, "https://schema.org/candidate">;
}
interface VoteActionLeaf extends VoteActionBase {
    "@type": "https://schema.org/VoteAction";
}
/** The act of expressing a preference from a fixed/finite/structured set of choices/options. */
export declare type VoteAction = VoteActionLeaf;
interface WantActionLeaf extends ActionBase {
    "@type": "https://schema.org/WantAction";
}
/** The act of expressing a desire about the object. An agent wants an object. */
export declare type WantAction = WantActionLeaf;
interface WarrantyPromiseBase extends ThingBase {
    /** The duration of the warranty promise. Common unitCode values are ANN for year, MON for months, or DAY for days. */
    "https://schema.org/durationOfWarranty"?: SchemaValue<QuantitativeValue | IdReference, "https://schema.org/durationOfWarranty">;
    /** The scope of the warranty promise. */
    "https://schema.org/warrantyScope"?: SchemaValue<WarrantyScope | IdReference, "https://schema.org/warrantyScope">;
}
interface WarrantyPromiseLeaf extends WarrantyPromiseBase {
    "@type": "https://schema.org/WarrantyPromise";
}
/** A structured value representing the duration and scope of services that will be provided to a customer free of charge in case of a defect or malfunction of a product. */
export declare type WarrantyPromise = WarrantyPromiseLeaf;
interface WarrantyScopeLeaf extends EnumerationBase {
    "@type": "https://schema.org/WarrantyScope";
}
/**
 * A range of of services that will be provided to a customer free of charge in case of a defect or malfunction of a product.
 *
 * Commonly used values:
 * - http://purl.org/goodrelations/v1#Labor-BringIn
 * - http://purl.org/goodrelations/v1#PartsAndLabor-BringIn
 * - http://purl.org/goodrelations/v1#PartsAndLabor-PickUp
 */
export declare type WarrantyScope = WarrantyScopeLeaf;
interface WatchActionLeaf extends ConsumeActionBase {
    "@type": "https://schema.org/WatchAction";
}
/** The act of consuming dynamic/moving visual content. */
export declare type WatchAction = WatchActionLeaf;
interface WaterfallLeaf extends PlaceBase {
    "@type": "https://schema.org/Waterfall";
}
/** A waterfall, like Niagara. */
export declare type Waterfall = WaterfallLeaf | string;
interface WearableMeasurementTypeEnumerationLeaf extends EnumerationBase {
    "@type": "https://schema.org/WearableMeasurementTypeEnumeration";
}
/** Enumerates common types of measurement for wearables products. */
export declare type WearableMeasurementTypeEnumeration = "https://schema.org/WearableMeasurementBack" | "https://schema.org/WearableMeasurementChestOrBust" | "https://schema.org/WearableMeasurementCollar" | "https://schema.org/WearableMeasurementCup" | "https://schema.org/WearableMeasurementHeight" | "https://schema.org/WearableMeasurementHips" | "https://schema.org/WearableMeasurementInseam" | "https://schema.org/WearableMeasurementLength" | "https://schema.org/WearableMeasurementOutsideLeg" | "https://schema.org/WearableMeasurementSleeve" | "https://schema.org/WearableMeasurementWaist" | "https://schema.org/WearableMeasurementWidth" | WearableMeasurementTypeEnumerationLeaf;
interface WearableSizeGroupEnumerationLeaf extends EnumerationBase {
    "@type": "https://schema.org/WearableSizeGroupEnumeration";
}
/** Enumerates common size groups (also known as "size types") for wearable products. */
export declare type WearableSizeGroupEnumeration = "https://schema.org/WearableSizeGroupBig" | "https://schema.org/WearableSizeGroupBoys" | "https://schema.org/WearableSizeGroupExtraShort" | "https://schema.org/WearableSizeGroupExtraTall" | "https://schema.org/WearableSizeGroupGirls" | "https://schema.org/WearableSizeGroupHusky" | "https://schema.org/WearableSizeGroupInfants" | "https://schema.org/WearableSizeGroupJuniors" | "https://schema.org/WearableSizeGroupMaternity" | "https://schema.org/WearableSizeGroupMens" | "https://schema.org/WearableSizeGroupMisses" | "https://schema.org/WearableSizeGroupPetite" | "https://schema.org/WearableSizeGroupPlus" | "https://schema.org/WearableSizeGroupRegular" | "https://schema.org/WearableSizeGroupShort" | "https://schema.org/WearableSizeGroupTall" | "https://schema.org/WearableSizeGroupWomens" | WearableSizeGroupEnumerationLeaf;
interface WearableSizeSystemEnumerationLeaf extends EnumerationBase {
    "@type": "https://schema.org/WearableSizeSystemEnumeration";
}
/** Enumerates common size systems specific for wearable products */
export declare type WearableSizeSystemEnumeration = "https://schema.org/WearableSizeSystemAU" | "https://schema.org/WearableSizeSystemBR" | "https://schema.org/WearableSizeSystemCN" | "https://schema.org/WearableSizeSystemContinental" | "https://schema.org/WearableSizeSystemDE" | "https://schema.org/WearableSizeSystemEN13402" | "https://schema.org/WearableSizeSystemEurope" | "https://schema.org/WearableSizeSystemFR" | "https://schema.org/WearableSizeSystemGS1" | "https://schema.org/WearableSizeSystemIT" | "https://schema.org/WearableSizeSystemJP" | "https://schema.org/WearableSizeSystemMX" | "https://schema.org/WearableSizeSystemUK" | "https://schema.org/WearableSizeSystemUS" | WearableSizeSystemEnumerationLeaf;
interface WearActionLeaf extends ConsumeActionBase {
    "@type": "https://schema.org/WearAction";
}
/** The act of dressing oneself in clothing. */
export declare type WearAction = WearActionLeaf;
interface WebAPIBase extends ServiceBase {
    /** Further documentation describing the Web API in more detail. */
    "https://schema.org/documentation"?: SchemaValue<CreativeWork | URL | IdReference, "https://schema.org/documentation">;
}
interface WebAPILeaf extends WebAPIBase {
    "@type": "https://schema.org/WebAPI";
}
/** An application programming interface accessible over Web/Internet technologies. */
export declare type WebAPI = WebAPILeaf;
interface WebApplicationBase extends SoftwareApplicationBase {
    /** Specifies browser requirements in human-readable text. For example, 'requires HTML5 support'. */
    "https://schema.org/browserRequirements"?: SchemaValue<Text, "https://schema.org/browserRequirements">;
}
interface WebApplicationLeaf extends WebApplicationBase {
    "@type": "https://schema.org/WebApplication";
}
/** Web applications. */
export declare type WebApplication = WebApplicationLeaf;
interface WebContentLeaf extends CreativeWorkBase {
    "@type": "https://schema.org/WebContent";
}
/** WebContent is a type representing all {@link https://schema.org/WebPage WebPage}, {@link https://schema.org/WebSite WebSite} and {@link https://schema.org/WebPageElement WebPageElement} content. It is sometimes the case that detailed distinctions between Web pages, sites and their parts is not always important or obvious. The {@link https://schema.org/WebContent WebContent} type makes it easier to describe Web-addressable content without requiring such distinctions to always be stated. (The intent is that the existing types {@link https://schema.org/WebPage WebPage}, {@link https://schema.org/WebSite WebSite} and {@link https://schema.org/WebPageElement WebPageElement} will eventually be declared as subtypes of {@link https://schema.org/WebContent WebContent}). */
export declare type WebContent = WebContentLeaf | HealthTopicContent;
interface WebPageBase extends CreativeWorkBase {
    /** A set of links that can help a user understand and navigate a website hierarchy. */
    "https://schema.org/breadcrumb"?: SchemaValue<BreadcrumbList | Text | IdReference, "https://schema.org/breadcrumb">;
    /** Date on which the content on this web page was last reviewed for accuracy and/or completeness. */
    "https://schema.org/lastReviewed"?: SchemaValue<Date, "https://schema.org/lastReviewed">;
    /** Indicates if this web page element is the main subject of the page. */
    "https://schema.org/mainContentOfPage"?: SchemaValue<WebPageElement | IdReference, "https://schema.org/mainContentOfPage">;
    /** Indicates the main image on the page. */
    "https://schema.org/primaryImageOfPage"?: SchemaValue<ImageObject | IdReference, "https://schema.org/primaryImageOfPage">;
    /** A link related to this web page, for example to other related web pages. */
    "https://schema.org/relatedLink"?: SchemaValue<URL, "https://schema.org/relatedLink">;
    /** People or organizations that have reviewed the content on this web page for accuracy and/or completeness. */
    "https://schema.org/reviewedBy"?: SchemaValue<Organization | Person | IdReference, "https://schema.org/reviewedBy">;
    /** One of the more significant URLs on the page. Typically, these are the non-navigation links that are clicked on the most. */
    "https://schema.org/significantLink"?: SchemaValue<URL, "https://schema.org/significantLink">;
    /**
     * The most significant URLs on the page. Typically, these are the non-navigation links that are clicked on the most.
     *
     * @deprecated Consider using https://schema.org/significantLink instead.
     */
    "https://schema.org/significantLinks"?: SchemaValue<URL, "https://schema.org/significantLinks">;
    /**
     * Indicates sections of a Web page that are particularly 'speakable' in the sense of being highlighted as being especially appropriate for text-to-speech conversion. Other sections of a page may also be usefully spoken in particular circumstances; the 'speakable' property serves to indicate the parts most likely to be generally useful for speech.
     *
     * The _speakable_ property can be repeated an arbitrary number of times, with three kinds of possible 'content-locator' values:
     *
     * 1.) _id-value_ URL references - uses _id-value_ of an element in the page being annotated. The simplest use of _speakable_ has (potentially relative) URL values, referencing identified sections of the document concerned.
     *
     * 2.) CSS Selectors - addresses content in the annotated page, eg. via class attribute. Use the {@link https://schema.org/cssSelector cssSelector} property.
     *
     * 3.) XPaths - addresses content via XPaths (assuming an XML view of the content). Use the {@link https://schema.org/xpath xpath} property.
     *
     * For more sophisticated markup of speakable sections beyond simple ID references, either CSS selectors or XPath expressions to pick out document section(s) as speakable. For this we define a supporting type, {@link https://schema.org/SpeakableSpecification SpeakableSpecification} which is defined to be a possible value of the _speakable_ property.
     */
    "https://schema.org/speakable"?: SchemaValue<SpeakableSpecification | URL | IdReference, "https://schema.org/speakable">;
    /** One of the domain specialities to which this web page's content applies. */
    "https://schema.org/specialty"?: SchemaValue<Specialty | IdReference, "https://schema.org/specialty">;
}
interface WebPageLeaf extends WebPageBase {
    "@type": "https://schema.org/WebPage";
}
/** A web page. Every web page is implicitly assumed to be declared to be of type WebPage, so the various properties about that webpage, such as `breadcrumb` may be used. We recommend explicit declaration if these properties are specified, but if they are found outside of an itemscope, they will be assumed to be about the page. */
export declare type WebPage = WebPageLeaf | AboutPage | CheckoutPage | CollectionPage | ContactPage | FAQPage | ItemPage | MedicalWebPage | ProfilePage | QAPage | RealEstateListing | SearchResultsPage;
interface WebPageElementBase extends CreativeWorkBase {
    /** A CSS selector, e.g. of a {@link https://schema.org/SpeakableSpecification SpeakableSpecification} or {@link https://schema.org/WebPageElement WebPageElement}. In the latter case, multiple matches within a page can constitute a single conceptual "Web page element". */
    "https://schema.org/cssSelector"?: SchemaValue<CssSelectorType, "https://schema.org/cssSelector">;
    /** An XPath, e.g. of a {@link https://schema.org/SpeakableSpecification SpeakableSpecification} or {@link https://schema.org/WebPageElement WebPageElement}. In the latter case, multiple matches within a page can constitute a single conceptual "Web page element". */
    "https://schema.org/xpath"?: SchemaValue<XPathType, "https://schema.org/xpath">;
}
interface WebPageElementLeaf extends WebPageElementBase {
    "@type": "https://schema.org/WebPageElement";
}
/** A web page element, like a table or an image. */
export declare type WebPageElement = WebPageElementLeaf | SiteNavigationElement | Table | WPAdBlock | WPFooter | WPHeader | WPSideBar;
interface WebSiteBase extends CreativeWorkBase {
    /** The International Standard Serial Number (ISSN) that identifies this serial publication. You can repeat this property to identify different formats of, or the linking ISSN (ISSN-L) for, this serial publication. */
    "https://schema.org/issn"?: SchemaValue<Text, "https://schema.org/issn">;
}
interface WebSiteLeaf extends WebSiteBase {
    "@type": "https://schema.org/WebSite";
}
/** A WebSite is a set of related web pages and other items typically served from a single web domain and accessible via URLs. */
export declare type WebSite = WebSiteLeaf;
interface WholesaleStoreLeaf extends LocalBusinessBase {
    "@type": "https://schema.org/WholesaleStore";
}
/** A wholesale store. */
export declare type WholesaleStore = WholesaleStoreLeaf | string;
interface WinActionBase extends ActionBase {
    /** A sub property of participant. The loser of the action. */
    "https://schema.org/loser"?: SchemaValue<Person | IdReference, "https://schema.org/loser">;
}
interface WinActionLeaf extends WinActionBase {
    "@type": "https://schema.org/WinAction";
}
/** The act of achieving victory in a competitive activity. */
export declare type WinAction = WinActionLeaf;
interface WineryLeaf extends FoodEstablishmentBase {
    "@type": "https://schema.org/Winery";
}
/** A winery. */
export declare type Winery = WineryLeaf | string;
interface WorkBasedProgramBase extends EducationalOccupationalProgramBase {
    /**
     * A category describing the job, preferably using a term from a taxonomy such as {@link http://www.onetcenter.org/taxonomy.html BLS O*NET-SOC}, {@link https://www.ilo.org/public/english/bureau/stat/isco/isco08/ ISCO-08} or similar, with the property repeated for each applicable value. Ideally the taxonomy should be identified, and both the textual label and formal code for the category should be provided.
     *
     * Note: for historical reasons, any textual label and formal code provided as a literal may be assumed to be from O*NET-SOC.
     */
    "https://schema.org/occupationalCategory"?: SchemaValue<CategoryCode | Text | IdReference, "https://schema.org/occupationalCategory">;
    /** The estimated salary earned while in the program. */
    "https://schema.org/trainingSalary"?: SchemaValue<MonetaryAmountDistribution | IdReference, "https://schema.org/trainingSalary">;
}
interface WorkBasedProgramLeaf extends WorkBasedProgramBase {
    "@type": "https://schema.org/WorkBasedProgram";
}
/** A program with both an educational and employment component. Typically based at a workplace and structured around work-based learning, with the aim of instilling competencies related to an occupation. WorkBasedProgram is used to distinguish programs such as apprenticeships from school, college or other classroom based educational programs. */
export declare type WorkBasedProgram = WorkBasedProgramLeaf;
interface WorkersUnionLeaf extends OrganizationBase {
    "@type": "https://schema.org/WorkersUnion";
}
/** A Workers Union (also known as a Labor Union, Labour Union, or Trade Union) is an organization that promotes the interests of its worker members by collectively bargaining with management, organizing, and political lobbying. */
export declare type WorkersUnion = WorkersUnionLeaf | string;
interface WPAdBlockLeaf extends WebPageElementBase {
    "@type": "https://schema.org/WPAdBlock";
}
/** An advertising section of the page. */
export declare type WPAdBlock = WPAdBlockLeaf;
interface WPFooterLeaf extends WebPageElementBase {
    "@type": "https://schema.org/WPFooter";
}
/** The footer section of the page. */
export declare type WPFooter = WPFooterLeaf;
interface WPHeaderLeaf extends WebPageElementBase {
    "@type": "https://schema.org/WPHeader";
}
/** The header section of the page. */
export declare type WPHeader = WPHeaderLeaf;
interface WPSideBarLeaf extends WebPageElementBase {
    "@type": "https://schema.org/WPSideBar";
}
/** A sidebar section of the page. */
export declare type WPSideBar = WPSideBarLeaf;
interface WriteActionBase extends ActionBase {
    /** The language of the content or performance or used in an action. Please use one of the language codes from the {@link http://tools.ietf.org/html/bcp47 IETF BCP 47 standard}. See also {@link https://schema.org/availableLanguage availableLanguage}. */
    "https://schema.org/inLanguage"?: SchemaValue<Language | Text | IdReference, "https://schema.org/inLanguage">;
    /**
     * A sub property of instrument. The language used on this action.
     *
     * @deprecated Consider using https://schema.org/inLanguage instead.
     */
    "https://schema.org/language"?: SchemaValue<Language | IdReference, "https://schema.org/language">;
}
interface WriteActionLeaf extends WriteActionBase {
    "@type": "https://schema.org/WriteAction";
}
/** The act of authoring written creative content. */
export declare type WriteAction = WriteActionLeaf;
/** Text representing an XPath (typically but not necessarily version 1.0). */
export declare type XPathType = string;
interface ZooLeaf extends CivicStructureBase {
    "@type": "https://schema.org/Zoo";
}
/** A zoo. */
export declare type Zoo = ZooLeaf | string;
export {};
